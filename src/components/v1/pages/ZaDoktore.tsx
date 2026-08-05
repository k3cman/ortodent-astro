import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Smartphone,
  Cloud,
  Play,
  Apple,
  ArrowRight,
  Check,
  Zap,
  Download,
  Headset,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import tabletXray from "@/assets/internet-pristup2.jpg";
import { useVersion } from "@/components/v1/VersionContext";
import { assetPath, vPath } from "@/lib/paths";

const ZaDoktore = () => {
  const { toast } = useToast();
  const version = useVersion();
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Zahtev poslat!",
      description: "Kontaktiraćemo vas u najkraćem roku.",
    });
    setFormData({ name: "", clinic: "", address: "", phone: "", email: "" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const appStoreBadges = [
    {
      key: "ortocloud",
      top: "Otvorite",
      bottom: "OrtoCloud",
      href: `${vPath(version, "/")}#ortocloud`,
      Icon: Cloud,
    },
    {
      key: "google-play",
      top: "Preuzmite na",
      bottom: "Google Play",
      href: "#",
      Icon: Play,
    },
    {
      key: "app-store",
      top: "Preuzmite u",
      bottom: "App Store",
      href: "#",
      Icon: Apple,
    },
    {
      key: "app-gallery",
      top: "Preuzmite u",
      bottom: "AppGallery",
      href: "#",
      Icon: Smartphone,
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SECTION 1: Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Partner u koga se možete pouzdati.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Najsavremenija dijagnostika, rezultati dostupni odmah, i softver
                koji štedi Vaše vreme.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="glow" size="lg" asChild>
                  <a href="#registration">
                    Postanite partner
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline-soft" size="lg">
                  OrtoCloud Login
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border/40 bg-muted/30 shadow-card">
                <img
                  src={encodeURI(assetPath("/images/image 12 (1).png"))}
                  alt="Savremena stomatološka ordinacija sa dentalnim kreslom i monitorom sa prikazom ortopantomograma"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OrtoCloud */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <div className="soft-card p-8">
                <div className="overflow-hidden rounded-xl border border-border/40 bg-muted/30">
                  <img
                    src={
                      typeof tabletXray === "string"
                        ? tabletXray
                        : tabletXray.src
                    }
                    alt="OrtoCloud na tabletu — pregled dentalnog snimka"
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                OrtoCloud: Vaša ordinacija na dlanu.
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>
                  <strong>Šaljite upute online</strong> direktno kroz
                  aplikaciju. Zaboravite na papire i telefoniranje.
                  <br />
                  <strong>Pogledajte, preuzmite ili podelite</strong> snimke sa
                  kolegama jednim klikom.
                </p>
                <p>
                  Uz web aplikaciju i verzije dostupne na Google Play, App Store
                  i App Gallery, OrtoCloud možete koristiti bilo kada i bilo gde
                  – putem telefona, tableta ili računara.
                </p>
              </div>

              <Button variant="raised" size="lg">
                Saznajte više o OrtoCloudu
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* App store badges — full width row below grid */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-12 w-full border-t border-border/50 pt-10"
          >
            <div className="flex w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:justify-evenly">
              {appStoreBadges.map(({ key, top, bottom, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={`${bottom} — ${top}`}
                  className="inline-flex min-h-[52px] items-center gap-3 rounded-full border-2 border-primary bg-background px-4 py-2.5 text-primary shadow-sm transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Icon
                    className="h-8 w-8 shrink-0 stroke-[1.35]"
                    aria-hidden
                  />
                  <span className="flex flex-col items-start gap-0.5 leading-none">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-primary">
                      {top}
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {bottom}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: 3D/CBCT dijagnostika */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            3D/CBCT dijagnostika
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left - Text */}
            <motion.div {...fadeInUp} className="space-y-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pružite svojim pacijentima najviši standard dijagnostike uz naše
                3D snimke. Naši centri su opremljeni{" "}
                <strong className="text-foreground">Vatech</strong> aparatima
                najnovije generacije sa specijalizovanim programima za
                endodonciju visoke rezolucije. Korišćenjem vodeće svetske
                tehnologije, dobijate kristalno jasne snimke koji omogućavaju
                precizno planiranje implantata, hirurških zahvata i endodontskih
                tretmana.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-primary text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Zašto birati Ortodent?
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Vatech Green CT Tehnologija
                      </strong>{" "}
                      : Maksimalan kvalitet slike uz najnižu dozu zračenja na
                      tržištu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Napredna redukcija artefakata
                      </strong>
                      : Naši aparati koriste inteligentne algoritme za
                      uklanjanje „odsjaja” oko metalnih krunica i implantata,
                      pružajući značajno čistiji snimak regije od vitalnog
                      značaja za endodonciju i protetiku.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Brza ekspozicija
                      </strong>
                      : Proces skeniranja traje svega nekoliko sekundi, čime se
                      eliminišu artefakti pokreta i osigurava savršeno oštra
                      slika iz prvog pokušaja.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Vatech 3D tehnologija niske doze
                      </strong>
                      : Napredni senzori omogućavaju vrhunsku dijagnostičku
                      preciznost uz značajno smanjenu dozu zračenja, pružajući
                      maksimalnu bezbednost za svakog pacijenta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Digitalna dostava
                      </strong>
                      : Svi 3D snimci su Vam dostupni putem OrtoCloud platforme
                      odmah nakon snimanja.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Tomografske analize (slike) */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="overflow-hidden rounded-2xl border border-border/40 bg-muted/30 shadow-card">
                <img
                  src={encodeURI(assetPath("/images/Tomografska analiza.jpg"))}
                  alt="Tomografska analiza — CBCT preseci i merenja u Ez3D-i softveru"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border/40 bg-muted/30 shadow-card">
                <img
                  src={encodeURI(
                    assetPath("/images/Tomografska analiza 2.jpg"),
                  )}
                  alt="Tomografska analiza — dodatni pregled preseka i panorame u Ez3D-i softveru"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Technology & Video */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Moćan softver za jednostavan rad
          </motion.h2>
          <motion.div {...fadeInUp} className="text-center mb-4">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Preciznost Vatech tehnologije upotpunjena je Ez3D-i softverom,
              koji kompleksnu 3D dijagnostiku pretvara u jednostavan proces.
              Softver je dizajniran tako da Vam svi neophodni alati budu
              nadohvat ruke, bez potrebe za dugotrajnim obukama. Napredni
              interfejs je prilagođen potrebama stomatologa, čineći navigaciju
              kroz 3D snimak jednostavnom, brzom i efikasnom.
            </p>
          </motion.div>

          {/* Vatech / Ez3D-i video */}
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/40 bg-black shadow-card">
              <iframe
                src="https://www.youtube.com/embed/Xrgnn9Tw75Q"
                title="Vatech Ez3D-i — video prezentacija softvera"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mb-8 max-w-3xl mx-auto space-y-3 text-center"
          >
            <h3 className="text-lg font-bold text-foreground md:text-xl">
              Vatech tutorijali
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Iskoristite selekciju kratkih video uputstava sa zvaničnih Vatech
              YouTube kanala kako biste se lakše upoznali sa svim
              funkcionalnostima softvera.
            </p>
          </motion.div>

          {/* Software links */}
          <motion.div
            {...fadeInUp}
            className="text-center text-xs text-muted-foreground space-y-1 max-w-3xl mx-auto"
          >
            <p>
              <strong className="text-foreground">Osnove vizuelizacije:</strong>{" "}
              <a
                href="https://www.youtube.com/watch?v=GThBiiMpnQM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coronalni, sagitalni, axial preseci i VR rekonstrukcija
              </a>
            </p>
            <p>
              <strong className="text-foreground">
                Iscrtavanje panoramske krive:
              </strong>{" "}
              <a
                href="https://www.youtube.com/watch?v=q7IM6VH3FvY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Automatsko vs. manuelno iscrtavanje
              </a>
            </p>
            <p>
              <strong className="text-foreground">Endodoncija:</strong>{" "}
              <a
                href="https://www.youtube.com/watch?v=vs-ZZgbCPQg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Napredna Endo analiza
              </a>
            </p>
            <p>
              <strong className="text-foreground">
                Implantologija i hirurgija:
              </strong>{" "}
              Mapiranje kanala, planiranje implantata, provera gustine kosti
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Kefalometrijske Analize */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Kefalometrijske analize
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left - Kefalometrijski tracing (same asset as Usluge / Kefalometrija) */}
            <motion.div {...fadeInUp}>
              <div className="soft-card p-6">
                <div className="overflow-hidden rounded-xl border border-border/40 bg-muted/30">
                  <img
                    src={assetPath("/images/Kef-analize2-400x367.jpg")}
                    alt="Kefalometrijski tracing – lateralni kefalogram sa digitalnim merenjima"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="m-0">
                <img
                  src={assetPath("/images/Kef-analize-logo.png")}
                  alt="KefAnalize dentamed"
                  className="h-9 w-auto max-w-full object-contain object-left md:h-11"
                  loading="eager"
                  decoding="async"
                />
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Zaboravite na ručno ucrtavanje tačaka i trošenje dragocenih sati
                na proračune. Koristeći vodeći svetski softver{" "}
                <strong className="text-foreground">AudaxCeph</strong>, naš
                stručni tim stomatologa priprema Vaše kefalometrijske proračune,
                uz nadzor i ekspertizu specijalista ortodoncije. Na taj način
                dobijate najpreciznije analize koje štede Vaše vreme i
                omogućavaju da se fokusirate na ono što je najbitnije –
                planiranje savršenog osmeha Vaših pacijenata.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  Ključne karakteristike
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Standardizovan kvalitet:
                      </strong>{" "}
                      Doslednost u merenjima bez obzira na kompleksnost slučaja.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Digitalna preciznost:
                      </strong>{" "}
                      Automatska detekcija struktura uz manuelnu proveru svakog
                      parametra.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Kompletna dokumentacija:
                      </strong>{" "}
                      Dobijate spremne dokumente za digitalni karton pacijenta.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tipovi analiza */}
              <div className="space-y-2">
                <h4 className="font-bold text-primary flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" />
                  Tipovi analiza
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                  <div>
                    <p>Beograd</p>
                    <p>Bjork</p>
                    <p>Downs</p>
                    <p>Eastman</p>
                    <p>Eastman</p>
                  </div>
                  <div>
                    <p>Jarabak</p>
                    <p>McLaughlin</p>
                    <p>McNamara</p>
                    <p>Ricketts Ieteral</p>
                    <p>Roth-Jarabak</p>
                  </div>
                  <div>
                    <p>Sassouni plus</p>
                    <p>Schwarz</p>
                    <p>Segner-Hasund</p>
                    <p>Steiner</p>
                    <p>Tweed-Merrifield itd.</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  KefAnalize se otpremaju na OrtoCloud maksimalno 48h od
                  trenutka snimanja kefalograma.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Registration Form */}
      <section id="registration" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Postanite deo OrtoDent mreže
              </h2>
              <p className="text-muted-foreground text-sm">
                Popunite kratak formular, a naš tim će Vas kontaktirati u
                najkraćem mogućem roku kako bismo Vam pružili sve potrebne
                informacije i pomogli Vam oko otvaranja naloga.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="soft-card p-8 space-y-5">
              <div>
                <Label htmlFor="name" className="text-foreground text-sm">
                  Ime i Prezime <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="dr Petar Petrović"
                />
              </div>

              <div>
                <Label htmlFor="clinic" className="text-foreground text-sm">
                  Naziv Ordinacije <span className="text-primary">*</span>
                </Label>
                <Input
                  id="clinic"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.clinic}
                  onChange={(e) =>
                    setFormData({ ...formData, clinic: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="Stomatološka ordinacija..."
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-foreground text-sm">
                  Adresa Ordinacije
                </Label>
                <Input
                  id="address"
                  type="text"
                  maxLength={200}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="Ulica i broj, Grad"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground text-sm">
                  Telefon <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="+381 60 123 4567"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground text-sm">
                  Email Adresa <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="email@ordinacija.rs"
                />
              </div>

              <Button
                type="submit"
                variant="glow"
                size="lg"
                className="w-full mt-4"
              >
                Pošalji zahtev
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

import { withVersion } from "@/components/v1/withVersion";

export default withVersion(ZaDoktore);
