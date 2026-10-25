# Contact Careers Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an accessible, responsive careers CTA above the Kontakt page footer.

**Architecture:** Extend the existing Kontakt component with one semantic section and colocate its responsive styles in the existing page stylesheet. Use a linked email address rather than a button, form, or backend behavior.

**Tech Stack:** React, TypeScript, CSS, Astro build

**Spec:** `docs/superpowers/specs/2026-10-25-contact-careers-design.md`

## Global Constraints

- Preserve the existing contact form and location note.
- Link CV enquiries to `info@ortodent.rs`.
- Do not add upload or backend functionality.
- Do not request a preferred city.

## Review Focus

- The email link must use a valid `mailto:` destination and a useful subject.
- Copy must mention both professional profiles, future competitions, and that experience is not required.
- The section must remain readable on narrow screens.
- The CTA must appear before the existing footer.
- Existing contact-page behavior must remain unchanged.

---

### Task 1: Add and verify the careers CTA

**Files:**
- Modify: `src/components/site/pages/Kontakt.tsx`
- Modify: `src/components/site/pages/kontakt.css`

**Interfaces:**
- Consumes: existing Kontakt page layout and design tokens
- Produces: `.oc-contact-careers` section with a `mailto:info@ortodent.rs` CTA

- [x] Add the semantic careers section after `.oc-contact-note` and before the footer.
- [x] Add desktop and mobile styles matching the current page.
- [x] Run `npm run build` and `git diff --check`.
- [x] Visually inspect the section in the local browser.

