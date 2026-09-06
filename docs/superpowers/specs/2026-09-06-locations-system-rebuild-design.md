# OrtoDent Locations System — Approved Design Record

This document records the user-supplied, already approved locations brief for implementation. It is not a new design proposal.

## Goal

Consolidate the existing OrtoDent location routes, real location data, and Leaflet map into a responsive four-level discovery system:

- `/lokacije` helps visitors choose a city and see the full network.
- `/lokacije/[grad]` helps visitors compare centers in one city.
- `/lokacije/[grad]/[region]` focuses discovery on a real region represented in the data.
- `/lokacije/[grad]/[ordinacija]` answers practical visit questions for one center.

Existing public URLs and the shared dynamic route depth for regions and centers remain unchanged.

## Data and factual safety

`src/lib/locations.ts` remains the source of truth for cities, regions, addresses, phone numbers, and map coordinates. Counts are derived from this data. Opening hours, distances, services, parking, transport, and accessibility details are rendered only when real fields exist. Because the current source does not contain opening hours, the UI uses the factual neutral fallback “Radno vreme proverite telefonom.”

The model may accept optional opening-hours, services, and practical-information fields so the shared UI can display them when factual data is added later. Current open/closed state must be evaluated in `Europe/Belgrade`.

## Visual system

The supplied `/lokacije`, city, and Arena screenshots are the primary references. The implementation uses the approved OrtoDent system: white canvas, graphite typography, restrained magenta actions and markers, subtle neutral borders, 8px spacing rhythm, and low/no elevation. City entries may be framed navigation cards; center entries use editorial rows with thin dividers rather than the old top-border/shadow card pattern.

The site header and footer are reused. Location navigation marks “Lokacije” as active.

## Shared UI

The routes reuse one `LocationCard`/list-item primitive, one `LocationsMap`, shared opening-status and hours primitives, shared actions, city navigation, region navigation, and a compact OrtoCloud banner. Map and list selection share one React state on city and region pages.

## Responsive behavior

Desktop city and region pages use a list/sticky-map split. Mobile orders the heading, shortcuts/filters, location list, then map; touch targets are at least 44px and the gutter is 20px. The center detail page prioritizes name, address, hours fallback/status, call action, and navigation before the map.

## Verification

Per the user instruction, do not add or modify automated tests. Validate with the existing test suite, production build, `git diff --check`, and manual desktop/mobile browser comparison for overview, city, region, and center-detail routes.
