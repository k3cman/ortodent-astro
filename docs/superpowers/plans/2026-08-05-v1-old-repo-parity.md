# Astro v1 / ortodent-old Parity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Make every Astro /v1 route visually and functionally equivalent to ortodent-old commit 2a822ec6697518e9182e70de8b6e231e1cc4d597 while preserving Astro routing and /v2.

**Architecture:** Keep Astro's static [version] routes and React client:load page islands. Restore the old Vite application's React markup, content, styling, responsive behavior, and animations inside src/components/v1, with only narrow adapters for version-aware links, Astro image imports, and deployment base paths.

**Tech Stack:** Astro 6, React 19, TypeScript, Tailwind CSS 3, Radix/shadcn UI, Framer Motion, static output.

## Global Constraints

- The old source of truth is /Users/k3cman/CODE/ortodent/ortodent-old at commit 2a822ec6697518e9182e70de8b6e231e1cc4d597.
- Preserve Astro /v1 and /v2 routes; do not add React Router to the Astro runtime.
- Do not intentionally change old-app copy, component order, typography, colors, spacing, imagery, responsive layout, or animations.
- Keep forms as local toast-only interactions and keep the simulated location map.
- Do not change /v2.
- Do not upgrade dependencies unless the committed old behavior cannot compile with the versions already installed in Astro.
- Internal links must stay within the active version and respect SITE_BASE.
- The old repository must remain unchanged and clean.

---

### Task 1: Restore the old design-system baseline and Hero

**Files:**
- Modify: src/styles/v1.css
- Modify: src/components/v1/ui/button.tsx
- Modify: src/components/v1/Hero.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/index.css
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/components/ui/button.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/components/Hero.tsx

**Interfaces:**
- Consumes: Tailwind tokens declared as CSS custom properties in src/styles/v1.css.
- Produces: the old ButtonProps API with variant, size, and asChild plus the old Hero adapted only for Astro links and image metadata. Restoring both together removes the Astro-only roundness prop without leaving an incompatible caller between commits.

- [ ] **Step 1: Confirm both worktrees start from the expected state**

Run:

~~~bash
git -C /Users/k3cman/CODE/ortodent/ortodent-old status --short --branch
git -C /Users/k3cman/CODE/ortodent/ortodent-old rev-parse HEAD
git -C /Users/k3cman/CODE/ortodent/astro status --short --branch
~~~

Expected: old is clean on main at 2a822ec6697518e9182e70de8b6e231e1cc4d597; Astro contains no uncommitted application changes.

- [ ] **Step 2: Restore the old v1 CSS source**

Replace src/styles/v1.css with old src/index.css, retaining one Astro compatibility adjustment: the Google Fonts @import stays before the three @tailwind directives so the generated stylesheet is valid CSS. Do not change token values, component classes, utilities, gradients, or shadows.

- [ ] **Step 3: Restore the old Button API and variants**

Replace src/components/v1/ui/button.tsx with the committed old implementation. The resulting variant definition must not contain roundness; each old variant keeps its own rounded-full class.

- [ ] **Step 4: Restore Hero with only Astro adapters**

Replace Astro Hero with the committed old Hero. Replace React Router Link with VersionLink and render the imported image through:

~~~tsx
src={typeof heroImage === "string" ? heroImage : heroImage.src}
~~~

The result contains the old "Više od snimka. Vizija osmeha." heading, location strip, stripe geometry, and "Pronađi Lokacije" button.

- [ ] **Step 5: Verify the baseline**

Run:

~~~bash
git diff --check
npm run build
~~~

Expected: no whitespace errors and Astro builds successfully.

- [ ] **Step 6: Commit the baseline**

~~~bash
git add src/styles/v1.css src/components/v1/ui/button.tsx src/components/v1/Hero.tsx
git commit -m "refactor(v1): restore old design system and hero"
~~~

---

### Task 2: Restore shared header and footer with Astro link adapters

**Files:**
- Modify: src/components/v1/Header.tsx
- Modify: src/components/v1/Footer.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/components/Header.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/components/Footer.tsx
- Reuse: src/components/v1/VersionContext.tsx
- Reuse: src/lib/paths.ts

**Interfaces:**
- Consumes: VersionLink({ to, ...anchorProps }), useVersion(): SiteVersion, and vPath(version, path): string.
- Produces: version-aware Header and Footer with old markup, labels, ordering, classes, and motion settings.

- [ ] **Step 1: Rebase Header on the committed old component**

Copy the old Header markup. Replace React Router Link with VersionLink, use vPath(version, "/") + "#ortocloud" for the home hash, and use this Astro image adapter:

~~~tsx
src={typeof logo === "string" ? logo : logo.src}
~~~

The mobile Usluge link targets /usluge/2d because Astro has no generated /v1/usluge parent page. Do not change any visible label or CSS class.

- [ ] **Step 2: Rebase Footer on the committed old component**

Keep the old local arrays so the exact order and labels remain:

~~~tsx
const quickLinks = [
  { label: "Lokacije", href: "/lokacije" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Cenovnik", href: "/cenovnik" },
  { label: "Za stomatologe", href: "/za-doktore" },
  { label: "Informacije", href: "/informacije" },
];

const services = [
  { label: "2D Snimanje", href: "/usluge/2d" },
  { label: "3D CBCT", href: "/usluge/3d" },
  { label: "Kefalometrija", href: "/usluge/kefalometrija" },
];
~~~

Render internal routes with VersionLink. Render OrtoCloud separately with vPath(version, "/") + "#ortocloud". Keep the logo adapter from Step 1.

- [ ] **Step 3: Inspect adapter-only differences**

Run:

~~~bash
git diff --no-index -- /Users/k3cman/CODE/ortodent/ortodent-old/src/components/Header.tsx src/components/v1/Header.tsx || true
git diff --no-index -- /Users/k3cman/CODE/ortodent/ortodent-old/src/components/Footer.tsx src/components/v1/Footer.tsx || true
~~~

Expected differences: React Router imports/elements, version-aware hash links, Astro logo .src compatibility, and the mobile service destination. Text, classes, element order, and Framer Motion props otherwise match old.

- [ ] **Step 4: Build and commit**

~~~bash
npm run build
git add src/components/v1/Header.tsx src/components/v1/Footer.tsx
git commit -m "refactor(v1): restore old shared navigation"
~~~

---

### Task 3: Restore the old home page composition

**Files:**
- Modify: src/components/v1/ServiceCards.tsx
- Modify: src/components/v1/pages/Index.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/components/ServiceCards.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/pages/Index.tsx

**Interfaces:**
- Consumes: restored Hero, VersionLink, shared Header/Footer, and existing home sections.
- Produces: old hierarchy Hero -> TrustStats -> ServiceCards -> Timeline -> OrtoCloudSection -> TestimonialsSection.

- [ ] **Step 1: Restore ServiceCards spacing**

Use the old ServiceCards component with VersionLink replacing React Router Link. Restore the section class:

~~~tsx
className="pb-20 bg-background relative overflow-hidden"
~~~

- [ ] **Step 2: Restore home section order**

Set src/components/v1/pages/Index.tsx to:

~~~tsx
<Hero />
<TrustStats />
<ServiceCards />
<Timeline />
<OrtoCloudSection />
<TestimonialsSection />
~~~

Keep export default withVersion(Index).

- [ ] **Step 3: Verify home parity**

Run:

~~~bash
git diff --check
npm run build
~~~

Compare old / with Astro /v1/ at widths 1440, 768, and 390 pixels. Expected: same section order, copy, imagery, responsive stacking, animation triggers, and button shape.

- [ ] **Step 4: Commit the home page**

~~~bash
git add src/components/v1/ServiceCards.tsx src/components/v1/pages/Index.tsx
git commit -m "refactor(v1): restore old home page"
~~~

---

### Task 4: Restore service-page parity and remove uncommitted assets

**Files:**
- Modify: src/components/v1/pages/usluge/Usluge3D.tsx
- Verify: src/components/v1/pages/usluge/Usluge2D.tsx
- Verify: src/components/v1/pages/usluge/UslugeKefa.tsx
- Verify: src/components/v1/UslugeTabs.tsx
- Verify: src/components/v1/pages/Usluge2DPage.tsx
- Verify: src/components/v1/pages/Usluge3DPage.tsx
- Verify: src/components/v1/pages/UslugeKefaPage.tsx
- Delete: public/images/image 34.png
- Delete: public/images/image 36.png
- Delete: public/images/image 37.png
- Delete: public/images/image 38.png
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/pages/Usluge.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/pages/usluge/

**Interfaces:**
- Consumes: UslugeTabs({ currentTab }: { currentTab: UslugeTab }) and the three Astro wrappers.
- Produces: old content on the three /v1/usluge routes without React Router.

- [ ] **Step 1: Restore committed 3D service content**

Replace src/components/v1/pages/usluge/Usluge3D.tsx with the committed old file. The old version ends after the OrtoCloud/USB note and does not reference the four Astro-only images.

- [ ] **Step 2: Remove exactly four Astro-only images**

Delete:

~~~text
public/images/image 34.png
public/images/image 36.png
public/images/image 37.png
public/images/image 38.png
~~~

Do not remove any other public asset.

- [ ] **Step 3: Verify 2D, kefalometrija, tabs, and wrappers**

Usluge2D may differ only because it imports image constants from @/content/usluge/images. UslugeKefa must be content-equivalent. UslugeTabs and the wrappers replace the old nested React Router layout while preserving tab markup and the Header/main/Footer shell.

Run:

~~~bash
git diff --no-index -- /Users/k3cman/CODE/ortodent/ortodent-old/src/pages/usluge/Usluge2D.tsx src/components/v1/pages/usluge/Usluge2D.tsx || true
git diff --no-index -- /Users/k3cman/CODE/ortodent/ortodent-old/src/pages/usluge/UslugeKefa.tsx src/components/v1/pages/usluge/UslugeKefa.tsx || true
~~~

- [ ] **Step 4: Build and check service outputs**

~~~bash
npm run build
rg -n 'image (34|36|37|38)[.]png' dist && exit 1 || true
~~~

Expected: build succeeds, generated output does not reference the deleted files, and tabs stay inside /v1.

- [ ] **Step 5: Commit service parity**

~~~bash
git add src/components/v1/pages/usluge/Usluge3D.tsx public/images
git commit -m "refactor(v1): restore old service content"
~~~

---

### Task 5: Audit remaining pages and make public assets base-safe

**Files:**
- Modify: src/lib/paths.ts
- Modify: src/content/usluge/images.ts
- Modify: src/layouts/Base.astro
- Modify: src/components/v1/pages/Informacije.tsx
- Modify: src/components/v1/pages/ZaDoktore.tsx
- Modify: src/components/v1/pages/usluge/UslugeKefa.tsx
- Verify: src/components/v1/pages/Cenovnik.tsx
- Verify: src/components/v1/pages/Kontakt.tsx
- Verify: src/components/v1/pages/Lokacije.tsx
- Verify: src/components/v1/pages/cenovnik/CenovnikPricing.tsx
- Reference: /Users/k3cman/CODE/ortodent/ortodent-old/src/pages/

**Interfaces:**
- Consumes: import.meta.env.BASE_URL.
- Produces: assetPath(path: string): string, which returns a public URL under the Astro base without adding v1 or v2.

- [ ] **Step 1: Add a base-safe helper**

Add to src/lib/paths.ts:

~~~ts
export function assetPath(path: string): string {
  const stripped = path.startsWith("/") ? path.slice(1) : path;
  const base = siteBase();
  return base + "/" + stripped;
}
~~~

Keep siteBase private and vPath unchanged.

- [ ] **Step 2: Route shared 2D images through assetPath**

Import assetPath in src/content/usluge/images.ts and wrap every public path. Preserve encodeURI for filenames where it already exists:

~~~ts
export const RETROALVEOLARNI_SNIMAK_SRC = encodeURI(
  assetPath("/images/Retroalveolarni snimak.jpg"),
);
~~~

Do not change filenames.

- [ ] **Step 3: Make remaining v1 public image URLs base-safe**

Import assetPath and replace literals in:

- Informacije.tsx: informacije.jpg
- ZaDoktore.tsx: image 12 (1).png, both Tomografska images, and both KefAnalize images
- UslugeKefa.tsx: both KefAnalize images

Preserve encodeURI for names containing spaces. Example:

~~~tsx
src={encodeURI(assetPath("/images/image 12 (1).png"))}
~~~

- [ ] **Step 4: Make favicon base-safe**

In Base.astro compute:

~~~ts
const favicon = import.meta.env.BASE_URL + "favicon.svg";
~~~

Render href={favicon}. Keep Astro's current metadata; do not copy the old generated Lovable metadata.

- [ ] **Step 5: Audit remaining page diffs**

For Cenovnik, Informacije, Kontakt, Lokacije, and ZaDoktore, accept only withVersion wrappers, VersionLink replacing React Router Link, identical shared content imports, assetPath around unchanged filenames, and formatting. Restore any other content, class, order, or behavior difference from old.

- [ ] **Step 6: Verify root and shared-hosting builds**

~~~bash
npm run build
SITE_BASE=/orto-cloud-vision/ npm run build
rg -n 'src="/images|href="/favicon' dist && exit 1 || true
~~~

Expected: both builds succeed and generated output has no root-absolute v1 public image or favicon URLs.

- [ ] **Step 7: Commit the audit**

~~~bash
git add src/lib/paths.ts src/content/usluge/images.ts src/layouts/Base.astro src/components/v1/pages
git commit -m "fix(v1): preserve parity under deployment base"
~~~

---

### Task 6: Complete route-by-route parity verification

**Files:**
- Verify: all files changed in Tasks 1-5
- Verify unchanged: src/components/v2/, src/styles/v2.css, src/layouts/V2Layout.astro

**Interfaces:**
- Consumes: production builds and local dev servers for both repositories.
- Produces: a clean Astro v1 migration verified against old at desktop and mobile sizes.

- [ ] **Step 1: Build both applications**

~~~bash
npm --prefix /Users/k3cman/CODE/ortodent/ortodent-old run build
npm --prefix /Users/k3cman/CODE/ortodent/astro run build
~~~

Expected: both exit with status 0.

- [ ] **Step 2: Start both applications separately**

Old:

~~~bash
npm --prefix /Users/k3cman/CODE/ortodent/ortodent-old run dev -- --host 127.0.0.1 --port 4173
~~~

Astro:

~~~bash
npm --prefix /Users/k3cman/CODE/ortodent/astro run dev -- --host 127.0.0.1 --port 4321
~~~

- [ ] **Step 3: Compare every mapped route**

Check each pair at 1440x1000 and 390x844:

~~~text
old /                         Astro /v1/
old /cenovnik                 Astro /v1/cenovnik/
old /informacije              Astro /v1/informacije/
old /kontakt                  Astro /v1/kontakt/
old /lokacije                 Astro /v1/lokacije/
old /za-doktore               Astro /v1/za-doktore/
old /usluge/2d                Astro /v1/usluge/2d/
old /usluge/3d                Astro /v1/usluge/3d/
old /usluge/kefalometrija     Astro /v1/usluge/kefalometrija/
~~~

Verify component order, copy, images, typography, colors, spacing, breakpoints, and initial/scroll animations.

- [ ] **Step 4: Exercise interactive behavior**

Verify the desktop service dropdown, internal links, mobile menu, service tabs, information accordions, contact and doctor toasts, location selection, mobile list/map toggle, and OrtoCloud home hashes.

Expected: behavior matches old except Astro uses document navigation instead of React Router client navigation.

- [ ] **Step 5: Verify v2 isolation and Git state**

~~~bash
git diff b99ddca -- src/components/v2 src/styles/v2.css src/layouts/V2Layout.astro
git -C /Users/k3cman/CODE/ortodent/ortodent-old status --short --branch
git status --short --branch
git diff --check
~~~

Expected: no v2 diff, old remains clean, and Astro is clean after task commits.

- [ ] **Step 6: Record focused corrections only when needed**

For each mismatch, change only the affected v1 file, repeat that route at both viewports, run npm run build, and commit the exact files with:

~~~bash
git add -u src/components/v1 src/content src/lib/paths.ts src/layouts/Base.astro public/images
git commit -m "fix(v1): correct final parity mismatch"
~~~

If verification finds no mismatch, do not create an empty commit.
