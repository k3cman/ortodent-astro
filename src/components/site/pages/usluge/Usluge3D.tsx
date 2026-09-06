import { ArrowUpRight, Check, Cloud } from "lucide-react";
import cbctPatient from "@/assets/home/cbct-patient.webp";
import ServiceHero from "@/components/site/ServiceHero";
import diagnosticScreen from "@/assets/site/3d/cbct-diagnostic-screen.png";
import jaw3d from "@/assets/site/3d/cbct-jaw-3d.png";
import machine from "@/assets/site/3d/cbct-machine.png";
import slicesLeft from "@/assets/site/3d/cbct-slices-left.png";
import slicesRight from "@/assets/site/3d/cbct-slices-right.png";
import "./usluge3d.css";

const imageSrc = (image: string | { src: string }) =>
  typeof image === "string" ? image : image.src;

const fieldSizes = [
  {
    size: "S",
    title: "Malo polje",
    dimensions: "5 × 5 cm",
    description: "Obuhvata ciljanu regiju, zahvatajući 2–3 zuba u nizu.",
  },
  {
    size: "M",
    title: "Srednje polje",
    dimensions: "8 × 5 cm",
    description: "Obuhvata celu gornju ili celu donju vilicu.",
  },
  {
    size: "L",
    title: "Veliko polje",
    dimensions: "12 × 9 cm",
    description: "Obuhvata obe vilice.",
  },
];

const useCases = [
  {
    title: "Implantologija i hirurgija",
    description:
      "Sigurno postavljanje implantata i bezbedno vađenje umnjaka uz jasan uvid u položaj nerava, strukturu i dimenzije alveolarne kosti i odnose sa maksilarnim sinusom.",
  },
  {
    title: "Endodoncija",
    description:
      "Precizan prikaz kanala korena zuba i upalnih procesa na vrhu korena zuba.",
  },
  {
    title: "Ortodoncija",
    description:
      "Analiza koštanih struktura lica i jasan prikaz odnosa zuba i temporomandibularnih zglobova.",
  },
  {
    title: "Maksilofacijalna hirurgija",
    description:
      "Detekcija trauma, preloma i patoloških promena u koštanom tkivu.",
  },
];

const diagnosticBenefits = [
  {
    title: "Napredna redukcija artefakata",
    description:
      "Inteligentni algoritmi uklanjaju „odsjaj” oko metalnih krunica i implantata i pružaju čistiji prikaz regije važne za endodonciju i protetiku.",
  },
  {
    title: "Brza ekspozicija",
    description:
      "Skeniranje traje svega nekoliko sekundi, čime se smanjuju artefakti pokreta i dobija oštra slika iz prvog pokušaja.",
  },
  {
    title: "Vatech 3D tehnologija niske doze",
    description:
      "Napredni senzori omogućavaju visoku dijagnostičku preciznost uz značajno smanjenu dozu zračenja.",
  },
  {
    title: "Digitalna dostupnost",
    description:
      "Svi 3D snimci su dostupni putem OrtoCloud platforme odmah nakon snimanja.",
  },
];

export const Usluge3D = () => (
  <div className="od3d">
    <ServiceHero
      eyebrow="3D dijagnostika"
      title="3D snimanja / CBCT"
      lead={
        <p>
          CBCT tehnologija koristi konusni snop rendgenskih zraka za dobijanje
          preciznog 3D prikaza Vaših zuba i vilica. Za razliku od klasičnog
          skenera (CT), CBCT koristi neuporedivo manje doze zračenja, čineći
          snimanje maksimalno bezbednim.
        </p>
      }
      image={imageSrc(cbctPatient)}
      imageAlt="Pacijentkinja tokom 3D CBCT snimanja"
      imagePosition="center 43%"
    />

      <section className="od3d-use-cases od3d-use-cases--standalone">
        <h2>Gde se sve koristi 3D snimak?</h2>
        <ul>
          {useCases.map((useCase) => (
            <li key={useCase.title}>
              <strong>{useCase.title}</strong>
              <span>{useCase.description}</span>
            </li>
          ))}
        </ul>
      </section>

    <section className="od3d-fields" aria-labelledby="od3d-fields-title">
      <header className="od3d-section-heading od3d-section-heading--center">
        <p className="od3d-eyebrow">Prilagođeno regiji snimanja</p>
        <h2 id="od3d-fields-title">Tri veličine polja snimanja</h2>
      </header>

      <div className="od3d-fields__grid">
        {fieldSizes.map((field) => (
          <article className="od3d-field-card" key={field.size}>
            <span className="od3d-field-card__marker" aria-hidden="true">
              {field.size}
            </span>
            <div>
              <h3>{field.title}</h3>
              <p className="od3d-field-card__dimensions">{field.dimensions}</p>
              <p>{field.description}</p>
            </div>
          </article>
        ))}
      </div>

      <aside className="od3d-cloud-note" aria-label="Informacije o OrtoCloud platformi">
        <Cloud aria-hidden="true" />
        <p>
          3D snimci se izdaju na USB-u i otpremaju na <strong>OrtoCloud</strong>,
          gde su 15 dana dostupni Vama i Vašem stomatologu. Pristup je moguć
          isključivo putem računara.
        </p>
      </aside>
    </section>

    <section className="od3d-technology" aria-labelledby="od3d-technology-title">
      <div className="od3d-technology__copy">
        <p className="od3d-eyebrow">Tehnologija</p>
        <h2 id="od3d-technology-title">
          Superiorna Vatech tehnologija za najprecizniju dijagnostiku
        </h2>
        <div className="od3d-technology__intro">
          <p>
            Vrhunska stomatološka nega zahteva besprekorno jasnu sliku. Naši
            centri su opremljeni <strong>Vatech</strong> aparatima najnovije
            generacije sa specijalizovanim programima za endodonciju visoke
            rezolucije.
          </p>
          <p>
            Korišćenjem vodeće svetske tehnologije dobijaju se kristalno jasni
            snimci koji su osnova za precizno planiranje implantata, hirurških
            zahvata i složenih endodontskih tretmana.
          </p>
        </div>

        <ul className="od3d-benefits">
          {diagnosticBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="od3d-benefits__icon">
                <Check aria-hidden="true" />
              </span>
              <span>
                <strong>{benefit.title}</strong>
                {benefit.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="od3d-collage" aria-label="Primeri CBCT dijagnostičkih prikaza">
        <img
          className="od3d-collage__screen"
          src={imageSrc(diagnosticScreen)}
          alt="CBCT dijagnostički prikaz u Ez3D-i softveru"
          loading="lazy"
          decoding="async"
        />
        <img
          className="od3d-collage__jaw"
          src={imageSrc(jaw3d)}
          alt="Trodimenzionalni prikaz vilice"
          loading="lazy"
          decoding="async"
        />
        <div className="od3d-collage__slices">
          <img
            src={imageSrc(slicesLeft)}
            alt="Koronarni i aksijalni CBCT presek vilice"
            loading="lazy"
            decoding="async"
          />
          <img
            src={imageSrc(slicesRight)}
            alt="Sagitalni CBCT presek i 3D prikaz vilice"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <section className="od3d-software" aria-label="Ez3D-i softver i Vatech oprema">
      <article className="od3d-software-card od3d-software-card--analysis">
        <p className="od3d-eyebrow">Ez3D-i</p>
        <h2>Intuitivna analiza uz Ez3D-i softver</h2>
        <p>
          Preciznost Vatech tehnologije upotpunjena je Ez3D-i softverom, koji
          kompleksnu 3D dijagnostiku pretvara u jednostavan i pregledan proces.
          Interfejs prilagođen potrebama stomatologa omogućava brzu i efikasnu
          navigaciju kroz snimak, bez potrebe za komplikovanim obukama.
        </p>
      </article>

      <article className="od3d-software-card od3d-software-card--tutorial">
        <p className="od3d-eyebrow">Podrška</p>
        <h2>Savet za rad sa softverom</h2>
        <p>
          Iskoristite kratka video uputstva sa zvaničnog Vatech YouTube kanala
          kako biste se lakše upoznali sa funkcionalnostima softvera.
        </p>
        <a
          className="od3d-tutorial-link"
          href="https://www.youtube.com/watch?v=GThBiiMpnQM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vatech tutorijali <ArrowUpRight aria-hidden="true" />
        </a>
      </article>

      <img
        className="od3d-software__machine"
        src={imageSrc(machine)}
        alt="Vatech 3D CBCT aparat"
        loading="lazy"
        decoding="async"
      />
    </section>
  </div>
);
