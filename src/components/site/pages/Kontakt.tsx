import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Clock3,
  Cloud,
  Info,
  Mail,
  MapPin,
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
        <section className="oc-contact-hero" aria-labelledby="contact-title">
          <svg
            className="oc-contact-hero__contours"
            viewBox="0 0 620 520"
            aria-hidden="true"
          >
            {Array.from({ length: 10 }, (_, index) => (
              <path
                key={index}
                d={`M 620 ${-24 + index * 22} C ${525 - index * 3} ${58 + index * 9}, ${530 - index * 9} ${180 + index * 10}, ${455 - index * 13} ${255 + index * 15} C ${355 - index * 7} ${355 + index * 9}, ${220 - index * 13} ${390 + index * 10}, ${40 - index * 8} 520`}
              />
            ))}
          </svg>

          <div className="oc-container oc-contact-hero__inner">
            <div className="oc-contact-hero__copy">
              <p className="oc-contact-eyebrow">Kontakt</p>
              <h1 id="contact-title">
                Kako možemo da vam
                <br />{" "}
                pomognemo?
              </h1>
              <p className="oc-contact-hero__lead">
                Tu smo za pitanja, dodatne informacije i podršku
                <br />{" "}u korišćenju naših usluga.
              </p>
            </div>

            <div className="oc-contact-hero__detail" aria-hidden="true">
              <span>Preciznost</span>
              <span>u svakom planu</span>
              <span>terapije</span>
              <i />
            </div>
          </div>
        </section>

        <div className="oc-container oc-contact-content">
          <nav className="oc-contact-routes" aria-label="Načini kontakta">
            <article className="oc-contact-route">
              <MapPin aria-hidden="true" />
              <div>
                <h2>Centri i radno vreme</h2>
                <p>
                  Pronađite adresu, brojeve telefona
                  <br />{" "}i radno vreme naših centara.
                </p>
                <SiteLink to="/lokacije">
                  Lokacije <ArrowRight aria-hidden="true" />
                </SiteLink>
              </div>
            </article>

            <article className="oc-contact-route">
              <Cloud aria-hidden="true" />
              <div>
                <h2>OrtoCloud podrška</h2>
                <p>
                  Pomoć oko pristupa, naloga
                  <br />{" "}i preuzimanja snimaka.
                </p>
                <SiteLink to="/ortocloud#kontakt">
                  OrtoCloud podrška <ArrowRight aria-hidden="true" />
                </SiteLink>
              </div>
            </article>

            <article className="oc-contact-route">
              <Mail aria-hidden="true" />
              <div>
                <h2>Opšti upiti</h2>
                <p>
                  Imate opšte pitanje?
                  <br />{" "}Pišite nam, rado ćemo vam pomoći.
                </p>
                <a href="#contact-form">
                  Pišite nam <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </article>
          </nav>

          <section className="oc-contact-main" aria-labelledby="contact-form-title">
            <div className="oc-contact-aside">
              <h2 id="contact-form-title">Pošaljite nam poruku</h2>
              <p className="oc-contact-aside__intro">
                Ukoliko niste pronašli odgovor na svoje pitanje na stranicama
                Lokacije ili OrtoCloud, možete direktno kontaktirati naš tim.
              </p>

              <div className="oc-contact-detail-list">
                <a href="mailto:info@ortodent.rs" className="oc-contact-detail">
                  <span className="oc-contact-detail__icon">
                    <Mail aria-hidden="true" />
                  </span>
                  <span>
                    <small>Email</small>
                    <strong>info@ortodent.rs</strong>
                  </span>
                </a>

                <div className="oc-contact-detail">
                  <span className="oc-contact-detail__icon">
                    <Clock3 aria-hidden="true" />
                  </span>
                  <span>
                    <small>Odgovaramo u najkraćem</small>
                    <small>mogućem roku.</small>
                  </span>
                </div>
              </div>

              <div className="oc-contact-aside__trust">
                <p>Tu smo za vas</p>
                <span>Vaše poverenje pokreće naš svakodnevni rad.</span>
              </div>
            </div>

            <form id="contact-form" className="oc-contact-form" onSubmit={handleSubmit}>
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
                Pošalji poruku
              </button>
            </form>
          </section>

          <aside className="oc-contact-note">
            <Info aria-hidden="true" />
            <p>
              Za radno vreme i direktan kontakt sa centrom pogledajte stranicu{" "}
              <SiteLink to="/lokacije">Lokacije</SiteLink>.
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Kontakt);
