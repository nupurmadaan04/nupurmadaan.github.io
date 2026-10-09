# NUPUR MADAAN — THE SERIES PORTFOLIO

A cinematic, streaming-inspired personal portfolio for **Nupur Madaan**: Data Analyst, Data Scientist, and Machine Learning Enthusiast (B.Tech Computer Science and Engineering @ Mody University of Science and Technology, CGPA 8.93).

- **Live URL:** [https://www.nupurmadaan.xyz](https://www.nupurmadaan.xyz)
- **Deployment Repository:** [https://github.com/nupurmadaan04/nupurmadaan.github.io](https://github.com/nupurmadaan04/nupurmadaan.github.io)
- **Primary Technical Focus:** Data Analytics, Machine Learning, Deep Learning, Python, SQL, Data Visualization, and Applied AI.

> A personal portfolio featuring a fictional streaming-platform look with a bespoke soft pastel blue and periwinkle design system. It is not affiliated with any streaming service and contains zero third-party branding.

---

## Tech Stack & Architecture

- **Framework:** React 18 + TypeScript + Vite 6
- **Styling:** Tailwind CSS 4 with custom soft pastel blue design tokens (`#38bdf8`, `#818cf8`, `#090e17`)
- **Animation & Motion:** Framer Motion 11 + Lenis smooth scrolling
- **Imaging Pipeline:** Sharp (generating multi-resolution responsive WebP portraits + Open Graph image)
- **Deployment:** GitHub Pages via GitHub Actions workflow (`deploy.yml`)
- **Custom Domain:** `www.nupurmadaan.xyz` configured via `CNAME` in `public/` and root

---

## Local Development

Requires **Node.js 18+**.

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open the local URL (usually `http://localhost:5173`).

---

## Production Build & Preview

```bash
# Typecheck and build production bundle
npm run build

# Preview production build locally
npm run preview
```

The output bundle is emitted into `dist/`. Vite automatically copies `public/CNAME` to `dist/CNAME` during build.

---

## Updating Portfolio Content

All personal information, projects, skills, education, and milestones are organized cleanly in **[`src/data/portfolio.ts`](src/data/portfolio.ts)**:

| Item | Location in `src/data/portfolio.ts` |
| --- | --- |
| Name, headline, links, bio | `profile` |
| Featured Originals (Projects) | `projects` (AI Crop Yield, Soul Sense, Cogentic, Dental Caries, Military Analytics) |
| Skills & evidence links | `skillCategories`, `skillEvidence` |
| Work Experience & Internships | `experience` (Infosys Springboard, Jalte Diye, YBI, Academor) |
| Education | `education` (Mody University CSE, CGPA 8.93) |
| Certifications | `certifications` (Oracle Cloud, Databricks, Cisco, Python, etc.) |
| Top Picks & Highlight Reel | `topPicks`, `introSlides` |

### Resume and Photography Assets
- **Resume:** `public/assets/Nupur_Madaan_Resume.pdf`
- **Portrait Photo:** `public/assets/nupur.jpg`
- **Rebuilding Image Variants:** Run `npm run images` to regenerate `portrait-1100.webp`, `portrait-720.webp`, `portrait-420.webp`, and `og-image.jpg`.

---

## GitHub Pages Deployment

The deployment repository is configured for `nupurmadaan04/nupurmadaan.github.io` on branch `main`.

A GitHub Actions workflow is provided at `.github/workflows/deploy.yml` which automatically:
1. Checks out the code.
2. Installs Node.js dependencies with caching.
3. Builds the production bundle (`npm run build`).
4. Verifies the `CNAME` file exists with `www.nupurmadaan.xyz`.
5. Deploys the `dist/` directory to GitHub Pages.

---

## Accessibility & Responsiveness

- Respects `prefers-reduced-motion` settings across all devices.
- Keyboard accessible navigation with `Esc`, `Tab`, `Space`, and arrow keys.
- Fully responsive across desktop, tablet, and mobile viewports with native touch swipe rails.
- High-contrast, accessible typography on dark slate backgrounds.
