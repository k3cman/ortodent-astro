import { motion } from "framer-motion";
import profileImage from "@/assets/site/kefalometrija/kefalometrija-profile.png";
import protocolImage from "@/assets/site/kefalometrija/kefalometrija-protocol.png";
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
    title: "Efikasniji put do novog osmeha",
    description:
      "Automatizacija procesa značajno skraćuje vreme pripreme, omogućavajući ortodontu da se posveti početku same terapije.",
  },
];

const protocols = [
  ["Beograd", "Bjork", "Downs", "Eastman", "Hasund-Rakosi"],
  ["Jarabak", "McLaughlin", "McNamara", "Ricketts leteral", "Roth-Jarabak"],
  ["Sassouni plus", "Schwarz", "Segner-Hasund", "Steiner", "Tweed-Merrifield itd."],
];

export const UslugeKefa = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="mx-auto max-w-6xl pb-72"
  >
    <h1 className="text-center text-3xl font-bold text-foreground md:text-4xl">
      Kefalometrijske analize
    </h1>

    <section className="mt-20 grid items-center gap-10 lg:mt-28 lg:grid-cols-2 lg:gap-16">
      <img
        src={imageSrc(profileImage)}
        alt="Profil pacijentkinje sa prikazom koštanih struktura lica"
        className="h-auto w-full object-cover"
      />

      <div className="space-y-10">
        <img
          src={assetPath("/images/Kef-analize-logo.png")}
          alt="KefAnalize dentamed"
          className="h-14 w-auto max-w-full object-contain object-left md:h-16"
          loading="eager"
          decoding="async"
        />

        <p className="text-sm leading-relaxed text-muted-foreground">
          Precizno planiranje terapije fiksnom protezom zahteva detaljan uvid u
          odnos zuba i koštanih struktura lica. Tradicionalno, ortodonti ove
          podatke dobijaju manuelnim merenjem razdaljina na kefalogramu, što je
          jedan od najzahtevnijih i greškama najpodložnijih delova procesa
          planiranja terapije.
        </p>

        <p className="text-xl font-bold leading-relaxed text-muted-foreground md:text-2xl">
          Mi Vam nudimo <span className="text-primary">KefAnalize</span> –
          digitalna kefalometrijska merenja i analizu uz korišćenje vodećeg
          svetskog softvera AudaxCeph.
        </p>
      </div>
    </section>

    <section className="mt-12">
      <h2 className="text-xl font-bold text-primary md:text-2xl">
        Zašto je naša analiza pravi izbor?
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-xl border-l-4 border-primary bg-card px-8 py-6 shadow-card"
          >
            <h3 className="text-sm font-bold text-foreground">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="mt-28 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2 className="text-xl font-bold text-primary md:text-2xl">
          Dostupni protokoli analiza
        </h2>
        <p className="mt-6 text-sm text-muted-foreground">
          Podržavamo sve standardne domaće i svetske analize:
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
          {protocols.map((group) => (
            <ul key={group[0]}>
              {group.map((protocol) => (
                <li key={protocol}>{protocol}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-muted/50 px-5 py-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            KefAnalize su dostupne stomatolozima putem{" "}
            <strong className="text-primary">OrtoCloud</strong> platforme,
            maksimalno 48h od trenutka snimanja kefalograma.
          </p>
        </div>
      </div>

      <img
        src={imageSrc(protocolImage)}
        alt="Lateralni kefalogram i kefalometrijski crtež"
        className="h-auto w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </section>
  </motion.div>
);
