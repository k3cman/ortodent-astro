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

test("production build publishes Serbian defaults and complete English routes", async () => {
  await execFileAsync(process.execPath, ["node_modules/astro/bin/astro.mjs", "build"], {
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
    "en/index.html",
    "en/pricing/index.html",
    "en/information/index.html",
    "en/contact/index.html",
    "en/locations/index.html",
    "en/locations/beograd/index.html",
    "en/locations/beograd/arena/index.html",
    "en/ortocloud/index.html",
    "en/services/2d/index.html",
    "en/services/3d/index.html",
    "en/services/cephalometry/index.html",
    "en/for-dentists/index.html",
    "en/privacy-policy/index.html",
    "en/terms-of-use/index.html",
  ];

  for (const page of canonicalPages) {
    assert.equal(existsSync(path.join(distRoot, page)), true, `missing /${page}`);
  }

  assert.equal(
    existsSync(path.join(distRoot, "o-nama")),
    false,
    "removed /o-nama route must not be published",
  );

  const homeHtml = await readFile(path.join(distRoot, "index.html"), "utf8");
  const englishHomeHtml = await readFile(path.join(distRoot, "en/index.html"), "utf8");
  assert.match(homeHtml, /<html lang="sr">/);
  assert.match(englishHomeHtml, /<html lang="en">/);
  assert.match(englishHomeHtml, /hreflang="sr"/);
  assert.match(englishHomeHtml, /hreflang="en"/);
  assert.match(englishHomeHtml, /Precise 2D and[\s\S]*?3D diagnostics/);
  assert.match(englishHomeHtml, /Find the nearest centre/);
  assert.match(englishHomeHtml, /What our[\s\S]*?customers say/);
  const englishPrivacyHtml = await readFile(path.join(distRoot, "en/privacy-policy/index.html"), "utf8");
  assert.match(englishPrivacyHtml, /href=["']\/en\/locations["']/);
  assert.match(englishPrivacyHtml, /href=["']\/en\/pricing["']/);
  assert.doesNotMatch(englishPrivacyHtml, /href=["']\/(?:lokacije|cenovnik|informacije|kontakt|za-doktore)["']/);
  const englishLocationHtml = await readFile(path.join(distRoot, "en/locations/beograd/arena/index.html"), "utf8");
  assert.match(englishLocationHtml, /href=["']\/lokacije\/beograd\/arena["'][^>]*>SR</);
  assert.match(englishLocationHtml, /href=["']\/en\/locations\/beograd\/arena["'][^>]*aria-current="page"[^>]*>EN</);
  const englishOrtoCloudHtml = await readFile(path.join(distRoot, "en/ortocloud/index.html"), "utf8");
  assert.match(englishOrtoCloudHtml, /aria-label="OrtoCloud platforms"/);
  assert.match(englishOrtoCloudHtml, /opens in a new tab/);
  assert.doesNotMatch(englishOrtoCloudHtml, /OrtoCloud platforme|otvara se u novom tabu/);
  const englishPricingHtml = await readFile(path.join(distRoot, "en/pricing/index.html"), "utf8");
  assert.match(englishPricingHtml, />KefAnalize</);
  assert.doesNotMatch(englishPricingHtml, />CephAnalysis</);
  assert.doesNotMatch(homeHtml, /href=["'][^"']*\/o-nama(?:\/|["'])/i);
  assert.match(
    homeHtml,
    /Usluge[\s\S]*href=["']\/informacije["'][\s\S]*href=["']\/cenovnik["']/,
    "Informacije must appear after Usluge and before Cenovnik in navigation",
  );
  assert.doesNotMatch(homeHtml, /url=\/v[12]\//i);
  assert.match(homeHtml, /Precizna 2D i 3D dijagnostika\./);
  assert.match(homeHtml, /Dijagnostika na koju[\s\S]*?možete da se oslonite/);
  assert.doesNotMatch(homeHtml, /href=["']\/design-system/);
  assert.match(homeHtml, /Sve preporuke,ljubazno osoblje i vrhunski kvalitet usluge/);
  assert.match(homeHtml, />Tanja Macura</);
  assert.match(homeHtml, /Very nice, clean and quick\. The staff is polite and friendly\./);
  assert.doesNotMatch(homeHtml, /Rezultati su bili spremni vrlo brzo/);
  assert.doesNotMatch(homeHtml, /oc-icon-tile/);
  assert.doesNotMatch(homeHtml, /oc-stars|5 od 5 zvezdica/);
  assert.match(homeHtml, /Digitalna dijagnostika koja donosi/);
  assert.match(homeHtml, /Na 14 lokacija/);
  assert.match(homeHtml, /OrtoCloud platforma/);
  assert.match(homeHtml, /Komunikacija i podrška bez zastoja\./);
  assert.doesNotMatch(homeHtml, /aria-label="Facebook"|aria-label="Instagram"/);
  assert.match(homeHtml, />Politika privatnosti</);
  assert.match(homeHtml, />Uslovi korišćenja</);
  const quoteIcon = homeHtml.match(/<svg[^>]*oc-review-card__quote[^>]*>/)?.[0];
  assert.ok(quoteIcon, "missing testimonial quote icon");
  assert.match(quoteIcon, /fill="none"/, "testimonial quote icon must stay outlined");

  const kontaktHtml = await readFile(
    path.join(distRoot, "kontakt/index.html"),
    "utf8",
  );
  assert.match(
    kontaktHtml,
    /Kontaktirajte nas za sve dodatne informacije i podršku\./,
  );
  assert.doesNotMatch(kontaktHtml, /Ostanite informisani o svim novostima i promenama/);
  assert.match(kontaktHtml, /Prijave možete slati na/);
  assert.match(kontaktHtml, /<h1[^>]*>Kontakt[\s\S]*?<\/h1>/);
  assert.doesNotMatch(kontaktHtml, /aria-label="Instagram"|aria-label="Facebook"/);
  assert.doesNotMatch(kontaktHtml, /Centri i radno vreme/);
  assert.doesNotMatch(kontaktHtml, /OrtoCloud podrška/);
  assert.doesNotMatch(kontaktHtml, /Opšti upiti/);
  assert.match(kontaktHtml, /info@ortodent\.rs/);

  const informacijeHtml = await readFile(
    path.join(distRoot, "informacije/index.html"),
    "utf8",
  );
  assert.match(
    informacijeHtml,
    /Sve što treba da znate o snimanju zuba[\s\S]*?<\/h1>/,
  );
  assert.match(informacijeHtml, /Vaš vodič kroz proces snimanja u OrtoDentu\./);
  assert.match(informacijeHtml, /Pronađite najbliži rendgen centar\./);
  assert.match(informacijeHtml, /Pogledajte lokacije/);

  const designSystemHtml = await readFile(
    path.join(distRoot, "design-system/index.html"),
    "utf8",
  );
  assert.match(designSystemHtml, /DIZAJN SISTEM/);

  const builtFiles = await readdir(distRoot, { recursive: true });
  const builtCss = (
    await Promise.all(
      builtFiles
        .filter((file) => file.endsWith(".css"))
        .map((file) => readFile(path.join(distRoot, file), "utf8")),
    )
  ).join("\n");
  assert.match(builtCss, /--od-magenta:\s*#d51155/i);
  assert.match(builtCss, /--od-magenta-dark:\s*#a11346/i);
  assert.doesNotMatch(builtCss, /#e6007e|rgb\(230 0 126/i);

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

  await execFileAsync(process.execPath, ["node_modules/astro/bin/astro.mjs", "build"], {
    cwd: projectRoot,
    env: { ...process.env, SITE_BASE: "/ortodent" },
    maxBuffer: 10 * 1024 * 1024,
  });

  const subpathHomeHtml = await readFile(
    path.join(distRoot, "index.html"),
    "utf8",
  );
  assert.match(subpathHomeHtml, /href=["']\/ortodent\/kontakt["']/);
  assert.match(subpathHomeHtml, /href=["']\/ortodent\/favicon\.svg["']/);
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
