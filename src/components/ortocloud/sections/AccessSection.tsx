import { ArrowRight, Building2, User } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";

export default function AccessSection() {
  return (
    <section id="pristup" className="odc-access" aria-labelledby="odc-access-title">
      <div className="odc-container">
        <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-access-title">Kako pristupiti OrtoCloudu?</h2></div>
        <div className="odc-access__paths">
          <article><span className="odc-access__number">01</span><span className="odc-access__icon"><User aria-hidden="true" /></span><div><h3>Pacijent</h3><p>Vaš nalog se automatski kreira prilikom snimanja u OrtoDent rendgen centru. Pristupne podatke (korisničko ime i lozinku) dobijate odmah putem e-maila. Jednostavno se ulogujte i Vaši snimci su tu.</p></div></article>
          <article><span className="odc-access__number">02</span><span className="odc-access__icon"><Building2 aria-hidden="true" /></span><div><h3>Stomatolog / ordinacija</h3><p>Registrujte svoju ordinaciju i pristupite snimcima svojih pacijenata direktno.</p></div></article>
        </div>
        <div className="odc-actions odc-access__actions">
          <a className="odc-button odc-button--primary" href="https://cloud.ortodent.rs/" target="_blank" rel="noreferrer">Prijava <ArrowRight aria-hidden="true" /></a>
          <SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">Registrujte ordinaciju <ArrowRight aria-hidden="true" /></SiteLink>
        </div>
      </div>
    </section>
  );
}
