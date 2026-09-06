import { useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2, Cloud, MapPin, Navigation } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationsMap from "@/components/site/locations/LocationsMap";
import {
  getCityBySlug,
  getLocationsByRegion,
  getRegionBySlug,
  locationCountLabel,
  type Location,
  type LocationCitySlug,
} from "@/lib/locations";

function RegionLocations({
  citySlug,
  regionSlug,
}: {
  citySlug: LocationCitySlug;
  regionSlug: string;
}) {
  const city = getCityBySlug(citySlug)!;
  const region = getRegionBySlug(citySlug, regionSlug)!;
  const locations = useMemo(
    () => getLocationsByRegion(citySlug, regionSlug),
    [citySlug, regionSlug],
  );
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="border-b border-border/60 bg-cream py-10 md:py-14">
          <div className="container mx-auto px-6">
            <SiteLink
              to={`/lokacije/${citySlug}`}
              className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Snimanje zuba u gradu {city.name}
            </SiteLink>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              <MapPin className="h-4 w-4" /> Region
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Snimanje zuba — {region.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {locationCountLabel(locations.length)} u ovom delu grada. Izaberite centar i pogledajte njegovu tačnu poziciju.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-foreground">Lokalni centri</h2>
                <div className="grid gap-4">
                  {locations.map((location) => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      selected={selectedLocation.id === location.id}
                      showDetails
                      onSelect={setSelectedLocation}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:sticky lg:top-28">
                <LocationsMap
                  locations={locations}
                  selectedId={selectedLocation.id}
                  onSelect={setSelectedLocation}
                  className="min-h-[460px] md:min-h-[620px]"
                />
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-border/70 bg-card p-7 shadow-soft md:p-9">
              <h2 className="text-2xl font-semibold text-foreground">Praktične informacije</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <p className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><span><strong className="block text-foreground">Bez zakazivanja</strong>Dođite u centar koji Vam najviše odgovara.</span></p>
                <p className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><Navigation className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><span><strong className="block text-foreground">Precizna navigacija</strong>Otvorite mapu sa stranice izabranog centra.</span></p>
                <p className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><Cloud className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><span><strong className="block text-foreground">OrtoCloud rezultati</strong>Snimci su dostupni online i spremni za deljenje.</span></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function RegionLocationsPage(props: {
  citySlug: LocationCitySlug;
  regionSlug: string;
}) {
  return <SiteProviders><RegionLocations {...props} /></SiteProviders>;
}
