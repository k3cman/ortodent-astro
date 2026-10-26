import assert from "node:assert/strict";
import test from "node:test";

test("detects Serbian as default and English only under the en prefix", async () => {
  const i18n = (await import("./i18n.ts")) as typeof import("./i18n.ts");

  assert.equal(i18n.localeFromPath("/"), "sr");
  assert.equal(i18n.localeFromPath("/kontakt"), "sr");
  assert.equal(i18n.localeFromPath("/en"), "en");
  assert.equal(i18n.localeFromPath("/en/contact/"), "en");
});

test("maps every static public route in both directions", async () => {
  const { localizePath } = (await import("./i18n.ts")) as typeof import("./i18n.ts");
  const pairs = [
    ["/", "/en/"],
    ["/cenovnik", "/en/pricing"],
    ["/informacije", "/en/information"],
    ["/lokacije", "/en/locations"],
    ["/za-doktore", "/en/for-dentists"],
    ["/kontakt", "/en/contact"],
    ["/ortocloud", "/en/ortocloud"],
    ["/politika-privatnosti", "/en/privacy-policy"],
    ["/uslovi-koriscenja", "/en/terms-of-use"],
  ] as const;

  for (const [sr, en] of pairs) {
    assert.equal(localizePath(sr, "en"), en);
    assert.equal(localizePath(en, "sr"), sr);
  }
});

test("maps service routes including the translated cephalometry slug", async () => {
  const { localizePath } = (await import("./i18n.ts")) as typeof import("./i18n.ts");

  assert.equal(localizePath("/usluge/2d", "en"), "/en/services/2d");
  assert.equal(localizePath("/usluge/3d/", "en"), "/en/services/3d");
  assert.equal(localizePath("/usluge/kefalometrija", "en"), "/en/services/cephalometry");
  assert.equal(localizePath("/en/services/cephalometry/", "sr"), "/usluge/kefalometrija");
});

test("preserves city, region, and location slugs in nested location routes", async () => {
  const { alternateLocalePath, localizePath } = (await import("./i18n.ts")) as typeof import("./i18n.ts");

  assert.equal(localizePath("/lokacije/novi-sad", "en"), "/en/locations/novi-sad");
  assert.equal(localizePath("/lokacije/pancevo/brace-jovanovica", "en"), "/en/locations/pancevo/brace-jovanovica");
  assert.equal(localizePath("/en/locations/beograd/arena", "sr"), "/lokacije/beograd/arena");
  assert.equal(alternateLocalePath("/en/locations/pancevo/centar"), "/lokacije/pancevo/centar");
});

test("falls back to the target language home for unknown counterpart paths", async () => {
  const { localizePath } = (await import("./i18n.ts")) as typeof import("./i18n.ts");

  assert.equal(localizePath("/nepoznato", "en"), "/en/");
  assert.equal(localizePath("/en/unknown", "sr"), "/");
});

test("preserves fragments and query strings when localizing links", async () => {
  const { localizePath } = (await import("./i18n.ts")) as typeof import("./i18n.ts");

  assert.equal(localizePath("/za-doktore#partnerstvo", "sr"), "/za-doktore#partnerstvo");
  assert.equal(localizePath("/za-doktore#partnerstvo", "en"), "/en/for-dentists#partnerstvo");
  assert.equal(localizePath("/en/contact?source=cloud", "sr"), "/kontakt?source=cloud");
});

test("sitePath composes locale mapping before the deployment base", async () => {
  const paths = (await import("./paths.ts")) as typeof import("./paths.ts") & {
    sitePath: (path: string, locale?: "sr" | "en") => string;
  };

  assert.equal(paths.sitePath("/kontakt", "en"), "/en/contact");
  assert.equal(paths.sitePath("/en/contact", "sr"), "/kontakt");
});
