import { ArrowRight } from "lucide-react";
import heroDevices from "@/assets/ortocloud/hero-devices.png";
import { SiteLink } from "@/components/site/SiteLink";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function HeroSection() {
  const locale = useLocale(); const en = locale === "en";
  return (
    <section id="pocetna" className="odc-hero" aria-labelledby="odc-hero-title">
      <img
        className="odc-hero__backdrop"
        src={heroDevices.src}
        alt={en ? "OrtoCloud platform shown on a computer and phone" : "OrtoCloud platforma prikazana na računaru i telefonu"}
        fetchPriority="high"
      />
      <div className="odc-hero__veil" aria-hidden="true" />
      <div className="odc-container odc-hero__layout">
        <div className="odc-hero__copy">
          <h1 id="odc-hero-title">{en ? <>Your diagnostics.<br />Immediate. Secure.<br /><span>Anywhere.</span></> : <>Vaša dijagnostika.<br />Trenutna. Sigurna.<br /><span>Bilo gde.</span></>}</h1>
          <p className="odc-hero__lead">{en ? "An advanced platform for storing, viewing and sharing dental X-rays. Connecting dentists, patients and X-ray centres in one click." : "Napredna platforma za arhiviranje, pregled i deljenje dentalnih snimaka. Povezujemo stomatologe, pacijente i rendgen centre u jedan klik."}</p>
          <div className="odc-actions">
            <a className="odc-button odc-button--primary" href="https://cloud.ortodent.rs/" target="_blank" rel="noreferrer">{en ? "Log in" : "Prijavite se"} <ArrowRight aria-hidden="true" /></a>
            <SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">{en ? "Register your practice" : "Registrujte ordinaciju"} <ArrowRight aria-hidden="true" /></SiteLink>
          </div>
        </div>

      </div>
    </section>
  );
}
