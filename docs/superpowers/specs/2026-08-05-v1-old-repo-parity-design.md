# Astro v1 / ortodent-old parity design

## Goal

Make the Astro repository's `/v1` site visually and functionally equivalent to
the committed `main` branch of `/Users/k3cman/CODE/ortodent/ortodent-old` at
commit `2a822ec6697518e9182e70de8b6e231e1cc4d597`.

The old repository is the source of truth for content, component composition,
styling, assets, responsive behavior, animations, and existing client-side
interactions. Astro remains the source of truth for static generation, versioned
URLs, deployment base-path handling, and coexistence with `/v2`.

## Scope

- Port every user-visible route from the old Vite + React application to the
  matching Astro `/v1` route.
- Replace Astro-v1 UI changes that differ from the committed old repository.
- Preserve the Astro `/v1` and `/v2` route structure.
- Preserve the existing `/v2` implementation without visual or behavioral
  changes.
- Preserve current old-repository behavior for forms and the location map. The
  forms continue to show local toast feedback without a backend submission, and
  the map remains the existing simulated map.

## Non-goals

- No redesign or content rewrite.
- No backend, database, email delivery, or map-provider integration.
- No broad conversion of React components to native Astro components.
- No dependency upgrades unless they are required to make the old component
  behavior compile under the versions already installed in the Astro project.
- No changes to `/v2`.

## Architecture

Astro continues to generate static pages from `src/pages/[version]`. Each route
selects either `V1Layout` or `V2Layout`. For `/v1`, the selected React page is
hydrated with `client:load` exactly as it is today.

The following Astro compatibility components remain in place:

- `V1Layout.astro` and `Base.astro`
- `VersionContext.tsx` and `withVersion.tsx`
- `V1Providers.tsx`
- `vPath()` and the versioned static-path helpers
- the three Astro-compatible service-page wrappers

The old application's visual components, page composition, design tokens, and
assets are mapped into `src/components/v1`, `src/styles/v1.css`, `src/assets`,
and `public`.

## Routing compatibility

The old app uses React Router, while Astro uses file-based routes. React Router
must not become the runtime router for `/v1`.

Internal links are adapted to `VersionLink` or `vPath()` so they retain the
active site version and respect Astro's configured deployment base. This is a
technical adapter only; labels, styling, destinations, and interaction behavior
must remain equivalent to the old app.

The matching routes are:

- `/` -> `/v1/`
- `/cenovnik` -> `/v1/cenovnik/`
- `/informacije` -> `/v1/informacije/`
- `/kontakt` -> `/v1/kontakt/`
- `/lokacije` -> `/v1/lokacije/`
- `/za-doktore` -> `/v1/za-doktore/`
- `/usluge/2d` -> `/v1/usluge/2d/`
- `/usluge/3d` -> `/v1/usluge/3d/`
- `/usluge/kefalometrija` -> `/v1/usluge/kefalometrija/`

## Content and assets

The committed old repository wins whenever its content or asset usage differs
from Astro v1. Existing shared Astro content modules may remain when their data
is identical and they do not change rendering.

Astro-only images `image 34.png`, `image 36.png`, `image 37.png`, and
`image 38.png` are removed because they came from work that was not committed in
the old source repository. Imported assets and public image URLs are adapted
only as needed for Astro static output and deployment base paths.

## Component behavior

- Header, footer, home-page sections, service cards, price list, information,
  contact, locations, doctor content, and service pages match the old app.
- Framer Motion animations keep their old timing and triggers.
- Existing responsive breakpoints and mobile-menu behavior are preserved.
- Existing toast, dropdown, tab, accordion, and form interactions are preserved.
- Any compatibility changes required by React 19 or newer Radix versions must
  be minimal and must not intentionally alter the visible result.

## Failure handling

- Invalid versions continue to redirect to `/v1`.
- Invalid service tabs continue to redirect to `/v1/usluge/2d/`.
- Build or runtime incompatibilities are resolved at the adapter boundary rather
  than by redesigning the old components.
- Missing public assets are treated as parity failures.

## Verification

1. Confirm both repositories are clean before implementation.
2. Build the old Vite app and the Astro app.
3. Run both applications locally at separate ports.
4. Compare every mapped route at desktop and mobile viewport sizes.
5. Check navigation, service dropdowns and tabs, mobile menu, accordions, forms,
   toast messages, location selection, and animations.
6. Confirm `/v2` still builds and renders unchanged.
7. Confirm Astro Git status contains only intentional migration changes.

## Acceptance criteria

- Every `/v1` route contains the same content and component order as the matching
  old-app route.
- There are no intentional visual differences in typography, colors, spacing,
  imagery, responsive layout, or animations.
- All internal navigation remains within `/v1` and works under an Astro base
  path.
- The Astro production build succeeds.
- The old source repository remains unchanged and clean.
- `/v2` remains unchanged.
