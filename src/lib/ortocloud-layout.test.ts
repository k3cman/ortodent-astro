import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("OrtoCloud hero uses a full-width right-aligned backdrop", async () => {
  const [hero, css] = await Promise.all([
    readFile(
      new URL("../components/ortocloud/sections/HeroSection.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../components/ortocloud/ortocloud.css", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(hero, /className="odc-hero__backdrop"/);
  assert.match(hero, /className="odc-hero__veil"/);
  assert.match(
    css,
    /\.odc-hero__backdrop\s*\{[^}]*position:\s*absolute[^}]*inset:\s*0[^}]*object-fit:\s*cover[^}]*object-position:\s*right center/s,
  );
});

test("OrtoCloud hero keeps the removed compact brand logo out of the hero", async () => {
  const [hero, css] = await Promise.all([
    readFile(
      new URL("../components/ortocloud/sections/HeroSection.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../components/ortocloud/ortocloud.css", import.meta.url),
      "utf8",
    ),
  ]);

  assert.doesNotMatch(hero, /className="odc-hero__logo"/);
});
