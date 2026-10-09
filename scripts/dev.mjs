import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';

// Restore development index.html before starting dev server
if (fs.existsSync('index.source.html')) {
  fs.copyFileSync('index.source.html', 'index.html');
}

const child = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });
child.on('exit', (code) => process.exit(code ?? 0));
