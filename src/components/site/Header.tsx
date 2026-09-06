import { ChevronDown, Cloud, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { SiteLink } from "@/components/site/SiteLink";

const navItems = [
  ["Cenovnik", "/cenovnik"],
  ["Za stomatologe", "/za-doktore"],
  ["Lokacije", "/lokacije"],
  ["O nama", "/informacije"],
  ["Kontakt", "/kontakt"],
] as const;

const services = [
  ["2D snimanja", "/usluge/2d"],
  ["3D snimanja / CBCT", "/usluge/3d"],
  ["Kefalometrijske analize", "/usluge/kefalometrija"],
] as const;

type HeaderProps = {
  currentPath?: string;
};

export default function Header({ currentPath }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="oc-header">
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
            <SiteLink
              key={href}
              to={href}
              aria-current={currentPath === href ? "page" : undefined}
            >
              {label}
            </SiteLink>
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
            <SiteLink
              key={href}
              to={href}
              aria-current={currentPath === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </SiteLink>
          ))}
          <SiteLink to="/ortocloud" onClick={() => setOpen(false)}>OrtoCloud</SiteLink>
        </nav>
      )}
    </header>
  );
}
