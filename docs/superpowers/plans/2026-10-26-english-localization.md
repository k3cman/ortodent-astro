# English Localization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a complete static English version of the OrtoDent site under `/en/...` with Serbian as the default and an accessible language dropdown that preserves the current page.

**Architecture:** Add a typed locale/route layer and a React locale context, then reuse the existing page components with localized content objects. Thin Astro wrappers generate Serbian and English static routes; shared layouts emit localized metadata, document language, and reciprocal alternate links.

**Tech Stack:** Astro 6 static output, React 19, TypeScript, Node test runner, existing CSS.

**Spec:** `docs/superpowers/specs/2026-10-25-english-localization-design.md`

## Global Constraints

- Serbian remains canonical and default on every existing route; never redirect by browser language.
- English uses the exact route pairs defined in the spec, including `/en/services/cephalometry`.
- Existing reviews remain verbatim in their original languages.
- Addresses, phone numbers, working hours, prices, brand names, and protocol names remain shared factual data.
- No runtime translation service or new localization dependency.
- Preserve static Astro output and GitHub Pages subpath support.
- Do not commit or push until the user explicitly requests it.

## Review Focus

- A nested location detail URL switches to the exact counterpart in both directions without losing city or location slugs.
- `SITE_BASE` subpath builds do not duplicate or drop the deployment base in localized links.
- English navigation active states work for translated static routes and dynamic service/location routes.
- The language control remains usable in the compact desktop header and inside the mobile menu without overflow.
- Every public English route builds with English metadata and no Serbian UI strings except proper names, source-language reviews, and medical protocol names.

---

### Task 1: Locale and route foundation

**Files:**
- Create: `src/lib/i18n.ts`
- Create: `src/lib/i18n.test.ts`
- Modify: `src/lib/paths.ts`

**Interfaces:**
- Produces: `type Locale = "sr" | "en"`, `DEFAULT_LOCALE`, `isLocale(value)`, `localeFromPath(path)`, `localizePath(path, locale)`, `alternateLocalePath(path)`, and locale-aware `sitePath(path, locale?)`.
- Route mapping covers every static route plus dynamic service, city, region, and location patterns from the spec.

- [ ] **Step 1: Write failing route tests** for root/static pages, all three service routes, nested city/location routes, unknown paths, trailing slashes, and `SITE_BASE`-safe link composition.
- [ ] **Step 2: Run `node --experimental-strip-types --test src/lib/i18n.test.ts` and confirm missing-interface failures.**
- [ ] **Step 3: Implement the typed route table and deterministic dynamic-route mapping in `src/lib/i18n.ts`; extend `sitePath` without changing existing Serbian callers.**
- [ ] **Step 4: Run the focused test and confirm all locale/route cases pass.**

### Task 2: Locale context, metadata, header, and footer

**Files:**
- Create: `src/components/site/i18n/LocaleContext.tsx`
- Create: `src/content/i18n/common.ts`
- Modify: `src/components/site/SiteProviders.tsx`
- Modify: `src/components/site/withSiteProviders.tsx`
- Modify: `src/components/site/SiteLink.tsx`
- Modify: `src/components/site/Header.tsx`
- Modify: `src/components/site/Footer.tsx`
- Modify: `src/layouts/Base.astro`
- Modify: `src/layouts/SiteLayout.astro`
- Modify: `src/layouts/LegalLayout.astro`
- Modify: `src/lib/header-navigation.test.ts`
- Modify: `src/lib/footer.test.ts`

**Interfaces:**
- Consumes: Task 1 `Locale` and path helpers.
- Produces: `LocaleProvider`, `useLocale()`, generic `withSiteProviders(Page)` prop forwarding, `locale?: Locale` props on layouts/header/footer, and localized `SiteLink` behavior.

- [ ] **Step 1: Add failing tests** asserting translated header/footer labels, `SR / EN` counterpart links, active state on English routes, localized accessibility labels, and mobile language access.
- [ ] **Step 2: Run focused header/footer tests and confirm failures.**
- [ ] **Step 3: Implement locale context and prop forwarding, keeping `sr` as the safe default outside a provider.**
- [ ] **Step 4: Localize Header/Footer from `common.ts`; add the accessible desktop dropdown and mobile language row using normal anchor links.**
- [ ] **Step 5: Set `<html lang>`, localized default metadata, and reciprocal `sr`, `en`, and `x-default` alternate links in shared layouts.**
- [ ] **Step 6: Run focused tests and confirm they pass.**

### Task 3: English static route generation

**Files:**
- Create: `src/pages/en/index.astro`
- Create: `src/pages/en/pricing.astro`
- Create: `src/pages/en/information.astro`
- Create: `src/pages/en/contact.astro`
- Create: `src/pages/en/for-dentists.astro`
- Create: `src/pages/en/ortocloud.astro`
- Create: `src/pages/en/services/[service].astro`
- Create: `src/pages/en/locations/index.astro`
- Create: `src/pages/en/locations/[city]/index.astro`
- Create: `src/pages/en/locations/[city]/[location].astro`
- Create: `src/pages/en/privacy-policy.astro`
- Create: `src/pages/en/terms-of-use.astro`
- Modify: all corresponding Serbian Astro pages to pass `locale="sr"` and localized metadata.
- Modify: `src/pages/404.astro`
- Modify: `src/lib/routes.test.ts`

**Interfaces:**
- Consumes: Task 1 locale paths and Task 2 locale-enabled layouts/page props.
- Produces: every static route pair from the spec.

- [ ] **Step 1: Add failing route-source tests** that enumerate every English wrapper, dynamic `getStaticPaths` value, counterpart metadata input, and bilingual 404 markers.
- [ ] **Step 2: Run route tests and confirm missing English pages fail.**
- [ ] **Step 3: Add thin English Astro wrappers that render the same page components with `locale="en"`; map `cephalometry` to the existing kefalometrija component.**
- [ ] **Step 4: Update Serbian wrappers and implement the shared GitHub Pages 404, selecting English copy for `/en` paths in the browser and defaulting to Serbian without JavaScript.**
- [ ] **Step 5: Run route tests and confirm all generated-path expectations pass.**

### Task 4: Homepage, pricing, information, contact, and professional pages

**Files:**
- Create: `src/content/i18n/home.ts`
- Create: `src/content/i18n/pricing.ts`
- Create: `src/content/i18n/information.ts`
- Create: `src/content/i18n/contact.ts`
- Create: `src/content/i18n/forDentists.ts`
- Modify: `src/components/site/pages/Index.tsx`
- Modify: `src/components/site/home/*.tsx`
- Modify: `src/components/site/pages/Cenovnik.tsx`
- Modify: `src/components/site/pages/cenovnik/CenovnikPricing.tsx`
- Modify: `src/components/site/pages/Informacije.tsx`
- Modify: `src/components/site/pages/Kontakt.tsx`
- Modify: `src/components/site/pages/ZaDoktore.tsx`
- Modify: `src/components/OrtoCloudPlatforms.tsx`
- Create: `src/lib/localized-content.test.ts`

**Interfaces:**
- Consumes: Task 2 locale context and localized `SiteLink`.
- Produces: paired Serbian/English typed content for five page families; source-language reviews are shared from `src/content/home.ts`.

- [ ] **Step 1: Add failing content-completeness tests** asserting both locales contain matching required keys, English CTAs/ARIA labels, preserved numeric facts, and unchanged review strings.
- [ ] **Step 2: Run the focused content test and confirm missing English content fails.**
- [ ] **Step 3: Extract existing Serbian copy without wording changes and add faithful English copy for the five page families.**
- [ ] **Step 4: Convert each component to consume locale content while preserving current markup, forms, animations, and links.**
- [ ] **Step 5: Run the focused content tests and existing page-specific tests.**

### Task 5: Services and OrtoCloud localization

**Files:**
- Create: `src/content/i18n/services.ts`
- Create: `src/content/i18n/ortocloud.ts`
- Modify: `src/components/site/pages/Usluge2DPage.tsx`
- Modify: `src/components/site/pages/Usluge3DPage.tsx`
- Modify: `src/components/site/pages/UslugeKefaPage.tsx`
- Modify: `src/components/site/pages/usluge/Usluge2D.tsx`
- Modify: `src/components/site/pages/usluge/Usluge3D.tsx`
- Modify: `src/components/site/pages/usluge/UslugeKefa.tsx`
- Modify: `src/components/site/ServiceHero.tsx`
- Modify: `src/components/site/UslugeTabs.tsx`
- Modify: `src/components/ortocloud/OrtoCloudPage.tsx`
- Modify: `src/components/ortocloud/sections/*.tsx`
- Modify: related `src/lib/service-*.test.ts`, `src/lib/kefalometrija.test.ts`, `src/lib/ortocloud-*.test.ts`

**Interfaces:**
- Consumes: Task 2 locale context and Task 3 service route aliases.
- Produces: complete English 2D, 3D, cephalometry, and OrtoCloud pages with localized accessibility and outbound CTA labels.

- [ ] **Step 1: Extend existing service/OrtoCloud tests** with English hero, section, CTA, image-alt, and accessibility-label assertions while preserving factual durations and links.
- [ ] **Step 2: Run focused tests and confirm English assertions fail.**
- [ ] **Step 3: Add paired service and OrtoCloud content objects; keep protocol names, brands, numbers, and external URLs unchanged.**
- [ ] **Step 4: Convert components to locale content without layout forks or translated asset duplication.**
- [ ] **Step 5: Run all service and OrtoCloud focused tests.**

### Task 6: Location system localization

**Files:**
- Create: `src/content/i18n/locations.ts`
- Modify: `src/lib/locations.ts`
- Modify: `src/components/site/pages/Lokacije.tsx`
- Modify: `src/components/site/pages/CityLocations.tsx`
- Modify: `src/components/site/pages/RegionLocations.tsx`
- Modify: `src/components/site/pages/LocationDetail.tsx`
- Modify: `src/components/site/locations/*.tsx`
- Modify: `src/lib/locations.test.ts`
- Modify: `src/lib/nearest-location.test.ts`

**Interfaces:**
- Consumes: Task 2 locale context and Task 3 English location paths.
- Produces: localized location UI/status/error messages while retaining one shared location dataset and stable city/location slugs.

- [ ] **Step 1: Add failing tests** for English city summaries, opening-state labels, weekdays, nearest-centre errors, map popup links, nested counterpart routes, and unchanged addresses/phones/hours.
- [ ] **Step 2: Run location-focused tests and confirm failures.**
- [ ] **Step 3: Add localized descriptive fields/helpers while leaving operational location facts in `src/lib/locations.ts`.**
- [ ] **Step 4: Convert all location overview/detail/interactive components to locale content and locale-aware internal links.**
- [ ] **Step 5: Run the complete location-focused test set.**

### Task 7: Legal copy, responsive polish, and end-to-end verification

**Files:**
- Create: `src/content/i18n/legal.ts`
- Create: `src/components/site/pages/LegalPage.astro`
- Modify: Serbian and English privacy/terms Astro pages.
- Modify: `src/styles/site.css`
- Modify: `src/styles/mobile-refinements.css`
- Modify: `src/lib/routes.test.ts`

**Interfaces:**
- Consumes: all earlier locale/content/routes.
- Produces: faithful bilingual legal pages and final responsive language-selector styles.

- [ ] **Step 1: Add failing legal-content parity assertions** for section count, contact email, internal legal/location links, update date, and English titles/descriptions.
- [ ] **Step 2: Run legal/route tests and confirm failures.**
- [ ] **Step 3: Move Serbian legal copy unchanged into typed content, add faithful English translations, and render both through `LegalPage.astro`.**
- [ ] **Step 4: Add responsive styles for the desktop dropdown and mobile row; verify focus, open/close, keyboard escape, wrapping, and active state.**
- [ ] **Step 5: Run `npm test` and require zero failures.**
- [ ] **Step 6: Run `npm run build` and confirm every Serbian and English static route is generated.**
- [ ] **Step 7: Browser-check representative desktop/mobile pairs: home, long information page, 2D service, OrtoCloud, pricing, city page, location detail, contact, privacy, and 404. Confirm counterpart switching and absence of overflow.**
- [ ] **Step 8: Run `git diff --check` and inspect `git status --short`; do not commit or push.**
