import { motion } from "framer-motion";
import diagnosticScreen from "@/assets/site/3d/cbct-diagnostic-screen.png";
import jaw3d from "@/assets/site/3d/cbct-jaw-3d.png";
import machine from "@/assets/site/3d/cbct-machine.png";
import slicesLeft from "@/assets/site/3d/cbct-slices-left.png";
import slicesRight from "@/assets/site/3d/cbct-slices-right.png";

const imageSrc = (image: string | { src: string }) =>
  typeof image === "string" ? image : image.src;

const fieldSizes = [
  {
    size: "S",
    title: "Malo Polje (5 × 5 cm)",
    description: "Obuhvata ciljanu regiju, zahvatajući 2-3 zuba u nizu.",
  },
  {
    size: "M",
    title: "Srednje Polje (8 × 5 cm)",
    description: "Obuhvata celu gornju ili celu donju vilicu.",
  },
  {
    size: "L",
    title: "Veliko Polje (12 × 9 cm)",
    description: "Obuhvata obe vilice.",
  },
];

const diagnosticBenefits = [
  {
    title: "Napredna redukcija artefakata:",
    description:
      "Naši aparati koriste inteligentne algoritme za uklanjanje „odsjaja” oko metalnih krunica i implantata, pružajući značajno čistiji snimak regije od vitalnog značaja za endodonciju i protetiku.",
  },
  {
    title: "Brza ekspozicija:",
    description:
      "Proces skeniranja traje svega nekoliko sekundi, čime se eliminišu artefakti pokreta i osigurava savršeno oštra slika iz prvog pokušaja.",
  },
  {
    title: "Vatech 3D tehnologija niske doze (Green Technology):",
    description:
      "Napredni senzori omogućavaju vrhunsku dijagnostičku preciznost uz značajno smanjenu dozu zračenja, pružajući maksimalnu bezbednost za svakog pacijenta.",
  },
  {
    title: "Digitalna dostupnost (OrtoCloud):",
    description:
      "Svi 3D snimci su Vam dostupni putem OrtoCloud platforme odmah nakon snimanja.",
  },
];

export const Usluge3D = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="mx-auto max-w-6xl"
  >
    <h1 className="text-3xl font-bold text-foreground md:text-4xl">
      3D/CBCT{" "}
      <span className="text-primary">(Cone Beam Computed Tomography)</span>
    </h1>

    <section className="grid items-center gap-10 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-24">
      <img
        src={imageSrc(diagnosticScreen)}
        alt="3D CBCT dijagnostika na ekranu"
        className="h-auto w-full object-cover"
      />

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-primary md:text-2xl">
          3D/CBCT – Zlatni standard dijagnostike
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          CBCT tehnologija koristi konusni snop rendgenskih zraka za dobijanje
          preciznog 3D prikaza Vaših zuba i vilica. Za razliku od klasičnog
          skenera (CT), CBCT koristi neuporedivo manje doze zračenja, čineći
          snimanje maksimalno bezbednim.
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-primary md:text-xl">
            Gde se sve koristi 3D snimak?
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">
                Implantologija i hirurgija:
              </strong>{" "}
              Sigurno postavljanje implantata i bezbedno vađenje umnjaka uz
              jasan uvid u položaj nerava, strukturu i dimenzije alveolarne
              kosti i odnose sa maksilarnim sinusom.
            </li>
            <li>
              <strong className="text-foreground">Endodoncija:</strong>{" "}
              Precizan prikaz kanala korena zuba i upalnih procesa na vrhu
              korena zuba.
            </li>
            <li>
              <strong className="text-foreground">Ortodoncija:</strong> Analiza
              koštanih struktura lica i jasan prikaz odnosa zuba i viličnih
              zglobova (temporomandibularni zglobovi).
            </li>
            <li>
              <strong className="text-foreground">
                Maksilofacijalna hirurgija:
              </strong>{" "}
              Detekcija trauma, preloma i patoloških promena u koštanom tkivu.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mt-20 bg-muted/20 px-5 py-10 md:px-10">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
        Tri veličine polja
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {fieldSizes.map((field) => (
          <article
            key={field.size}
            className="soft-card flex flex-col items-center gap-4 px-6 py-8 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
              {field.size}
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              {field.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {field.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-muted/50 px-5 py-5 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          3D snimci se izdaju na USB-u i otpremaju na{" "}
          <strong className="text-primary">OrtoCloud</strong>, gde su 15 dana
          dostupni Vama i Vašem stomatologu. Pristup je moguć isključivo putem
          računara.
        </p>
      </div>
    </section>

    <section className="mt-28 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="space-y-3">
        <img
          src={imageSrc(jaw3d)}
          alt="Trodimenzionalni prikaz vilice"
          className="h-auto w-full bg-black object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="grid grid-cols-2 gap-3">
          <img
            src={imageSrc(slicesLeft)}
            alt="Koronarni i aksijalni CBCT presek vilice"
            className="h-full w-full bg-black object-cover"
            loading="lazy"
            decoding="async"
          />
          <img
            src={imageSrc(slicesRight)}
            alt="Sagitalni CBCT presek i 3D prikaz vilice"
            className="h-full w-full bg-black object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="space-y-7 pt-1">
        <h2 className="text-xl font-bold text-primary md:text-2xl">
          Superiorna Vatech tehnologija za najprecizniju dijagnostiku
        </h2>

        <div className="space-y-1 text-sm leading-relaxed text-muted-foreground">
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

        <div className="space-y-5">
          <h3 className="text-sm font-bold text-foreground">
            Zašto odabrati našu dijagnostiku?
          </h3>
          <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            {diagnosticBenefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-4">
                <span className="mt-0.5 font-bold text-primary">✓</span>
                <span>
                  <strong className="text-foreground">{benefit.title}</strong>{" "}
                  {benefit.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="relative mt-16 grid gap-8 pb-56 lg:mt-4 lg:h-[1600px] lg:block lg:pb-0">
      <article className="relative z-20 rounded-xl border border-primary/10 bg-card px-8 py-14 text-center shadow-card lg:absolute lg:left-6 lg:top-44 lg:w-[44%] lg:px-12 lg:py-20">
        <h2 className="text-xl font-bold text-primary md:text-2xl">
          Intuitivna analiza uz Ez3D-i softver
        </h2>
        <p className="mx-auto mt-10 max-w-md text-sm leading-7 text-muted-foreground">
          Preciznost Vatech tehnologije upotpunjena je Ez3D-i softverom, koji
          kompleksnu 3D dijagnostiku pretvara u jednostavan i pregledan proces.
          Sa interfejsom koji je prilagođen potrebama stomatologa, navigacija
          kroz snimak je brza i efikasna, bez potrebe za komplikovanim obukama.
        </p>
      </article>

      <img
        src={imageSrc(machine)}
        alt="Vatech 3D CBCT aparat"
        className="relative z-10 mx-auto h-auto w-full max-w-2xl object-contain lg:absolute lg:right-4 lg:top-0 lg:w-[58%]"
        loading="lazy"
        decoding="async"
      />

      <article className="relative z-30 rounded-xl border border-primary/10 bg-card px-8 py-14 text-center shadow-card lg:absolute lg:left-[36%] lg:top-[510px] lg:w-[39%] lg:px-12 lg:py-16">
        <h2 className="text-xl font-bold text-primary md:text-2xl">
          Savet za rad sa softverom
        </h2>
        <p className="mx-auto mt-10 max-w-sm text-sm leading-7 text-muted-foreground">
          Iskoristite selekciju kratkih video uputstava sa zvaničnih Vatech
          YouTube kanala kako biste se lakše upoznali sa svim funkcionalnostima
          softvera i maksimalno iskoristili potencijal svake dijagnostike.
        </p>
        <button
          type="button"
          className="mt-10 rounded-full border-2 border-primary px-8 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Vatech tutorijali
        </button>
      </article>
    </section>
  </motion.div>
);
