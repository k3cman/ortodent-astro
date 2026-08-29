import assert from "node:assert/strict";
import test from "node:test";

test("site paths stay unversioned", async () => {
  const pathModule = (await import("./paths.ts")) as typeof import("./paths.ts") & {
    sitePath?: (path: string) => string;
  };

  assert.equal(typeof pathModule.sitePath, "function");
  assert.equal(pathModule.sitePath?.("/"), "/");
  assert.equal(pathModule.sitePath?.("/kontakt"), "/kontakt");
  assert.equal(pathModule.sitePath?.("lokacije/beograd"), "/lokacije/beograd");
});
