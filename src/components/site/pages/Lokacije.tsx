import { ArrowRight, Cloud, Map, MapPin, Phone, ScanLine, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import CityCards from "@/components/site/locations/CityCards";
import LocationsMap from "@/components/site/locations/LocationsMap";
import { LOCATIONS } from "@/lib/locations";
import { withSiteProviders } from "@/components/site/withSiteProviders";

const steps = [
  [Map, "01", "Izaberite grad", "Odaberite grad u kojem želite da pronađete OrtoDent centar."],
  [MapPin, "02", "Pronađite centar", "Pogledajte dostupne centre po regionima, na mapi ili u listi."],
  [Phone, "03", "Kontaktirajte", "Pozovite nas ili otvorite navigaciju do izabranog centra."],
  [ScanLine, "04", "Snimajte bez čekanja", "Dođite bez zakazivanja i uradite snimanje."],
] as const;

function Lokacije() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="border-b border-border/60 py-10 md:py-16">
          <div className="container mx-auto px-6">
            <nav className="mb-9 text-xs text-muted-foreground" aria-label="Putanja">
              <SiteLink to="/" className="transition-colors hover:text-secondary">Početna</SiteLink>
              <span className="mx-3 text-secondary">›</span>
              <span>Lokacije</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
              <div>
                <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary"><MapPin className="h-4 w-4" /> Lokacije</p>
                <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Pronađite najbliži <span className="text-secondary">OrtoDent</span> centar
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                  Digitalna preciznost dostupna na više lokacija. Izaberite grad i pronađite centar najbliži Vama.
                </p>
                <div className="mt-9 grid gap-5 sm:grid-cols-3">
                  <p className="flex gap-3 text-xs text-muted-foreground"><ShieldCheck className="h-6 w-6 shrink-0 text-secondary" /><span><strong className="block text-foreground">Bez zakazivanja</strong>Uđite slobodno</span></p>
                  <p className="flex gap-3 text-xs text-muted-foreground"><ScanLine className="h-6 w-6 shrink-0 text-secondary" /><span><strong className="block text-foreground">2D i 3D snimanja</strong>CBCT, ortopan, 3D</span></p>
                  <p className="flex gap-3 text-xs text-muted-foreground"><Cloud className="h-6 w-6 shrink-0 text-secondary" /><span><strong className="block text-foreground">OrtoCloud rezultati</strong>Brzo i sigurno</span></p>
                </div>
              </div>

              <div className="relative">
                <LocationsMap locations={LOCATIONS} className="min-h-[390px] md:min-h-[500px]" />
                <div className="absolute bottom-5 right-5 z-[500] flex items-center gap-3 rounded-xl border border-border/60 bg-white/95 px-5 py-4 shadow-raised backdrop-blur">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <span><strong className="block text-lg leading-none text-foreground">13 centara</strong><small className="mt-1 block text-muted-foreground">u tri grada</small></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <header className="mb-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Izaberite grad</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Beograd · Novi Sad · Pančevo</h2>
            </header>
            <CityCards />
          </div>
        </section>

        <section className="border-t border-border/50 bg-muted/20 py-14 md:py-20">
          <div className="container mx-auto px-6">
            <header className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-foreground">Kako funkcioniše?</h2>
              <span className="mx-auto mt-4 block h-0.5 w-8 bg-secondary" />
            </header>
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
              {steps.map(([Icon, number, title, description]) => (
                <article key={number} className="relative text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary"><Icon className="h-6 w-6" /></span>
                  <strong className="mt-5 block text-xl text-secondary">{number}</strong>
                  <h3 className="mt-2 text-base font-semibold text-foreground">{title}</h3>
                  <p className="mx-auto mt-3 max-w-56 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border/70 bg-card p-7 shadow-soft md:flex-row md:px-10">
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary"><Cloud className="h-7 w-7" /></span>
                <p className="text-sm text-muted-foreground"><strong className="block text-lg text-foreground">Rezultati odmah dostupni na OrtoCloud platformi</strong>Sigurno čuvanje, brz pristup i deljenje sa Vašim stomatologom.</p>
              </div>
              <SiteLink to="/ortocloud" className="inline-flex min-h-12 shrink-0 items-center gap-4 rounded-full border border-secondary px-6 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white">Saznajte više o OrtoCloudu <ArrowRight className="h-4 w-4" /></SiteLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default withSiteProviders(Lokacije);
