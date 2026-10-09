import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/devin/Nupur Madaan Portfolio';
const IGNORE = new Set(['node_modules', '.git', '.backup_pre_migration', 'dist']);

function printTree(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !IGNORE.has(e.name))
    .sort((a, b) => {
      if (a.isDirectory() === b.isDirectory()) return a.name.localeCompare(b.name);
      return a.isDirectory() ? -1 : 1;
    });

  entries.forEach((entry, idx) => {
    const isLast = idx === entries.length - 1;
    const marker = isLast ? '└── ' : '├── ';
    const childPrefix = prefix + (isLast ? '    ' : '│   ');
    console.log(`${prefix}${marker}${entry.name}${entry.isDirectory() ? '/' : ''}`);
    if (entry.isDirectory()) {
      printTree(path.join(dir, entry.name), childPrefix);
    }
  });
}

console.log('Nupur Madaan Portfolio/');
printTree(ROOT);
