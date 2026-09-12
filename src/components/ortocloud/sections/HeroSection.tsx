import { ArrowRight } from "lucide-react";
import heroDiagnostics from "@/assets/ortocloud/hero-diagnostics.png";
import ortoCloudLogo from "@/assets/ortocloud/logo.png";
import { SiteLink } from "@/components/site/SiteLink";

export default function HeroSection() {
  return (
    <section id="pocetna" className="odc-hero" aria-labelledby="odc-hero-title">
      <img
        className="odc-hero__backdrop"
        src={heroDiagnostics.src}
        alt="Stomatološkinja analizira panoramski snimak zuba"
        fetchPriority="high"
      />
      <div className="odc-hero__veil" aria-hidden="true" />
      <div className="odc-container odc-hero__layout">
        <div className="odc-hero__copy">
          <img
            className="odc-hero__logo"
            src={ortoCloudLogo.src}
            alt="OrtoCloud Dentamed"
            width={398}
            height={170}
          />
          <h1 id="odc-hero-title">Vaša dijagnostika.<br />Trenutna. Sigurna.<br /><span>Bilo gde.</span></h1>
          <p className="odc-hero__lead">Napredna platforma za arhiviranje, pregled i deljenje dentalnih snimaka. Povezujemo stomatologe, pacijente i rendgen centre u jedan klik.</p>
          <div className="odc-actions">
            <a className="odc-button odc-button--primary" href="#pristup">Prijavite se <ArrowRight aria-hidden="true" /></a>
            <SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">Registrujte ordinaciju <ArrowRight aria-hidden="true" /></SiteLink>
          </div>
        </div>

      </div>
    </section>
  );
}
