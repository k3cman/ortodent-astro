# English localization design

## Intent

Add a complete English version of the public OrtoDent website while keeping Serbian as the canonical, default language. Visitors must be able to switch language from the header on desktop and mobile and stay on the equivalent page whenever one exists.

## Goals

- Keep every existing Serbian route unchanged and make Serbian the default at `/`.
- Publish a complete English version under `/en/...`, including service, location, OrtoCloud, contact, pricing, information, privacy, terms, and English 404 content.
- Add an accessible `SR / EN` dropdown to the desktop header and mobile navigation.
- Switching language opens the equivalent route, not merely the language homepage.
- Translate visible copy, metadata, navigation, footer, accessibility labels, interactive status/error messages, and location UI.
- Preserve factual data such as addresses, phone numbers, working hours, prices, brand names, medical protocol names, and user reviews. Existing reviews remain in their original language.

## Non-goals

- No automatic browser-language redirect: first visits always remain Serbian.
- No machine-translation service or runtime translation dependency.
- No localization of OrtoCloud's external application.
- No translation of internal design-system pages or source asset filenames.
- No change to visual design beyond fitting the language selector and accommodating English copy.

## Route design

Serbian keeps its current URLs. English uses an `/en` prefix and English slugs:

- `/` ↔ `/en/`
- `/cenovnik` ↔ `/en/pricing`
- `/informacije` ↔ `/en/information`
- `/lokacije` ↔ `/en/locations`
- `/lokacije/:city` ↔ `/en/locations/:city`
- `/lokacije/:city/:location` ↔ `/en/locations/:city/:location`
- `/za-doktore` ↔ `/en/for-dentists`
- `/kontakt` ↔ `/en/contact`
- `/ortocloud` ↔ `/en/ortocloud`
- `/usluge/2d` ↔ `/en/services/2d`
- `/usluge/3d` ↔ `/en/services/3d`
- `/usluge/kefalometrija` ↔ `/en/services/cephalometry`
- `/politika-privatnosti` ↔ `/en/privacy-policy`
- `/uslovi-koriscenja` ↔ `/en/terms-of-use`

City and centre slugs remain stable because they are proper names and existing identifiers. A central route map will be the single source of truth for navigation and language switching. GitHub Pages serves one static fallback document, so the shared 404 page will select Serbian or English copy from the `/en` pathname; its no-JavaScript fallback remains Serbian.

## Content and component architecture

- Introduce a small typed locale layer with `sr` and `en`, route helpers, and shared dictionaries.
- Pass `locale` from each Astro route into the existing page components. Shared layouts set the document `lang`, localized metadata, and alternate-language links.
- Move reusable navigation, footer, service, location, action, status, and accessibility strings into typed dictionaries. Page-specific long-form copy may live next to its page component in paired Serbian/English objects to keep files readable.
- English copy will be a faithful developer-authored translation of the approved Serbian source, including medical and legal pages, without expanding or changing claims. It is ordinary website localization, not a certified legal translation; any later professional wording edits can be applied in the English dictionaries without changing the routing architecture.
- Reuse the existing components and assets. Do not fork separate English component trees.
- Keep location records shared. Add localized display fields only where text is descriptive; addresses and operational data remain one source of truth.
- Keep reviews exactly as submitted and do not translate them, since they are customer quotations.

## Language selector behavior

- Desktop header: compact dropdown showing the active language and the alternative.
- Mobile navigation: the same language choice appears as a clear row inside the open menu.
- The active language is exposed with accessible state; labels and screen-reader text are localized.
- Switching uses normal links, so it works without JavaScript and survives refresh, bookmarking, and sharing.
- No cookie or local-storage preference overrides the requested URL. Opening the Serbian URL always shows Serbian, and opening an English URL always shows English.

## SEO and document behavior

- Set `<html lang="sr">` or `<html lang="en">` per route.
- Add reciprocal `hreflang="sr"`, `hreflang="en"`, and `x-default` links where matching pages exist.
- Localize page titles and descriptions.
- Preserve the current static Astro output and generate all routes at build time.

## Responsive and quality constraints

- The selector must not crowd the current desktop navigation or break the mobile header.
- English text may wrap naturally without clipping, overflow, or fixed-height truncation.
- Existing current-route highlighting must work for both route families.
- Route mapping, locale detection, and counterpart generation receive focused unit coverage. A production build verifies that every static English route is generated.

## Approaches considered

1. **Static localized routes with shared components and dictionaries — selected.** Best fit for the current Astro static site, supports SEO and shareable links, and avoids duplicating UI code.
2. **Same URL with client-side language state.** Smaller initial change, but refresh/share behavior, no-JavaScript support, metadata, and SEO are substantially worse.
3. **Duplicate every page and component in English.** Straightforward at first, but creates two diverging sites and doubles maintenance risk.

The selected approach adds a small localization layer while preserving the existing static architecture and visual design.
