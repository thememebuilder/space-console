# space-console
AI first approach to automize Data pipelines

## Overview
Space Console�s website for the company space-console.
Goal: ship a first, functional version quickly, then iterate on design.

## Tech Stack
- Framework: Vite + React
- Language: TypeScript
- Styling: CSS Modules (upgrade to Tailwind or a design system later)
- Routing: 
eact-router-dom
- State: minimal React state (add Zustand/Redux only if needed)
- Lint/Format: ESLint + Prettier
- Hosting: Vercel
- Repo: GitHub
- Domain: space-console.com (pointed to Vercel)

## Folder Structure
- / root
  - README.md � project docs
  - package.json � scripts and deps
  - Vite.config.ts � Vite config
  - 	sconfig.json � TS config
  - .eslintrc.* / .prettierrc � lint/format
  - public/ � static assets (favicon, robots.txt, og images)
  - src/ � app source
    - main.tsx � React entry
    - App.tsx � top-level layout
    - 
outes/ � route components
      - Home/
        - index.tsx
        - Home.module.css
      - About/
        - index.tsx
        - About.module.css
    - components/ � shared UI components
      - Header/, Footer/, Logo/
    - Assets/ � images, icons
    - lib/ � small utilities (e.g., analytics)
    - styles/ � globals (e.g., global.css)

## Deployment Plan (Vercel + Domain)
1. Create a new Vercel project from the GitHub repo.
2. Framework Preset: Vite. Build command: Vite build (default). Output: dist/.
3. Set up environment (if any) in Vercel.
4. Add custom domain space-console.com in Vercel ? Domains.
5. Update DNS at registrar: set A/ALIAS or CNAME as instructed by Vercel.
6. Verify domain and force HTTPS.

## To Dos
### Milestone 1 � First Deploy (MVP)
- [X] Initialize Vite + React + TS project structure
- [X] Add basic pages: Home (hero, value prop), About, Contact
- [X] Add Header/Footer and simple brand styling
- [X] Configure ESLint + Prettier
- [X] Set up GitHub repo and push initial code
- [X] Connect repo to Vercel and deploy preview
- [X] Configure domain space-console.com on Vercel and verify DNS
- [X] Launch first version

### Milestone 2 � Improve Look & Content
- [X] Define visual language (colors, type scale)
  - Proposed tokens: --color-primary, --color-accent, --color-bg, --color-surface, --color-text-primary, --color-text-secondary
  - Type scale: base 16px with tokens --fs-md (1rem), --fs-lg (1.125rem), --fs-xl (1.5rem), etc.
  - Spacing: 4/8/12/16/24/32px scale
  - Accessibility: aim for 4.5:1 contrast for body text; visible focus ring for interactive elements
- [X] Upgrade styling (Tailwind or CSS refactor)
- [X] Add SEO basics (title/description, Open Graph, sitemap, robots)
- [X] Add analytics (e.g., Vercel Analytics or Plausible)
- [X] Add favicon, social preview images

## Analytics & SEO

Analytics is opt-in and safe by default. We provide a small initializer at `src/lib/analytics.ts`.

To enable Plausible:

1. Set the environment variable `VITE_ANALYTICS_PROVIDER=plausible` and `VITE_PLAUSIBLE_DOMAIN=your-domain.com` in Vercel.
2. The site will load Plausible's script only in production when configured.

To enable Vercel Analytics or a custom serverless provider:

1. Set `VITE_ANALYTICS_PROVIDER=vercel` and `VITE_VERCEL_SCRIPT` to the script URL in your environment.

Favicons & images (image-free option)

- The project includes a tiny SVG data-URI favicon in `index.html` so you don't need to add image assets.
- When you're ready to add social/open graph images, place them in `public/` and update `index.html` meta tags (`og:image` and `twitter:image`).

- [ ] Improve performance (code splitting, image optimization)

### Milestone 3 Enhancements
- [ ] Add blog/news or changelog (optional)
- [ ] Add forms (Contact with email service)
- [ ] Accessibility pass (keyboard nav, aria labels)
- [ ] Add basic CI (lint on PR), Dependabot

## Scripts (planned)
- dev: Vite
- Build: Vite build
- preview: Vite preview
- lint: eslint .
- Format: prettier --write .

## Notes
- Keep MVP minimal; prioritize shipping on space-console.com.
- Iterate safely behind branches/preview deployments on Vercel.
