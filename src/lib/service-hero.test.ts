import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("2D service hero uses the dedicated clinician photograph", async () => {
  const [page, css] = await Promise.all([
    readFile(
      new URL("../components/site/pages/usluge/Usluge2D.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../styles/site.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /assets\/site\/2d\/hero-clinician\.png/);
  assert.match(page, /image=\{heroClinician\.src\}/);
  assert.match(page, /variant="backdrop"/);
  assert.doesNotMatch(page, /image=\{ORTOPANTOMOGRAM_SRC\}/);
  assert.match(
    css,
    /\.oc-service-hero--backdrop\s*\{[^}]*position:\s*relative[^}]*overflow:\s*hidden/s,
  );
  assert.match(
    css,
    /\.oc-service-hero--backdrop\s+\.oc-service-hero__visual\s*\{[^}]*position:\s*absolute[^}]*inset:\s*0/s,
  );
  await access(new URL("../assets/site/2d/hero-clinician.png", import.meta.url));
});
