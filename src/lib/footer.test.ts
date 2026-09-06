import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const stylesheetPath = fileURLToPath(
  new URL("../styles/site.css", import.meta.url),
);

test("mobile footer styles do not override circular social-button layout", async () => {
  const stylesheet = await readFile(stylesheetPath, "utf8");

  assert.doesNotMatch(
    stylesheet,
    /\.oc-footer a\s*\{[^}]*display:\s*flex[^}]*\}/,
    "a generic footer link rule changes social buttons from centered grid to flex",
  );
});
