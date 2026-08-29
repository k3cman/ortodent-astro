function siteBase(): string {
  const base = import.meta.env?.BASE_URL ?? "/";
  if (base === "/") return "";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

export function assetPath(path: string): string {
  const stripped = path.startsWith("/") ? path.slice(1) : path;
  const base = siteBase();
  return base + "/" + stripped;
}

export function sitePath(path: string): string {
  const stripped = path.startsWith("/") ? path.slice(1) : path;
  const base = siteBase();
  return stripped ? `${base}/${stripped}` : `${base}/`;
}

export const USLUGE_TABS = ["2d", "3d", "kefalometrija"] as const;
export type UslugeTab = (typeof USLUGE_TABS)[number];

export const USLUGE_TAB_LABELS: Record<UslugeTab, string> = {
  "2d": "2D snimanje",
  "3d": "3D snimanje",
  kefalometrija: "Kefalometrija",
};
