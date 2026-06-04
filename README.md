# OrtoDent — Astro site

Static site with two design versions sharing the same content layer.

## Commands

```bash
cd astro
npm install
npm run dev      # http://localhost:4321
npm run build    # output → dist/
npm run preview  # serve dist/
```

## URL map

| Path | Description |
|------|-------------|
| `/` | Redirects to `/v1/` |
| `/v1/...` | Current design (ported from `ortodent-old`) |
| `/v2/...` | v2 shell — same routes, placeholder UI |

Examples: `/v1/cenovnik/`, `/v1/usluge/2d/`, `/v2/kontakt/`

## Project layout

- `src/content/` — shared data (nav, cenovnik, usluge image paths)
- `src/components/v1/` — v1 React UI (shadcn, framer-motion)
- `src/components/v2/` — v2 Astro shell (`V2Shell.astro`)
- `src/styles/v1.css` / `v2.css` — separate stylesheets (no theme provider)
- `ortodent-old/` — original Vite SPA (git remote still lives here)

## GitHub Pages / subpath deploy

Match the old app base path:

```bash
SITE_BASE=/orto-cloud-vision/ npm run build
```

Deploy the `dist/` folder. When moving CI to the parent repo, set `working-directory: astro` in the workflow.

## Editing content

Change copy and prices once in `src/content/` — both v1 and v2 read from there (v2 cenovnik page lists sections; v1 uses the same `CENOVNIK_SECTIONS`).
