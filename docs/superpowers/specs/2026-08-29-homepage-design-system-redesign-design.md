# OrtoDent Homepage and Design System Redesign

**Date:** 2026-08-29

**Status:** Approved in chat

**Scope:** Homepage and standalone design-system page only

## Goal

Rebuild the OrtoDent homepage in the approved editorial healthcare direction and add a living `/design-system` page that documents the same tokens, components, and layout rules used by the production UI.

The redesign must feel precise, modern, calm, and medically credible. It should match the supplied references closely on desktop while deliberately recomposing content for tablet and mobile.

## Scope

This phase includes:

- the global header used by the homepage and existing site pages;
- the homepage hero, services, dentist, statistics, OrtoCloud promo, reviews, and footer sections;
- new and adapted production imagery required by those sections;
- a direct-URL-only `/design-system` page;
- shared design tokens and reusable UI patterns needed by the homepage;
- responsive, accessible behavior and visual verification.

This phase does not include:

- the full `/ortocloud` page redesign described by the supplied OrtoCloud prompt;
- redesigning service, location, pricing, information, contact, or dentist detail pages;
- changing existing business rules, forms, backend behavior, or route structure;
- adding `/design-system` to the public header or footer navigation.

The supplied OrtoCloud prompt is a visual/content reference for the small homepage promo only. The complete OrtoCloud page will be handled as a later project.

## Approved Direction

Use a token-first modular implementation. Shared tokens and UI primitives are the source of truth; both the homepage and `/design-system` consume them. Do not build the homepage first and recreate its styles separately on the design-system page.

The visual hierarchy is:

1. typography;
2. whitespace;
3. product and healthcare imagery;
4. dividers and small magenta signals;
5. cards only where content genuinely needs grouping.

Avoid generic SaaS patterns, repeated floating cards, heavy gradients, oversized shadows, excessive rounded containers, hover scaling, and decorative magenta text blocks.

## Reference Mapping

| Supplied image | Purpose |
| --- | --- |
| Image 1 | Global header and homepage hero layout reference |
| Image 2 | Services-section layout reference |
| Image 3 | Design-system page content and visual reference |
| Image 4 | Production hero background/clinician image |
| Image 5 | OrtoCloud promo layout and image-generation reference |
| Image 6 | Reviews-section layout reference |
| Image 7 | Dentist-section layout and image-generation reference |
| Image 8 | Full-page fidelity and section-order reference |
| Image 9 | Production 3D/CBCT service image |

Images 4 and 9 will be copied into the repository as production assets. Images 5 and 7 will be used as references for clean high-resolution visual derivatives without baked-in text or duplicated UI copy. Images 1, 2, 3, 6, and 8 remain layout references and are not shipped as page screenshots.

## Visual Tokens

### Color

- Primary magenta: `#E6007E`
- Dark magenta: `#C1006B`
- Light magenta: `#FFE6F2`
- Graphite: `#1A1A1A`
- Gray 700: `#333333`
- Gray 500: `#686868`
- Gray 300: `#E5E5E5`
- Off-white: `#FAFAFA`
- White: `#FFFFFF`

Magenta is reserved for calls to action, eyebrow labels, icons, active controls, focus states, and small punctuation/accent marks. Headings remain primarily graphite or white.

### Typography

Use `Inter Variable` as the primary family with a robust system sans-serif fallback.

- Hero H1: 56–72 px desktop, 42–46 px mobile, weight 500, tracking near `-0.04em`
- H2: 40–48 px desktop, 32–36 px mobile, weight 500
- H3: 22–28 px, weight 550–600
- Body large: 18 px, line-height 1.55–1.65
- Body: 16 px minimum, line-height 1.55–1.65
- Eyebrow: 11–12 px, uppercase, magenta, wide tracking

Do not use heavy `font-bold` or `font-extrabold` for large editorial headings.

### Grid and Spacing

- Container maximum width: 1280 px
- Desktop grid: 12 columns, 24 px gutters
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 px
- Desktop section padding: normally 96–128 px
- Mobile page gutter: 20 px
- Mobile section padding: 56–72 px

### Shape and Elevation

- Radius scale: 4, 8, 12, and 24 px, plus full-circle where semantically needed
- Default content-card radius: 12–16 px
- Borders: one-pixel neutral borders
- Shadows: subtle only; no `shadow-xl` treatment

## Shared Architecture

The implementation should converge on these responsibilities:

- `src/styles/tokens.css`: canonical CSS custom properties for color, typography, spacing, radius, and shadows;
- `src/styles/site.css`: global reset, typography rules, utilities, and shared component styling built on the tokens;
- `src/content/home.ts`: homepage services, statistics, reviews, and concise reusable copy where data separation improves clarity;
- `src/components/site/home/`: focused homepage section components;
- `src/components/site/Header.tsx` and `Footer.tsx`: redesigned global shell components;
- `src/components/design-system/`: design-system specimens and page composition;
- `src/pages/design-system.astro`: direct URL route, omitted from public navigation;
- `src/assets/home/`: supplied and generated homepage imagery.

`src/components/site/pages/Index.tsx` remains a thin page composer. Large sections do not share private layout details with each other. Shared behavior belongs in small primitives or content modules, not in a monolithic homepage component.

## Homepage Structure

### 1. Global Header

Recreate the restrained header from Image 1:

- OrtoDent logo at the left;
- service dropdown, price list, dentist, locations, information/about, and contact navigation;
- OrtoCloud action on the right;
- transparent/light treatment over the hero that remains legible;
- accessible mobile menu with a 44 px minimum toggle target;
- visible keyboard focus and correct menu semantics.

The header remains the global site header. Do not create a homepage-only duplicate.

### 2. Hero

Use Image 4 as the hero visual and Image 1 as the composition reference.

Content hierarchy:

- `Precizna 2D i 3D dijagnostika.`
- `13 centara. Bez zakazivanja.`
- `Rezultati dostupni putem OrtoClouda.`
- primary CTA: `Pronađite najbliži centar`
- secondary CTA: `Pogledajte usluge`
- city signals: Beograd, Novi Sad, Pančevo

The clinician remains the visual anchor on the right. Copy occupies the calm negative space on the left. Decorative diagnostic marks are subtle, non-semantic, and hidden from assistive technology.

On mobile, copy appears first, followed by the image. The primary CTA becomes full width when necessary.

### 3. Services

Follow the asymmetrical editorial composition from Image 2:

- one large 3D/CBCT feature on the left;
- two stacked horizontal service panels on the right;
- production 3D image from Image 9;
- existing panoramic image for 2D;
- existing lateral cephalogram for cephalometric analysis;
- restrained icon badge, eyebrow, heading, short factual description, and text action;
- a quiet low-dose/quality assurance note below the grid.

Images remain separate from HTML copy. Service panels use a thin border and no heavy elevation.

### 4. Dentist Section

Use Image 7 as the composition reference and generate a clean right-side diagnostic workstation visual from it.

The section is the homepage's primary dark emphasis:

- graphite background;
- left-side eyebrow and headline `Dijagnostika na koju možete da se oslonite.`;
- concise supporting copy;
- three numbered benefits: online results, precise diagnostics, simple collaboration;
- primary collaboration CTA and secondary OrtoCloud login action;
- clinician/workstation image on the right;
- very restrained magenta technical lines and labels.

Text and controls remain HTML. The generated image contains no baked-in headings or duplicated CTA labels.

On mobile, content comes first and the image follows as a wide visual panel.

### 5. Statistics Strip

Show:

- 13 centers;
- 500K+ images;
- 17 years of experience.

Use a wide, typography-led strip with subtle dividers. Do not render the values as floating cards. Values are visible without JavaScript; optional count-up motion must not hide or delay meaningful content.

### 6. OrtoCloud Promo

Follow Image 5's split editorial composition:

- clean phone/hand visual on the left;
- heading `Vaši snimci, uvek dostupni!` on the right;
- short access explanation;
- four concise benefits;
- OrtoCloud login/more action using the current real route behavior.

Generate a clean high-resolution image from the supplied reference without embedded copy. Do not invent application claims or behavior.

On mobile, the visual comes first, followed by copy and a full-width action where appropriate.

### 7. Reviews

Follow Image 6:

- editorial summary column with eyebrow, heading, 4.9/5 score, stars, Google context, and three trust signals;
- one featured review plus two secondary reviews on desktop;
- reuse existing real review copy from the project;
- accessible carousel navigation with visible previous/next buttons and position indicators;
- keyboard support and stable panel height to avoid layout jumping.

Do not use autoplay. Mobile shows one review at a time after the summary.

### 8. Footer

Recreate the dark footer language from Image 3/Image 8:

- brand statement and social/contact actions;
- quick links and services;
- OrtoCloud emphasis block;
- location/contact strip;
- legal links and copyright line;
- subtle technical line decoration only.

The footer remains a shared global component.

## Design-System Page

Route: `/design-system`

The page is public by direct URL but is absent from the global header and footer. It is a living implementation reference rather than a static screenshot.

The page includes:

1. brand header and version/date marker;
2. color swatches using production CSS variables;
3. typography scale and character specimen;
4. iconography;
5. buttons, links, inputs, badges, dividers, and tabs;
6. service-card examples;
7. compact hero-layout specimen;
8. information strip and statistics specimens;
9. testimonial specimen;
10. OrtoCloud promo specimen;
11. footer specimen;
12. spacing/grid, radius, and shadow scales;
13. concise usage guidelines.

Specimens must import or compose the same production primitives where practical. They must not copy a second set of styles. The page is responsive and remains usable on mobile, even though its visual inspiration is the tall desktop design sheet in Image 3.

## Responsive Behavior

### Desktop: 1024 px and above

- Use approved editorial split layouts and asymmetric grids.
- Keep a maximum 1280 px content container.
- Preserve generous whitespace and image scale.

### Tablet: 768–1023 px

- Reduce grid columns rather than compressing desktop layouts.
- Allow services and reviews to move to simpler two-column compositions.
- Preserve readable type and touch targets.

### Mobile: below 768 px

- Recompose each section; do not scale the desktop screenshot down.
- Use 20 px page gutters and 56–72 px section spacing.
- Keep body text at least 16 px and touch targets at least 44 px.
- Stack copy before imagery except for the OrtoCloud promo, where the approved visual-first order applies.
- Prevent horizontal scrolling at 390 px and smaller widths.

## Motion and Accessibility

- Motion is limited to opacity, small translate, and restrained image reveals.
- Critical content renders visible even when animation JavaScript fails.
- Respect `prefers-reduced-motion`.
- Use semantic section headings and landmarks.
- Provide meaningful alternative text for informative imagery.
- Mark decorative diagnostic overlays as hidden.
- Preserve visible focus states and keyboard-accessible menus/carousels.
- Maintain sufficient contrast for magenta, gray, and white combinations.

## Asset Production

Use the supplied source images directly where approved. For the dentist and OrtoCloud visuals, create new bitmap assets from the supplied references with these constraints:

- preserve the intended photographic subject and healthcare context;
- remove embedded section copy, CTA labels, and decorative UI overlays;
- do not create fake factual application data;
- retain natural light, restrained color, and editorial realism;
- deliver enough resolution for full-width desktop use;
- optimize final assets for web delivery without visible degradation.

## Testing and Acceptance

Implementation is complete only when:

- `/` and `/design-system` build successfully;
- existing canonical routes remain functional;
- the homepage section order matches this specification;
- Images 4 and 9 are used in their approved roles;
- the dentist and OrtoCloud visuals contain no baked-in duplicate copy;
- the design-system page uses the production tokens and components;
- `/design-system` is absent from public navigation;
- header, menu, links, carousel controls, and CTAs are keyboard accessible;
- reduced-motion behavior is respected;
- no horizontal overflow exists at 390, 768, 1024, and 1440 px widths;
- desktop fidelity is visually compared against Images 1, 2, 6, 7, and 8;
- the production build and automated route tests pass;
- the homepage is manually checked at 390, 768, 1024, and 1440 px;
- existing non-homepage business logic and routes are unchanged.

## Future Work

The complete `/ortocloud` redesign is a separate future phase. Its supplied prompt remains the source material for that later design effort and must not expand the scope of this implementation.
