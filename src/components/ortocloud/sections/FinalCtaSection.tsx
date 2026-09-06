import { ArrowRight, Cloud } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";

export default function FinalCtaSection() {
  return (
    <section className="odc-final-cta" aria-labelledby="odc-final-cta-title">
      <div className="odc-container">
        <div className="odc-final-cta__inner">
          <span className="odc-final-cta__icon"><Cloud aria-hidden="true" /></span>
          <div className="odc-final-cta__copy">
            <p className="odc-eyebrow">OrtoCloud</p>
            <h2 id="odc-final-cta-title">Spremni da počnete?</h2>
            <p>Pristupite svojim snimcima ili registrujte ordinaciju za korišćenje OrtoCloud platforme.</p>
          </div>
          <div className="odc-final-cta__actions">
            <a className="odc-button odc-button--primary" href="#pristup">Prijavite se <ArrowRight aria-hidden="true" /></a>
            <SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">Registrujte ordinaciju <ArrowRight aria-hidden="true" /></SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
