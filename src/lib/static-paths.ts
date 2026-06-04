import { VERSIONS } from "@/lib/paths";

export function versionStaticPaths() {
  return VERSIONS.map((version) => ({ params: { version } }));
}
