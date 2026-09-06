import { motion, useReducedMotion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  Check,
  Cloud,
  Headphones,
  MonitorSmartphone,
  Play,
  Send,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { withSiteProviders } from "@/components/site/withSiteProviders";
import { useToast } from "@/components/site/hooks/use-toast";
import heroImage from "@/assets/home/hero-clinician.webp";
import heroImageSmall from "@/assets/home/hero-clinician-960.webp";
import cloudMockup from "@/assets/ortocloud/hero-mockup.png";
import diagnosticScreen from "@/assets/site/3d/cbct-diagnostic-screen.png";
import kefaImage from "@/assets/site/kefalometrija/kefalometrija-protocol.png";
import { assetPath } from "@/lib/paths";
import "./za-doktore.css";

const imageSrc = (image: string | { src: string }) =>
  typeof image === "string" ? image : image.src;

const capabilities = [
  {
    title: "Digitalni pristup snimcima",
    description: "Bez instalacija, uvek dostupno kroz OrtoCloud.",
    Icon: Cloud,
  },
  {
    title: "Brza razmena nalaza",
    description: "Nalazi i snimci dostupni odmah nakon obrade.",
    Icon: Send,
  },
  {
    title: "Podrška za ordinacije",
    description: "Stručna podrška našeg tima kada Vam je potrebna.",
    Icon: Headphones,
  },
  {
    title: "Pristup sa svih uređaja",
    description: "Telefon, tablet ili računar — gde god da radite.",
    Icon: MonitorSmartphone,
  },
];

const cloudBenefits = [
  "Brz i siguran pristup snimcima",
  "Jednostavno deljenje sa kolegama i pacijentima",
  "Digitalna arhiva na jednom mestu",
  "Pristup sa telefona, tableta ili računara",
];

const cbctBenefits = [
  {
    title: "Vatech Green CT tehnologija",
    description:
      "Visok kvalitet slike i tehnologija niske doze za pouzdano planiranje terapije.",
  },
  {
    title: "Napredna redukcija artefakata",
    description:
      "Čistiji prikaz regije oko metalnih krunica i implantata.",
  },
  {
    title: "Brza ekspozicija",
    description:
      "Skeniranje traje svega nekoliko sekundi i smanjuje artefakte pokreta.",
  },
  {
    title: "Digitalna dostava",
    description:
      "Svi 3D snimci dostupni su putem OrtoCloud platforme odmah nakon snimanja.",
  },
];

const protocols = [
  "Beograd",
  "Bjork",
  "Downs",
  "Eastman",
  "Hasund-Rakosi",
  "Jarabak",
  "McLaughlin",
  "McNamara",
  "Ricketts leteral",
  "Roth-Jarabak",
  "Sassouni plus",
  "Schwarz",
  "Segner-Hasund",
  "Steiner",
  "Tweed-Merrifield itd.",
];

const appBadges = [
  { label: "OrtoCloud", detail: "Otvorite", Icon: Cloud },
  { label: "Google Play", detail: "Dostupno na", Icon: Play },
  { label: "App Store", detail: "Preuzmite u", Icon: Apple },
  { label: "AppGallery", detail: "Istraži u", Icon: Smartphone },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function ZaDoktore() {
  const reduceMotion = useReducedMotion();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    address: "",
    phone: "",
    email: "",
  });

  const revealProps = reduceMotion
    ? {}
    : {
        variants: reveal,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.16 },
        transition: { duration: 0.48, ease: "easeOut" as const },
      };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Zahtev poslat!",
      description: "Kontaktiraćemo Vas u najkraćem roku.",
    });
    setFormData({ name: "", clinic: "", address: "", phone: "", email: "" });
  };

  const updateField = (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setFormData((current) => ({ ...current, [field]: event.target.value }));

  return (
    <div className="od-pro">
      <Header currentPath="/za-doktore" />

      <main>
        <section className="od-pro-hero" aria-labelledby="od-pro-title">
          <div className="od-pro-hero__visual">
            <img
              src={imageSrc(heroImage)}
              srcSet={`${imageSrc(heroImageSmall)} 960w, ${imageSrc(heroImage)} 1672w`}
              sizes="100vw"
              alt="Stomatološkinja u radiološkom centru prikazuje digitalni snimak zuba"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="od-pro-hero__wash" aria-hidden="true" />
          <div className="oc-container od-pro-hero__inner">
            <motion.div className="od-pro-hero__copy" {...revealProps}>
              <p className="od-pro-eyebrow">Za stomatologe</p>
              <h1 id="od-pro-title">Partner u koga se možete pouzdati.</h1>
              <p className="od-pro-hero__lead">
                Najsavremenija dijagnostika, rezultati dostupni odmah i softver
                koji štedi Vaše vreme.
              </p>
              <div className="od-pro-actions">
                <a className="od-pro-button od-pro-button--primary" href="#partnerstvo">
                  Postanite partner <ArrowRight aria-hidden="true" />
                </a>
                <SiteLink className="od-pro-text-link" to="/ortocloud">
                  OrtoCloud Login <ArrowRight aria-hidden="true" />
                </SiteLink>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="oc-container od-pro-capabilities-wrap">
          <motion.section
            className="od-pro-capabilities"
            aria-label="Prednosti saradnje sa OrtoDentom"
            {...revealProps}
          >
            {capabilities.map(({ title, description, Icon }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </motion.section>
        </div>

        <section className="od-pro-section od-pro-cloud" aria-labelledby="od-pro-cloud-title">
          <div className="oc-container od-pro-split od-pro-split--cloud">
            <motion.figure className="od-pro-cloud__visual" {...revealProps}>
              <img
                src={imageSrc(cloudMockup)}
                alt="OrtoCloud platforma na laptopu i mobilnom telefonu"
                loading="lazy"
                decoding="async"
              />
            </motion.figure>
            <motion.div className="od-pro-copy" {...revealProps}>
              <p className="od-pro-eyebrow">Digitalni radni tok</p>
              <h2 id="od-pro-cloud-title">OrtoCloud: Vaša ordinacija na dlanu.</h2>
              <p className="od-pro-lead">
                Šaljite upute online direktno kroz aplikaciju. Pogledajte,
                preuzmite ili podelite snimke sa kolegama jednim klikom.
              </p>
              <ul className="od-pro-check-list">
                {cloudBenefits.map((benefit) => (
                  <li key={benefit}><Check aria-hidden="true" /> {benefit}</li>
                ))}
              </ul>
              <div className="od-pro-actions">
                <SiteLink className="od-pro-button od-pro-button--primary" to="/ortocloud">
                  Prijava na OrtoCloud <ArrowRight aria-hidden="true" />
                </SiteLink>
                <SiteLink className="od-pro-text-link" to="/ortocloud">
                  Saznajte više <ArrowRight aria-hidden="true" />
                </SiteLink>
              </div>
              <div className="od-pro-store-row" aria-label="OrtoCloud platforme">
                {appBadges.map(({ label, detail, Icon }) => (
                  <span key={label} className="od-pro-store-badge">
                    <Icon aria-hidden="true" />
                    <span><small>{detail}</small><strong>{label}</strong></span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="od-pro-section od-pro-cbct" aria-labelledby="od-pro-cbct-title">
          <div className="oc-container od-pro-split od-pro-split--cbct">
            <motion.div className="od-pro-copy" {...revealProps}>
              <p className="od-pro-eyebrow">3D dijagnostika</p>
              <h2 id="od-pro-cbct-title">3D / CBCT dijagnostika</h2>
              <p className="od-pro-lead">
                Naši centri su opremljeni Vatech aparatima najnovije generacije
                za precizno planiranje implantata, hirurških zahvata i složenih
                endodontskih tretmana.
              </p>
              <ul className="od-pro-benefits">
                {cbctBenefits.map((benefit) => (
                  <li key={benefit.title}>
                    <span className="od-pro-benefits__mark"><Check aria-hidden="true" /></span>
                    <span><strong>{benefit.title}</strong>{benefit.description}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.figure className="od-pro-diagnostic" {...revealProps}>
              <img
                src={imageSrc(diagnosticScreen)}
                alt="CBCT dijagnostički prikaz u Ez3D-i softveru"
                loading="lazy"
                decoding="async"
              />
            </motion.figure>
          </div>
        </section>

        <section className="od-pro-section od-pro-software" aria-labelledby="od-pro-software-title">
          <div className="oc-container od-pro-software__surface">
            <motion.div className="od-pro-copy" {...revealProps}>
              <p className="od-pro-eyebrow">Vatech · Ez3D-i</p>
              <h2 id="od-pro-software-title">Moćan softver za jednostavan rad</h2>
              <p className="od-pro-lead">
                Preciznost Vatech tehnologije upotpunjena je Ez3D-i softverom,
                koji kompleksnu 3D dijagnostiku pretvara u jednostavan i
                pregledan proces. Interfejs je prilagođen potrebama stomatologa
                i štedi vreme u svakodnevnom radu.
              </p>
              <a
                className="od-pro-text-link"
                href="https://www.youtube.com/watch?v=GThBiiMpnQM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vatech tutorijali <ArrowRight aria-hidden="true" />
              </a>
              <p className="od-pro-software__note">
                Kratki video vodiči za osnove vizuelizacije, panoramsku krivu,
                naprednu endo analizu i planiranje implantata.
              </p>
            </motion.div>
            <motion.div className="od-pro-video" {...revealProps}>
              <iframe
                src="https://www.youtube.com/embed/Xrgnn9Tw75Q"
                title="Vatech Ez3D-i — video prezentacija softvera"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        <section className="od-pro-section od-pro-kefa" aria-labelledby="od-pro-kefa-title">
          <div className="oc-container od-pro-split od-pro-split--kefa">
            <motion.figure className="od-pro-kefa__visual" {...revealProps}>
              <img
                src={imageSrc(kefaImage)}
                alt="Lateralni kefalogram i kefalometrijski crtež"
                loading="lazy"
                decoding="async"
              />
            </motion.figure>
            <motion.div className="od-pro-copy" {...revealProps}>
              <p className="od-pro-eyebrow">KefAnalize</p>
              <h2 id="od-pro-kefa-title">Kefalometrijske analize</h2>
              <img
                className="od-pro-kefa__logo"
                src={assetPath("/images/Kef-analize-logo.png")}
                alt="KefAnalize dentamed"
                loading="lazy"
                decoding="async"
              />
              <p className="od-pro-lead">
                Digitalna kefalometrijska merenja priprema naš stručni tim uz
                AudaxCeph softver i nadzor specijalista ortodoncije. Analize su
                standardizovane, spremne za planiranje terapije i dostupne na
                OrtoCloudu maksimalno 48h od snimanja kefalograma.
              </p>
              <div className="od-pro-protocols">
                <h3>Podržani standardi</h3>
                <ul>{protocols.map((protocol) => <li key={protocol}>{protocol}</li>)}</ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="partnerstvo" className="od-pro-section od-pro-partner" aria-labelledby="od-pro-partner-title">
          <div className="oc-container od-pro-partner__layout">
            <motion.div className="od-pro-partner__intro" {...revealProps}>
              <p className="od-pro-eyebrow">Saradnja</p>
              <h2 id="od-pro-partner-title">Postanite deo OrtoDent mreže</h2>
              <p>
                Proširite dijagnostičku podršku Vaše ordinacije. Popunite
                kratak formular, a naš tim će Vas kontaktirati u najkraćem roku
                sa informacijama o saradnji i otvaranju naloga.
              </p>
            </motion.div>

            <motion.form className="od-pro-form" onSubmit={handleSubmit} {...revealProps}>
              <div className="od-pro-form__grid">
                <label>
                  <span>Ime i prezime *</span>
                  <input name="name" required maxLength={100} autoComplete="name" value={formData.name} onChange={updateField("name")} />
                </label>
                <label>
                  <span>Naziv ordinacije *</span>
                  <input name="clinic" required maxLength={100} autoComplete="organization" value={formData.clinic} onChange={updateField("clinic")} />
                </label>
                <label>
                  <span>Adresa ordinacije</span>
                  <input name="address" maxLength={200} autoComplete="street-address" value={formData.address} onChange={updateField("address")} />
                </label>
                <label>
                  <span>Telefon *</span>
                  <input name="phone" type="tel" required maxLength={20} autoComplete="tel" value={formData.phone} onChange={updateField("phone")} />
                </label>
                <label className="od-pro-form__wide">
                  <span>Email adresa *</span>
                  <input name="email" type="email" required maxLength={255} autoComplete="email" value={formData.email} onChange={updateField("email")} />
                </label>
              </div>
              <button className="od-pro-button od-pro-button--primary od-pro-form__submit" type="submit">
                Pošalji zahtev <ArrowRight aria-hidden="true" />
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default withSiteProviders(ZaDoktore);
