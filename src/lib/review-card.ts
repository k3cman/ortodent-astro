export type ReviewLengthClass = "" | "oc-review-card--long" | "oc-review-card--very-long";

export function getReviewLengthClass(review: string): ReviewLengthClass {
  if (review.length > 420) return "oc-review-card--very-long";
  if (review.length > 220) return "oc-review-card--long";
  return "";
}
