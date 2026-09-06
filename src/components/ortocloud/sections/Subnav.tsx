import { Cloud } from "lucide-react";

const links = [
  ["Početna", "#pocetna"],
  ["Funkcije", "#funkcije"],
  ["Čuvanje podataka", "#cuvanje-podataka"],
  ["Za pacijente", "#iskustva"],
  ["Za stomatologe", "#iskustva"],
  ["Registracija", "#registracija"],
  ["Podrška i kontakt", "#kontakt"],
] as const;

export default function Subnav() {
  return (
    <nav className="odc-subnav" aria-label="OrtoCloud navigacija">
      <div className="odc-container odc-subnav__inner">
        <a className="odc-subnav__brand" href="#pocetna"><Cloud aria-hidden="true" />OrtoCloud</a>
        <div className="odc-subnav__links">
          {links.map(([label, href], index) => <a key={label} href={href} aria-current={index === 0 ? "page" : undefined}>{label}</a>)}
        </div>
        <div className="odc-subnav__actions">
          <a className="odc-button odc-button--quiet" href="#pristup">Prijava</a>
          <a className="odc-button odc-button--primary odc-button--small" href="#registracija">Registracija</a>
        </div>
      </div>
    </nav>
  );
}
