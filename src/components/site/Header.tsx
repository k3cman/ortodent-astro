import { ChevronDown, Cloud, Menu, X } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { SiteLink } from "@/components/site/SiteLink";

const navItems = [
  ["Cenovnik", "/cenovnik"],
  ["Informacije", "/informacije"],
  ["Lokacije", "/lokacije"],
  ["Za stomatologe", "/za-doktore"],
  ["Kontakt", "/kontakt"],
] as const;

const services = [
  ["2D snimanja", "/usluge/2d"],
  ["3D snimanja / CBCT", "/usluge/3d"],
  ["Kefalometrijske analize", "/usluge/kefalometrija"],
] as const;

const cities = [
  ["Beograd", "/lokacije/beograd"],
  ["Novi Sad", "/lokacije/novi-sad"],
  ["Pančevo", "/lokacije/pancevo"],
] as const;

type HeaderProps = {
  currentPath?: string;
  transparent?: boolean;
};

export default function Header({ currentPath, transparent = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`oc-header${transparent ? " oc-header--home" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <div className="oc-container oc-header__inner">
        <SiteLink to="/" className="oc-logo" aria-label="OrtoDent naslovna"><img src={logo.src} alt="OrtoDent" /></SiteLink>
        <nav className="oc-nav" aria-label="Glavna navigacija">
          <div
            className="oc-nav__dropdown"
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}
            onKeyDown={(event) => { if (event.key === "Escape") { setServicesOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}
          >
            <button type="button" aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen((value) => !value)}>Usluge <ChevronDown aria-hidden="true" /></button>
            <div id="services-menu" hidden={!servicesOpen} className="oc-nav__menu">{services.map(([label, href]) => <SiteLink key={href} to={href}>{label}</SiteLink>)}</div>
          </div>
          {navItems.map(([label, href]) => (
            href === "/lokacije" ? (
              <div
                key={href}
                className="oc-nav__dropdown oc-nav__dropdown--locations"
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setLocationsOpen(false); }}
                onKeyDown={(event) => { if (event.key === "Escape") { setLocationsOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}
              >
                <SiteLink to={href} aria-current={currentPath === href ? "page" : undefined}>{label}</SiteLink>
                <button type="button" aria-label="Prikaži lokacije po gradovima" aria-expanded={locationsOpen} aria-controls="locations-menu" onClick={() => setLocationsOpen((value) => !value)}><ChevronDown aria-hidden="true" /></button>
                <div id="locations-menu" hidden={!locationsOpen} className="oc-nav__menu">{cities.map(([city, cityHref]) => <SiteLink key={cityHref} to={cityHref} aria-current={currentPath === cityHref ? "page" : undefined}>{city}</SiteLink>)}</div>
              </div>
            ) : (
            <SiteLink
              key={href}
              to={href}
              aria-current={currentPath === href ? "page" : undefined}
            >
              {label}
            </SiteLink>
            )
          ))}
        </nav>
        <div className="oc-header__actions">
          <SiteLink to="/ortocloud" className="oc-cloud-link"><Cloud aria-hidden="true" /> OrtoCloud</SiteLink>
          <button className="oc-menu-toggle" type="button" aria-label={open ? "Zatvori meni" : "Otvori meni"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav className="oc-mobile-nav" aria-label="Mobilna navigacija">
          {services.map(([label, href]) => <SiteLink key={href} to={href} onClick={() => setOpen(false)}>{label}</SiteLink>)}
          {navItems.map(([label, href]) => (
            <Fragment key={href}>
            <SiteLink
              key={href}
              to={href}
              aria-current={currentPath === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </SiteLink>
            {href === "/lokacije" && cities.map(([city, cityHref]) => <SiteLink key={cityHref} to={cityHref} aria-current={currentPath === cityHref ? "page" : undefined} onClick={() => setOpen(false)}>{city}</SiteLink>)}
            </Fragment>
          ))}
          <SiteLink to="/ortocloud" onClick={() => setOpen(false)}>OrtoCloud</SiteLink>
        </nav>
      )}
    </header>
  );
}
