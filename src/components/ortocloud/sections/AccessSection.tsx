import { ArrowRight, Building2, User } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";

export default function AccessSection() {
  return (
    <section id="pristup" className="odc-access" aria-labelledby="odc-access-title">
      <div className="odc-container">
        <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-access-title">Kako pristupiti OrtoCloudu?</h2></div>
        <div className="odc-access__paths">
          <article><span className="odc-access__number">01</span><span className="odc-access__icon"><User aria-hidden="true" /></span><div><h3>Pacijent</h3><p>Pristup dobijate automatski nakon snimanja u nekom od OrtoDent centara. Pristupne podatke dobijate odmah putem e-maila ili SMS-a.</p><a className="odc-button odc-button--secondary" href="#">Prijava za pacijente <ArrowRight aria-hidden="true" /></a></div></article>
          <article><span className="odc-access__number">02</span><span className="odc-access__icon"><Building2 aria-hidden="true" /></span><div><h3>Stomatolog / ordinacija</h3><p>Registrujte svoju ordinaciju i pristupite snimcima svojih pacijenata direktno, bez prijemnog medija.</p><SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">Registrujte ordinaciju <ArrowRight aria-hidden="true" /></SiteLink></div></article>
        </div>
      </div>
    </section>
  );
}
