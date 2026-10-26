export const LOCALES = ["sr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "sr";

const STATIC_ROUTE_PAIRS = [
  ["/", "/en/"],
  ["/cenovnik", "/en/pricing"],
  ["/informacije", "/en/information"],
  ["/lokacije", "/en/locations"],
  ["/za-doktore", "/en/for-dentists"],
  ["/kontakt", "/en/contact"],
  ["/ortocloud", "/en/ortocloud"],
  ["/politika-privatnosti", "/en/privacy-policy"],
  ["/uslovi-koriscenja", "/en/terms-of-use"],
  ["/usluge/2d", "/en/services/2d"],
  ["/usluge/3d", "/en/services/3d"],
  ["/usluge/kefalometrija", "/en/services/cephalometry"],
] as const;

const srToEn = new Map<string, string>(STATIC_ROUTE_PAIRS);
const enToSr = new Map<string, string>(STATIC_ROUTE_PAIRS.map(([sr, en]) => [en, sr]));

export function isLocale(value: unknown): value is Locale {
  return value === "sr" || value === "en";
}

function normalizePath(path: string): string {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (withLeadingSlash === "/" || withLeadingSlash === "/en/") return withLeadingSlash;
  return withLeadingSlash.replace(/\/+$/, "");
}

export function localeFromPath(path: string): Locale {
  const normalized = normalizePath(path);
  return normalized === "/en" || normalized.startsWith("/en/") ? "en" : DEFAULT_LOCALE;
}

function dynamicCounterpart(path: string, locale: Locale): string | undefined {
  if (locale === "en" && path.startsWith("/lokacije/")) {
    return `/en/locations/${path.slice("/lokacije/".length)}`;
  }
  if (locale === "sr" && path.startsWith("/en/locations/")) {
    return `/lokacije/${path.slice("/en/locations/".length)}`;
  }
  return undefined;
}

export function localizePath(path: string, locale: Locale): string {
  const suffixIndex = path.search(/[?#]/);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  const normalized = normalizePath(path);
  const currentLocale = localeFromPath(normalized);
  if (currentLocale === locale) return `${normalized === "/en" ? "/en/" : normalized}${suffix}`;

  const exact = locale === "en" ? srToEn.get(normalized) : enToSr.get(normalized);
  if (exact) return `${exact}${suffix}`;

  return `${dynamicCounterpart(normalized, locale) ?? (locale === "en" ? "/en/" : "/")}${suffix}`;
}

export function alternateLocalePath(path: string): string {
  const target: Locale = localeFromPath(path) === "en" ? "sr" : "en";
  return localizePath(path, target);
}

