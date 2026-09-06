import { ArrowRight, Headphones, Mail, Phone } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";

export default function ContactSection() {
  return (
    <section id="kontakt" className="odc-support" aria-labelledby="odc-support-title">
      <div className="odc-container odc-support__inner">
        <div className="odc-support__intro"><span className="odc-support__icon"><Headphones aria-hidden="true" /></span><div><h2 id="odc-support-title">Treba vam pomoć?</h2><p>Naš tim za podršku je tu da vam pomogne sa prijavom, nalogom i pristupom snimcima.</p></div></div>
        <a className="odc-support__detail" href="mailto:info@ortodent.rs"><Mail aria-hidden="true" /><span><small>Email podrška</small><strong>info@ortodent.rs</strong></span></a>
        <a className="odc-support__detail" href="tel:+3816XXXXXXX"><Phone aria-hidden="true" /><span><small>Telefon podrška</small><strong>+381 6X XXX XXX</strong></span></a>
        <SiteLink className="odc-button odc-button--secondary" to="/kontakt">Kontaktirajte podršku <ArrowRight aria-hidden="true" /></SiteLink>
      </div>
    </section>
  );
}
