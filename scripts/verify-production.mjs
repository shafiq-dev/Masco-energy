import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const themes = ['classic', 'minimal', 'services', 'split', 'editorial', 'monumental', 'kinetic', 'dossier', 'luminous'];
const build = readFileSync('.production-build', 'utf8').trim();
for (const theme of themes) {
  const html = readFileSync(join(build, 'server/app/home', `${theme}.html`), 'utf8');
  const photos = [];
  for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
    const src = match[1].replaceAll('&amp;', '&');
    const parsed = new URL(src, 'http://localhost');
    const asset = parsed.searchParams.get('url') || parsed.pathname;
    assert.ok(existsSync(join('public', asset)), `${theme}: missing ${asset}`);
    if (asset.endsWith('.jpg')) photos.push(asset);
  }
  assert.equal(photos.length, new Set(photos).size, `${theme}: repeated photograph`);
  for (const section of ['markets', 'expertise', 'heritage', 'leadership', 'businesses', 'assurance', 'impact', 'clients']) {
    assert.ok(html.includes(`id="${section}"`), `${theme}: missing ${section}`);
  }
  console.log(`PASS ${theme}: unique photos, valid assets, profile sections`);
}
