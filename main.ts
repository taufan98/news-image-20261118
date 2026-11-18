// news-image-20261118 entry (Node 22, standard library only).
//
// The entry image is the entry.png committed beside this file: a newspaper
// front page summing up the world news of Wednesday 18 November 2026.
// This program copies those exact bytes to the harness output directory,
// so every run writes the same file.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(outDir, 'entry.png');

const image = readFileSync(sourcePath);
mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, image);

// Fail loudly instead of silently shipping a truncated copy.
if (readFileSync(targetPath).length !== image.length) {
  throw new Error('entry.png copy is incomplete');
}
