import ServiceHero from "@/components/site/ServiceHero";
import heroClinician from "@/assets/site/2d/hero-clinician.png";
import {
  KEFALOGRAM_SRC,
  ORTOPANTOMOGRAM_SRC,
  PA_KEFALOGRAM_SRC,
  PARANAZALNE_SUPLJINE_SRC,
  RETROALVEOLARNI_SNIMAK_SRC,
  RETROKORONARNI_SNIMAK_SRC,
  TM_ZGLOBOVI_SRC,
  TOMOGRAFSKA_ANALIZA_SRC,
} from "@/content/usluge/images";
import { useLocale } from "@/components/site/i18n/LocaleContext";

type EditorialCardProps = {
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  fade?: "default" | "weak";
};

const EditorialCard = ({
  title,
  children,
  image,
  imageAlt,
  imageClassName = "",
  fade = "default",
}: EditorialCardProps) => (
  <article className="oc-2d-card oc-2d-card--secondary">
    <div className="oc-2d-card__copy">
      <h2>{title}</h2>
      <div className="oc-2d-card__body">{children}</div>
    </div>
    <div
      className={`oc-2d-visual ${fade === "weak" ? "oc-2d-visual--weak" : ""}`}
    >
      <img
        src={image}
        alt={imageAlt}
        className={imageClassName}
        loading="lazy"
        decoding="async"
      />
    </div>
  </article>
);

const englishCards = [
  { title: "Panoramic X-ray", image: ORTOPANTOMOGRAM_SRC, alt: "Panoramic X-ray of both jaws", text: "A panoramic X-ray provides a comprehensive view of both jaws, all teeth, jaw joints and surrounding structures. It is an important diagnostic tool at the first dental visit and during follow-up examinations." },
  { title: "Lateral cephalogram", image: KEFALOGRAM_SRC, alt: "Lateral cephalogram", text: "A profile X-ray of the head showing bones, teeth and soft tissue. It is essential in orthodontics for assessing jaw relationships, planning fixed-appliance treatment and monitoring progress." },
  { title: "PA (posteroanterior) cephalogram", image: PA_KEFALOGRAM_SRC, alt: "PA cephalogram", text: "A frontal projection used to assess facial symmetry, jaw width and the position of dentoalveolar structures, particularly for orthodontic and surgical planning." },
  { title: "Paranasal sinus X-ray", image: PARANAZALNE_SUPLJINE_SRC, alt: "Paranasal sinus X-ray", text: "Shows the maxillary, frontal and other sinuses, helping assess inflammation, cysts or polyps and the relationship between upper teeth and the sinus cavity." },
  { title: "TMJ X-ray", image: TM_ZGLOBOVI_SRC, alt: "Temporomandibular joint X-ray", text: "Assesses the position and shape of joint surfaces with the mouth open and closed, supporting diagnosis of pain, clicking, trauma and degenerative changes." },
];

export const Usluge2D = () => {
  const locale = useLocale();
  if (locale === "en") return (
    <section className="oc-2d">
      <ServiceHero eyebrow="2D diagnostics" title="2D dental X-rays" lead="Two-dimensional X-rays provide a clear view of teeth, jaws and surrounding anatomical structures. Different scan types are available according to the clinical indication and treatment needs." image={heroClinician.src} imageAlt="Radiology technician reviewing a panoramic dental X-ray" imagePosition="center" variant="backdrop" />
      <div className="oc-2d-stack">
        <article className="oc-2d-card oc-2d-card--retro"><div className="oc-2d-card__copy"><h2>Periapical and bitewing X-rays</h2><div className="oc-2d-card__body"><p>These <strong>intraoral X-rays</strong>, also known as small dental X-rays, provide a detailed view of individual teeth and surrounding structures.</p><p className="oc-2d-detail"><strong>Periapical X-ray (PA):</strong> shows the entire tooth, including crown and root, together with surrounding bone. It is used for root-canal analysis, inflammation at the root tip and post-treatment checks.</p><p className="oc-2d-detail"><strong>Bitewing X-ray:</strong> shows the crowns of upper and lower teeth and is ideal for detecting decay between teeth and early problems around existing fillings and crowns.</p></div></div><div className="oc-2d-retro-images"><figure><div className="oc-2d-film"><img src={RETROALVEOLARNI_SNIMAK_SRC} alt="Periapical dental X-ray" /></div><figcaption>Periapical X-ray</figcaption></figure><figure><div className="oc-2d-film"><img src={RETROKORONARNI_SNIMAK_SRC} alt="Bitewing dental X-ray" /></div><figcaption>Bitewing X-ray</figcaption></figure></div></article>
        <div className="oc-2d-grid">{englishCards.map((card) => <EditorialCard key={card.title} title={card.title} image={card.image} imageAlt={card.alt}><p>{card.text}</p></EditorialCard>)}</div>
        <article className="oc-2d-card oc-2d-card--wide oc-2d-card--analysis"><div className="oc-2d-card__copy"><h2>Tomographic analyses</h2><div className="oc-2d-card__body"><p>Special 2D cross-sections derived from 3D scans provide detailed views of specific regions and bone cross-sections, supporting safe implant planning and placement.</p></div></div><div className="oc-2d-visual oc-2d-visual--wide"><img src={TOMOGRAFSKA_ANALIZA_SRC} alt="Tomographic analysis with cross-sections and measurements" /></div></article>
      </div>
    </section>
  );
  return (
  <section className="oc-2d">
    <ServiceHero
      eyebrow="2D dijagnostika"
      title="2D rendgenski snimci"
      lead="Dvodimenzionalni rendgenski snimci pružaju jasan prikaz zuba, vilica i okolnih anatomskih struktura i predstavljaju važan deo svakodnevne stomatološke dijagnostike. U zavisnosti od indikacije, dostupne su različite vrste snimaka prilagođene potrebama pacijenta i terapije."
      image={heroClinician.src}
      imageAlt="Radiološki tehničar analizira panoramski snimak zuba"
      imagePosition="center"
      variant="backdrop"
    />

    <div className="oc-2d-stack">
      <article className="oc-2d-card oc-2d-card--retro">
        <div className="oc-2d-card__copy">
          <h2>Retroalveolarni i retrokoronarni snimak</h2>
          <div className="oc-2d-card__body">
            <p>
              Ovi <strong>intraoralni snimci</strong> (
              <strong>dentalni radiogrami</strong>) poznati i kao „
              <strong>mali snimci</strong>“ omogućavaju detaljan uvid u
              pojedinačne zube i okolne strukture.
            </p>
            <p className="oc-2d-detail">
              <strong>Retroalveolarni snimak (RA):</strong> Prikazuje ceo zub
              (krunu i koren) sa okolnom kosti. Nezaobilazan je za analizu
              korenskih kanala, uočavanje upalnih procesa na vrhu korena i
              kontrolu nakon terapijskih zahvata.
            </p>
            <p className="oc-2d-detail">
              <strong>Retrokoronarni snimak (RK / Bite-wing):</strong>{" "}
              Prikazuje samo krune zuba gornje i donje vilice, idealan je za
              otkrivanje karijesa u međuzubnim prostorima kao i za ranu
              detekciju problema na spojevima postojećih plombi i krunica.
            </p>
          </div>
        </div>
        <div className="oc-2d-retro-images">
          <figure>
            <div className="oc-2d-film">
              <img
                src={RETROALVEOLARNI_SNIMAK_SRC}
                alt="Retroalveolarni snimak kruna, korena i okolne kosti zuba"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption>Retroalveolarni snimak (RA)</figcaption>
          </figure>
          <figure>
            <div className="oc-2d-film">
              <img
                src={RETROKORONARNI_SNIMAK_SRC}
                alt="Retrokoronarni bite-wing snimak kruna gornje i donje vilice"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption>Retrokoronarni snimak (RK) – bite-wing</figcaption>
          </figure>
        </div>
      </article>

      <article className="oc-2d-card oc-2d-card--wide">
        <div className="oc-2d-card__copy">
          <h2>Ortopantomogram</h2>
          <div className="oc-2d-card__body">
            <p>
              Ortopantomogram („<strong>ortopan</strong>“) je panoramski snimak
              koji pruža sveobuhvatan prikaz obe vilice, svih zuba, viličnih
              zglobova i okolnih struktura. Predstavlja važan deo dijagnostike
              već pri prvoj poseti stomatologu, ali i tokom kontrolnih pregleda.
            </p>
          </div>
        </div>
        <div className="oc-2d-visual oc-2d-visual--wide">
          <img
            src={ORTOPANTOMOGRAM_SRC}
            alt="Panoramski ortopantomogram obe vilice"
            loading="lazy"
            decoding="async"
          />
        </div>
      </article>

      <div className="oc-2d-grid">
        <EditorialCard
          title="Lateralni kefalogram"
          image={KEFALOGRAM_SRC}
          imageAlt="Lateralni kefalogram glave u profilnoj projekciji"
          imageClassName="oc-2d-image--portrait oc-2d-image--profile"
          fade="weak"
        >
          <p>
            Lateralni kefalogram („<strong>telerendgen</strong>“) je profilni
            rendgenski snimak glave koji prikazuje kosti, zube i meka tkiva u
            bočnoj projekciji. Neophodan je u ortodonciji za analizu odnosa
            vilica, planiranje terapije fiksnom protezom i praćenje napretka
            lečenja.
          </p>
        </EditorialCard>

        <EditorialCard
          title="PA (posteroanteriorni) kefalogram"
          image={PA_KEFALOGRAM_SRC}
          imageAlt="PA kefalogram glave iz prednje projekcije"
          imageClassName="oc-2d-image--portrait"
          fade="weak"
        >
          <p>
            PA kefalogram je rendgenski snimak glave iz prednje projekcije.
            Koristi se za procenu simetrije lica, širine vilica i položaja
            dentoalveolarnih struktura. Posebno je koristan kod planiranja
            ortodontskih i hirurških intervencija.
          </p>
        </EditorialCard>

        <EditorialCard
          title="Snimak paranazalnih šupljina"
          image={PARANAZALNE_SUPLJINE_SRC}
          imageAlt="Rendgenski snimak paranazalnih šupljina"
          imageClassName="oc-2d-image--portrait"
        >
          <p>
            Ovaj snimak vizuelizuje maksilarne, frontalne i druge sinuse,
            pružajući uvid u njihovu prohodnost i stanje. Pomaže u dijagnostici
            upalnih procesa, otkrivanju cista ili polipa, kao i u definisanju
            odnosa između zuba gornje vilice i sinusne šupljine pre hirurških
            zahvata.
          </p>
        </EditorialCard>

        <EditorialCard
          title="Snimak TM zglobova"
          image={TM_ZGLOBOVI_SRC}
          imageAlt="Rendgenski snimak temporomandibularnih zglobova"
          imageClassName="oc-2d-image--tm"
        >
          <p>
            Snimak viličnih zglobova omogućava procenu položaja i oblika
            zglobnih površina u otvorenom i zatvorenom položaju usta. Koristi se
            kod pacijenata koji osećaju bol, pucketanje ili nelagodu pri žvakanju,
            kako bi se precizno dijagnostikovala disfunkcija, trauma ili
            degenerativne promene zgloba.
          </p>
        </EditorialCard>
      </div>

      <article className="oc-2d-card oc-2d-card--wide oc-2d-card--analysis">
        <div className="oc-2d-card__copy">
          <h2>Tomografske analize</h2>
          <div className="oc-2d-card__body">
            <p>
              Tomografske analize predstavljaju specijalne 2D preseke izvedene
              iz načinjenih 3D snimaka, kreirane radi detaljnije analize
              specifičnih regija. Ovi precizni prikazi omogućavaju lekaru da
              vidi poprečni presek kosti, što je od presudnog značaja za sigurno
              planiranje i ugradnju implantata.
            </p>
          </div>
        </div>
        <div className="oc-2d-visual oc-2d-visual--wide">
          <img
            src={TOMOGRAFSKA_ANALIZA_SRC}
            alt="Tomografska analiza sa presecima i merenjima"
            loading="lazy"
            decoding="async"
          />
        </div>
      </article>
    </div>


  </section>
  );
};
