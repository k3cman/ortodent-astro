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

test("footer and contact page omit social media placeholders", async () => {
  const outputRoot = await mkdtemp(path.join(os.tmpdir(), "ortodent-socials-"));

  try {
    await execFileAsync("npm", ["run", "build", "--", "--outDir", outputRoot], {
      cwd: projectRoot,
      maxBuffer: 10 * 1024 * 1024,
    });

    const [homeHtml, contactHtml] = await Promise.all([
      readFile(path.join(outputRoot, "index.html"), "utf8"),
      readFile(path.join(outputRoot, "kontakt/index.html"), "utf8"),
    ]);

    assert.doesNotMatch(homeHtml, /aria-label="Društvene mreže"/);
    assert.doesNotMatch(homeHtml, /aria-label="Facebook"|aria-label="Instagram"/);
    assert.doesNotMatch(contactHtml, /Ostanite informisani o svim novostima/);
    assert.doesNotMatch(contactHtml, /oc-contact-social-links/);
  } finally {
    await rm(outputRoot, { recursive: true, force: true });
  }
});
