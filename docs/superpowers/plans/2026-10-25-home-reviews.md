# Home Reviews Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage testimonials with the 11 approved original-language reviews and keep every card readable by adapting typography to review length.

**Architecture:** Keep review content in `src/content/home.ts`. Add one small pure length-classification helper under `src/lib`, consume it from `ReviewsSection.tsx`, and style its two output classes in the existing homepage CSS. Preserve the current one-review-at-a-time carousel behavior.

**Tech Stack:** Astro 6, React 19, TypeScript, CSS, Node test runner

**Spec:** `docs/superpowers/specs/2026-10-25-home-reviews-design.md`

## Global Constraints

- Keep every review in its original language and do not truncate or translate it.
- Normalize author-name capitalization only; do not change name spelling.
- Preserve one-review-per-step carousel navigation and three visible cards on desktop.
- Use adaptive font sizing only for long and very long reviews.
- Do not add dependencies.

## Review Focus

- A very long review must receive the smallest typography class without being truncated.
- A boundary-length review must receive exactly one class, not both long variants.
- Cyrillic and accented author names must render without corruption and produce valid initials.
- The 11-review carousel must wrap correctly while continuing to show three consecutive cards.
- Mobile cards must not overflow or overlap author footers.

---

### Task 1: Replace reviews and add adaptive typography

**Files:**
- Create: `src/lib/review-card.ts`
- Create: `src/lib/review-card.test.ts`
- Modify: `src/content/home.ts:42-50`
- Modify: `src/components/site/home/ReviewsSection.tsx:1-43`
- Modify: `src/styles/site.css:187-196`
- Modify: `src/styles/mobile-refinements.css:51-55`

**Interfaces:**
- Produces: `getReviewLengthClass(review: string): "" | "oc-review-card--long" | "oc-review-card--very-long"`
- Consumes: the 11 review tuples in `homeContent.reviews`

- [ ] **Step 1: Write the failing classification test**

Add Node tests asserting that a short review returns `""`, a review just over the long threshold returns `"oc-review-card--long"`, and a review just over the very-long threshold returns `"oc-review-card--very-long"`. Include a long Unicode review fixture.

- [ ] **Step 2: Run the focused test and verify RED**

Run the bundled Node runtime with `--experimental-strip-types --test src/lib/review-card.test.ts`.

Expected: FAIL because `getReviewLengthClass` does not exist.

- [ ] **Step 3: Implement the classifier**

Create `getReviewLengthClass(review: string)` in `src/lib/review-card.ts` with explicit long and very-long character thresholds matching the test.

- [ ] **Step 4: Run the focused test and verify GREEN**

Expected: all classification cases PASS.

- [ ] **Step 5: Replace and order the review content**

Set the 11 review tuples in this order: Tanja Macura, Vera Nikolić, Nemanja Blagojevic, Zorica, Filip Rodić, Mina, Veronika Vieyra, Andrej, Aleksandar Krejić, Александра, Maja Makivic. Preserve each supplied review verbatim apart from trimming trailing whitespace.

- [ ] **Step 6: Apply the adaptive class in the carousel**

Import `getReviewLengthClass` in `ReviewsSection.tsx` and append its output to every review article while preserving the existing featured class and one-step navigation state.

- [ ] **Step 7: Add responsive typography rules**

In `site.css`, reduce blockquote font size for long and very-long cards, with separate featured-card values. In `mobile-refinements.css`, provide mobile overrides so the longest review remains readable without overlap. Do not clamp or hide text.

- [ ] **Step 8: Verify the complete result**

Run the focused test, `git diff --check`, and the Astro production build using the bundled Node runtime. In the browser, inspect the initial group, Filip's review, a Cyrillic author, the final review, and mobile layout; confirm 11 indicators and one-step navigation.

- [ ] **Step 9: Leave changes ready for user review**

Do not commit or push unless the user explicitly requests it.
