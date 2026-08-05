import { useState } from "react";
import { Check, Monitor, Settings, Shield, Zap } from "lucide-react";

const features = [
  { icon: Zap, title: "Trenutni Pristup", description: "Snimci su dostupni doktorima i pacijentima sekundu nakon snimanja. Nema čekanja na CD ili film." },
  { icon: Monitor, title: "Bilo koji uređaj", description: "Pregledajte snimke na telefonu, tabletu ili računaru. Podrška za Android, iOS i Huawei uređaje." },
  { icon: Settings, title: "Napredni Alati", description: "Merenje, zumiranje i pojačavanje kontrasta direktno u pregledaču. Nema potrebe za instalacijom dodatnog softvera." },
  { icon: Shield, title: "Sigurnost Podataka", description: "Svi podaci su kriptovani i čuvaju se na sigurnim serverima u skladu sa najvišim standardima zaštite." },
];
const doctorFeatures = ["Digitalni karton pacijenta na jednom mestu", "Mogućnost konsultacije sa kolegama jednim klikom (Share opcija)", "Arhiva svih pacijenata dostupna 24/7"];
const patientFeatures = ["Zaboravite na nošenje filmova i CD-ova", "Vaša istorija snimanja uvek uz Vas", "Jednostavno deljenje snimka sa specijalistom bez odlaska u ordinaciju"];
const retentionPolicies = [
  { title: "2D Snimci", description: "Čuvaju se 2 godine. Dostupni odmah za pregled (App & Web)." },
  { title: "3D Snimci", description: "Dostupni 15 dana na Cloudu. Isključivo preuzimanje i pregled na računaru (PC)." },
  { title: "Kefalometrijske analize", description: "Dostupne kao dva dokumenta: 1. Analiza, 2. Obeleženi snimci." },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<"doctors" | "patients">("doctors");
  return (
    <section id="funkcije" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Više od običnog skladišta</h2></div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {features.map((feature, index) => <div key={feature.title} className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}><div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6"><feature.icon className="w-7 h-7 text-accent-foreground" /></div><h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3><p className="text-muted-foreground leading-relaxed">{feature.description}</p></div>)}
        </div>
        <div className="max-w-3xl mx-auto mb-24">
          <div className="flex justify-center mb-8"><div className="inline-flex bg-card rounded-xl p-1.5 shadow-soft">
            <button onClick={() => setActiveTab("doctors")} className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === "doctors" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Za Stomatologe</button>
            <button onClick={() => setActiveTab("patients")} className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === "patients" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Za Pacijente</button>
          </div></div>
          <div className="bg-card rounded-2xl p-8 shadow-soft"><ul className="space-y-4">{(activeTab === "doctors" ? doctorFeatures : patientFeatures).map((feature, index) => <li key={feature} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}><div className="w-6 h-6 bg-accent/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-accent-foreground" /></div><span className="text-foreground">{feature}</span></li>)}</ul></div>
        </div>
        <div className="text-center mb-12"><h3 className="text-2xl md:text-3xl font-bold text-foreground">Pravila čuvanja podataka</h3></div>
        <div className="grid md:grid-cols-3 gap-6">{retentionPolicies.map((policy, index) => <div key={policy.title} className="bg-card p-6 rounded-2xl shadow-soft text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}><h4 className="text-lg font-semibold text-foreground mb-3">{policy.title}</h4><p className="text-muted-foreground text-sm leading-relaxed">{policy.description}</p></div>)}</div>
      </div>
    </section>
  );
}
