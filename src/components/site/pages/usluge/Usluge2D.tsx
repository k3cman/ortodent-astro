import ServiceHero from "@/components/site/ServiceHero";
import heroClinician from "@/assets/site/2d/hero-clinician.png";
import {
  KEFALOGRAM_SRC,
  ORTOPANTOMOGRAM_SRC,
  PA_KEFALOGRAM_SRC,
  PARANAZALNE_SUPLJINE_SRC,
  RETROALVEOLARNI_SNIMAK_SRC,
  RETROKORONALNI_SNIMAK_SRC,
  TM_ZGLOBOVI_SRC,
  TOMOGRAFSKA_ANALIZA_SRC,
} from "@/content/usluge/images";

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

export const Usluge2D = () => (
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
          <h2>Retroalveolarni i retrokoronalni snimak</h2>
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
              <strong>Retrokoronalni snimak (RK / Bite-wing):</strong>{" "}
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
                src={RETROKORONALNI_SNIMAK_SRC}
                alt="Retrokoronalni bite-wing snimak kruna gornje i donje vilice"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption>Retrokoronalni snimak (RK) – bite-wing</figcaption>
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
              zglobova i okolnih struktura. Zahvaljujući svom većem obimu
              zahvaćenosti dentalnih struktura, ortopantomogram predstavlja
              osnovni alat u početnoj dijagnostici i stomatolozima je često
              potreban već pri prvoj poseti, kao i pri kontrolnim pregledima.
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
