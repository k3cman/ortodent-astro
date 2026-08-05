# OrtoCloud Astro Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reproduce the existing OrtoCloud landing page inside the Astro site at `/v1/ortocloud` without altering the rest of the OrtoDent visual system.

**Architecture:** Copy the used React sections and two image assets into an isolated `src/components/ortocloud` feature folder. Render one client-side React island from a versioned Astro route and scope OrtoCloud CSS variables, font, gradients, and shadows to an `.ortocloud-theme` root. Reuse the Astro project's existing shadcn primitives and toast provider.

**Tech Stack:** Astro 6, React 19, TypeScript, Tailwind CSS 3, shadcn-ui, Lucide.

## Global Constraints

- Preserve the reference page's section order, copy, interactions, responsive layout, colors, typography, spacing, and imagery.
- The v1 page is available at `/v1/ortocloud`; v2 keeps the existing placeholder pattern.
- OrtoCloud styles must not override v1 OrtoDent tokens outside the OrtoCloud root.
- Existing OrtoCloud navigation links in the v1 header and footer must open `/v1/ortocloud`.
- No backend behavior is added; forms retain the reference toast-only behavior.

---

### Task 1: Feature Assets and Theme

**Files:**
- Create: `src/assets/ortocloud/hero-mockup.png`
- Create: `public/images/ortocloud-logo.png`
- Create: `src/components/ortocloud/ortocloud.css`
- Modify: `tailwind.config.mjs`

- [x] Copy the reference hero mockup and logo without recompression.
- [x] Add the `accent-light` color and `pulse-glow` animation used by the reference.
- [x] Define scoped OrtoCloud variables, Inter typography, gradients, and shadows under `.ortocloud-theme`.

### Task 2: React Landing Page

**Files:**
- Create: `src/components/ortocloud/OrtoCloudPage.tsx`
- Create: `src/components/ortocloud/sections/Navbar.tsx`
- Create: `src/components/ortocloud/sections/HeroSection.tsx`
- Create: `src/components/ortocloud/sections/FeaturesSection.tsx`
- Create: `src/components/ortocloud/sections/DownloadSection.tsx`
- Create: `src/components/ortocloud/sections/AccessSection.tsx`
- Create: `src/components/ortocloud/sections/RegistrationSection.tsx`
- Create: `src/components/ortocloud/sections/ContactSection.tsx`
- Create: `src/components/ortocloud/sections/Footer.tsx`

- [x] Copy the reference section markup and content while updating only import and asset paths.
- [x] Preserve mobile menu, audience toggle, registration validation, support reset, and toast messages.
- [x] Wrap the page in the v1 providers so existing toast and tooltip primitives remain functional.

### Task 3: Astro Route and Navigation

**Files:**
- Create: `src/pages/[version]/ortocloud.astro`
- Modify: `src/components/v1/Header.tsx`
- Modify: `src/components/v1/Footer.tsx`

- [x] Add static v1/v2 paths with full v1 rendering and the normal v2 placeholder.
- [x] Point existing v1 OrtoCloud CTAs to `/ortocloud` using version-aware links.

### Task 4: Verification

- [x] Run `git diff --check` and `npm run build`.
- [x] Compare original `http://localhost:5173/` and Astro `http://localhost:4321/v1/ortocloud` at desktop and mobile widths.
- [x] Verify mobile menu, audience toggle, both forms, anchor navigation, and browser console errors.
