import { useRef, useState, type KeyboardEvent } from "react";
import { Box, Check, MonitorSmartphone, Share2, ShieldCheck } from "lucide-react";
import heroMockup from "@/assets/ortocloud/hero-mockup.png";
import patientPhone from "@/assets/home/ortocloud-phone.webp";

type Experience = "patients" | "dentists";

const capabilities = [
  { icon: MonitorSmartphone, title: "Sa svih uređaja", text: "Pristupite OrtoCloudu sa računara, tableta ili telefona." },
  { icon: Share2, title: "Deljenje bez komplikacija", text: "Podelite snimke sa stomatologom ili drugim stručnjakom." },
  { icon: ShieldCheck, title: "Maksimalna sigurnost", text: "Vaši podaci se čuvaju prema visokim standardima zaštite." },
] as const;

const experiences = {
  patients: {
    eyebrow: "Pacijenti",
    title: <>Vaši snimci bez<br />CD-ova i papira.</>,
    text: "Svi vaši snimci su na jednom mestu, uvek dostupni i spremni za deljenje sa stomatologom.",
    features: ["Digitalni karton pacijenta na jednom mestu", "Pristup starim i novim snimcima", "Jednostavno deljenje sa stomatologom", "Arhiva dostupna 24/7"],
    image: patientPhone.src,
    imageAlt: "OrtoCloud prijava na mobilnom telefonu",
    imageClass: "odc-experience__image--patient",
  },
  dentists: {
    eyebrow: "Stomatolozi i ordinacije",
    title: <>Nalazi tamo gde<br />ih očekujete.</>,
    text: "Snimci pacijenata stižu direktno u digitalni karton i ostaju dostupni za pregled i konsultacije.",
    features: ["Digitalni karton pacijenta na jednom mestu", "Konsultacije sa kolegama putem deljenja", "Arhiva svih pacijenata dostupna 24/7"],
    image: heroMockup.src,
    imageAlt: "OrtoCloud pregled dentalnog snimka na laptopu",
    imageClass: "odc-experience__image--dentist",
  },
} as const;

const retentionPolicies = [
  { icon: "2D", label: "2D snimci", value: "2 godine", text: "Dostupni odmah za pregled (App & Web)." },
  { icon: "3D", label: "3D snimci (CBCT)", value: "15 dana", text: "Dostupni na Cloudu. Isključivo preuzimanje i pregled na računaru (PC)." },
  { icon: "K", label: "Kefalometrijske analize", value: "Dva dokumenta", text: "1. Analiza, 2. Obeleženi snimci." },
] as const;

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<Experience>("patients");
  const patientTab = useRef<HTMLButtonElement>(null);
  const dentistTab = useRef<HTMLButtonElement>(null);
  const experience = experiences[activeTab];

  const selectTab = (next: Experience) => {
    setActiveTab(next);
    (next === "patients" ? patientTab : dentistTab).current?.focus();
  };
  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); selectTab(activeTab === "patients" ? "dentists" : "patients"); }
    if (event.key === "Home") { event.preventDefault(); selectTab("patients"); }
    if (event.key === "End") { event.preventDefault(); selectTab("dentists"); }
  };

  return (
    <>
      <section id="funkcije" className="odc-capabilities" aria-labelledby="odc-capabilities-title">
        <div className="odc-container">
          <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-capabilities-title">Sve na jednom mestu</h2><p>Pristupite svojim snimcima brzo i jednostavno, kad god vam zatrebaju.</p></div>
          <div className="odc-capabilities__strip">
            {capabilities.map(({ icon: Icon, title, text }) => <article key={title}><span className="odc-icon"><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="iskustva" className="odc-experiences" aria-labelledby="odc-experiences-title">
        <div className="odc-container">
          <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-experiences-title">Jedna platforma. Dva načina korišćenja.</h2></div>
          <div className="odc-tabs" role="tablist" aria-label="Izaberite način korišćenja">
            <button ref={patientTab} id="patients-tab" type="button" role="tab" aria-selected={activeTab === "patients"} aria-controls="experience-panel" tabIndex={activeTab === "patients" ? 0 : -1} onClick={() => setActiveTab("patients")} onKeyDown={handleTabKeyDown}>Za pacijente</button>
            <button ref={dentistTab} id="dentists-tab" type="button" role="tab" aria-selected={activeTab === "dentists"} aria-controls="experience-panel" tabIndex={activeTab === "dentists" ? 0 : -1} onClick={() => setActiveTab("dentists")} onKeyDown={handleTabKeyDown}>Za stomatologe</button>
          </div>
          <div id="experience-panel" className={`odc-experience odc-experience--${activeTab}`} role="tabpanel" aria-labelledby={`${activeTab}-tab`} tabIndex={0}>
            <div className="odc-experience__copy"><p className="odc-eyebrow">{experience.eyebrow}</p><h3>{experience.title}</h3><p className="odc-experience__lead">{experience.text}</p><ul>{experience.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul></div>
            <div className="odc-experience__visual"><img key={activeTab} className={experience.imageClass} src={experience.image} alt={experience.imageAlt} loading="lazy" decoding="async" /></div>
          </div>
        </div>
      </section>

      <section id="cuvanje-podataka" className="odc-retention" aria-labelledby="odc-retention-title">
        <div className="odc-container">
          <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-retention-title">Pravila čuvanja podataka</h2><p>Vaši podaci su dostupni u skladu sa pravilima OrtoCloud platforme.</p></div>
          <div className="odc-retention__strip">
            {retentionPolicies.map((policy) => <article key={policy.label}><span className="odc-retention__icon" aria-hidden="true"><Box /><small>{policy.icon}</small></span><div><p>{policy.label}</p><strong>{policy.value}</strong><small>{policy.text}</small></div></article>)}
          </div>
          <p className="odc-retention__note">Digitalni karton pacijenta je na jednom mestu i uvek dostupan kada vam je potreban.</p>
        </div>
      </section>
    </>
  );
}
