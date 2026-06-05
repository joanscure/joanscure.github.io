# Joan Leyton — Portfolio

Personal portfolio built with Astro 6 and Tailwind CSS v4. Deployed on GitHub Pages via GitHub Actions.

**Live:** [joanscure.github.io](https://joanscure.github.io)

## Stack

- **Framework:** [Astro 6](https://astro.build) — static site generation, zero JS by default
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- **Deployment:** GitHub Pages + GitHub Actions
- **Package manager:** pnpm

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
pnpm build     # outputs to dist/
pnpm preview   # preview the build locally
```

## Project structure

```
src/
├── components/     # Astro components (Hero, About, Experience, Projects, Contact, ...)
├── data/           # Typed content — projects.ts, experiences.ts
├── layouts/        # Base HTML layout
├── pages/          # index.astro
└── styles/         # global.css (Tailwind config + custom classes)
public/
├── foto.png
├── favicon.svg
├── JOAN_LEYTON_CV.pdf
└── og-image.png    # 1200×630 — required for social sharing previews
.github/
└── workflows/
    └── deploy.yml  # build → upload artifact → deploy to Pages
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow automatically:

1. Installs dependencies with pnpm
2. Runs `astro build`
3. Deploys `dist/` to GitHub Pages

To enable: **repo Settings → Pages → Source → GitHub Actions**.

## Commit convention

This project uses [Conventional Commits](https://www.conventionalcommits.org), enforced by commitlint + husky.

```
feat: add dark mode toggle
fix: correct nav scroll offset on mobile
content: update Ravn experience highlights
style: remove unused CSS classes
chore: bump astro to 6.5
```

| Type | When to use |
|------|-------------|
| `feat` | New section, component, or feature |
| `fix` | Bug or layout fix |
| `content` | Text, copy, or data changes |
| `style` | CSS/visual tweaks with no logic change |
| `chore` | Dependencies, config, tooling |
| `refactor` | Code restructuring without behavior change |
