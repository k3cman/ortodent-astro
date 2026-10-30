import { ArrowUpRight, Clock3, Cloud, FileText } from "lucide-react";
import profileImage from "@/assets/site/kefalometrija/kefalometrija-profile.jpg";
import protocolImage from "@/assets/site/kefalometrija/kefalometrija-patient-analysis.webp";
import ServiceHero from "@/components/site/ServiceHero";
import { assetPath } from "@/lib/paths";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const imageSrc = (image: string | { src: string }) =>
  typeof image === "string" ? image : image.src;

const benefits = [
  {
    title: "Vrhunska preciznost i standardizacija",
    description:
      "Digitalni pristup omogućava nepogrešivu analizu, čak i kod najkompleksnijih slučajeva.",
  },
  {
    title: "Brzina i dostupnost",
    description:
      "Rezultati su dostupni na OrtoCloud platformi, gde ostaju trajno sačuvani za poređenje u bilo kojoj fazi lečenja.",
  },
  {
    title: "Stručna kontrola kvaliteta",
    description:
      "Svaku analizu dodatno proverava specijalista ortodoncije.",
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

const protocolsEn = protocols.map((protocol) =>
  protocol === "Tweed-Merrifield itd." ? "Tweed-Merrifield etc." : protocol === "Beograd" ? "Belgrade" : protocol,
);

const benefitsEn = [
  { title: "High precision and standardisation", description: "A digital approach enables reliable analysis even in the most complex cases." },
  { title: "Speed and availability", description: "Results are available through OrtoCloud and remain stored for comparison at any stage of treatment." },
  { title: "Expert quality control", description: "Every analysis is additionally reviewed by an orthodontic specialist." },
  { title: "Streamlined protocols for a new smile", description: "Process automation significantly shortens preparation time, allowing the orthodontist to focus on treatment." },
];

export const UslugeKefa = () => {
  const locale = useLocale();
  const en = locale === "en";
  const localizedBenefits = en ? benefitsEn : benefits;
  return (
  <div className="oc-kefa">
    <div className="oc-container">
      <ServiceHero
        eyebrow={en ? "Cephalometric analyses" : "Kefalometrijske analize"}
        title={en ? "Cephalometric analyses" : "Kefalometrijske analize"}
        lead={
          <p>
            {en ? "Cephalometric analysis provides detailed insight into the relationship between teeth, jaws and facial bone structures, helping orthodontists plan treatment. Instead of manual measurements, we perform the analysis digitally using specialised AudaxCeph software." : "Kefalometrijska analiza pruža detaljan uvid u odnose zuba, vilica i koštanih struktura lica, što ortodontu pomaže u planiranju terapije. Umesto klasičnog manuelnog merenja, analizu radimo digitalno, uz pomoć specijalizovanog softvera AudaxCeph."}
          </p>
        }
        image={imageSrc(profileImage)}
        imageAlt={en ? "Patient profile showing facial bone structures" : "Profil pacijentkinje sa prikazom koštanih struktura lica"}
        imagePosition="right center"
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
        </div>
      </ServiceHero>
    </div>

    <section className="oc-kefa-benefits" aria-labelledby="kefa-benefits-title">
      <div className="oc-container">
        <header className="oc-kefa-section-heading">
          <p className="oc-kefa-eyebrow">{en ? "Precision at every step" : "Preciznost u svakom koraku"}</p>
          <h2 id="kefa-benefits-title">
            {en ? "Why choose our analysis?" : "Zašto je naša analiza pravi izbor?"}
          </h2>
        </header>

        <div className="oc-kefa-benefits__grid">
          {localizedBenefits.map((benefit) => (
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
          <p className="oc-kefa-eyebrow">{en ? "Standardised analyses" : "Standardizovane analize"}</p>
          <h2 id="kefa-protocols-title">{en ? "Available analysis protocols" : "Dostupni protokoli analiza"}</h2>
          <p className="oc-kefa-copy">
            {en ? "We support all standard local and international analyses:" : "Podržavamo sve standardne domaće i svetske analize:"}
          </p>

          <ul className="oc-kefa-protocol-list">
            {(en ? protocolsEn : protocols).map((protocol) => (
              <li key={protocol}>{protocol}</li>
            ))}
          </ul>
        </div>

        <div className="oc-kefa-protocols__visual-column">
          <figure className="oc-kefa-protocols__visual">
            <img
              src={imageSrc(protocolImage)}
              alt={en ? "Lateral cephalogram with digital cephalometric measurements" : "Lateralni kefalogram sa digitalno ucrtanim kefalometrijskim merenjima"}
              width="800"
              height="853"
              loading="eager"
              decoding="async"
            />
          </figure>

          <a
            href={assetPath("/documents/primer-kefalometrijske-analize.pdf")}
            className="oc-kefa-pdf-button"
            target="_blank"
            rel="noreferrer"
            aria-label={en ? "View an example cephalometric analysis PDF" : "Pogledajte primer kefalometrijske analize u PDF formatu"}
            title={en ? "Open the sample PDF in a new tab" : "Otvori PDF primer u novom tabu"}
          >
            <FileText aria-hidden="true" />
            <span>{en ? "View sample analysis" : "Pogledajte primer analize"}</span>
            <strong>PDF</strong>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="oc-container">
        <aside className="oc-kefa-cloud-note" aria-label={en ? "Analysis availability" : "Dostupnost analize"}>
          <div className="oc-kefa-cloud-note__icons" aria-hidden="true">
            <Cloud />
            <Clock3 />
          </div>
          <p>
            {en ? <>KefAnalize are available through the <strong>OrtoCloud</strong> platform within 48 hours of the cephalogram.</> : <>KefAnalize su dostupne putem <strong>OrtoCloud</strong>{" "}platforme, maksimalno 48h od trenutka snimanja kefalograma.</>}
          </p>
        </aside>
      </div>
    </section>

  </div>
  );
};
