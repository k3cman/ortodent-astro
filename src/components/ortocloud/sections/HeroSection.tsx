import { ArrowRight, ScanLine, Share2, ShieldCheck } from "lucide-react";
import heroMockup from "@/assets/ortocloud/hero-mockup.png";

const signals = [
  { icon: ScanLine, title: "Snimci online", text: "Odmah nakon obrade" },
  { icon: ShieldCheck, title: "Sigurno čuvanje", text: "Visoki standardi zaštite" },
  { icon: Share2, title: "Jednostavno deljenje", text: "Sa stomatologom ili pacijentom" },
] as const;

export default function HeroSection() {
  return (
    <section id="pocetna" className="odc-hero" aria-labelledby="odc-hero-title">
      <div className="odc-container odc-hero__layout">
        <div className="odc-hero__copy">
          <p className="odc-eyebrow">OrtoCloud</p>
          <h1 id="odc-hero-title">Vaša dijagnostika.<br /><span>Uvek dostupna.</span></h1>
          <p className="odc-hero__lead">OrtoCloud je digitalna platforma za čuvanje, pregled i deljenje dentalnih snimaka. Dostupno sa bilo kog uređaja, sigurno i uvek na dohvat ruke.</p>
          <div className="odc-actions">
            <a className="odc-button odc-button--primary" href="#pristup">Prijavite se <ArrowRight aria-hidden="true" /></a>
            <a className="odc-button odc-button--secondary" href="#registracija">Otvorite nalog <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="odc-hero__visual">
          <span className="odc-orbit odc-orbit--one" aria-hidden="true" />
          <span className="odc-orbit odc-orbit--two" aria-hidden="true" />
          <img src={heroMockup.src} alt="OrtoCloud platforma prikazana na laptopu i mobilnom telefonu" fetchPriority="high" />
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
