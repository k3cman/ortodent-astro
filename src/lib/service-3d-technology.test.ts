import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("3D technology section uses one original image and a desktop 2 by 2 benefits grid", async () => {
  const [page, css] = await Promise.all([
    readFile(
      new URL("../components/site/pages/usluge/Usluge3D.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../components/site/pages/usluge/usluge3d.css", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(page, /cbct-clinical-analysis-original\.png/);
  assert.match(page, /className="od3d-technology__visual"/);
  assert.doesNotMatch(page, /od3d-collage__/);
  assert.match(
    css,
    /\.od3d-technology\s*\{[^}]*grid-template-areas:\s*"copy visual"\s*"benefits benefits"[^}]*align-items:\s*start/s,
  );
  assert.match(css, /\.od3d-technology__visual\s*\{[^}]*grid-area:\s*visual/s);
  assert.match(
    css,
    /\.od3d-benefits\s*\{[^}]*grid-area:\s*benefits[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s,
  );
  await access(
    new URL("../assets/site/3d/cbct-clinical-analysis-original.png", import.meta.url),
  );
});
