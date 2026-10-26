import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readSource = async (relativePath: string) =>
  readFile(new URL(`../${relativePath}`, import.meta.url), "utf8").catch(() => "");

test("site layout progressively reveals desktop sections once", async () => {
  const [layout, controller, styles] = await Promise.all([
    readSource("layouts/SiteLayout.astro"),
    readSource("components/site/SiteMotion.astro"),
    readSource("styles/site.css"),
  ]);

  assert.match(layout, /import SiteMotion from/);
  assert.match(layout, /<SiteMotion\s*\/>/);
  assert.match(controller, /\(min-width: 821px\)/);
  assert.match(controller, /\(prefers-reduced-motion: no-preference\)/);
  assert.match(controller, /new IntersectionObserver/);
  assert.match(controller, /revealObserver\.unobserve\(entry\.target\)/);
  assert.match(controller, /initialTargets/);
  assert.match(controller, /requestAnimationFrame\(\(\) => requestAnimationFrame/);
  assert.match(controller, /\.oc-hero|\.odc-hero/);
  assert.match(styles, /body\.oc-motion-enabled \.oc-reveal:not\(\.is-revealed\)/);
  assert.match(styles, /translateY\(44px\)/);
  assert.match(styles, /680ms/);
  assert.match(styles, /scale:\s*1\.025/);
  assert.match(styles, /transition-delay:\s*100ms/);
});

test("site reveal motion stays visible on mobile and reduced-motion devices", async () => {
  const styles = await readSource("styles/site.css");

  assert.match(styles, /@media \(max-width: 820px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /opacity:\s*1\s*!important/);
  assert.match(styles, /transform:\s*none\s*!important/);
});

test("desktop card hover motion is restrained and pointer-aware", async () => {
  const [siteStyles, cloudStyles, locationStyles] = await Promise.all([
    readSource("styles/site.css"),
    readSource("components/ortocloud/ortocloud.css"),
    readSource("components/site/locations/locations.css"),
  ]);

  const pointerMedia = /@media \(min-width: 821px\) and \(hover: hover\) and \(pointer: fine\) and \(prefers-reduced-motion: no-preference\)/;
  assert.match(siteStyles, pointerMedia);
  assert.match(siteStyles, /\.oc-service-card:hover[\s\S]*translateY\(-4px\)/);
  assert.match(cloudStyles, pointerMedia);
  assert.match(cloudStyles, /\.odc-platform-cards article:hover/);
  assert.match(locationStyles, pointerMedia);
  assert.match(locationStyles, /\.od-location-item:hover/);
  assert.match(siteStyles, /@media \(prefers-reduced-motion: reduce\)[\s\S]*transform:\s*none\s*!important/);
});
