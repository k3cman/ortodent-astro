import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import path from "node:path";

const execFileAsync = promisify(execFile);
const projectRoot = fileURLToPath(new URL("../..", import.meta.url));
const distRoot = path.join(projectRoot, "dist");

test("production build publishes only canonical unversioned routes", async () => {
  await execFileAsync("npm", ["run", "build"], {
    cwd: projectRoot,
    maxBuffer: 10 * 1024 * 1024,
  });

  const canonicalPages = [
    "index.html",
    "design-system/index.html",
    "cenovnik/index.html",
    "informacije/index.html",
    "kontakt/index.html",
    "lokacije/index.html",
    "lokacije/beograd/index.html",
    "lokacije/beograd/arena/index.html",
    "ortocloud/index.html",
    "usluge/2d/index.html",
    "za-doktore/index.html",
  ];

  for (const page of canonicalPages) {
    assert.equal(existsSync(path.join(distRoot, page)), true, `missing /${page}`);
  }

  const homeHtml = await readFile(path.join(distRoot, "index.html"), "utf8");
  assert.doesNotMatch(homeHtml, /url=\/v[12]\//i);
  assert.match(homeHtml, /Precizna 2D i 3D dijagnostika\./);
  assert.match(homeHtml, /Dijagnostika na koju možete da se oslonite\./);
  assert.doesNotMatch(homeHtml, /href=["']\/design-system/);
  assert.match(homeHtml, /Sve preporuke,ljubazno osoblje i vrhunski kvalitet usluge/);
  assert.match(homeHtml, /Very nice, clean and quick\. The staff is polite and friendly\./);
  assert.doesNotMatch(homeHtml, /Rezultati su bili spremni vrlo brzo/);

  const designSystemHtml = await readFile(
    path.join(distRoot, "design-system/index.html"),
    "utf8",
  );
  assert.match(designSystemHtml, /DIZAJN SISTEM/);

  const builtFiles = await readdir(distRoot, { recursive: true });
  for (const builtFile of builtFiles.filter((file) => file.endsWith(".html"))) {
    const html = await readFile(path.join(distRoot, builtFile), "utf8");
    assert.doesNotMatch(
      html,
      /(?:href|src)=["']\/v[12](?:\/|["'])/i,
      `versioned URL found in ${builtFile}`,
    );
    if (builtFile !== "design-system/index.html") {
      assert.doesNotMatch(
        html,
        /href=["']\/design-system(?:\/|["'])/i,
        `design-system navigation found in ${builtFile}`,
      );
    }
  }

  assert.equal(existsSync(path.join(distRoot, "v1")), false);
  assert.equal(existsSync(path.join(distRoot, "v2")), false);

  await execFileAsync("npm", ["run", "build"], {
    cwd: projectRoot,
    env: { ...process.env, SITE_BASE: "/ortodent/" },
    maxBuffer: 10 * 1024 * 1024,
  });

  const subpathHomeHtml = await readFile(
    path.join(distRoot, "index.html"),
    "utf8",
  );
  assert.match(subpathHomeHtml, /href=["']\/ortodent\/kontakt["']/);
  assert.doesNotMatch(subpathHomeHtml, /href=["']\/kontakt["']/);
  const subpathBuiltFiles = await readdir(distRoot, { recursive: true });
  for (const builtFile of subpathBuiltFiles.filter((file) => file.endsWith(".html"))) {
    const html = await readFile(path.join(distRoot, builtFile), "utf8");
    assert.doesNotMatch(
      html,
      /(?:href|src)=["']\/(?!ortodent(?:\/|["']))/i,
      `root-absolute URL bypasses SITE_BASE in ${builtFile}`,
    );
  }
  assert.equal(existsSync(path.join(distRoot, "v1")), false);
  assert.equal(existsSync(path.join(distRoot, "v2")), false);
});
