import { useState } from "react";
import {
  ChevronDown,
  Send,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { useToast } from "@/hooks/use-toast";
import "./kontakt.css";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

const Kontakt = () => {
  const locale = useLocale();
  const t = locale === "sr" ? {
    options: ["Stomatologa", "Pacijenta"], missingTitle: "Izaberite u kojem svojstvu pišete", missingText: "Molimo izaberite Stomatologa ili Pacijenta.", sent: "Poruka poslata!", sentText: "Odgovorićemo vam u najkraćem roku.",
  } : { options: ["Dentist", "Patient"], missingTitle: "Please select who you are writing as", missingText: "Choose Dentist or Patient.", sent: "Message sent!", sentText: "We will reply as soon as possible." };
  const { toast } = useToast();
  const [writingAs, setWritingAs] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!writingAs) {
      toast({
        title: t.missingTitle,
        description: t.missingText,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t.sent,
      description: t.sentText,
    });
    setWritingAs("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="oc-site oc-contact-page">
      <Header currentPath={localizePath("/kontakt", locale)} />

      <main>
        <section className="oc-page-intro oc-page-intro--utility" aria-labelledby="contact-title">
          <div className="oc-container">
            <div className="oc-page-intro__copy">
              <p className="oc-eyebrow">{locale === "sr" ? "Kontakt" : "Contact"}</p>
              <h1 id="contact-title">{locale === "sr" ? "Kontakt" : "Contact"}<span className="oc-dot">.</span></h1>
            </div>
          </div>
        </section>

        <div className="oc-container oc-contact-content">
          <section className="oc-contact-main" aria-labelledby="contact-form-title">
            <div className="oc-contact-aside">
              <h2>{locale === "sr" ? "Tu smo za Vas." : "We are here for you."}</h2>
              <p className="oc-contact-aside__intro">
                {locale === "sr" ? "Kontaktirajte nas za sve dodatne informacije i podršku." : "Contact us for any additional information or support."}
              </p>
              <a className="oc-contact-aside__email" href="mailto:info@ortodent.rs?subject=Prijava%20za%20posao%20-%20CV">
                info@ortodent.rs
              </a>
            </div>

            <form id="contact-form" className="oc-contact-form" onSubmit={handleSubmit}>
              <h2 id="contact-form-title" className="oc-contact-form__title">
                {locale === "sr" ? "Pošaljite nam poruku" : "Send us a message"}
              </h2>
              <div className="oc-contact-field">
                <label htmlFor="writing-as">
                  {locale === "sr" ? "Pišem u svojstvu" : "I am writing as"} <span aria-hidden="true">*</span>
                </label>
                <div className="oc-contact-select">
                  <select
                    id="writing-as"
                    name="writingAs"
                    value={writingAs}
                    onChange={(event) => setWritingAs(event.target.value)}
                    aria-required="true"
                    aria-describedby="writing-as-help"
                  >
                    <option value="">{locale === "sr" ? "Izaberite..." : "Select..."}</option>
                    {t.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden="true" />
                </div>
                <span id="writing-as-help" className="sr-only">
                  {locale === "sr" ? "Obavezno polje. Izaberite Stomatologa ili Pacijenta." : "Required field. Choose Dentist or Patient."}
                </span>
              </div>

              <div className="oc-contact-field">
                <label htmlFor="email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="vas@email.rs"
                />
              </div>

              <div className="oc-contact-field">
                <label htmlFor="message">
                  {locale === "sr" ? "Poruka" : "Message"} <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={locale === "sr" ? "Vaša poruka..." : "Your message..."}
                />
              </div>

              <button type="submit" className="oc-contact-submit">
                <Send aria-hidden="true" />
                {locale === "sr" ? "Pošaljite poruku" : "Send message"}
              </button>
            </form>
          </section>
        </div>

        <section className="oc-contact-note">
          <div className="oc-container">
            <p>
              {locale === "sr" ? <>Detaljne informacije o radnom vremenu i kontakt telefonima naših centara dostupne su na stranici <SiteLink to="/lokacije">Lokacije</SiteLink>.</> : <>Detailed opening hours and telephone numbers for our centres are available on the <SiteLink to="/lokacije">Locations</SiteLink> page.</>}
            </p>
          </div>
        </section>

        <section className="oc-contact-careers" aria-labelledby="contact-careers-title">
          <div className="oc-container">
            <div className="oc-contact-careers__panel">
              <div className="oc-contact-careers__copy">
                <p className="oc-eyebrow">{locale === "sr" ? "Karijera u OrtoDentu" : "Careers at OrtoDent"}</p>
                <h2 id="contact-careers-title">{locale === "sr" ? "Želite da postanete deo našeg tima?" : "Would you like to join our team?"}</h2>
                <p>
                  {locale === "sr" ? "Ukoliko ste doktor stomatologije ili strukovni medicinski radiolog i želite da postanete deo našeg tima, pošaljite nam svoj CV. Vašu prijavu uzećemo u razmatranje prilikom narednog konkursa. Prethodno radno iskustvo nije uslov." : "If you are a dentist or a qualified medical radiographer and would like to join our team, send us your CV. We will consider your application for our next vacancy. Previous work experience is not required."}
                </p>
              </div>
              <p className="oc-contact-careers__email">
                {locale === "sr" ? "Prijave možete slati na" : "Applications can be sent to"} <a href="mailto:info@ortodent.rs?subject=Prijava%20za%20posao%20-%20CV">info@ortodent.rs</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Kontakt);
