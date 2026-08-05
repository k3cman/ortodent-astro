import assert from "node:assert/strict";
import test from "node:test";
import {
  CITY_SLUGS,
  LOCATIONS,
  getCityBySlug,
  getLocationsByCity,
} from "./locations.ts";

test("city slugs resolve to the correct city metadata", () => {
  assert.deepEqual(CITY_SLUGS, ["beograd", "novi-sad", "pancevo"]);
  assert.equal(getCityBySlug("novi-sad")?.name, "Novi Sad");
  assert.equal(getCityBySlug("unknown"), undefined);
});

test("city filtering returns only locations from the requested city", () => {
  const beograd = getLocationsByCity("beograd");
  const noviSad = getLocationsByCity("novi-sad");
  const pancevo = getLocationsByCity("pancevo");

  assert.equal(beograd.length, 9);
  assert.equal(noviSad.length, 2);
  assert.equal(pancevo.length, 2);
  assert.ok(beograd.every((location) => location.citySlug === "beograd"));
  assert.ok(noviSad.every((location) => location.citySlug === "novi-sad"));
  assert.ok(pancevo.every((location) => location.citySlug === "pancevo"));
});

test("location slugs resolve only inside their city and build a nested path", async () => {
  const locationModule = (await import("./locations.ts")) as typeof import("./locations.ts") & {
    getLocationBySlug?: (citySlug: string, locationSlug: string) =>
      | (typeof LOCATIONS)[number]
      | undefined;
    locationPath?: (location: (typeof LOCATIONS)[number]) => string;
  };

  assert.equal((LOCATIONS[0] as { slug?: string }).slug, "arena");
  assert.equal(typeof locationModule.getLocationBySlug, "function");
  assert.equal(typeof locationModule.locationPath, "function");
  assert.equal(locationModule.getLocationBySlug?.("beograd", "arena")?.id, 1);
  assert.equal(locationModule.getLocationBySlug?.("novi-sad", "arena"), undefined);
  assert.equal(locationModule.locationPath?.(LOCATIONS[0]), "/lokacije/beograd/arena");
});
