import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const readSource = (relativePath: string) =>
  readFile(fileURLToPath(new URL(`../${relativePath}`, import.meta.url)), "utf8");

test("desktop navigation identifies direct pages and grouped service routes", async () => {
  const [header, styles, information, service2d, service3d, serviceKefa] =
    await Promise.all([
      readSource("components/site/Header.tsx"),
      readSource("styles/site.css"),
      readSource("components/site/pages/Informacije.tsx"),
      readSource("components/site/pages/Usluge2DPage.tsx"),
      readSource("components/site/pages/Usluge3DPage.tsx"),
      readSource("components/site/pages/UslugeKefaPage.tsx"),
    ]);

  assert.match(information, /<Header currentPath="\/informacije" \/>/);
  assert.match(service2d, /<Header currentPath="\/usluge\/2d" \/>/);
  assert.match(service3d, /<Header currentPath="\/usluge\/3d" \/>/);
  assert.match(serviceKefa, /<Header currentPath="\/usluge\/kefalometrija" \/>/);
  assert.match(header, /aria-current=\{servicesActive \? "page" : undefined\}/);
  assert.match(header, /currentPath === href \? "page" : undefined/);
  assert.match(header, /currentPath === "\/ortocloud" \? "page" : undefined/);
  assert.match(styles, /\.oc-nav__dropdown > button\[aria-current="page"\]/);
});
