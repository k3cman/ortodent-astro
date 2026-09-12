import { ArrowRight } from "lucide-react";
import cbctImage from "@/assets/home/cbct-patient.webp";
import cbctImageSmall from "@/assets/home/cbct-patient-640.webp";
import { homeContent } from "@/content/home";
import { SiteLink } from "@/components/site/SiteLink";
import { assetPath } from "@/lib/paths";

const serviceVisuals = [
  { image: cbctImage.src, srcSet: `${cbctImageSmall.src} 640w, ${cbctImage.src} 1086w`, alt: "Pacijentkinja tokom 3D CBCT snimanja" },
  { image: assetPath("images/Ortopan.jpg"), srcSet: undefined, alt: "Panoramski 2D snimak zuba" },
  { image: assetPath("images/Lateralni kefalogram.jpg"), srcSet: undefined, alt: "Lateralni kefalometrijski snimak" },
];

export default function ServicesSection() {
  return (
    <section id="usluge" className="oc-section oc-services" aria-labelledby="services-title">
      <div className="oc-container">
        <header className="oc-section-heading">
          <p className="oc-eyebrow">Usluge</p>
          <h2 id="services-title">Najsavremenija tehnologija, minimalno zračenje</h2>
          <p>Napredna dijagnostika za precizne rezultate<br />i sigurnije planiranje Vašeg lečenja.</p>
        </header>

        <div className="oc-services__grid">
          {homeContent.services.map((service, index) => {
            const { image, srcSet, alt } = serviceVisuals[index];
            return (
              <article className={`oc-service-card oc-service-card--${index + 1}`} key={service.title}>
                <div className="oc-service-card__copy">
                  <p className="oc-eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <span className="oc-rule" />
                  <p>{service.description}</p>
                  <SiteLink to={service.href} className="oc-text-link oc-service-card__desktop-action">Saznajte više <ArrowRight aria-hidden="true" /></SiteLink>
                </div>
                <div className="oc-service-card__visual">
                  <img src={image} srcSet={srcSet} sizes="(max-width: 820px) 100vw, 48vw" alt={alt} loading="lazy" decoding="async" />
                </div>
                <SiteLink to={service.href} className="oc-text-link oc-service-card__mobile-action">Saznajte više <ArrowRight aria-hidden="true" /></SiteLink>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
