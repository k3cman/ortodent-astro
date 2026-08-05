import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Clock, CalendarX, Sparkles, MapPin } from "lucide-react";
import { VersionLink } from "@/components/v1/VersionContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { assetPath } from "@/lib/paths";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Renders FAQ answers: paragraphs separated by blank lines (`\\n\\n`), inline `**bold**`. */
function FaqAnswerBody({ text }: { text: string }) {
  const paragraphs = text.trim().split(/\n\n+/);
  return (
    <div className="space-y-3">
      {paragraphs.map((para, i) => (
        <p key={i} className="leading-relaxed m-0">
          <FaqInlineBold text={para} />
        </p>
      ))}
    </div>
  );
}

function FaqInlineBold({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(text.slice(last, m.index));
    }
    nodes.push(
      <strong key={k++} className="font-semibold text-foreground">
        {m[1]}
      </strong>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  if (nodes.length === 0) {
    return text;
  }
  return <>{nodes}</>;
}

const infoCards = [
  {
    icon: CalendarX,
    title: "Bez zakazivanja",
    text: "Snimanje zuba i vilica se ne zakazuje. Dođite kada Vama odgovara.",
  },
  {
    icon: Clock,
    title: "Trajanje",
    text: "Ceo proces traje između 5 i 15 minuta.",
  },
  {
    icon: Sparkles,
    title: "Priprema",
    text: "Nije potrebna nikakva specijalna priprema pre dolaska.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Dolazak",
    text: "Dođite u naš rendgen centar. Uput nije neophodan, ali je poželjan radi preciznosti.",
  },
  {
    number: "2",
    title: "Prijem",
    text: "Registracija, unos osnovnih podataka i odabir željenog tipa snimka.",
  },
  {
    number: "3",
    title: "Priprema",
    text: "Uklanjanje metalnih predmeta (nakit, naočare) i mobilnih proteza.",
  },
  {
    number: "4",
    title: "Pozicioniranje",
    text: "Precizno pozicioniranje uz pomoć našeg zaposlenog.",
  },
  {
    number: "5",
    title: "Snimanje",
    text: "Sam proces snimanja traje svega nekoliko sekundi.",
  },
  {
    number: "6",
    title: "Rezultati (OrtoCloud)",
    text: "Dobijate korisničko ime i lozinku.",
  },
];

const faqItems = [
  {
    question: "Zašto mi je potreban snimak zuba?",
    answer:
      "Snimak zuba pomaže stomatologu da precizno utvrdi stanje zuba i desni, jer se ne mogu svi problemi videti golim okom. Koristi se za otkrivanje ranog karijesa, procenu stanja korena zuba i kosti, uočavanje upala kao i mnogih drugih stanja. Zahvaljujući snimku, Vaš stomatolog uspostavlja tačnu dijagnozu, planira adekvatan vid lečenja i prati tok samog lečenja.",
  },
  {
    question:
      "Da li mi je potreban uput stomatologa i da li mora biti u papirnoj formi?",
    answer:
      "Uput **nije neophodan, ali je poželjan** jer u njemu Vaš stomatolog precizno navodi vrstu snimka koja mu je potrebna kako biste dobili dijagnostiku koja je za Vas u tom trenutku od najveće koristi.\n\nVaš stomatolog može preko naše OrtoCloud aplikacije poslati i **online uput** direktno digitalnim putem, čime se eliminiše potreba za nošenjem papira i sprečava mogućnost greške ili gubitka uputa.",
  },
  {
    question: "Da li je snimanje zuba bezbedno?",
    answer:
      "**Da, snimanje zuba je bezbedno.** Zahvaljujući digitalnoj tehnologiji, nivo zračenja je sveden na minimum.\n\nDoza koju primite prilikom jednog snimanja ekvivalentna je prirodnom zračenju kojem ste izloženi tokom samo par dana svakodnevnog života.\n\nNaši aparati su najnovije generacije i dizajnirani su da maksimalno štite pacijenta, a uz to se svako snimanje obavlja u skladu sa svim propisanim bezbednosnim merama.",
  },
  {
    question: "Da li deca smeju da snimaju zube?",
    answer:
      "Da, snimanje zuba kod dece je potpuno bezbedno i od velike važnosti u pravilnom planiranju ortodontske terapije (ispravljanja zuba) kao i praćenju rasta zuba i vilica. Kod dece se koriste posebno prilagođene, niže doze zračenja, u skladu sa uzrastom i građom deteta. U našim rendgen centrima, uz savremene digitalne aparate i zaštitne mere, Vaše dete ćemo snimiti bezbolno, brzo i bezbedno.",
  },
  {
    question: "Da li trudnice i dojilje smeju da snimaju zube?",
    answer:
      "Savet je da se sve elektivne stomatološke dijagnostičke i terapijske procedure odlože za period nakon porođaja. Međutim, ukoliko je stomatološko lečenje neophodno, u hitnim slučajevima, snimanje se može uraditi uz dostavljen uput stomatologa i potpisanu saglasnost trudnice. Rendgenski snimci zuba imaju veoma malu dozu zračenja, a uz upotrebu zaštitne olovne kecelje, rizik za Vašu bebu je gotovo nepostojeći. Za dojilje, dijagnostičko snimanje zuba je potpuno bezbedno i ne zahteva prekid u dojenju.",
  },
  {
    question:
      "Kada i na koji način dobijam svoj snimak i kako mogu da ga podelim sa stomatologom?",
    answer:
      "**Vaš snimak je dostupan odmah** nakon završetka procesa snimanja putem Vašeg ličnog OrtoCloud naloga. Stomatolog koji Vas je uputio na snimanje dobija pristup snimku putem naše platforme čim se proces završi.\n\n**Lako deljenje i čuvanje:** Putem aplikacije snimak možete preuzeti na svoj uređaj ili ga proslediti bilo kom drugom stomatologu putem e-maila.\n\n**Fizički format:** Na Vaš zahtev, snimke možemo izraditi i u fizičkom obliku (film ili CD) uz odgovarajuću doplatu.",
  },
  {
    question: "Koliko dugo je snimak zuba validan za stomatologa?",
    answer:
      "Snimak zuba je validan dok se stanje u ustima značajno ne promeni. Za odrasle, često se smatra da je snimak validan 6-12 meseci, dok kod dece, zbog rasta i razvoja zuba, snimci mogu brzo zastareti i obično se rade po potrebi. Ako se pojave novi simptomi ili planira veća intervencija, stomatolog može zatražiti novi snimak.",
  },
];

const Informacije = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sve što treba da znate o snimanju zuba.
              </h1>
              <p className="text-muted-foreground text-lg">
                Vaš vodič kroz proces snimanja u OrtoDentu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Info Cards */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="soft-card p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Kako izgleda proces?
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Steps */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Proces snimanja */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-first lg:order-last"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 shadow-card">
                  <img
                    src={assetPath("/images/informacije.jpg")}
                    alt="Stomatolog u ordinaciji pregleda 3D snimak zuba na tabletu"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Česta pitanja
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 shadow-card"
                  >
                    <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4">
                      <FaqAnswerBody text={item.answer} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Posetite nas još danas.
              </h2>
              <Button variant="raised" size="lg" asChild>
                <VersionLink to="/lokacije">
                  <MapPin className="w-5 h-5 mr-2" />
                  Pronađi lokaciju
                </VersionLink>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

import { withVersion } from "@/components/v1/withVersion";

export default withVersion(Informacije);
