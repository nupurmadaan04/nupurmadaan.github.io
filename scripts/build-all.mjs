import { execSync } from 'node:child_process';
import fs from 'node:fs';

// 1. Ensure root index.html is the development source template before building
if (fs.existsSync('index.source.html')) {
  fs.copyFileSync('index.source.html', 'index.html');
} else if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', 'index.source.html');
}

// 2. Run TypeScript compilation and Vite production build
console.log('Building Vite production bundle...');
execSync('npx tsc -b && npx vite build', { stdio: 'inherit', shell: true });

// 3. Ensure CNAME and .nojekyll in dist
fs.writeFileSync('dist/CNAME', 'www.nupurmadaan.xyz\n');
fs.writeFileSync('dist/.nojekyll', '# disable jekyll\n');

// 4. Ensure docs/ exists with production build for GitHub Pages /docs folder option
if (fs.existsSync('docs')) {
  fs.rmSync('docs', { recursive: true, force: true });
}
fs.cpSync('dist', 'docs', { recursive: true });

// 5. Ensure root assets/ exists with production build for GitHub Pages root option
if (fs.existsSync('assets')) {
  fs.rmSync('assets', { recursive: true, force: true });
}
fs.cpSync('dist/assets', 'assets', { recursive: true });

// 6. Ensure root .nojekyll and root index.html point to compiled production bundle
fs.writeFileSync('.nojekyll', '# disable jekyll\n');
fs.copyFileSync('dist/index.html', 'index.html');

console.log('Build and multi-target GitHub Pages deployment prepared successfully!');
