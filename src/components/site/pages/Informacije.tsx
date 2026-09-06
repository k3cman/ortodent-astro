import type { ReactNode } from "react";
import { ArrowRight, Clock, CalendarX, Sparkles, MapPin } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { assetPath } from "@/lib/paths";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./informacije.css";

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
    <div className="oc-site oc-information-page">
      <Header />
      <main>
        <section className="oc-page-intro oc-page-intro--utility">
          <div className="oc-container">
            <div className="oc-page-intro__copy">
              <p className="oc-eyebrow">Informacije za pacijente</p>
              <h1>
                Sve što treba da znate o snimanju zuba.
              </h1>
              <p className="oc-page-intro__lead">
                Vaš vodič kroz proces snimanja u OrtoDentu.
              </p>
            </div>
          </div>
        </section>

        <section className="oc-information-summary" aria-label="Osnovne informacije">
          <div className="oc-container">
            <div className="oc-info-strip oc-information-strip">
              {infoCards.map((card) => (
                <article
                  key={card.title}
                >
                  <card.icon aria-hidden="true" />
                  <div><h2>{card.title}</h2><p>{card.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="oc-information-process">
          <div className="oc-container">
            <header className="oc-section-heading">
              <p className="oc-eyebrow">Proces snimanja</p>
              <h2>Kako izgleda proces?</h2>
              <p>Od dolaska do digitalnog rezultata, bez nepotrebnog čekanja.</p>
            </header>
            <div className="oc-information-process__layout">
              <ol className="oc-information-steps">
                {processSteps.map((step) => (
                  <li
                    key={step.number}
                  >
                    <span>{step.number.padStart(2, "0")}</span>
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </li>
                ))}
              </ol>
              <figure className="oc-information-process__visual">
                <img
                  src={assetPath("/images/informacije.jpg")}
                  alt="Stomatolog u ordinaciji pregleda 3D snimak zuba na tabletu"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="oc-information-faq">
          <div className="oc-container oc-information-faq__layout">
            <header className="oc-section-heading">
              <p className="oc-eyebrow">Korisno pre dolaska</p>
              <h2>Česta pitanja</h2>
              <p>Jasni odgovori na pitanja koja pacijenti najčešće postavljaju.</p>
            </header>
            <div className="oc-information-faq__items">
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                  >
                    <AccordionTrigger>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <FaqAnswerBody text={item.answer} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="oc-information-cta">
          <div className="oc-container">
            <div className="oc-information-cta__inner">
              <div><MapPin aria-hidden="true" /><div><h2>Pronađite centar koji Vam odgovara.</h2><p>Za dolazak nije potrebno zakazivanje.</p></div></div>
              <SiteLink className="oc-button oc-button--primary" to="/lokacije">
                Pronađi lokaciju <ArrowRight aria-hidden="true" />
              </SiteLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Informacije);
