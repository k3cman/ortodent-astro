# OrtoDent — Astro site

Static OrtoDent site built with Astro and React islands.

## Commands

```bash
npm ci --legacy-peer-deps
npm run dev      # http://localhost:4321
npm test         # unit and production-route tests
npm run build    # output → dist/
npm run preview  # serve dist/
```

## URL map

| Path | Description |
|------|-------------|
| `/` | Home page |
| `/cenovnik/` | Price list |
| `/informacije/` | Patient information and FAQ |
| `/kontakt/` | Contact page |
| `/lokacije/` | Cities and imaging centers |
| `/lokacije/:city/:location/` | Imaging-center details |
| `/ortocloud/` | OrtoCloud landing page |
| `/usluge/:tab/` | 2D, 3D, and cephalometry services |
| `/za-doktore/` | Information for dentists |

The retired `/v1/...` and `/v2/...` namespaces are not published.

## Project layout

- `src/pages/` — canonical Astro routes
- `src/components/site/` — React UI, providers, and UI primitives
- `src/components/ortocloud/` — OrtoCloud landing-page sections
- `src/content/` — shared navigation, pricing, and service data
- `src/styles/site.css` — site theme and global component styles
- `src/assets/site/` — service imagery imported by Astro/Vite

## GitHub Pages / subpath deploy

Pushes to `main` are deployed by `.github/workflows/deploy.yml` to:

`https://k3cman.github.io/ortodent-astro/`

To reproduce the Pages build locally, set the production site URL and repository base path:

```bash
SITE_URL=https://k3cman.github.io SITE_BASE=/ortodent-astro npm run build
```

Deploy the generated `dist/` folder.

## Editing content

Shared navigation, pricing, and service content lives in `src/content/`.
