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

const WRITING_AS_OPTIONS = ["Stomatologa", "Pacijenta"] as const;

const Kontakt = () => {
  const { toast } = useToast();
  const [writingAs, setWritingAs] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!writingAs) {
      toast({
        title: "Izaberite u kojem svojstvu pišete",
        description: "Molimo izaberite Stomatologa ili Pacijenta.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Poruka poslata!",
      description: "Odgovorićemo vam u najkraćem roku.",
    });
    setWritingAs("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="oc-site oc-contact-page">
      <Header currentPath="/kontakt" />

      <main>
        <section className="oc-page-intro oc-page-intro--utility" aria-labelledby="contact-title">
          <div className="oc-container">
            <div className="oc-page-intro__copy">
              <p className="oc-eyebrow">Kontakt</p>
              <h1 id="contact-title">Kontakt<span className="oc-dot">.</span></h1>
            </div>
          </div>
        </section>

        <div className="oc-container oc-contact-content">
          <section className="oc-contact-main" aria-labelledby="contact-form-title">
            <div className="oc-contact-aside">
              <h2>Tu smo za Vas.</h2>
              <p className="oc-contact-aside__intro">
                Kontaktirajte nas za sve dodatne informacije i podršku.
              </p>
            </div>

            <form id="contact-form" className="oc-contact-form" onSubmit={handleSubmit}>
              <h2 id="contact-form-title" className="oc-contact-form__title">
                Pošaljite nam poruku
              </h2>
              <div className="oc-contact-field">
                <label htmlFor="writing-as">
                  Pišem u svojstvu <span aria-hidden="true">*</span>
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
                    <option value="">Izaberite...</option>
                    {WRITING_AS_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden="true" />
                </div>
                <span id="writing-as-help" className="sr-only">
                  Obavezno polje. Izaberite Stomatologa ili Pacijenta.
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
                  Poruka <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Vaša poruka..."
                />
              </div>

              <button type="submit" className="oc-contact-submit">
                <Send aria-hidden="true" />
                Pošaljite poruku
              </button>
            </form>
          </section>
        </div>

        <section className="oc-contact-note">
          <div className="oc-container">
            <p>
              Detaljne informacije o radnom vremenu i kontakt telefonima naših centara dostupne su na stranici <SiteLink to="/lokacije">Lokacije</SiteLink>.
            </p>
          </div>
        </section>

        <section className="oc-contact-careers" aria-labelledby="contact-careers-title">
          <div className="oc-container">
            <div className="oc-contact-careers__panel">
              <div className="oc-contact-careers__copy">
                <p className="oc-eyebrow">Karijera u OrtoDentu</p>
                <h2 id="contact-careers-title">Želite da postanete deo našeg tima?</h2>
                <p>
                  Ukoliko ste doktor stomatologije ili strukovni medicinski radiolog i želite da postanete deo našeg tima, pošaljite nam svoj CV. Vašu prijavu uzećemo u razmatranje prilikom narednog konkursa. Prethodno radno iskustvo nije uslov.
                </p>
              </div>
              <p className="oc-contact-careers__email">
                Prijave možete slati na <a href="mailto:info@ortodent.rs?subject=Prijava%20za%20posao%20-%20CV">info@ortodent.rs</a>.
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
