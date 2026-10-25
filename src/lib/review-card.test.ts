import assert from "node:assert/strict";
import test from "node:test";

test("review cards receive a typography class based on text length", async () => {
  let reviewCard: typeof import("./review-card.ts") | undefined;

  try {
    reviewCard = await import("./review-card.ts");
  } catch {
    // The initial TDD run intentionally reaches this branch.
  }

  assert.equal(typeof reviewCard?.getReviewLengthClass, "function");
  assert.equal(reviewCard?.getReviewLengthClass("Kratka recenzija."), "");
  assert.equal(reviewCard?.getReviewLengthClass("č".repeat(221)), "oc-review-card--long");
  assert.equal(reviewCard?.getReviewLengthClass("А".repeat(421)), "oc-review-card--very-long");
});
