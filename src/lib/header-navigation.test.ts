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

  assert.match(information, /<Header currentPath=\{localizePath\("\/informacije", locale\)\} \/>/);
  assert.match(service2d, /<Header currentPath=\{localizePath\("\/usluge\/2d", locale\)\} \/>/);
  assert.match(service3d, /<Header currentPath=\{localizePath\("\/usluge\/3d", locale\)\} \/>/);
  assert.match(serviceKefa, /<Header currentPath=\{localizePath\("\/usluge\/kefalometrija", locale\)\} \/>/);
  assert.match(header, /aria-current=\{servicesActive \? "page" : undefined\}/);
  assert.match(header, /activePath === localizePath\(href, activeLocale\) \? "page" : undefined/);
  assert.match(header, /activePath === localizePath\("\/ortocloud", activeLocale\) \? "page" : undefined/);
  assert.match(styles, /\.oc-nav__dropdown > button\[aria-current="page"\]/);
});

test("header exposes localized desktop and mobile language navigation", async () => {
  const header = await readSource("components/site/Header.tsx");
  const common = (await import("../content/i18n/common.ts")) as typeof import("../content/i18n/common.ts");

  assert.equal(common.commonContent.sr.navigation.pricing, "Cenovnik");
  assert.equal(common.commonContent.en.navigation.pricing, "Pricing");
  assert.equal(common.commonContent.en.navigation.information, "Information");
  assert.match(header, /oc-language-switcher/);
  assert.match(header, /oc-mobile-nav__language/);
  assert.match(header, /alternateLocalePath/);
  assert.match(header, /aria-current=\{activeLocale === "sr" \? "page" : undefined\}/);
  assert.match(header, /aria-current=\{activeLocale === "en" \? "page" : undefined\}/);
  assert.match(header, /event\.key === "Escape"[\s\S]*setLanguageOpen\(false\)/);
});
