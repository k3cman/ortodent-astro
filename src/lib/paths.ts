export const VERSIONS = ["v1", "v2"] as const;
export type SiteVersion = (typeof VERSIONS)[number];

export function isSiteVersion(value: string): value is SiteVersion {
  return VERSIONS.includes(value as SiteVersion);
}

function siteBase(): string {
  const base = import.meta.env.BASE_URL ?? "/";
  if (base === "/") return "";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

export function assetPath(path: string): string {
  const stripped = path.startsWith("/") ? path.slice(1) : path;
  const base = siteBase();
  return base + "/" + stripped;
}

/** Build a path under /v1 or /v2 (respects Astro `base` / SITE_BASE). */
export function vPath(version: string, path: string): string {
  const stripped = path.startsWith("/") ? path.slice(1) : path;
  const segment = stripped ? `/${version}/${stripped}` : `/${version}`;
  const base = siteBase();
  return `${base}${segment}` || segment;
}

export const USLUGE_TABS = ["2d", "3d", "kefalometrija"] as const;
export type UslugeTab = (typeof USLUGE_TABS)[number];

export const USLUGE_TAB_LABELS: Record<UslugeTab, string> = {
  "2d": "2D snimanje",
  "3d": "3D snimanje",
  kefalometrija: "Kefalometrija",
};
