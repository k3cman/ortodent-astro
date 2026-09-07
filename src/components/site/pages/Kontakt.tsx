import { useState } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { useToast } from "@/hooks/use-toast";
import "./kontakt.css";

const WRITING_AS_OPTIONS = ["Stomatologa", "Pacijenta"] as const;

const socialLinks = [
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Facebook", icon: Facebook },
] as const;

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
              <h1 id="contact-title">Kontakt</h1>
            </div>
          </div>
        </section>

        <div className="oc-container oc-contact-content">
          <section className="oc-contact-main" aria-labelledby="contact-form-title">
            <div className="oc-contact-aside">
              <h2>
                Tu smo da odgovorimo na Vaša pitanja, pružimo dodatne
                informacije i podržimo Vas u korišćenju naših usluga.
              </h2>
              <p className="oc-contact-aside__intro">
                Ostanite informisani o svim novostima i promenama u radu naših
                centara putem naših zvaničnih profila.
              </p>

              <div className="oc-contact-aside__trust">
                <p>Pratite nas</p>
                <div className="oc-contact-social-links">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a key={label} href={href} aria-label={label}>
                      <Icon aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
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
                Pošalji poruku
              </button>
            </form>
          </section>
        </div>

        <section className="oc-contact-note">
          <div className="oc-container">
            <p>
              Potrebne su Vam informacije o radnom vremenu ili direktan kontakt
              sa centrom? Sve brojeve telefona i adrese po gradovima možete
              pronaći na stranici <SiteLink to="/lokacije">Lokacije</SiteLink>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Kontakt);
