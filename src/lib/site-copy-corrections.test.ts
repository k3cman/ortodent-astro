import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { homeContentEn } from "../content/home.ts";
import { PRICING_SECTIONS_EN } from "../content/cenovnik.ts";
import { LOCATIONS, getNearestLocation } from "./locations.ts";

const readSource = (relativePath: string) =>
  readFile(new URL(`../${relativePath}`, import.meta.url), "utf8");

test("home and service copy follows the approved Serbian and English wording", async () => {
  const [stats, service2d, service3d] = await Promise.all([
    readSource("components/site/home/StatsSection.tsx"),
    readSource("components/site/pages/usluge/Usluge2D.tsx"),
    readSource("components/site/pages/usluge/Usluge3D.tsx"),
  ]);

  assert.match(homeContentEn.hero.description, /Dental imaging without an appointment\. 14 locations\./);
  assert.doesNotMatch(homeContentEn.hero.description, /At 14 locations/);
  assert.match(stats, /Verodostojni rezultati\. Dugogodišnje iskustvo\./);
  assert.doesNotMatch(stats, /Stalno iskustvo/);
  assert.match(service2d, /assessing jaw relationships, treatment planning and monitoring progress\./);
  assert.doesNotMatch(service2d, /fiksnom protezom|fixed-appliance treatment/);
  assert.match(service2d, /title: "Paranasal sinuses X-ray"/);
  assert.match(service3d, /Analiza koštanih struktura lica i jasan prikaz položaja zuba u vilici i njihovih međusobnih odnosa\./);
  assert.match(service3d, /"Three fields of view"/);
  assert.doesNotMatch(service3d, /Three field-of-view sizes/);
});

test("English pricing uses the approved service and issuing terminology", async () => {
  const pricing = await readSource("components/site/pages/cenovnik/CenovnikPricing.tsx");
  const additions = PRICING_SECTIONS_EN.find((section) => section.id === "dodaci");

  assert.equal(additions?.title, "ADDITIONAL SERVICES");
  assert.ok(PRICING_SECTIONS_EN[0].items.some((item) => item.label === "Paranasal sinuses X-ray"));
  assert.match(pricing, /Issuing film or CD copies is charged separately according to the price list\./);
  assert.doesNotMatch(pricing, /Film or CD delivery is charged/);
});

test("dentist and OrtoCloud pages use the approved specialist and support copy", async () => {
  const [dentists, cloud] = await Promise.all([
    readSource("components/site/pages/ZaDoktore.tsx"),
    readSource("components/ortocloud/sections/FeaturesSection.tsx"),
  ]);

  assert.match(dentists, /Kefalometrijska merenja vrši specijalista ortodoncije uz pomoć AudaxCeph softvera\. Analize su dostupne putem OrtoClouda\./);
  assert.match(dentists, /Cephalometric measurements are performed by an orthodontic specialist using AudaxCeph software\. Analyses are available through OrtoCloud\./);
  assert.match(dentists, /Pouzdan partner[\s\S]*u svakom koraku\./);
  assert.match(dentists, /A reliable partner[\s\S]*at every step\./);
  assert.match(dentists, /We believe that a strong partnership goes beyond outstanding diagnostic services\./);
  assert.match(dentists, /Our team provides comprehensive support to the dentists we work with/);
  assert.match(dentists, /Whichever of our centers you contact, your request will be promptly directed to the right member of our team\./);
  assert.match(cloud, /A clearer on-screen display and zoom functionality make reviewing images easier\. Images can be easily shared with dentists or colleagues for consultation and a second opinion\./);
});

test("English location copy localizes Belgrade everywhere it is displayed", async () => {
  const locationModule = (await import("./locations.ts")) as typeof import("./locations.ts") & {
    localizeLocationText?: (value: string, locale: "sr" | "en") => string;
  };
  const sourceFiles = await Promise.all([
    readSource("components/site/locations/CityCards.tsx"),
    readSource("components/site/locations/LocationCard.tsx"),
    readSource("components/site/locations/LocationsMap.tsx"),
    readSource("components/site/pages/CityLocations.tsx"),
    readSource("components/site/pages/RegionLocations.tsx"),
    readSource("components/site/pages/LocationDetail.tsx"),
  ]);

  assert.equal(typeof locationModule.localizeLocationText, "function");
  assert.equal(locationModule.localizeLocationText?.("Beograd", "en"), "Belgrade");
  assert.equal(locationModule.localizeLocationText?.("Novi Beograd", "en"), "New Belgrade");
  assert.equal(locationModule.localizeLocationText?.("Grahovska 27, Beograd", "en"), "Grahovska 27, Belgrade");
  assert.equal(locationModule.localizeLocationText?.("Beograd", "sr"), "Beograd");
  sourceFiles.forEach((source) => assert.match(source, /localizeLocationText/));
});

test("granted geolocation coordinates resolve to the nearest centre", () => {
  const arena = LOCATIONS.find((location) => location.slug === "arena")!;
  assert.equal(getNearestLocation({ lat: arena.lat, lng: arena.lng })?.slug, "arena");
  assert.equal(getNearestLocation({ lat: Number.NaN, lng: 20.4 }), undefined);
});
