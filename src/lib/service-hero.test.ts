import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("2D service hero and analysis use their dedicated images", async () => {
  const [page, css, serviceImages] = await Promise.all([
    readFile(
      new URL("../components/site/pages/usluge/Usluge2D.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../styles/site.css", import.meta.url), "utf8"),
    readFile(new URL("../content/usluge/images.ts", import.meta.url), "utf8"),
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
  assert.match(serviceImages, /Tomografska analiza anonimna\.png/);
  await access(new URL("../assets/site/2d/hero-clinician.png", import.meta.url));
  await access(
    new URL("../../public/images/Tomografska analiza anonimna.png", import.meta.url),
  );
});
