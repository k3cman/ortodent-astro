# Homepage and Design System Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved editorial OrtoDent homepage and a living direct-URL `/design-system` page from shared production tokens and components.

**Architecture:** Centralize design values in `tokens.css`, keep homepage data in `home.ts`, and compose the homepage from focused section components under `components/site/home`. The design-system page renders specimens from the same tokens and production primitives instead of maintaining a second visual implementation.

**Tech Stack:** Astro 6, React 19, TypeScript, Tailwind CSS 3, CSS custom properties, Framer Motion, Lucide React, Node test runner

**Spec:** `docs/superpowers/specs/2026-08-29-homepage-design-system-redesign-design.md`

## Global Constraints

- Scope is limited to the homepage, shared header/footer styling needed by it, and `/design-system`.
- Do not redesign `/ortocloud` or other interior pages in this phase.
- `/design-system` must be reachable directly but absent from header/footer navigation.
- Use Image 4 for the hero and Image 9 for the 3D service.
- Generated dentist and OrtoCloud images must not contain baked-in section copy.
- Preserve canonical unversioned routing and `SITE_BASE` behavior.
- Keep body text at least 16 px, touch targets at least 44 px, visible focus, keyboard controls, and reduced-motion support.
- Prevent horizontal overflow at 390, 768, 1024, and 1440 px.

---

### Task 1: Lock the homepage and design-system route contract

**Files:**
- Modify: `src/lib/routes.test.ts`
- Modify: `src/content/home.ts` after it is created in Task 3

**Interfaces:**
- Consumes: Astro production build output under `dist/`
- Produces: an integration contract requiring the homepage copy, `/design-system`, canonical routes, and no versioned output

- [ ] **Step 1: Extend the failing production-route test**

Add `design-system/index.html` to `canonicalPages`, then assert the two SSR documents contain the approved headings:

```ts
const homeHtml = await readFile(path.join(distRoot, "index.html"), "utf8");
const designSystemHtml = await readFile(
  path.join(distRoot, "design-system/index.html"),
  "utf8",
);

assert.match(homeHtml, /Precizna 2D i 3D dijagnostika\./);
assert.match(homeHtml, /Dijagnostika na koju možete da se oslonite\./);
assert.match(designSystemHtml, /DIZAJN SISTEM/);
assert.doesNotMatch(homeHtml, /href=["']\/design-system/);
```

- [ ] **Step 2: Run the test and verify RED**

Run: `node --experimental-strip-types --test src/lib/routes.test.ts`

Expected: FAIL because `/design-system` does not exist and the current homepage does not contain the approved dentist heading.

- [ ] **Step 3: Keep the failing test unchanged through Tasks 2–4**

The test is the acceptance boundary. Fix production code, not the assertions.

---

### Task 2: Add production imagery and the shared token foundation

**Files:**
- Create: `src/assets/home/hero-clinician.png`
- Create: `src/assets/home/cbct-patient.png`
- Create: `src/assets/home/dentist-workstation.png`
- Create: `src/assets/home/ortocloud-phone.png`
- Create: `src/styles/tokens.css`
- Modify: `src/styles/site.css`
- Modify: `src/layouts/SiteLayout.astro`
- Modify: `src/components/site/ui/button.tsx`

**Interfaces:**
- Consumes: supplied Images 4, 5, 7, and 9
- Produces: canonical CSS variables, typography rules, shared section utilities, button focus/motion behavior, and web-ready homepage assets

- [ ] **Step 1: Copy the two approved source images**

Copy Image 4 to `hero-clinician.png` and Image 9 to `cbct-patient.png` without visual alteration.

- [ ] **Step 2: Generate the dentist visual**

Use Image 7 as the edit reference. Preserve the clinician at the diagnostic workstation and cool dark clinical atmosphere; remove all embedded headings, labels, CTA text, magenta lines, and decorative overlays. Output a clean landscape image suitable for the right half of a 50/50 section.

- [ ] **Step 3: Generate the OrtoCloud phone visual**

Use Image 5 as the edit reference. Preserve a realistic hand holding a phone with an OrtoCloud access screen and a pale clinical background; remove the entire right-side text block and button. Do not add fake patient records or unreadable marketing copy.

- [ ] **Step 4: Define tokens in `tokens.css`**

Create CSS variables for the approved palette and scales:

```css
:root,
body.site-theme {
  --od-magenta: #e6007e;
  --od-magenta-dark: #c1006b;
  --od-magenta-light: #ffe6f2;
  --od-graphite: #1a1a1a;
  --od-gray-700: #333333;
  --od-gray-500: #686868;
  --od-gray-300: #e5e5e5;
  --od-off-white: #fafafa;
  --od-white: #ffffff;
  --od-container: 80rem;
  --od-radius-sm: 0.25rem;
  --od-radius-md: 0.75rem;
  --od-radius-lg: 1.5rem;
  --od-shadow-sm: 0 1px 3px rgb(0 0 0 / 0.05);
  --od-shadow-md: 0 4px 12px rgb(0 0 0 / 0.08);
}
```

- [ ] **Step 5: Rebuild global site styles on the tokens**

Import Inter Variable, import `tokens.css`, remove the obsolete bold geometric/gradient system, and add `.od-container`, `.od-section`, `.od-eyebrow`, focus-visible, reduced-motion, and horizontal-overflow safeguards.

- [ ] **Step 6: Align shared buttons**

Make primary buttons magenta, 48–52 px high, 10–12 px radius, medium weight, with a dark-magenta hover and visible focus ring. Keep secondary/text variants neutral and remove glow-heavy defaults from homepage usage.

- [ ] **Step 7: Verify the app still compiles**

Run: `npm run build`

Expected: build may still fail the Task 1 acceptance assertions, but production compilation must succeed without missing imports or asset errors.

---

### Task 3: Build the editorial homepage sections

**Files:**
- Create: `src/content/home.ts`
- Create: `src/components/site/home/HeroSection.tsx`
- Create: `src/components/site/home/ServicesSection.tsx`
- Create: `src/components/site/home/DentistSection.tsx`
- Create: `src/components/site/home/StatsSection.tsx`
- Create: `src/components/site/home/OrtoCloudPromo.tsx`
- Create: `src/components/site/home/ReviewsSection.tsx`
- Modify: `src/components/site/pages/Index.tsx`
- Modify: `src/components/site/Header.tsx`
- Modify: `src/components/site/Footer.tsx`

**Interfaces:**
- Consumes: Task 2 tokens/assets, `SiteLink`, shared `Button`, existing real testimonial copy
- Produces: the complete approved homepage and redesigned shared header/footer

- [ ] **Step 1: Centralize homepage data**

Export literal `HOME_SERVICES`, `HOME_STATS`, and `HOME_REVIEWS` arrays. Service routes must be `/usluge/3d`, `/usluge/2d`, and `/usluge/kefalometrija`; statistics are `13`, `500K+`, and `17`; reviews reuse the existing names and quotes without inventing claims.

- [ ] **Step 2: Rebuild the shared header**

Implement the Image 1 navigation order, a restrained OrtoCloud action, accessible service dropdown, and mobile disclosure menu. Keep `/design-system` absent.

- [ ] **Step 3: Implement `HeroSection`**

Use the approved copy, two CTAs, city list, Image 4 background/visual, and decorative diagnostic markers marked `aria-hidden`. Render the copy before the image on mobile.

- [ ] **Step 4: Implement `ServicesSection`**

Build the large-left/two-stacked-right grid. Use Image 9 for 3D, `/images/Ortopan.jpg` for 2D, and `/images/Lateralni kefalogram.jpg` for cephalometry. Add the low-dose assurance strip below the grid.

- [ ] **Step 5: Implement `DentistSection`**

Build the dark 50/50 split with three numbered benefits, collaboration CTA, OrtoCloud action, and the clean generated workstation image. Keep all copy outside the bitmap.

- [ ] **Step 6: Implement `StatsSection` and `OrtoCloudPromo`**

Use typography and dividers for statistics. Build the Image 5 split with four concise benefits and a real `/ortocloud` action; render the image before copy on mobile.

- [ ] **Step 7: Implement `ReviewsSection`**

Create the summary column plus featured and secondary review composition. Reuse the existing carousel primitive with no autoplay, visible navigation, position dots, keyboard interaction, and stable panel height.

- [ ] **Step 8: Rebuild the shared footer**

Add brand, quick links, services, OrtoCloud emphasis, location/contact strip, and legal row. Keep `/design-system` absent and do not use placeholder `#` contact destinations where real project values are available.

- [ ] **Step 9: Make `Index.tsx` a thin composer**

Render exactly:

```tsx
<Header />
<main>
  <HeroSection />
  <ServicesSection />
  <DentistSection />
  <StatsSection />
  <OrtoCloudPromo />
  <ReviewsSection />
</main>
<Footer />
```

- [ ] **Step 10: Run the acceptance test**

Run: `node --experimental-strip-types --test src/lib/routes.test.ts`

Expected: still FAIL only because `/design-system` is missing; homepage heading assertions pass.

---

### Task 4: Build the living design-system page

**Files:**
- Create: `src/components/design-system/DesignSystemPage.tsx`
- Create: `src/components/design-system/TokenSwatch.tsx`
- Create: `src/components/design-system/SpecimenSection.tsx`
- Create: `src/pages/design-system.astro`
- Modify: `src/lib/routes.test.ts` only if the emitted Astro file path requires a trailing-slash normalization already used elsewhere

**Interfaces:**
- Consumes: Task 2 tokens and Task 3 production primitives/content
- Produces: direct-URL `/design-system` with live token/component specimens

- [ ] **Step 1: Create reusable specimen wrappers**

`TokenSwatch` accepts `{ name: string; token: string; value: string }`; `SpecimenSection` accepts `{ index: string; title: string; children: ReactNode }`. Both use production tokens only.

- [ ] **Step 2: Compose `DesignSystemPage`**

Render brand/version header; colors; typography; icons; buttons/inputs/badges/tabs; service cards; compact hero; information strip; statistics; review; OrtoCloud promo; footer; spacing/grid; radii; shadows; and usage guidelines.

- [ ] **Step 3: Add the Astro route**

Render `DesignSystemPage` inside `SiteLayout` with the title `OrtoDent — Dizajn sistem`. Do not add a `SiteLink` to this route anywhere in Header or Footer.

- [ ] **Step 4: Verify GREEN**

Run: `npm test`

Expected: 5 tests pass, including the production build route/content contract and `SITE_BASE` verification.

---

### Task 5: Responsive and visual verification

**Files:**
- Modify: affected files from Tasks 2–4 only when verification exposes a concrete mismatch

**Interfaces:**
- Consumes: completed homepage/design-system implementation
- Produces: verified desktop, tablet, and mobile presentation with no overflow or interaction regressions

- [ ] **Step 1: Run automated checks**

Run:

```bash
npm test
npm run build
git diff --check
```

Expected: all tests pass, build exits 0, and diff check prints no errors.

- [ ] **Step 2: Verify HTTP routes**

With the dev server running, confirm `/`, `/design-system/`, `/kontakt/`, and `/usluge/3d/` return 200; `/v1/` and `/v2/` remain 404.

- [ ] **Step 3: Capture responsive screenshots**

Inspect `/` and `/design-system/` at 390, 768, 1024, and 1440 px. Compare the homepage against Images 1, 2, 6, 7, and 8.

- [ ] **Step 4: Check interaction and accessibility behavior**

Use keyboard-only navigation for the desktop service menu, mobile menu, all CTAs, and review controls. Enable reduced motion and confirm critical content remains visible.

- [ ] **Step 5: Check overflow explicitly**

At every target width, verify `document.documentElement.scrollWidth === document.documentElement.clientWidth`.

- [ ] **Step 6: Run final fresh verification**

Run `npm test && npm run build` after the last visual fix and read the complete output before reporting completion.
