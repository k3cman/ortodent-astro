import { ChevronDown, Cloud, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { SiteLink } from "@/components/site/SiteLink";
import { LocaleProvider, useLocale } from "@/components/site/i18n/LocaleContext";
import { commonContent } from "@/content/i18n/common";
import { alternateLocalePath, localizePath, type Locale } from "@/lib/i18n";
import { sitePath } from "@/lib/paths";

type HeaderProps = {
  currentPath?: string;
  transparent?: boolean;
  locale?: Locale;
};

export default function Header({ currentPath, transparent = false, locale }: HeaderProps) {
  const contextLocale = useLocale();
  const activeLocale = locale ?? contextLocale;
  const content = commonContent[activeLocale];
  const activePath = currentPath ?? (activeLocale === "en" ? "/en/" : "/");
  const navItems = [
    [content.navigation.pricing, "/cenovnik"],
    [content.navigation.information, "/informacije"],
    [content.navigation.locations, "/lokacije"],
    [content.navigation.forDentists, "/za-doktore"],
    [content.navigation.contact, "/kontakt"],
  ] as const;
  const services = [
    [content.navigation.service2d, "/usluge/2d"],
    [content.navigation.service3d, "/usluge/3d"],
    [content.navigation.cephalometry, "/usluge/kefalometrija"],
  ] as const;
  const cities = [
    [content.navigation.belgrade, "/lokacije/beograd"],
    [content.navigation.noviSad, "/lokacije/novi-sad"],
    [content.navigation.pancevo, "/lokacije/pancevo"],
  ] as const;
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesActive = services.some(([, href]) => activePath === localizePath(href, activeLocale));
  const localizedLocationsPath = localizePath("/lokacije", activeLocale);
  const locationsActive = activePath === localizedLocationsPath || activePath.startsWith(`${localizedLocationsPath}/`);
  const alternatePath = alternateLocalePath(activePath);
  const serbianPath = activeLocale === "sr" ? activePath : alternatePath;
  const englishPath = activeLocale === "en" ? activePath : alternatePath;

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <LocaleProvider locale={activeLocale}>
    <header className={`oc-header${transparent ? " oc-header--home" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <div className="oc-container oc-header__inner">
        <SiteLink to="/" className="oc-logo" aria-label={content.header.homeLabel}><img src={logo.src} alt="OrtoDent" /></SiteLink>
        <nav className="oc-nav" aria-label={content.header.mainNavigation}>
          <div
            className="oc-nav__dropdown"
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}
            onKeyDown={(event) => { if (event.key === "Escape") { setServicesOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}
          >
            <button type="button" aria-label={content.header.showServices} aria-current={servicesActive ? "page" : undefined} aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen((value) => !value)}>{content.navigation.services} <ChevronDown aria-hidden="true" /></button>
            <div id="services-menu" hidden={!servicesOpen} className="oc-nav__menu">{services.map(([label, href]) => <SiteLink key={href} to={href} aria-current={activePath === localizePath(href, activeLocale) ? "page" : undefined}>{label}</SiteLink>)}</div>
          </div>
          {navItems.map(([label, href]) => (
            href === "/lokacije" ? (
              <div
                key={href}
                className="oc-nav__dropdown oc-nav__dropdown--locations"
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setLocationsOpen(false); }}
                onKeyDown={(event) => { if (event.key === "Escape") { setLocationsOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}
              >
                <SiteLink to={href} aria-current={locationsActive ? "page" : undefined}>{label}</SiteLink>
                <button type="button" aria-label={content.header.showCities} aria-expanded={locationsOpen} aria-controls="locations-menu" onClick={() => setLocationsOpen((value) => !value)}><ChevronDown aria-hidden="true" /></button>
                <div id="locations-menu" hidden={!locationsOpen} className="oc-nav__menu">{cities.map(([city, cityHref]) => <SiteLink key={cityHref} to={cityHref} aria-current={activePath === localizePath(cityHref, activeLocale) ? "page" : undefined}>{city}</SiteLink>)}</div>
              </div>
            ) : (
            <SiteLink
              key={href}
              to={href}
              aria-current={activePath === localizePath(href, activeLocale) ? "page" : undefined}
            >
              {label}
            </SiteLink>
            )
          ))}
        </nav>
        <div className="oc-header__actions">
          <SiteLink to="/ortocloud" className="oc-cloud-link" aria-current={activePath === localizePath("/ortocloud", activeLocale) ? "page" : undefined}><Cloud aria-hidden="true" /> {content.navigation.cloud}</SiteLink>
          <div
            className="oc-language-switcher"
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setLanguageOpen(false); }}
            onKeyDown={(event) => { if (event.key === "Escape") { setLanguageOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}
          >
            <button type="button" aria-label={content.header.language} aria-expanded={languageOpen} aria-controls="language-menu" onClick={() => setLanguageOpen((value) => !value)}>{activeLocale.toUpperCase()} <ChevronDown aria-hidden="true" /></button>
            <div id="language-menu" className="oc-language-switcher__menu" hidden={!languageOpen}>
              <a href={sitePath(serbianPath)} aria-current={activeLocale === "sr" ? "page" : undefined}>SR</a>
              <a href={sitePath(englishPath)} aria-current={activeLocale === "en" ? "page" : undefined}>EN</a>
            </div>
          </div>
          <button className="oc-menu-toggle" type="button" aria-label={open ? content.header.closeMenu : content.header.openMenu} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <>
        <button className="oc-mobile-nav-backdrop" type="button" aria-label={content.header.closeMenu} onClick={() => setOpen(false)} />
        <nav id="mobile-navigation" className="oc-mobile-nav" aria-label={content.header.mobileNavigation} onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".oc-menu-toggle")?.focus(); } }}>
          <details className="oc-mobile-nav__group">
            <summary aria-current={servicesActive ? "page" : undefined}>{content.navigation.services} <ChevronDown aria-hidden="true" /></summary>
            <div className="oc-mobile-nav__links">
              {services.map(([label, href]) => <SiteLink key={href} to={href} aria-current={activePath === localizePath(href, activeLocale) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</SiteLink>)}
            </div>
          </details>
          {navItems.map(([label, href]) => href === "/lokacije" ? (
            <details className="oc-mobile-nav__group" key={href}>
              <summary aria-current={locationsActive ? "page" : undefined}>{content.navigation.locations} <ChevronDown aria-hidden="true" /></summary>
              <div className="oc-mobile-nav__links">
                <SiteLink to={href} aria-current={activePath === localizePath(href, activeLocale) ? "page" : undefined} onClick={() => setOpen(false)}>{content.navigation.allLocations}</SiteLink>
                {cities.map(([city, cityHref]) => <SiteLink key={cityHref} to={cityHref} aria-current={activePath === localizePath(cityHref, activeLocale) ? "page" : undefined} onClick={() => setOpen(false)}>{city}</SiteLink>)}
              </div>
            </details>
          ) : (
            <SiteLink key={href} to={href} aria-current={activePath === localizePath(href, activeLocale) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</SiteLink>
          ))}
          <SiteLink to="/ortocloud" aria-current={activePath === localizePath("/ortocloud", activeLocale) ? "page" : undefined} onClick={() => setOpen(false)}>{content.navigation.cloud}</SiteLink>
          <div className="oc-mobile-nav__language" aria-label={content.header.language}>
            <a href={sitePath(serbianPath)} aria-current={activeLocale === "sr" ? "page" : undefined}>SR</a>
            <span aria-hidden="true">/</span>
            <a href={sitePath(englishPath)} aria-current={activeLocale === "en" ? "page" : undefined}>EN</a>
          </div>
        </nav>
        </>
      )}
    </header>
    </LocaleProvider>
  );
}
