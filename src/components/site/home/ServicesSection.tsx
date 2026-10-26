import { ArrowRight } from "lucide-react";
import cbctImage from "@/assets/home/cbct-patient.webp";
import cbctImageSmall from "@/assets/home/cbct-patient-640.webp";
import { homeContentByLocale } from "@/content/home";
import { SiteLink } from "@/components/site/SiteLink";
import { assetPath } from "@/lib/paths";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const serviceVisuals = [
  { image: cbctImage.src, srcSet: `${cbctImageSmall.src} 640w, ${cbctImage.src} 1086w`, alt: "Pacijentkinja tokom 3D CBCT snimanja" },
  { image: assetPath("images/Ortopan.jpg"), srcSet: undefined, alt: "Panoramski 2D snimak zuba" },
  { image: assetPath("images/Lateralni kefalogram.jpg"), srcSet: undefined, alt: "Lateralni kefalometrijski snimak" },
];

const serviceVisualsEn = [
  "Patient during a 3D CBCT scan",
  "Panoramic 2D dental X-ray",
  "Lateral cephalometric X-ray",
];

export default function ServicesSection() {
  const locale = useLocale();
  const content = homeContentByLocale[locale];
  return (
    <section id="usluge" className="oc-section oc-services" aria-labelledby="services-title">
      <div className="oc-container">
        <header className="oc-section-heading">
          <p className="oc-eyebrow">{locale === "sr" ? "Usluge" : "Services"}</p>
          <h2 id="services-title">{locale === "sr" ? "Najsavremenija tehnologija, minimalno zračenje" : "Advanced technology, minimal radiation"}</h2>
          <p>{locale === "sr" ? <>Napredna dijagnostika za precizne rezultate<br />i sigurnije planiranje Vašeg lečenja.</> : <>Advanced diagnostics for precise results<br />and safer treatment planning.</>}</p>
        </header>

        <div className="oc-services__grid">
          {content.services.map((service, index) => {
            const { image, srcSet, alt } = serviceVisuals[index];
            return (
              <article className={`oc-service-card oc-service-card--${index + 1}`} key={service.title}>
                <div className="oc-service-card__copy">
                  <p className="oc-eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <span className="oc-rule" />
                  <p>{service.description}</p>
                  <SiteLink to={service.href} className="oc-text-link oc-service-card__desktop-action">{locale === "sr" ? "Saznajte više" : "Learn more"} <ArrowRight aria-hidden="true" /></SiteLink>
                </div>
                <div className="oc-service-card__visual">
                  <img src={image} srcSet={srcSet} sizes="(max-width: 820px) 100vw, 48vw" alt={locale === "en" ? serviceVisualsEn[index] : alt} loading="lazy" decoding="async" />
                </div>
                <SiteLink to={service.href} className="oc-text-link oc-service-card__mobile-action">{locale === "sr" ? "Saznajte više" : "Learn more"} <ArrowRight aria-hidden="true" /></SiteLink>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
