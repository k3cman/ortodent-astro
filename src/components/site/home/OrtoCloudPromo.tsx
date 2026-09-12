import { ArrowRight, CheckCircle2 } from "lucide-react";
import cloudImage from "@/assets/home/ortocloud-phone.webp";
import cloudImageSmall from "@/assets/home/ortocloud-phone-960.webp";
import { SiteLink } from "@/components/site/SiteLink";

const benefits = ["Brz i siguran pristup snimcima", "Deljenje sa stomatolozima", "Arhiva na jednom mestu", "Dostupno sa svih uređaja"];

export default function OrtoCloudPromo() {
  return (
    <section className="oc-cloud-promo" aria-labelledby="cloud-title">
      <div className="oc-cloud-promo__image"><img src={cloudImage.src} srcSet={`${cloudImageSmall.src} 960w, ${cloudImage.src} 1672w`} sizes="(max-width: 820px) 100vw, 50vw" alt="OrtoCloud platforma na mobilnom telefonu" loading="lazy" decoding="async" /></div>
      <div className="oc-cloud-promo__copy">
        <p className="oc-eyebrow">OrtoCloud</p>
        <h2 id="cloud-title">Vaši snimci,<br /><span>uvek dostupni!</span></h2>
        <span className="oc-rule" />
        <p>Pristupite svojim snimcima bilo kada i bilo gde putem OrtoCloud platforme.</p>
        <ul>{benefits.map((benefit) => <li key={benefit}><CheckCircle2 aria-hidden="true" /> {benefit}</li>)}</ul>
        <SiteLink to="/ortocloud" className="oc-button oc-button--primary">Saznaj više <ArrowRight aria-hidden="true" /></SiteLink>
      </div>
    </section>
  );
}
