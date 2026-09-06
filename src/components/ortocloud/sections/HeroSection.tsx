import { ArrowRight, ScanLine, Share2, ShieldCheck } from "lucide-react";
import heroDiagnostics from "@/assets/ortocloud/hero-diagnostics.png";
import ortoCloudLogo from "@/assets/ortocloud/logo.png";
import { SiteLink } from "@/components/site/SiteLink";

const signals = [
  { icon: ScanLine, title: "Snimci online", text: "Odmah nakon obrade" },
  { icon: ShieldCheck, title: "Sigurno čuvanje", text: "Visoki standardi zaštite" },
  { icon: Share2, title: "Jednostavno deljenje", text: "Sa stomatologom ili pacijentom" },
] as const;

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
          <h1 id="odc-hero-title">Vaša dijagnostika.<br /><span>Uvek dostupna.</span></h1>
          <p className="odc-hero__lead">OrtoCloud je digitalna platforma za čuvanje, pregled i deljenje dentalnih snimaka. Dostupno sa bilo kog uređaja, sigurno i uvek na dohvat ruke.</p>
          <div className="odc-actions">
            <a className="odc-button odc-button--primary" href="#pristup">Prijavite se <ArrowRight aria-hidden="true" /></a>
            <SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">Registrujte ordinaciju <ArrowRight aria-hidden="true" /></SiteLink>
          </div>
        </div>
        <div className="odc-hero__signals" aria-label="OrtoCloud prednosti">
          {signals.map(({ icon: Icon, title, text }) => (
            <div className="odc-signal" key={title}><Icon aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
