#!/usr/bin/env node
// MASCO Energy — project time machine.
//
// Snapshots every file this design work can touch (source, scripts, config)
// into a labelled restore point. Nothing is committed, nothing is pushed, and
// the concurrent editor's untracked work is captured verbatim, so a restore
// always returns the tree to a state that actually existed.
//
//   npm run tm:save -- <label>          create a restore point
//   npm run tm:list                     list restore points, newest first
//   npm run tm:diff -- [id]             what changed since a snapshot
//   npm run tm:restore -- <id>          return to a snapshot (revoke everything after it)
//
// Restore is non-destructive: it takes an automatic `pre-restore` snapshot
// first, so the decision to roll back is itself reversible.

import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const TM_DIR = join(ROOT, ".time-machine");
const SNAPS_DIR = join(TM_DIR, "snapshots");

// The blast radius of a design change: everything a token/kicker refactor can
// rewrite. Deliberately excludes public/ (52MB of imagery is never restyled)
// and node_modules.
const PROTECTED = [
  "src",
  "scripts",
  "tsconfig.json",
  "next.config.ts",
  "package.json",
  "netlify.toml",
  "README.md",
  "PRODUCTION.md",
  ".gitignore",
];

const SKIP_DIRS = new Set(["node_modules", ".git", ".time-machine", ".next", ".next-dev"]);
const SKIP_PREFIX = ".next-";

// ---------------------------------------------------------------- utilities

function walk(absDir) {
  const out = [];
  if (!existsSync(absDir)) return out;
  for (const entry of readdirSync(absDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name) || entry.name.startsWith(SKIP_PREFIX)) continue;
      out.push(...walk(join(absDir, entry.name)));
    } else if (entry.isFile()) {
      out.push(join(absDir, entry.name));
    }
  }
  return out;
}

function protectedFiles() {
  const files = [];
  for (const rel of PROTECTED) {
    const abs = join(ROOT, rel);
    if (!existsSync(abs)) continue;
    if (statSync(abs).isDirectory()) {
      for (const f of walk(abs)) files.push(relative(ROOT, f).split(sep).join("/"));
    } else {
      files.push(rel);
    }
  }
  return files.sort();
}

function sha(abs) {
  return createHash("sha256").update(readFileSync(abs)).digest("hex").slice(0, 16);
}

function snapshotDir(id) {
  return join(SNAPS_DIR, id);
}

function readManifest(id) {
  const file = join(snapshotDir(id), "manifest.json");
  if (!existsSync(file)) return null;
  return JSON.parse(readFileSync(file, "utf8"));
}

function gitHead() {
  const r = spawnSync("git", ["rev-parse", "--short", "HEAD"], { encoding: "utf8" });
  return r.status === 0 ? r.stdout.trim() : null;
}

function gitDirty() {
  const r = spawnSync("git", ["status", "--porcelain"], { encoding: "utf8" });
  return r.status === 0 ? r.stdout.trim().length > 0 : false;
}

function allSnapshots() {
  if (!existsSync(SNAPS_DIR)) return [];
  return readdirSync(SNAPS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => readManifest(e.name))
    .filter(Boolean)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

function slugify(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "snapshot";
}

function humanSize(bytes) {
  return bytes > 1_048_576 ? `${(bytes / 1_048_576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function timeOf(iso) {
  return new Date(iso).toLocaleString(undefined, { month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

// --------------------------------------------------------------------- save

function save(label) {
  const id = `${Date.now()}-${slugify(label)}`;
  const dir = snapshotDir(id);
  const filesDir = join(dir, "files");
  mkdirSync(filesDir, { recursive: true });

  const manifestFiles = [];
  let bytes = 0;
  for (const rel of protectedFiles()) {
    const abs = join(ROOT, rel);
    const stat = statSync(abs);
    const dest = join(filesDir, rel);
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(abs, dest);
    bytes += stat.size;
    manifestFiles.push({ path: rel, sha256: sha(abs), bytes: stat.size });
  }

  const manifest = {
    id,
    label,
    createdAt: new Date().toISOString(),
    gitHead: gitHead(),
    gitDirty: gitDirty(),
    fileCount: manifestFiles.length,
    totalBytes: bytes,
    files: manifestFiles,
  };
  writeFileSync(join(dir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(`\n  Saved restore point  ${id}`);
  console.log(`    label   ${label}`);
  console.log(`    files   ${manifest.fileCount}  (${humanSize(bytes)})`);
  console.log(`    git     ${manifest.gitHead ?? "n/a"}${manifest.gitDirty ? "  (working tree was dirty)" : ""}`);
  console.log(`\n  Revoke everything after this with:\n    npm run tm:restore -- ${id}\n`);
  return manifest;
}

// --------------------------------------------------------------------- list

function list() {
  const snaps = allSnapshots();
  if (!snaps.length) {
    console.log("\n  No restore points yet. Create one with:\n    npm run tm:save -- <label>\n");
    return;
  }
  console.log(`\n  Restore points (oldest -> newest):`);
  console.log(`  ${"#".padEnd(4)}${"LABEL".padEnd(30)}${"WHEN".padEnd(22)}${"FILES".padEnd(8)}${"SIZE".padEnd(10)}ID`);
  console.log(`  ${"-".repeat(118)}`);
  snaps.forEach((s, i) => {
    console.log(
      `  ${String(i + 1).padEnd(4)}${s.label.padEnd(30)}${timeOf(s.createdAt).padEnd(22)}${String(s.fileCount).padEnd(8)}${humanSize(s.totalBytes).padEnd(10)}${s.id}`,
    );
  });
  console.log(`\n  Revoke:  npm run tm:restore -- <id>`);
  console.log(`  Inspect: npm run tm:diff -- <id>\n`);
}

// --------------------------------------------------------------------- diff

function liveState() {
  const map = new Map();
  for (const rel of protectedFiles()) map.set(rel, sha(join(ROOT, rel)));
  return map;
}

function resolveId(raw) {
  const snaps = allSnapshots();
  if (!snaps.length) {
    console.error("  No restore points exist.");
    process.exit(1);
  }
  if (!raw) return snaps[snaps.length - 1];
  const byId = snaps.find((s) => s.id === raw);
  if (byId) return byId;
  const byLabel = snaps.filter((s) => s.label === raw || s.id.includes(raw));
  if (byLabel.length === 1) return byLabel[0];
  if (byLabel.length > 1) {
    console.error(`  Ambiguous id "${raw}". Candidates:`);
    for (const s of byLabel) console.error(`    ${s.id}`);
    process.exit(1);
  }
  console.error(`  No restore point matches "${raw}". Run: npm run tm:list`);
  process.exit(1);
}

function diff(raw) {
  const snap = resolveId(raw);
  const live = liveState();
  const snapHashes = new Map(snap.files.map((f) => [f.path, f.sha256]));

  const modified = [];
  const deleted = [];
  const added = [];
  for (const [path, hash] of snapHashes) {
    if (!live.has(path)) deleted.push(path);
    else if (live.get(path) !== hash) modified.push(path);
  }
  for (const path of live.keys()) if (!snapHashes.has(path)) added.push(path);

  console.log(`\n  ${snap.id}  (${timeOf(snap.createdAt)})`);
  if (!modified.length && !deleted.length && !added.length) {
    console.log(`    working tree matches this restore point exactly.\n`);
    return { modified, deleted, added };
  }
  if (modified.length) {
    console.log(`    modified since snapshot (${modified.length}):`);
    for (const p of modified) console.log(`      ~ ${p}`);
  }
  if (deleted.length) {
    console.log(`    deleted since snapshot (${deleted.length}):`);
    for (const p of deleted) console.log(`      - ${p}`);
  }
  if (added.length) {
    console.log(`    added since snapshot (${added.length}):`);
    for (const p of added) console.log(`      + ${p}`);
  }
  console.log(`\n  Revoke all of the above:\n    npm run tm:restore -- ${snap.id}\n`);
  return { modified, deleted, added };
}

// ------------------------------------------------------------------ restore

function restore(raw, opts) {
  const snap = resolveId(raw);
  const live = liveState();
  const snapFiles = new Map(snap.files.map((f) => [f.path, f]));
  const filesDir = join(snapshotDir(snap.id), "files");

  const changed = [];
  for (const [path, hash] of live) {
    if (!snapFiles.has(path) || snapFiles.get(path).sha256 !== hash) changed.push(path);
  }
  if (!changed.length) {
    console.log(`\n  Already at ${snap.id} — nothing to revoke.\n`);
    return;
  }

  console.log(`\n  Restoring ${snap.id}  (${timeOf(snap.createdAt)})`);
  console.log(`    ${changed.length} file(s) will be returned to their snapshot state.`);

  const orphans = [...snapFiles.keys()].filter((p) => !live.has(p));
  if (orphans.length) {
    console.log(`    ${orphans.length} file(s) exist now but not in the snapshot:`);
    for (const p of orphans) console.log(`      + ${p}`);
  }

  if (!opts.yes) {
    if (!process.stdin.isTTY) {
      console.error(`\n  Refusing a non-interactive restore without --yes.`);
      process.exit(1);
    }
    console.log(`\n  Type yes to revoke, anything else to abort: `);
    const answer = readFileSync(0, "utf8").trim().toLowerCase();
    if (answer !== "yes") {
      console.log(`  Aborted. No files changed.`);
      process.exit(1);
    }
  }

  // A rollback must itself be reversible.
  const safety = save("pre-restore safety net");
  console.log(`\n  Safety net stored as ${safety.id}\n`);

  for (const rel of snapFiles.keys()) {
    const src = join(filesDir, rel);
    if (!existsSync(src)) continue;
    const dest = join(ROOT, rel);
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(src, dest);
  }

  if (opts.prune) {
    for (const p of orphans) rmSync(join(ROOT, p), { force: true });
    console.log(`  Pruned ${orphans.length} orphaned file(s).`);
  } else {
    for (const p of orphans) console.log(`  kept  ${p}  (not in snapshot — prune with --prune)`);
  }

  console.log(`\n  Done. Tree restored to ${snap.id}.`);
  console.log(`  Undo this restore with:\n    npm run tm:restore -- ${safety.id}\n`);
}

// ----------------------------------------------------------------------- CLI

function parseArgs(argv) {
  const flags = new Set();
  const positional = [];
  for (const arg of argv) {
    if (arg.startsWith("--")) flags.add(arg.slice(2));
    else positional.push(arg);
  }
  return { flags, positional };
}

const [, , command, ...rest] = process.argv;
const { flags, positional } = parseArgs(rest);

switch (command) {
  case "save": {
    const label = positional.join(" ") || "unnamed snapshot";
    mkdirSync(SNAPS_DIR, { recursive: true });
    save(label);
    break;
  }
  case "list":
  case "ls":
    list();
    break;
  case "diff":
    diff(positional[0]);
    break;
  case "restore":
  case "revert":
    restore(positional[0], { prune: flags.has("prune"), yes: flags.has("yes") });
    break;
  default:
    console.log(`
  MASCO Energy time machine

    npm run tm:save -- <label>       snapshot the working tree (source + config)
    npm run tm:list                  list restore points, oldest -> newest
    npm run tm:diff -- [id]          show what changed since a snapshot
    npm run tm:restore -- <id>       revoke everything after a snapshot
                                     --prune  also delete files created after it
                                     --yes    skip the confirmation prompt

  Snapshots live in .time-machine/ and are never committed.
`);
}
