import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import { localeFromPath, type Locale } from "@/lib/i18n";
import { useEffect, useState } from "react";

const content = {
  sr: {
    eyebrow: "Greška 404",
    title: "Ova stranica ne postoji",
    description: "Možda je adresa promenjena ili ste otvorili zastareo link. Nastavite ka jednoj od glavnih stranica.",
    navigation: "Korisni linkovi",
    links: [["Početna", "/"], ["Lokacije", "/lokacije"], ["Cenovnik", "/cenovnik"], ["2D snimanja", "/usluge/2d"]],
  },
  en: {
    eyebrow: "Error 404",
    title: "This page does not exist",
    description: "The address may have changed or the link may be outdated. Continue to one of the main pages.",
    navigation: "Useful links",
    links: [["Home", "/"], ["Locations", "/lokacije"], ["Pricing", "/cenovnik"], ["2D imaging", "/usluge/2d"]],
  },
} as const;

export default function NotFoundPage() {
  const [locale, setLocale] = useState<Locale>("sr");
  const [currentPath, setCurrentPath] = useState("/404");
  const copy = content[locale];

  useEffect(() => {
    const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
    const pathname = base && window.location.pathname.startsWith(`${base}/`)
      ? window.location.pathname.slice(base.length)
      : window.location.pathname;
    const detectedLocale = localeFromPath(pathname);
    setCurrentPath(pathname);
    setLocale(detectedLocale);
    document.documentElement.lang = detectedLocale;
    document.title = detectedLocale === "en" ? "Page not found | OrtoDent" : "Stranica nije pronađena | OrtoDent";
  }, []);

  return (
    <SiteProviders locale={locale}>
      <div className="oc-site oc-not-found">
        <Header locale={locale} currentPath={currentPath} />
        <main>
          <div className="oc-container oc-not-found__inner">
            <p className="oc-eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}<span className="oc-dot">.</span></h1>
            <p>{copy.description}</p>
            <nav aria-label={copy.navigation}>
              {copy.links.map(([label, path], index) => (
                <SiteLink key={path} to={path} className={index === 0 ? "oc-button oc-button--primary" : "oc-text-link"}>{label}</SiteLink>
              ))}
            </nav>
          </div>
        </main>
        <Footer locale={locale} />
      </div>
    </SiteProviders>
  );
}
