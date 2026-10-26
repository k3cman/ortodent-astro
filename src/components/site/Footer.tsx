import { ChevronRight } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";
import { SiteLink } from "@/components/site/SiteLink";
import { LocaleProvider, useLocale } from "@/components/site/i18n/LocaleContext";
import { commonContent } from "@/content/i18n/common";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale?: Locale }) {
  const contextLocale = useLocale();
  const activeLocale = locale ?? contextLocale;
  const content = commonContent[activeLocale];
  const quickLinks = [
    [content.navigation.locations, "/lokacije"],
    [content.navigation.pricing, "/cenovnik"],
    [content.navigation.information, "/informacije"],
    [content.navigation.forDentists, "/za-doktore"],
    [content.navigation.contact, "/kontakt"],
  ] as const;
  const serviceLinks = [
    [content.navigation.service2d, "/usluge/2d"],
    [content.navigation.service3d, "/usluge/3d"],
    [content.navigation.cephalometry, "/usluge/kefalometrija"],
    [content.navigation.cloud, "/ortocloud"],
  ] as const;
  return (
    <LocaleProvider locale={activeLocale}>
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
              aria-label={content.footer.homeLabel}
            >
              <img
                src={footerLogo.src}
                alt={activeLocale === "en" ? "OrtoDent 3D — Digital dental radiology" : "OrtoDent 3D — Digitalna dentalna radiologija"}
                width={footerLogo.width}
                height={footerLogo.height}
              />
            </SiteLink>
            <p>{content.footer.tagline}</p>
          </div>

          <div className="oc-footer__column">
            <h2>{content.footer.quickLinks}</h2>
            <nav aria-label={content.footer.quickLinks}>
              {quickLinks.map(([label, path]) => (
                <SiteLink key={path} to={path}>
                  <ChevronRight aria-hidden="true" />
                  {label}
                </SiteLink>
              ))}
            </nav>
          </div>

          <div className="oc-footer__column">
            <h2>{content.footer.services}</h2>
            <nav aria-label={content.footer.servicesNavigation}>
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
          <span>{content.footer.copyright}</span>
          <nav aria-label={content.footer.legalNavigation}>
            <SiteLink to="/politika-privatnosti">{content.footer.privacy}</SiteLink>
            <SiteLink to="/uslovi-koriscenja">{content.footer.terms}</SiteLink>
          </nav>
        </div>
      </div>
    </footer>
    </LocaleProvider>
  );
}
