import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
const output = `.next-release-${Date.now()}`;
// Prepare the route directories before the build workers start on Windows.
for (const route of ['classic', 'minimal', 'services', 'split', 'editorial', 'monumental', 'kinetic', 'dossier', 'luminous']) {
  mkdirSync(`${output}/server/app/home/${route}.segments/home/${route}`, { recursive: true });
}
for (const route of ['_not-found', 'main']) {
  mkdirSync(`${output}/server/app/${route}.segments/${route}`, { recursive: true });
}
mkdirSync(`${output}/static/chunks/next/dist/client/components`, { recursive: true });
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build', '--webpack'], {
  stdio: 'inherit',
  env: { ...process.env, NEXT_DIST_DIR: output, NEXT_BUILD_SERIAL: '1' },
});
if (result.status !== 0) process.exit(result.status || 1);
writeFileSync('.production-build', output, 'utf8');

// Next appends the unique distDir types path to tsconfig.json on every build.
// With a timestamped output folder that list would grow forever, so normalize it
// back to the stable include list after each successful build.
const tsconfig = JSON.parse(readFileSync('tsconfig.json', 'utf8'));
tsconfig.include = [
  'next-env.d.ts',
  '**/*.ts',
  '**/*.tsx',
  '**/*.mts',
  '.next/types/**/*.ts',
  '.next/dev/types/**/*.ts',
  '.next-*/types/**/*.ts',
  '.next-*/dev/types/**/*.ts',
];
writeFileSync('tsconfig.json', `${JSON.stringify(tsconfig, null, 2)}\n`, 'utf8');

console.log(`Production build ready: ${output}`);
