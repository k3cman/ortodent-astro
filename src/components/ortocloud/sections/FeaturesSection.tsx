import { FolderOpen, Share2, Zap } from "lucide-react";

const platformFeatures = [
  { icon: Zap, title: "Snimci na dohvat ruke", text: "Stomatolozima i pacijentima snimci su dostupni odmah nakon snimanja. Pristupite im putem svog naloga, gde god da se nalazite.", detail: "Bez odlaska po snimke." },
  { icon: Share2, title: "Lakši pregled i konsultacije", text: "Pregledajte detalje na ekranu i jednostavno prosledite snimak stomatologu ili kolegama radi konsultacije i drugog mišljenja.", detail: "Brže do potrebnih informacija." },
  { icon: FolderOpen, title: "Sve na svom mestu", text: "Organizovana digitalna arhiva olakšava pronalaženje snimaka. Podaci se čuvaju na sigurnim serverima, uz manje potrebe za fizičkim kopijama.", detail: "Pregledno. Dostupno. Sigurno." },
] as const;

const retentionPolicies = [
  { icon: "2D", label: "2D snimci", value: "5 godina", text: "Pregled, preuzimanje i deljenje putem mobilne aplikacije ili računara (App & Web)." },
  { icon: "3D", label: "3D snimci (CBCT)", value: "15 dana", text: "Pristup i preuzimanje isključivo putem računara (PC)." },
  { icon: "K", label: "Kefalometrijske analize", value: "Dva dokumenta", text: "Detaljna analiza i obeležen snimak za stručnu upotrebu. Pristup isključivo preko korisničkog naloga stomatologa." },
] as const;

export default function FeaturesSection() {
  return (
    <>
      <section id="iskustva" className="odc-experiences" aria-labelledby="odc-experiences-title">
        <div className="odc-container">
          <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-experiences-title">Jedna platforma</h2><p>Za jednostavniji pristup snimcima i bolju saradnju.</p></div>
          <div className="odc-platform-cards">
            {platformFeatures.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <span className="odc-platform-cards__icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cuvanje-podataka" className="odc-retention" aria-labelledby="odc-retention-title">
        <div className="odc-container">
          <div className="odc-section-heading odc-section-heading--center"><h2 id="odc-retention-title">Pravila čuvanja podataka</h2></div>
          <div className="odc-retention__strip">
            {retentionPolicies.map((policy) => <article key={policy.label}><div><p>{policy.label}</p><strong>{policy.value}</strong><small>{policy.text}</small></div></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
