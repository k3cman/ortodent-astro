# Location Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate a dedicated, linked detail page for every OrtoDent location.

**Architecture:** Extend the shared location model with stable slugs and lookup helpers. Generate nested Astro routes from that model and render every v1 detail page through one React component. Existing city cards link to the nested route instead of duplicating location content.

**Tech Stack:** Astro 6 static routes, React 19, TypeScript, Tailwind CSS, Leaflet 1.9.4.

## Global Constraints

- URLs use `/lokacije/{citySlug}/{locationSlug}`.
- All 13 pages are generated from `src/lib/locations.ts`.
- Detail pages show breadcrumb, address, both phone numbers, one-location map, and other centers in the same city.
- Preserve the existing v1 header, footer, visual system, city pages, and OSM attribution.

---

### Task 1: Location Slugs and Lookups

**Files:**
- Modify: `src/lib/locations.test.ts`
- Modify: `src/lib/locations.ts`

**Interfaces:**
- Produces: `Location.slug`, `getLocationBySlug(citySlug, locationSlug)`, and `locationPath(location)`.

- [x] Add a failing test that resolves Arena from `beograd/arena`, rejects a city mismatch, and returns `/lokacije/beograd/arena`.
- [x] Run `node --experimental-strip-types --test src/lib/locations.test.ts` and confirm the new assertions fail.
- [x] Add stable ASCII slugs for all 13 locations and implement the lookup/path helpers.
- [x] Re-run the test and confirm all assertions pass.

### Task 2: Detail Page and Static Route

**Files:**
- Create: `src/components/v1/pages/LocationDetail.tsx`
- Create: `src/pages/[version]/lokacije/[city]/[location].astro`

**Interfaces:**
- Consumes: `getLocationBySlug`, `getLocationsByCity`, `LocationsMap`, and version providers.
- Produces: 26 static detail routes across v1 and v2, including 13 complete v1 pages.

- [x] Create the shared detail component with breadcrumb, contact actions, single-marker map, and related-location grid.
- [x] Generate paths for every version/location pair and validate both route parameters before rendering.
- [x] Render the full detail component for v1 and the existing shell placeholder for v2.

### Task 3: Card Navigation and Verification

**Files:**
- Modify: `src/components/v1/locations/LocationCard.tsx`
- Modify: `src/components/v1/pages/CityLocations.tsx`

**Interfaces:**
- Consumes: `locationPath(location)`.
- Produces: A version-aware `Detalji lokacije` link from each city grid card.

- [x] Add an optional detail link to `LocationCard` and enable it on city pages.
- [x] Run `git diff --check`, the location model tests, and `npm run build`.
- [x] Verify Arena, Novi Sad, and Pančevo detail URLs, card counts, one map marker, desktop layout, and mobile layout in the browser.
