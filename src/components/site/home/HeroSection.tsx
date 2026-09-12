import { MapPin } from "lucide-react";
import heroImage from "@/assets/home/hero-clinician.webp";
import heroImageSmall from "@/assets/home/hero-clinician-960.webp";
import { homeContent } from "@/content/home";
import { SiteLink } from "@/components/site/SiteLink";

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="oc-hero" aria-labelledby="hero-title">
      <img className="oc-hero__image" src={heroImage.src} srcSet={`${heroImageSmall.src} 960w, ${heroImage.src} 1672w`} sizes="100vw" alt="Radiološki tehničar sa panoramskim snimkom zuba" fetchPriority="high" />
      <div className="oc-hero__veil" />
      <div className="oc-container oc-hero__content">
        <div className="oc-hero__copy">
          <p className="oc-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" aria-label={hero.title}>Precizna 2D i<br />3D dijagnostika<span className="oc-dot">.</span></h1>
          <p className="oc-hero__lead">{hero.description}</p>
          <div className="oc-hero__actions">
            <SiteLink to="/lokacije" className="oc-button oc-button--primary">
              <MapPin aria-hidden="true" /> Pronađite najbliži centar
            </SiteLink>
            <nav className="oc-hero__locations" aria-label="Lokacije po gradovima">
              {hero.locations.map(({ label, href }) => <span key={href} className="oc-hero__city"><SiteLink to={href}>{label}</SiteLink></span>)}
            </nav>
          </div>
        </div>
      </div>
      <div className="oc-hero__marker oc-hero__marker--one" aria-hidden="true"><span>VOXEL SIZE</span><small>0.200 mm</small></div>
      <div className="oc-hero__marker oc-hero__marker--two" aria-hidden="true"><span>FOV</span><small>16 × 9 cm</small></div>
    </section>
  );
}
