import assert from "node:assert/strict";
import test from "node:test";
import * as locations from "./locations.ts";

test("finds the closest center in each city from visitor coordinates", () => {
  assert.equal(typeof locations.getNearestLocation, "function");
  for (const center of locations.LOCATIONS) {
    assert.equal(locations.getNearestLocation({ lat: center.lat + 0.0001, lng: center.lng + 0.0001 })?.id, center.id);
  }
});

test("selects geographically closest rather than first in the list", () => {
  const nearVracar = { lat: 44.803, lng: 20.4701 };
  assert.equal(locations.getNearestLocation(nearVracar)?.slug, "vracar");
});

test("invalid or missing coordinates do not choose a center", () => {
  for (const position of [{lat:NaN,lng:20},{lat:91,lng:20},{lat:44,lng:181},{lat:Infinity,lng:20}]) {
    assert.equal(locations.getNearestLocation(position), undefined);
  }
});

test("empty candidate list does not choose a center", () => {
  assert.equal(locations.getNearestLocation({lat:44,lng:20}, []), undefined);
});
