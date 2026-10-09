import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const src = 'public/assets/nupur.jpg';
if (!existsSync(src)) {
  console.error('Missing public/assets/nupur.jpg');
  process.exit(1);
}

const hi = sharp(src);
const meta = await hi.metadata();
console.log(`Source photo: ${meta.width}x${meta.height}, format: ${meta.format}`);

// Generate portrait webp sizes
for (const w of [1100, 720, 420]) {
  await sharp(src)
    .resize({ width: w })
    .webp({ quality: 90 })
    .toFile(`${OUT}/portrait-${w}.webp`);
  console.log(`Generated portrait-${w}.webp`);
}

// Generate social share image (1200x630) with soft blue pastel theme
const portraitThumb = await sharp(src)
  .resize({ width: 520, height: 520, fit: 'cover', position: 'top' })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#090d16',
  },
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g1" cx="20%" cy="30%" r="65%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.32"/>
            <stop offset="60%" stop-color="#818cf8" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#090d16" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="g2" cx="80%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#818cf8" stop-opacity="0.38"/>
            <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#090d16" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="#090d16"/>
        <rect width="1200" height="630" fill="url(#g1)"/>
        <rect width="1200" height="630" fill="url(#g2)"/>
        <text x="80" y="240" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="76" fill="#f8fafc" letter-spacing="-1">NUPUR MADAAN</text>
        <text x="82" y="300" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="22" fill="#7dd3fc" letter-spacing="8">DATA ANALYST &amp; SCIENTIST</text>
        <text x="82" y="360" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="18" fill="#94a3b8" letter-spacing="2">MACHINE LEARNING • PYTHON • SQL • APPLIED AI</text>
        <text x="82" y="440" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#cbd5e1">B.Tech CSE @ Mody University | CGPA 8.93</text>
        <text x="82" y="520" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="15" fill="#38bdf8">www.nupurmadaan.xyz</text>
      </svg>`),
    },
    { input: portraitThumb, left: 630, top: 55 },
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Successfully generated og-image.jpg and portrait webp assets');
