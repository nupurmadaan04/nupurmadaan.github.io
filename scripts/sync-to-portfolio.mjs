import fs from 'node:fs';
import path from 'node:path';

const SRC = 'C:/Users/devin/Portfolio_series';
const DEST = 'C:/Users/devin/Nupur Madaan Portfolio';
const BACKUP = path.join(DEST, '.backup_pre_migration');

console.log(`Starting sync from: ${SRC} to: ${DEST}`);

// 1. Create backup if not already present
if (!fs.existsSync(BACKUP)) {
  fs.mkdirSync(BACKUP, { recursive: true });
  console.log(`Created backup folder: ${BACKUP}`);
  const destEntries = fs.readdirSync(DEST);
  for (const entry of destEntries) {
    if (entry === '.git' || entry === '.backup_pre_migration') continue;
    const srcPath = path.join(DEST, entry);
    const bkpPath = path.join(BACKUP, entry);
    fs.cpSync(srcPath, bkpPath, { recursive: true });
    console.log(`Backed up: ${entry}`);
  }
} else {
  console.log('Backup already exists, skipping backup creation.');
}

// 2. Files and directories to sync
const itemsToSync = [
  'src',
  'public',
  'scripts',
  '.github',
  'index.html',
  'index.source.html',
  'assets',
  'docs',
  '.nojekyll',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'vite.config.ts',
  'CNAME',
  'README.md',
  '.gitignore'
];

for (const item of itemsToSync) {
  const srcItem = path.join(SRC, item);
  const destItem = path.join(DEST, item);
  if (fs.existsSync(srcItem)) {
    fs.cpSync(srcItem, destItem, { recursive: true, force: true });
    console.log(`Synced: ${item}`);
  } else {
    console.warn(`Warning: source item not found: ${srcItem}`);
  }
}

// Remove legacy files from root of DEST that belonged to old static template (already safely backed up)
const legacyFilesToRemove = [
  'index.txt',
  'LICENSE',
  'website-demo-image'
];

for (const oldItem of legacyFilesToRemove) {
  const p = path.join(DEST, oldItem);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log(`Cleaned up legacy file: ${oldItem}`);
  }
}

console.log('Sync completed successfully!');
