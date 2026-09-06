# OrtoDent Locations System Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate all OrtoDent location routes into a coherent, responsive, map-linked discovery and center-detail experience using only existing factual data.

**Architecture:** Keep `src/lib/locations.ts` as the canonical data source and preserve the existing Astro route topology. Share presentational and state-aware React primitives across overview, city, region, and center pages, with a dedicated location stylesheet that extends the current global design without touching unrelated page styles.

**Tech Stack:** Astro 6 static routes, React 19, TypeScript, Leaflet 1.9.4, Lucide icons, CSS.

**Spec:** `docs/superpowers/specs/2026-09-06-locations-system-rebuild-design.md`

## Global Constraints

- Preserve existing public URLs and distinguish region/location records inside the existing shared dynamic route.
- Use only factual data already present in the project; never invent hours, distances, services, or practical details.
- Evaluate future open/closed status in `Europe/Belgrade`.
- Reuse the working Leaflet integration and linked list/map selection.
- Do not modify or delete existing tests and do not add new automated tests.
- Do not touch unrelated pages or overwrite unrelated working-tree changes.
- Verify with existing tests, production build, diff checks, and manual desktop/mobile route inspection.

---

### Task 1: Normalize the shared location domain and practical primitives

**Files:**
- Modify: `src/lib/locations.ts`
- Create: `src/components/site/locations/OpenNowStatus.tsx`
- Create: `src/components/site/locations/WeeklyOpeningHours.tsx`
- Create: `src/components/site/locations/LocationActions.tsx`
- Create: `src/components/site/locations/OrtoCloudBanner.tsx`

**Interfaces:**
- Produces: optional `openingHours`, `services`, and `practicalInfo` fields; Belgrade-time opening-state helpers; shared factual fallback UI and actions.

- [x] Extend the model with optional factual fields while leaving all current records unchanged.
- [x] Implement reusable hours/status rendering that falls back neutrally when hours are absent.
- [x] Implement shared call/navigation actions and OrtoCloud supporting banner.

### Task 2: Rebuild shared discovery primitives

**Files:**
- Modify: `src/components/site/locations/LocationCard.tsx`
- Modify: `src/components/site/locations/CityCards.tsx`
- Modify: `src/components/site/locations/RegionCards.tsx`
- Modify: `src/components/site/locations/LocationsMap.tsx`
- Create: `src/components/site/locations/locations.css`

**Interfaces:**
- Consumes: canonical location records and helpers from Task 1.
- Produces: flat editorial location rows, city navigation cards, region shortcuts, and branded linked map markers.

- [x] Replace elevated center cards with a single reusable editorial row and clear active state.
- [x] Restyle city entries as large navigation cards and regions as compact shortcuts.
- [x] Improve markers, selected state, map controls, and popup actions without replacing Leaflet.
- [x] Add responsive location-specific CSS with 20px mobile gutters and 44px controls.

### Task 3: Consolidate overview, city, and region routes

**Files:**
- Modify: `src/components/site/pages/Lokacije.tsx`
- Modify: `src/components/site/pages/CityLocations.tsx`
- Modify: `src/components/site/pages/RegionLocations.tsx`

**Interfaces:**
- Consumes: shared discovery primitives from Task 2.
- Produces: the full-network overview, city comparison hub, and focused region landing page.

- [x] Recompose the overview around city choice, the all-centers map, compact process guidance, and OrtoCloud support.
- [x] Recompose city hubs around a factual intro, lightweight region shortcuts, flat center list, and sticky linked map.
- [x] Recompose region pages as focused local landing pages using the same list/map system.

### Task 4: Rebuild center detail and verify every route level

**Files:**
- Modify: `src/components/site/pages/LocationDetail.tsx`
- Verify: `src/pages/lokacije/index.astro`
- Verify: `src/pages/lokacije/[city]/index.astro`
- Verify: `src/pages/lokacije/[city]/[location].astro`

**Interfaces:**
- Consumes: factual fallbacks/status, actions, map, and shared location list item.
- Produces: practical center detail with above-the-fold address/contact/hours, map/contact split, conditional weekly hours/services/practical information, and compact nearby centers.

- [x] Recompose the center hero and practical area around call/navigation and factual hours state.
- [x] Render weekly hours, services, and practical information only when real data exists.
- [x] Limit nearby centers to a useful compact subset rather than dumping the whole city.
- [x] Run `npm test`, `npm run build`, and `git diff --check`.
- [x] Inspect `/lokacije`, `/lokacije/beograd`, `/lokacije/beograd/novi-beograd`, and `/lokacije/beograd/arena` at desktop and mobile widths.
