import {
  ChevronRight,
  Facebook,
  Instagram,
} from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";
import { SiteLink } from "@/components/site/SiteLink";

const quickLinks = [
  ["Lokacije", "/lokacije"],
  ["Cenovnik", "/cenovnik"],
  ["Informacije", "/informacije"],
  ["Za stomatologe", "/za-doktore"],
  ["Kontakt", "/kontakt"],
] as const;

const serviceLinks = [
  ["2D snimanja", "/usluge/2d"],
  ["3D / CBCT", "/usluge/3d"],
  ["Kefalometrija", "/usluge/kefalometrija"],
  ["OrtoCloud", "/ortocloud"],
] as const;

const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
] as const;

export default function Footer() {
  return (
    <footer className="oc-footer">
      <svg
        className="oc-footer__contours"
        viewBox="0 0 760 450"
        aria-hidden="true"
      >
        {Array.from({ length: 9 }, (_, index) => (
          <path
            key={index}
            d={`M 760 ${-20 + index * 32} C 735 ${110 + index * 18}, 650 ${70 + index * 25}, ${590 + index * 12} ${190 + index * 23} C ${520 + index * 10} ${325 + index * 6}, ${360 + index * 18} ${385 + index * 4}, ${index * 55} 450`}
          />
        ))}
      </svg>

      <div className="oc-footer__inner">
        <div className="oc-footer__main">
          <div className="oc-footer__brand">
            <SiteLink
              to="/"
              className="oc-footer__brandmark"
              aria-label="OrtoDent naslovna"
            >
              <img src={footerLogo.src} alt="OrtoDent 3D — Digitalna dentalna radiologija" width={footerLogo.width} height={footerLogo.height} />
            </SiteLink>
            <p>
              Digitalna dijagnostika koja donosi preciznost, sigurnost i
              poverenje u svaki plan terapije.
            </p>
            <nav className="oc-socials" aria-label="Društvene mreže">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a key={label} href="#" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          <div className="oc-footer__column">
            <h2>Brzi linkovi</h2>
            <nav aria-label="Brzi linkovi">
              {quickLinks.map(([label, path]) => (
                <SiteLink key={path} to={path}>
                  <ChevronRight aria-hidden="true" />
                  {label}
                </SiteLink>
              ))}
            </nav>
          </div>

          <div className="oc-footer__column">
            <h2>Usluge</h2>
            <nav aria-label="Usluge u podnožju">
              {serviceLinks.map(([label, path]) => (
                <SiteLink key={path} to={path}>
                  <ChevronRight aria-hidden="true" />
                  {label}
                </SiteLink>
              ))}
            </nav>
          </div>
        </div>

        <div className="oc-footer__bottom">
          <span>© 2026 OrtoDent. Sva prava zadržana.</span>
          <nav aria-label="Pravne informacije">
            <SiteLink to="/politika-privatnosti">Politika privatnosti</SiteLink>
            <SiteLink to="/uslovi-koriscenja">Uslovi korišćenja</SiteLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
