import { motion } from "framer-motion";
import { DentalXrayFilmFrame } from "./DentalXrayFilmFrame";
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

export const Usluge2D = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-12 max-w-4xl mx-auto"
  >
    {/* Title */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        2D rendgenski snimci
      </h2>
    </div>

    {/* Section 1: Retroalveolarni */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Retroalveolarni i retrokoronalni snimak
      </h3>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
        <p>
          Ovi <strong className="text-foreground">intraoralni snimci</strong> (
          <strong className="text-foreground">dentalni radiogrami</strong>)
          poznati i kao &quot;
          <strong className="text-foreground">mali snimci</strong>
          &quot; omogućavaju detaljan uvid u pojedinačne zube i okolne
          strukture.
        </p>
        <p>
          -{" "}
          <strong className="text-foreground">
            Retroalveolarni snimak (RA)
          </strong>
          : Prikazuje ceo zub (krunu i koren) sa okolnom kosti. Nezaobilazan je
          za analizu korenskih kanala, uočavanje upalnih procesa na vrhu korena
          i kontrolu nakon terapijskih zahvata.
        </p>
        <p>
          -{" "}
          <strong className="text-foreground">
            Retrokoronalni snimak (RK / Bite-wing)
          </strong>
          : Prikazuje samo krune zuba gornje i donje vilice, idealan je za
          otkrivanje karijesa u međuzubnim prostorima kao i za ranu detekciju
          problema na spojevima postojećih plombi i krunica.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 md:items-stretch">
        <figure className="m-0 flex h-full min-h-0 flex-col gap-2">
          <div className="flex min-h-0 flex-1 flex-col justify-end">
            <DentalXrayFilmFrame
              src={RETROALVEOLARNI_SNIMAK_SRC}
              alt="Retroalveolarni snimak (RA) – rendgenski prikaz kruna, korena i okolne kosti zuba"
              title="Retroalveolarni snimak (RA)"
            />
          </div>
          <figcaption className="text-center text-sm text-muted-foreground leading-snug px-1">
            <span className="font-medium text-foreground">
              Retroalveolarni snimak (RA)
            </span>
          </figcaption>
        </figure>
        <figure className="m-0 flex h-full min-h-0 flex-col gap-2">
          <div className="flex min-h-0 flex-1 flex-col justify-end">
            <DentalXrayFilmFrame
              src={RETROKORONALNI_SNIMAK_SRC}
              alt="Retrokoronalni snimak (RK), bite-wing – rendgenski prikaz kruna gornje i donje vilice"
              title="Retrokoronalni snimak – bite-wing (RK)"
            />
          </div>
          <figcaption className="text-center text-sm text-muted-foreground leading-snug px-1">
            <span className="font-medium text-foreground">
              Retrokoronalni snimak (RK) — bite-wing
            </span>
          </figcaption>
        </figure>
      </div>
    </div>

    {/* Section 2: Ortopantomogram */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Ortopantomogram
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Ortopantomogram ("<strong className="text-foreground">ortopan</strong>")
        je panoramski snimak koji pruža sveobuhvatan prikaz obe vilice, svih
        zuba, viličnih zglobova i okolnih struktura. Zahvaljujući svom većem
        obimu zahvaćenosti dentalnih struktura, ortopantomogram predstavlja
        osnovni alat u početnoj dijagnostici i stomatolozima je često potreban
        već pri prvoj poseti, kao i pri kontrolnim pregledima.
      </p>
      <DentalXrayFilmFrame
        src={ORTOPANTOMOGRAM_SRC}
        alt="Ortopantomogram"
        title="Ortopantomogram"
      />
    </div>

    {/* Section 3: Lateralni & PA Cefalogram */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-stretch">
      <div className="soft-card flex h-full min-h-0 flex-col gap-4 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Lateralni kefalogram
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lateralni kefalogram ("
          <strong className="text-foreground">telerendgen</strong>") je profilni
          rendgenski snimak glave koji prikazuje kosti, zube i meka tkiva u
          bočnoj projekciji. Neophodan je u ortodonciji za analizu odnosa
          vilica, planiranje terapije fiksnom protezom i praćenje napretka
          lečenja.
        </p>
        <div className="mt-auto">
          <DentalXrayFilmFrame
            src={KEFALOGRAM_SRC}
            alt="Kefalogram"
            title="Lateralni kefalogram"
          />
        </div>
      </div>

      <div className="soft-card flex h-full min-h-0 flex-col gap-4 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          PA (posteroanteriorni) kefalogram
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          PA kefalogram je rendgenski snimak glave iz prednje projekcije.
          Koristi se za procenu simetrije lica, širine vilica i položaja
          dentoalveolarnih struktura. Posebno je koristan kod planiranja
          ortodontskih i hirurških intervencija.
        </p>
        <div className="mt-auto">
          <DentalXrayFilmFrame
            src={PA_KEFALOGRAM_SRC}
            alt="Kefalogram"
            title="Lateralni kefalogram"
          />
        </div>
      </div>
    </div>

    {/* Section 4: Paranazalne šupljine & TM zglobovi */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-stretch">
      <div className="soft-card flex h-full min-h-0 flex-col gap-4 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Snimak paranazalnih šupljina
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ovaj snimak vizuelizuje maksilarne, frontalne i druge sinuse,
          pružajući uvid u njihovu prohodnost i stanje. Pomaže u dijagnostici
          upalnih procesa, otkrivanju cista ili polipa, kao i u definisanju
          odnosa između zuba gornje vilice i sinusne šupljine pre hirurških
          zahvata.
        </p>
        <div className="mt-auto">
          <DentalXrayFilmFrame
            src={PARANAZALNE_SUPLJINE_SRC}
            alt="Snimak paranazalnih šupljina"
            title="Snimak paranazalnih šupljina"
          />
        </div>
      </div>

      <div className="soft-card flex h-full min-h-0 flex-col gap-4 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Snimak TM zglobova
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Snimak viličnih zglobova omogućava procenu položaja i oblika zglobnih
          površina u otvorenom i zatvorenom položaju usta. Koristi se kod
          pacijenata koji osećaju bol, pucketanje ili nelagodu pri žvakanju,
          kako bi se precizno dijagnostikovala disfunkcija, trauma ili
          degenerativne promene zgloba.
        </p>
        <div className="mt-auto">
          <DentalXrayFilmFrame
            src={TM_ZGLOBOVI_SRC}
            alt="Snimak TM zglobova"
            title="Snimak TM zglobova"
          />
        </div>
      </div>
    </div>

    {/* Section 5: Tomografske analize */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Tomografske analize
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Tomografske analize predstavljaju specijalne 2D preseke izvučene iz
        načinjenih 3D snimaka kreirane radi detaljnije analize specifičnih
        regija. Ovi precizni prikazi omogućavaju lekaru da vidi poprečni presek
        kosti, što je od presudnog značaja za sigurno planiranje i ugradnju
        implantata.
      </p>
      <div className="overflow-hidden rounded-xl border border-border/40 bg-muted/30">
        <img
          src={TOMOGRAFSKA_ANALIZA_SRC}
          alt="Snimak tomografije sa analizom za implantologiju"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    {/* Bottom Note */}
    <div className="text-center pt-4">
      <p className="text-sm text-muted-foreground">
        2D snimci se otpremaju na{" "}
        <strong className="text-primary">OrtoCloud</strong>, gde su 2 godine
        dostupni Vama i Vašem stomatologu.
      </p>
    </div>
  </motion.div>
);
