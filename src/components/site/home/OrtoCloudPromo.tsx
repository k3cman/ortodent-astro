import { ArrowRight, CheckCircle2 } from "lucide-react";
import cloudImage from "@/assets/home/ortocloud-phone.webp";
import cloudImageSmall from "@/assets/home/ortocloud-phone-960.webp";
import { SiteLink } from "@/components/site/SiteLink";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const benefits = ["Brz i siguran pristup snimcima", "Deljenje sa stomatolozima", "Arhiva na jednom mestu", "Dostupno sa svih uređaja"];

export default function OrtoCloudPromo() {
  const locale = useLocale();
  const localizedBenefits = locale === "sr" ? benefits : ["Fast and secure access to X-rays", "Share with dentists", "One central archive", "Available on every device"];
  return (
    <section className="oc-cloud-promo" aria-labelledby="cloud-title">
      <div className="oc-cloud-promo__image"><img src={cloudImage.src} srcSet={`${cloudImageSmall.src} 960w, ${cloudImage.src} 1672w`} sizes="(max-width: 820px) 100vw, 50vw" alt={locale === "en" ? "OrtoCloud platform on a mobile phone" : "OrtoCloud platforma na mobilnom telefonu"} loading="lazy" decoding="async" /></div>
      <div className="oc-cloud-promo__copy">
        <p className="oc-eyebrow">OrtoCloud</p>
        <h2 id="cloud-title">{locale === "sr" ? <>Vaši snimci,<br /><span>uvek dostupni!</span></> : <>Your X-rays,<br /><span>always available!</span></>}</h2>
        <span className="oc-rule" />
        <p>{locale === "sr" ? "Pristupite svojim snimcima bilo kada i bilo gde putem OrtoCloud platforme." : "Access your X-rays anytime, anywhere through the OrtoCloud platform."}</p>
        <ul>{localizedBenefits.map((benefit) => <li key={benefit}><CheckCircle2 aria-hidden="true" /> {benefit}</li>)}</ul>
        <SiteLink to="/ortocloud" className="oc-button oc-button--primary">{locale === "sr" ? "Saznajte više" : "Learn more"} <ArrowRight aria-hidden="true" /></SiteLink>
      </div>
    </section>
  );
}
