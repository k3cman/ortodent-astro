import { ArrowRight } from "lucide-react";
import dentistImage from "@/assets/home/dentist-workstation.webp";
import dentistImageSmall from "@/assets/home/dentist-workstation-960.webp";
import { homeContent } from "@/content/home";
import { SiteLink } from "@/components/site/SiteLink";

export default function DentistSection() {
  return (
    <section className="oc-dentist" aria-labelledby="dentist-title">
      <img src={dentistImage.src} srcSet={`${dentistImageSmall.src} 960w, ${dentistImage.src} 1672w`} sizes="100vw" alt="Stomatolog analizira digitalne dentalne snimke" loading="lazy" decoding="async" />
      <div className="oc-dentist__shade" />
      <div className="oc-container oc-dentist__inner">
        <div className="oc-dentist__copy">
          <p className="oc-eyebrow">Za stomatologe</p>
          <h2 id="dentist-title" aria-label="Dijagnostika na koju možete da se oslonite.">Dijagnostika na koju<br />možete da se oslonite<span className="oc-dot">.</span></h2>
          <p className="oc-dentist__lead">Brzi digitalni rezultati, OrtoCloud pristup i precizne 2D, 3D i kefalometrijske analize.</p>
          <div className="oc-benefits">
            {homeContent.dentistBenefits.map(([number, title, description]) => (
              <div className="oc-benefit" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
          <div className="oc-actions">
            <SiteLink to="/za-doktore" className="oc-button oc-button--primary">Saradnja sa OrtoDentom <ArrowRight aria-hidden="true" /></SiteLink>
            <SiteLink to="/ortocloud" className="oc-text-link oc-text-link--light">Prijava na OrtoCloud <ArrowRight aria-hidden="true" /></SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
