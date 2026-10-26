import OrtoCloudPlatforms from "@/components/OrtoCloudPlatforms";
import ortoCloudLogo from "@/assets/ortocloud/logo.png";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/site/ui/dialog";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { withSiteProviders } from "@/components/site/withSiteProviders";
import { useToast } from "@/components/site/hooks/use-toast";
import heroImage from "@/assets/home/dentist-workstation.webp";
import heroImageSmall from "@/assets/home/dentist-workstation-960.webp";
import supportImage from "@/assets/home/dental-team-support.png";
import cloudPhoto from "@/assets/home/dentist-patient-tablet.png";
import cbctMachine from "@/assets/site/3d/cbct-machine.png";
import kefaImage from "@/assets/site/kefalometrija/kefalometrija-protocol.png";
import "./za-doktore.css";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

const imageSrc = (image: string | { src: string }) =>
  typeof image === "string" ? image : image.src;



const cloudBenefits = [
  "Brz i siguran pristup snimcima",
  "Jednostavno deljenje sa kolegama i pacijentima",
  "Digitalna arhiva na jednom mestu",
  "Pristup sa telefona, tableta ili računara",
];





const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function ZaDoktore() {
  const locale = useLocale();
  const en = locale === "en";
  const benefits = en ? ["Fast and secure access to X-rays", "Easy sharing with colleagues and patients", "A digital archive in one place", "Access from a phone, tablet or computer"] : cloudBenefits;
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
        initial: false,
        animate: "visible",
        transition: { duration: 0.48, ease: "easeOut" as const },
      };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: en ? "Request sent!" : "Zahtev poslat!",
      description: en ? "We will contact you as soon as possible." : "Kontaktiraćemo Vas u najkraćem roku.",
    });
    setFormData({ name: "", clinic: "", address: "", phone: "", email: "" });
  };

  const updateField = (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setFormData((current) => ({ ...current, [field]: event.target.value }));

  return (
    <div className="od-pro">
      <Header currentPath={localizePath("/za-doktore", locale)} />

      <main>
        <section className="od-pro-hero" aria-labelledby="od-pro-title">
          <div className="od-pro-hero__visual">
            <img
              src={imageSrc(heroImage)}
              srcSet={`${imageSrc(heroImageSmall)} 960w, ${imageSrc(heroImage)} 1672w`}
              sizes="100vw"
              alt={en ? "Dentist reviewing digital dental images on a monitor" : "Stomatolog analizira digitalne dentalne snimke na monitoru"}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="od-pro-hero__wash" aria-hidden="true" />
          <div className="oc-container od-pro-hero__inner">
            <motion.div className="od-pro-hero__copy" {...revealProps}>
              <p className="od-pro-eyebrow">{en ? "For dentists" : "Za stomatologe"}</p>
              <h1 id="od-pro-title">{en ? "A partner you can rely on." : "Partner u koga se možete pouzdati."}</h1>
              <p className="od-pro-hero__lead">
                {en ? "Advanced diagnostics, immediately available results and software that saves you time." : "Najsavremenija dijagnostika, rezultati dostupni odmah i softver koji štedi Vaše vreme."}
              </p>
              <div className="od-pro-actions">
                <a className="od-pro-button od-pro-button--primary" href="#partnerstvo">
                  {en ? "Become a partner" : "Postanite partner"} <ArrowRight aria-hidden="true" />
                </a>
                <a
                  className="od-pro-text-link"
                  href="https://cloud.ortodent.rs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {en ? "OrtoCloud login" : "OrtoCloud prijava"} <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="od-pro-section od-pro-cloud" aria-labelledby="od-pro-cloud-title">
          <div className="oc-container od-pro-split od-pro-split--cloud">
            <motion.figure className="od-pro-cloud__visual" {...revealProps}>
              <img
                src={imageSrc(cloudPhoto)}
                alt={en ? "Dentist showing a panoramic X-ray to a patient on a tablet" : "Stomatolog pokazuje pacijentkinji panoramski snimak zuba na tabletu"}
                loading="lazy"
                decoding="async"
              />
            </motion.figure>
            <motion.div className="od-pro-copy od-pro-cloud__copy" {...revealProps}>
              <p className="od-pro-eyebrow">{en ? "Digital workflow" : "Digitalni radni tok"}</p>
              <h2 id="od-pro-cloud-title">{en ? "OrtoCloud: your practice at your fingertips." : "OrtoCloud: Vaša ordinacija na dlanu."}</h2>
              <p className="od-pro-lead">
                {en ? "Send referrals online through the app. View, download or share X-rays with colleagues in one click." : "Šaljite upute online direktno kroz aplikaciju. Pogledajte, preuzmite ili podelite snimke sa kolegama jednim klikom."}
              </p>
              <ul className="od-pro-check-list">
                {benefits.map((benefit) => (
                  <li key={benefit}><Check aria-hidden="true" /> {benefit}</li>
                ))}
              </ul>
              <div className="od-pro-actions">
                <a
                  className="od-pro-button od-pro-button--primary"
                  href="https://cloud.ortodent.rs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {en ? "Log in to OrtoCloud" : "Prijava na OrtoCloud"} <ArrowRight aria-hidden="true" />
                </a>
                <SiteLink className="od-pro-text-link" to="/ortocloud">
                  {en ? "Learn more" : "Saznajte više"} <ArrowRight aria-hidden="true" />
                </SiteLink>
              </div>
            </motion.div>
            <div className="od-pro-store-row od-pro-platforms-row">
              <img src={ortoCloudLogo.src} alt="OrtoCloud Dentamed" className="od-pro-platforms-row__logo" loading="lazy" />
              <OrtoCloudPlatforms />
            </div>
          </div>
        </section>

        <section className="od-pro-section od-pro-services" aria-label={en ? "Diagnostic support for dentists" : "Dijagnostička podrška za stomatologe"}>
          <div className="oc-container od-pro-services__grid">
            <motion.article className="od-pro-service-card" {...revealProps}>
              <div className="od-pro-service-card__copy">
                <p className="od-pro-eyebrow">{en ? "Vatech technology" : "Vatech tehnologija"}</p>
                <h2>{en ? "Precise 3D imaging. Reliable planning." : "Precizan 3D prikaz. Pouzdano planiranje."}</h2>
                <p>{en ? "Latest-generation Vatech units provide detailed views of teeth and jaws for planning implants, surgical procedures and endodontic treatment." : "Vatech aparati najnovije generacije pružaju detaljan uvid u zube i vilice za planiranje implantata, hirurških zahvata i endodontskih tretmana."}</p>
                <SiteLink to="/usluge/3d" className="od-pro-text-link">{en ? "More about 3D imaging" : "Više o 3D snimanju"} <ArrowRight aria-hidden="true" /></SiteLink>
              </div>
              <img src={imageSrc(cbctMachine)} alt={en ? "Vatech unit for 3D CBCT imaging" : "Vatech aparat za 3D CBCT snimanje"} loading="lazy" decoding="async" />
            </motion.article>
            <motion.article className="od-pro-service-card" {...revealProps}>
              <div className="od-pro-service-card__copy">
                <p className="od-pro-eyebrow">KefAnalize</p>
                <h2>{en ? "Digital analyses. Support for orthodontists." : "Digitalne analize. Podrška ortodontu."}</h2>
                <p>{en ? "Our specialist team prepares cephalometric measurements in AudaxCeph under the supervision of an orthodontic specialist. Analyses are available through OrtoCloud." : "Kefalometrijska merenja priprema naš stručni tim uz AudaxCeph softver i nadzor specijalista ortodoncije. Analize su dostupne putem OrtoClouda."}</p>
                <SiteLink to="/usluge/kefalometrija" className="od-pro-text-link">{en ? "More about cephalometric analyses" : "Više o kefalometrijskim analizama"} <ArrowRight aria-hidden="true" /></SiteLink>
              </div>
              <img src={imageSrc(kefaImage)} alt={en ? "Lateral cephalogram and cephalometric tracing" : "Lateralni kefalogram i kefalometrijski crtež"} loading="lazy" decoding="async" />
            </motion.article>
          </div>
        </section>

        <section className="od-pro-section od-pro-software" aria-labelledby="od-pro-software-title">
          <div className="oc-container">
          <div className="od-pro-software__surface">
            <motion.div className="od-pro-copy" {...revealProps}>
              <p className="od-pro-eyebrow">Vatech · Ez3D-i</p>
              <h2 id="od-pro-software-title">{en ? "Powerful software made simple" : "Moćan softver za jednostavan rad"}</h2>
              <p className="od-pro-lead">
                {en ? "Vatech precision is complemented by Ez3D-i software, which turns complex 3D diagnostics into a clear and simple workflow. Its interface is tailored to dentists and saves time in everyday work." : "Preciznost Vatech tehnologije upotpunjena je Ez3D-i softverom, koji kompleksnu 3D dijagnostiku pretvara u jednostavan i pregledan proces. Interfejs je prilagođen potrebama stomatologa i štedi vreme u svakodnevnom radu."}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="od-pro-text-link">{en ? "Vatech tutorials" : "Vatech tutorijali"} <ArrowRight aria-hidden="true" /></button>
                </DialogTrigger>
                <DialogContent className="od-vatech-tutorials">
                  <DialogTitle>{en ? "Vatech tutorials" : "Vatech tutorijali"}</DialogTitle>
                  <DialogDescription>{en ? "Video guides for using Ez3D-i software." : "Video vodiči za rad u Ez3D-i softveru."}</DialogDescription>
                  <div className="od-vatech-tutorials__list">
                    <p><strong>{en ? "Visualisation basics:" : "Osnove vizuelizacije:"}</strong> <a href="https://www.youtube.com/watch?v=GThBiiMpnQM" target="_blank" rel="noopener noreferrer">{en ? "Coronal, sagittal and axial views and VR reconstruction" : "Coronalni, sagitalni, axial preseci i VR rekonstrukcija"}</a></p>
                    <p><strong>{en ? "Panoramic curve tracing:" : "Iscrtavanje panoramske krive:"}</strong> <a href="https://www.youtube.com/watch?v=q7IM6VH3FvY" target="_blank" rel="noopener noreferrer">{en ? "Automatic vs manual tracing" : "Automatsko vs. manuelno iscrtavanje"}</a></p>
                    <p><strong>{en ? "Endodontics:" : "Endodoncija:"}</strong> <a href="https://www.youtube.com/watch?v=vs-ZZgbCPQg" target="_blank" rel="noopener noreferrer">{en ? "Advanced endodontic analysis" : "Napredna Endo analiza"}</a></p>
                    <p><strong>{en ? "Implantology and surgery:" : "Implantologija i hirurgija:"}</strong> <a href="https://www.youtube.com/watch?v=ROfCW5ATpLc" target="_blank" rel="noopener noreferrer">{en ? "Canal mapping" : "Mapiranje kanala"}</a>, <a href="https://www.youtube.com/watch?v=bUgsaJ4Rj1M" target="_blank" rel="noopener noreferrer">{en ? "implant planning" : "planiranje implantata"}</a>, <a href="https://www.youtube.com/watch?v=BVaZJr05lE8" target="_blank" rel="noopener noreferrer">{en ? "bone-density assessment" : "provera gustine kosti"}</a></p>
                  </div>
                </DialogContent>
              </Dialog>
              <p className="od-pro-software__note">
                {en ? "Short video guides covering visualisation basics, the panoramic curve, advanced endodontic analysis and implant planning." : "Kratki video vodiči za osnove vizuelizacije, panoramsku krivu, naprednu endo analizu i planiranje implantata."}
              </p>
            </motion.div>
            <motion.div className="od-pro-video" {...revealProps}>
              <iframe
                src="https://www.youtube.com/embed/Xrgnn9Tw75Q"
                title={en ? "Vatech Ez3D-i — software video presentation" : "Vatech Ez3D-i — video prezentacija softvera"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
          </div>
        </section>

        <section className="od-pro-section od-pro-support" aria-labelledby="od-pro-support-title">
          <div className="oc-container">
            <motion.div className="od-pro-support__inner" {...revealProps}>
              <figure className="od-pro-support__visual">
                <img src={supportImage.src} alt={en ? "Dentist and radiology technician reviewing a dental X-ray" : "Stomatolog i radiološka tehničarka zajedno pregledaju dentalni snimak"} loading="lazy" decoding="async" />
              </figure>
              <div className="od-pro-support__copy">
              <p className="od-pro-eyebrow">{en ? "Support" : "Podrška"}</p>
              <h2 id="od-pro-support-title">{en ? <>Collaboration you can<br />rely on.</> : <>Saradnja na koju možete<br />da se oslonite.</>}</h2>
              <div className="od-pro-support__text">
                <p>{en ? "Quality collaboration goes beyond excellent diagnostics: it means availability, fast communication and dependable support." : "Verujemo da kvalitetna saradnja podrazumeva više od vrhunske dijagnostike – ona podrazumeva dostupnost, brzu komunikaciju i podršku na koju možete da računate u svakom trenutku."}</p>
                <p>{en ? "Our team supports partner dentists from image preparation and targeted anatomical views to installing and using 3D software and OrtoCloud." : "Naš tim pruža kompletnu podršku stomatolozima sa kojima sarađujemo – od izrade snimaka i prikaza ciljanih anatomskih struktura, do instalacije i korišćenja 3D softvera i OrtoCloud platforme."}</p>
                <p>{en ? "For questions, requests or technical issues, we find a solution quickly, without complicated procedures or unnecessary waiting." : "Za sva pitanja, zahteve ili tehničke nedoumice, tu smo da brzo pronađemo rešenje. Bez komplikovanih procedura i nepotrebnog čekanja – bez obzira na to koji naš centar kontaktirate, Vaš zahtev brzo dolazi do odgovarajućeg člana našeg tima."}</p>
              </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="partnerstvo" className="od-pro-section od-pro-partner" aria-labelledby="od-pro-partner-title">
          <div className="oc-container od-pro-partner__layout">
            <motion.div className="od-pro-partner__intro" {...revealProps}>
              <p className="od-pro-eyebrow">{en ? "Partnership" : "Saradnja"}</p>
              <h2 id="od-pro-partner-title">{en ? "Join the OrtoDent network" : "Postanite deo OrtoDent mreže"}</h2>
              <p>
                {en ? "Expand the diagnostic support available to your practice. Complete the short form and our team will contact you with partnership and account information." : "Proširite dijagnostičku podršku Vaše ordinacije. Popunite kratak formular, a naš tim će Vas kontaktirati u najkraćem roku sa informacijama o saradnji i otvaranju naloga."}
              </p>
            </motion.div>

            <motion.form className="od-pro-form" onSubmit={handleSubmit} {...revealProps}>
              <div className="od-pro-form__grid">
                <label>
                  <span>{en ? "Full name *" : "Ime i prezime *"}</span>
                  <input name="name" required maxLength={100} autoComplete="name" value={formData.name} onChange={updateField("name")} />
                </label>
                <label>
                  <span>{en ? "Practice name *" : "Naziv ordinacije *"}</span>
                  <input name="clinic" required maxLength={100} autoComplete="organization" value={formData.clinic} onChange={updateField("clinic")} />
                </label>
                <label>
                  <span>{en ? "Practice address" : "Adresa ordinacije"}</span>
                  <input name="address" maxLength={200} autoComplete="street-address" value={formData.address} onChange={updateField("address")} />
                </label>
                <label>
                  <span>{en ? "Phone *" : "Telefon *"}</span>
                  <input name="phone" type="tel" required maxLength={20} autoComplete="tel" value={formData.phone} onChange={updateField("phone")} />
                </label>
                <label className="od-pro-form__wide">
                  <span>{en ? "Email address *" : "Email adresa *"}</span>
                  <input name="email" type="email" required maxLength={255} autoComplete="email" value={formData.email} onChange={updateField("email")} />
                </label>
              </div>
              <button className="od-pro-button od-pro-button--primary od-pro-form__submit" type="submit">
                {en ? "Send request" : "Pošaljite zahtev"} <ArrowRight aria-hidden="true" />
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
