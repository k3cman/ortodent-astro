import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const stylesheetPath = fileURLToPath(
  new URL("../components/site/locations/locations.css", import.meta.url),
);

test("nearest-location permission note has spacing and muted text color", async () => {
  const stylesheet = await readFile(stylesheetPath, "utf8");

  assert.match(
    stylesheet,
    /\.od-nearest-location p\s*\{[^}]*margin:\s*16px 0 0;[^}]*color:\s*var\(--oc-gray-500\);[^}]*\}/,
  );
});
