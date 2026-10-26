import { MapPin } from "lucide-react";
import heroImage from "@/assets/home/hero-clinician.webp";
import heroImageSmall from "@/assets/home/hero-clinician-960.webp";
import { homeContentByLocale } from "@/content/home";
import { SiteLink } from "@/components/site/SiteLink";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function HeroSection() {
  const locale = useLocale();
  const { hero } = homeContentByLocale[locale];
  const locationSentence = locale === "sr" ? " Na 14 lokacija." : " At 14 locations.";

  return (
    <section className="oc-hero" aria-labelledby="hero-title">
      <img className="oc-hero__image" src={heroImage.src} srcSet={`${heroImageSmall.src} 960w, ${heroImage.src} 1672w`} sizes="100vw" alt={locale === "sr" ? "Radiološki tehničar sa panoramskim snimkom zuba" : "Radiology technician holding a panoramic dental X-ray"} fetchPriority="high" />
      <div className="oc-hero__veil" />
      <div className="oc-container oc-hero__content">
        <div className="oc-hero__copy">
          <p className="oc-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" aria-label={hero.title}>{locale === "sr" ? <>Precizna 2D i<br />3D dijagnostika</> : <>Precise 2D and<br />3D diagnostics</>}<span className="oc-dot">.</span></h1>
          <p className="oc-hero__lead">{hero.description.split(locationSentence)[0]}{' '}<br className="oc-hero__location-break" />{locationSentence.trim()}{hero.description.split(locationSentence)[1]}</p>
          <div className="oc-hero__actions">
            <SiteLink to="/lokacije" className="oc-button oc-button--primary">
              <MapPin aria-hidden="true" /> {locale === "sr" ? "Pronađite najbliži centar" : "Find the nearest centre"}
            </SiteLink>
            <nav className="oc-hero__locations" aria-label={locale === "sr" ? "Lokacije po gradovima" : "Locations by city"}>
              {hero.locations.map(({ label, href }) => <span key={href} className="oc-hero__city"><SiteLink to={href}>{label}</SiteLink></span>)}
            </nav>
          </div>
        </div>
      </div>
      <div className="oc-hero__marker oc-hero__marker--one" aria-hidden="true"><span>VOXEL SIZE</span><small>0.200 mm</small></div>
      <div className="oc-hero__marker oc-hero__marker--two" aria-hidden="true"><span>FOV</span><small>12 × 9 cm</small></div>
    </section>
  );
}
