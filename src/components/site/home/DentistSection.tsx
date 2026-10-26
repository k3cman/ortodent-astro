import { ArrowRight } from "lucide-react";
import dentistImage from "@/assets/home/dentist-workstation.webp";
import dentistImageSmall from "@/assets/home/dentist-workstation-960.webp";
import { homeContentByLocale } from "@/content/home";
import { SiteLink } from "@/components/site/SiteLink";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function DentistSection() {
  const locale = useLocale();
  const content = homeContentByLocale[locale];
  return (
    <section className="oc-dentist" aria-labelledby="dentist-title">
      <img src={dentistImage.src} srcSet={`${dentistImageSmall.src} 960w, ${dentistImage.src} 1672w`} sizes="100vw" alt={locale === "en" ? "Dentist reviewing digital dental X-rays" : "Stomatolog analizira digitalne dentalne snimke"} loading="lazy" decoding="async" />
      <div className="oc-dentist__shade" />
      <div className="oc-container oc-dentist__inner">
        <div className="oc-dentist__copy">
          <p className="oc-eyebrow">{locale === "sr" ? "Za stomatologe" : "For dentists"}</p>
          <h2 id="dentist-title">{locale === "sr" ? <>Dijagnostika na koju<br /> možete da se oslonite</> : <>Diagnostics you<br /> can rely on</>}<span className="oc-dot">.</span></h2>
          <p className="oc-dentist__lead">{locale === "sr" ? "Brzi digitalni rezultati, OrtoCloud pristup i precizni 2D i 3D snimci, kefalometrijske analize." : "Fast digital results, OrtoCloud access, precise 2D and 3D imaging, and cephalometric analyses."}</p>
          <div className="oc-benefits">
            {content.dentistBenefits.map(([number, title, description]) => (
              <div className="oc-benefit" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
          <div className="oc-actions">
            <SiteLink to="/za-doktore" className="oc-button oc-button--primary">{locale === "sr" ? "Saradnja sa OrtoDentom" : "Partner with OrtoDent"} <ArrowRight aria-hidden="true" /></SiteLink>
            <SiteLink to="/ortocloud" className="oc-text-link oc-text-link--light">{locale === "sr" ? "Prijava na OrtoCloud" : "OrtoCloud login"} <ArrowRight aria-hidden="true" /></SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
