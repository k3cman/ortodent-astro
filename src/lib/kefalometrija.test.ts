import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const projectRoot = fileURLToPath(new URL("../..", import.meta.url));

test("kefalometrija protocol visual offers a PDF example preview", async () => {
  await execFileAsync("npm", ["run", "build"], {
    cwd: projectRoot,
    maxBuffer: 10 * 1024 * 1024,
  });

  const page = await readFile(
    path.join(projectRoot, "dist/usluge/kefalometrija/index.html"),
    "utf8",
  );

  assert.match(
    page,
    /<a[^>]*class="oc-kefa-pdf-button"[^>]*>[\s\S]*Pogledajte primer analize[\s\S]*PDF[\s\S]*<\/a>/,
  );
  assert.match(
    page,
    /href="\/documents\/primer-kefalometrijske-analize\.pdf"/,
  );
  assert.match(page, /target="_blank"/);
  await access(
    path.join(projectRoot, "dist/documents/primer-kefalometrijske-analize.pdf"),
  );
});
