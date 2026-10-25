import { ArrowRight } from "lucide-react";
import heroDevices from "@/assets/ortocloud/hero-devices.png";
import { SiteLink } from "@/components/site/SiteLink";

export default function HeroSection() {
  return (
    <section id="pocetna" className="odc-hero" aria-labelledby="odc-hero-title">
      <img
        className="odc-hero__backdrop"
        src={heroDevices.src}
        alt="OrtoCloud platforma prikazana na računaru i telefonu"
        fetchPriority="high"
      />
      <div className="odc-hero__veil" aria-hidden="true" />
      <div className="odc-container odc-hero__layout">
        <div className="odc-hero__copy">
          <h1 id="odc-hero-title">Vaša dijagnostika.<br />Trenutna. Sigurna.<br /><span>Bilo gde.</span></h1>
          <p className="odc-hero__lead">Napredna platforma za arhiviranje, pregled i deljenje dentalnih snimaka. Povezujemo stomatologe, pacijente i rendgen centre u jedan klik.</p>
          <div className="odc-actions">
            <a className="odc-button odc-button--primary" href="https://cloud.ortodent.rs/" target="_blank" rel="noreferrer">Prijavite se <ArrowRight aria-hidden="true" /></a>
            <SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">Registrujte ordinaciju <ArrowRight aria-hidden="true" /></SiteLink>
          </div>
        </div>

      </div>
    </section>
  );
}
