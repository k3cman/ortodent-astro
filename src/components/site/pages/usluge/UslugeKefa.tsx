import { ArrowRight, Clock3, Cloud } from "lucide-react";
import profileImage from "@/assets/site/kefalometrija/kefalometrija-profile.png";
import protocolImage from "@/assets/site/kefalometrija/kefalometrija-protocol.png";
import ServiceHero from "@/components/site/ServiceHero";
import { SiteLink } from "@/components/site/SiteLink";
import { assetPath } from "@/lib/paths";

const imageSrc = (image: string | { src: string }) =>
  typeof image === "string" ? image : image.src;

const benefits = [
  {
    title: "Vrhunska preciznost i standardizacija",
    description:
      "Digitalni pristup eliminiše subjektivnost i omogućava nepogrešivu analizu, čak i kod najkompleksnijih slučajeva.",
  },
  {
    title: "Brzina i dostupnost",
    description:
      "Rezultati su dostupni na OrtoCloud platformi, gde ostaju trajno sačuvani za poređenje u bilo kojoj fazi lečenja.",
  },
  {
    title: "Stručna kontrola kvaliteta",
    description:
      "Svaku analizu dodatno proverava naš tim stomatologa uz nadzor i ekspertizu specijalista ortodoncije.",
  },
  {
    title: "Lakši protokoli do novog osmeha",
    description:
      "Automatizacija procesa značajno skraćuje vreme pripreme, omogućavajući ortodontu da se posveti početku same terapije.",
  },
];

const protocols = [
  "Beograd",
  "Bjork",
  "Downs",
  "Eastman",
  "Hasund-Rakosi",
  "Jarabak",
  "McLaughlin",
  "McNamara",
  "Ricketts leteral",
  "Roth-Jarabak",
  "Sassouni plus",
  "Schwarz",
  "Segner-Hasund",
  "Steiner",
  "Tweed-Merrifield itd.",
];

export const UslugeKefa = () => (
  <div className="oc-kefa">
    <div className="oc-container">
      <ServiceHero
        eyebrow="Kefalometrijske analize"
        title="Kefalometrijske analize"
        lead={
          <p>
            Kefalometrijska analiza pruža detaljan uvid u odnose zuba, vilica i koštanih struktura lica, što ortodontu pomaže u planiranju terapije. Umesto klasičnog manuelnog merenja, analizu radimo digitalno, uz pomoć specijalizovanog softvera AudaxCeph.
          </p>
        }
        image={imageSrc(profileImage)}
        imageAlt="Profil pacijentkinje sa prikazom koštanih struktura lica"
        imagePosition="78% 42%"
        variant="backdrop"
      >
        <div className="oc-kefa-hero__extras">
          <img
            src={assetPath("/images/Kef-analize-logo.png")}
            alt="KefAnalize dentamed"
            className="oc-kefa-hero__logo"
            width="300"
            height="61"
            loading="eager"
            decoding="async"
          />
          <div className="oc-kefa-callout">
            <p>
              Mi Vam nudimo <strong>KefAnalize</strong> – digitalna
              kefalometrijska merenja i analizu uz korišćenje vodećeg svetskog
              softvera <span>AudaxCeph</span>.
            </p>
          </div>
        </div>
      </ServiceHero>
    </div>

    <section className="oc-kefa-benefits" aria-labelledby="kefa-benefits-title">
      <div className="oc-container">
        <header className="oc-kefa-section-heading">
          <p className="oc-kefa-eyebrow">Preciznost u svakom koraku</p>
          <h2 id="kefa-benefits-title">
            Zašto je naša analiza pravi izbor?
          </h2>
        </header>

        <div className="oc-kefa-benefits__grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="oc-kefa-benefit">
              <span aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="oc-kefa-protocols" aria-labelledby="kefa-protocols-title">
      <div className="oc-container oc-kefa-protocols__layout">
        <div className="oc-kefa-protocols__copy">
          <p className="oc-kefa-eyebrow">Standardizovane analize</p>
          <h2 id="kefa-protocols-title">Dostupni protokoli analiza</h2>
          <p className="oc-kefa-copy">
            Podržavamo sve standardne domaće i svetske analize:
          </p>

          <ul className="oc-kefa-protocol-list">
            {protocols.map((protocol) => (
              <li key={protocol}>{protocol}</li>
            ))}
          </ul>
        </div>

        <figure className="oc-kefa-protocols__visual">
          <img
            src={imageSrc(protocolImage)}
            alt="Lateralni kefalogram i kefalometrijski crtež"
            width="648"
            height="408"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>

      <div className="oc-container">
        <aside className="oc-kefa-cloud-note" aria-label="Dostupnost analize">
          <div className="oc-kefa-cloud-note__icons" aria-hidden="true">
            <Cloud />
            <Clock3 />
          </div>
          <p>
            KefAnalize su dostupne stomatolozima putem <strong>OrtoCloud</strong>{" "}
            platforme, maksimalno 48h od trenutka snimanja kefalograma.
          </p>
        </aside>
      </div>
    </section>

    <section className="oc-kefa-cta" aria-labelledby="kefa-cta-title">
      <div className="oc-container">
        <div className="oc-kefa-cta__surface">
          <div>
            <p className="oc-kefa-eyebrow">OrtoCloud</p>
            <h2 id="kefa-cta-title">
              Pošaljite kefalogram
              <span>i dobijte analizu putem OrtoClouda</span>
            </h2>
            <p className="oc-kefa-copy">
              Digitalna kefalometrijska merenja i analiza uz korišćenje vodećeg
              svetskog softvera AudaxCeph.
            </p>
          </div>

          <div className="oc-kefa-cta__actions">
            <SiteLink
              to="/za-doktore#partnerstvo"
              className="oc-button oc-button--primary"
            >
              Pošalji snimak <ArrowRight aria-hidden="true" />
            </SiteLink>
            <SiteLink to="/ortocloud" className="oc-text-link">
              Saznajte više o OrtoCloudu <ArrowRight aria-hidden="true" />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  </div>
);
