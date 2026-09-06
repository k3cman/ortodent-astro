import { useMemo, useState } from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import RegionCards from "@/components/site/locations/RegionCards";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationsMap from "@/components/site/locations/LocationsMap";
import {
  getCityBySlug,
  getLocationsByCity,
  locationCountLabel,
  type Location,
  type LocationCitySlug,
} from "@/lib/locations";

function CityLocations({ citySlug }: { citySlug: LocationCitySlug }) {
  const city = getCityBySlug(citySlug)!;
  const locations = useMemo(() => getLocationsByCity(citySlug), [citySlug]);
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="border-b border-border/60 bg-cream py-10 md:py-14">
          <div className="container mx-auto px-6">
            <SiteLink to="/lokacije" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-secondary">
              <ArrowLeft className="h-4 w-4" /> Izaberite drugi grad
            </SiteLink>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary"><MapPin className="h-4 w-4" /> {city.name}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Snimanje zuba u gradu {city.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{city.description} Izaberite deo grada ili pronađite centar direktno na mapi.</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <header className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Regioni</p>
              <h2 className="mt-2 text-3xl font-semibold text-foreground">Izaberite deo grada</h2>
            </header>
            <RegionCards citySlug={citySlug} />
          </div>
        </section>

        <section className="border-t border-border/50 bg-muted/20 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Svi centri</p>
              <h2 className="mt-2 text-3xl font-semibold text-foreground">{locationCountLabel(locations.length)} u gradu {city.name}</h2>
            </div>
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
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
              <div className="lg:sticky lg:top-28">
                <LocationsMap
                  locations={locations}
                  selectedId={selectedLocation.id}
                  onSelect={setSelectedLocation}
                  className="min-h-[480px] md:min-h-[680px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function CityLocationsPage({ citySlug }: { citySlug: LocationCitySlug }) {
  return <SiteProviders><CityLocations citySlug={citySlug} /></SiteProviders>;
}
