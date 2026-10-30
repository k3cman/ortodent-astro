import { ArrowUpRight, Check } from "lucide-react";
import cbctPatient from "@/assets/home/cbct-patient.webp";
import ServiceHero from "@/components/site/ServiceHero";
import clinicalAnalysis from "@/assets/site/3d/cbct-clinical-analysis-original.png";
import machine from "@/assets/site/3d/cbct-machine.png";
import "./usluge3d.css";
import { useLocale } from "@/components/site/i18n/LocaleContext";

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
      "Analiza koštanih struktura lica i jasan prikaz položaja zuba u vilici i njihovih međusobnih odnosa.",
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

const fieldSizesEn = [
  { size: "S", title: "Small field", dimensions: "5 × 5 cm", description: "A targeted region covering 2–3 adjacent teeth." },
  { size: "M", title: "Medium field", dimensions: "8 × 5 cm", description: "Covers the entire upper or lower jaw." },
  { size: "L", title: "Large field", dimensions: "12 × 9 cm", description: "Covers both jaws." },
];
const useCasesEn = [
  { title: "Implantology and surgery", description: "Safe implant placement and wisdom-tooth extraction with a clear view of nerves, alveolar bone and the maxillary sinus." },
  { title: "Endodontics", description: "Precise visualisation of root canals and inflammatory processes around root tips." },
  { title: "Orthodontics", description: "Analysis of facial bone structures and the relationship between teeth and temporomandibular joints." },
  { title: "Maxillofacial surgery", description: "Detection of trauma, fractures and pathological changes in bone tissue." },
];
const diagnosticBenefitsEn = [
  { title: "Advanced artefact reduction", description: "Intelligent algorithms reduce glare around metal crowns and implants for a clearer view of clinically important regions." },
  { title: "Fast exposure", description: "Scanning takes only a few seconds, reducing motion artefacts and producing a sharp image on the first attempt." },
  { title: "Low-dose Vatech 3D technology", description: "Advanced sensors provide high diagnostic precision with a significantly reduced radiation dose." },
  { title: "Digital availability", description: "All 3D scans are available through OrtoCloud immediately after imaging." },
];

export const Usluge3D = () => {
  const locale = useLocale();
  const en = locale === "en";
  const fields = en ? fieldSizesEn : fieldSizes;
  const cases = en ? useCasesEn : useCases;
  const benefits = en ? diagnosticBenefitsEn : diagnosticBenefits;
  return (
  <div className="od3d">
    <ServiceHero
      eyebrow={en ? "3D diagnostics" : "3D dijagnostika"}
      title={en ? <>3D imaging<br />CBCT</> : <>3D snimanja<br />CBCT</>}
      lead={
        <>
          <p>{en ? "CBCT (cone beam computed tomography) uses a cone-shaped X-ray beam to create a precise three-dimensional view of the teeth, jaws and surrounding anatomical structures. Detailed 3D imaging provides essential information for diagnosis and treatment planning." : "CBCT (Cone beam computed tomography) tehnologija koristi konusni snop rendgenskih zraka za dobijanje preciznog trodimenzionalnog prikaza zuba, vilica i okolnih anatomskih struktura. Detaljan 3D prikaz pruža stomatolozima važne informacije za dijagnostiku i precizno planiranje terapije."}</p>
        </>
      }
      image={imageSrc(cbctPatient)}
      imageAlt={en ? "Patient during a 3D CBCT scan" : "Pacijentkinja tokom 3D CBCT snimanja"}
      imagePosition="72% 43%"
      variant="backdrop"
    />

      <section className="od3d-use-cases od3d-use-cases--standalone">
        <h2>{en ? "Where is 3D imaging used?" : "Gde se sve koristi 3D snimak?"}</h2>
        <ul>
          {cases.map((useCase) => (
            <li key={useCase.title}>
              <strong>{useCase.title}</strong>
              <span>{useCase.description}</span>
            </li>
          ))}
        </ul>
      </section>

    <section className="od3d-fields" aria-labelledby="od3d-fields-title">
      <header className="od3d-section-heading od3d-section-heading--center">
        <p className="od3d-eyebrow">{en ? "Tailored to the area being scanned" : "Prilagođeno regiji snimanja"}</p>
        <h2 id="od3d-fields-title">{en ? "Three fields of view" : "Tri veličine polja snimanja"}</h2>
      </header>

      <div className="od3d-fields__grid">
        {fields.map((field) => (
          <article className="od3d-field-card" key={field.size}>
            <svg className="od3d-field-card__region" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M12 27 Q32 5 52 27 M12 37 Q32 59 52 37" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M18 22v9m9-13v11m10-11v11m9-7v9M18 42v-9m9 13V35m10 11V35m9 7v-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <rect x={field.size === "S" ? 13 : 8} y={field.size === "L" ? 8 : 13} width={field.size === "S" ? 22 : 48} height={field.size === "L" ? 48 : 22} rx="5" className="od3d-field-card__region-highlight" />
            </svg>
            <div>
              <h3>{field.title}</h3>
              <p className="od3d-field-card__dimensions">{field.dimensions}</p>
              <p>{field.description}</p>
            </div>
          </article>
        ))}
      </div>


    </section>

    <section className="od3d-technology" aria-labelledby="od3d-technology-title">
      <div className="od3d-technology__copy">
        <p className="od3d-eyebrow">{en ? "Technology" : "Tehnologija"}</p>
        <h2 id="od3d-technology-title">
          {en ? "Superior Vatech technology for precise diagnostics" : "Superiorna Vatech tehnologija za najprecizniju dijagnostiku"}
        </h2>
        <div className="od3d-technology__intro">
          <p>
            {en ? <>Excellent dental care requires a perfectly clear image. Our centres use latest-generation <strong>Vatech</strong> equipment with specialised high-resolution endodontic programmes.</> : <>Vrhunska stomatološka nega zahteva besprekorno jasnu sliku. Naši centri su opremljeni <strong>Vatech</strong> aparatima najnovije generacije sa specijalizovanim programima za endodonciju visoke rezolucije.</>}
          </p>
          <p>
            {en ? "Leading technology produces crystal-clear images for precise planning of implants, surgical procedures and complex endodontic treatment." : "Korišćenjem vodeće svetske tehnologije dobijaju se kristalno jasni snimci koji su osnova za precizno planiranje implantata, hirurških zahvata i složenih endodontskih tretmana."}
          </p>
        </div>

      </div>

      <figure className="od3d-technology__visual">
        <img
          src={imageSrc(clinicalAnalysis)}
          alt={en ? "Dentist reviewing a three-dimensional CBCT view of the jaw" : "Stomatolog analizira trodimenzionalni CBCT prikaz vilice"}
          loading="lazy"
          decoding="async"
        />
      </figure>

      <ul className="od3d-benefits">
        {benefits.map((benefit) => (
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
    </section>

    <section className="od3d-software" aria-label={en ? "Ez3D-i software and Vatech equipment" : "Ez3D-i softver i Vatech oprema"}>
      <article className="od3d-software-card od3d-software-card--analysis">
        <p className="od3d-eyebrow">Ez3D-i</p>
        <h2>{en ? "Intuitive analysis with Ez3D-i" : "Intuitivna analiza uz Ez3D-i softver"}</h2>
        <p>
          {en ? "Ez3D-i complements Vatech precision by turning complex 3D diagnostics into a clear, straightforward workflow. Its dentist-focused interface enables fast, efficient navigation without complicated training." : "Preciznost Vatech tehnologije upotpunjena je Ez3D-i softverom, koji kompleksnu 3D dijagnostiku pretvara u jednostavan i pregledan proces. Interfejs prilagođen potrebama stomatologa omogućava brzu i efikasnu navigaciju kroz snimak, bez potrebe za komplikovanim obukama."}
        </p>
      </article>

      <article className="od3d-software-card od3d-software-card--tutorial">
        <p className="od3d-eyebrow">{en ? "Support" : "Podrška"}</p>
        <h2>{en ? "Software guidance" : "Savet za rad sa softverom"}</h2>
        <p>
          {en ? "Use short video guides from the official Vatech YouTube channel to become familiar with the software." : "Iskoristite kratka video uputstva sa zvaničnog Vatech YouTube kanala kako biste se lakše upoznali sa funkcionalnostima softvera."}
        </p>
        <a
          className="od3d-tutorial-link"
          href="https://www.youtube.com/watch?v=GThBiiMpnQM"
          target="_blank"
          rel="noopener noreferrer"
        >
          {en ? "Vatech tutorials" : "Vatech tutorijali"} <ArrowUpRight aria-hidden="true" />
        </a>
      </article>

      <img
        className="od3d-software__machine"
        src={imageSrc(machine)}
        alt={en ? "Vatech 3D CBCT unit" : "Vatech 3D CBCT aparat"}
        loading="lazy"
        decoding="async"
      />
    </section>
  </div>
  );
};
