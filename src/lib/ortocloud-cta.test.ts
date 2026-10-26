import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const projectRoot = fileURLToPath(new URL("../..", import.meta.url));
const ortoCloudUrl = "https://cloud.ortodent.rs/";

test("OrtoCloud login CTAs open the platform in a new tab", async () => {
  const outputRoot = await mkdtemp(path.join(os.tmpdir(), "ortodent-cta-"));

  try {
    await execFileAsync(process.execPath, ["node_modules/astro/bin/astro.mjs", "build", "--outDir", outputRoot], {
      cwd: projectRoot,
      maxBuffer: 10 * 1024 * 1024,
    });

    const [dentistsHtml, ortoCloudHtml] = await Promise.all([
      readFile(path.join(outputRoot, "za-doktore/index.html"), "utf8"),
      readFile(path.join(outputRoot, "ortocloud/index.html"), "utf8"),
    ]);
    const accessSectionHtml = ortoCloudHtml.slice(ortoCloudHtml.indexOf('id="pristup"'));

    assert.match(
      dentistsHtml,
      new RegExp(`href="${ortoCloudUrl}" target="_blank" rel="noreferrer"[^>]*>\\s*OrtoCloud prijava`),
    );
    assert.match(
      ortoCloudHtml,
      new RegExp(`href="${ortoCloudUrl}" target="_blank" rel="noreferrer"[^>]*>Prijavite se`),
    );
    assert.match(
      accessSectionHtml,
      new RegExp(`href="${ortoCloudUrl}" target="_blank" rel="noreferrer"[^>]*>Prijava`),
    );
    assert.doesNotMatch(ortoCloudHtml, /Prijava za pacijente/);
    assert.equal(
      (ortoCloudHtml.match(/href="\/za-doktore#partnerstvo"/g) ?? []).length,
      2,
      "hero and final section should both offer office registration",
    );
    assert.equal(
      (ortoCloudHtml.match(new RegExp(`href="${ortoCloudUrl}"`, "g")) ?? []).length,
      2,
      "hero and final section should both offer OrtoCloud login",
    );
  } finally {
    await rm(outputRoot, { recursive: true, force: true });
  }
});
