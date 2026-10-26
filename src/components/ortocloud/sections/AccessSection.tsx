import { ArrowRight, Building2, User } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function AccessSection() {
  const locale = useLocale(); const en = locale === "en";
  return (
    <section id="pristup" className="odc-access" aria-labelledby="odc-access-title">
      <div className="odc-container">
        <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-access-title">{en ? "How do I access OrtoCloud?" : "Kako pristupiti OrtoCloudu?"}</h2></div>
        <div className="odc-access__paths">
          <article><span className="odc-access__number">01</span><span className="odc-access__icon"><User aria-hidden="true" /></span><div><h3>{en ? "Patient" : "Pacijent"}</h3><p>{en ? "Your account is created automatically when you have a scan at an OrtoDent X-ray centre. Login details are sent to you immediately by email." : "Vaš nalog se automatski kreira prilikom snimanja u OrtoDent rendgen centru. Pristupne podatke (korisničko ime i lozinku) dobijate odmah putem e-maila. Jednostavno se ulogujte i Vaši snimci su tu."}</p></div></article>
          <article><span className="odc-access__number">02</span><span className="odc-access__icon"><Building2 aria-hidden="true" /></span><div><h3>{en ? "Dentist / practice" : "Stomatolog / ordinacija"}</h3><p>{en ? "Register your practice and access your patients' X-rays directly." : "Registrujte svoju ordinaciju i pristupite snimcima svojih pacijenata direktno."}</p></div></article>
        </div>
        <div className="odc-actions odc-access__actions">
          <a className="odc-button odc-button--primary" href="https://cloud.ortodent.rs/" target="_blank" rel="noreferrer">{en ? "Log in" : "Prijava"} <ArrowRight aria-hidden="true" /></a>
          <SiteLink className="odc-button odc-button--secondary" to="/za-doktore#partnerstvo">{en ? "Register your practice" : "Registrujte ordinaciju"} <ArrowRight aria-hidden="true" /></SiteLink>
        </div>
      </div>
    </section>
  );
}
