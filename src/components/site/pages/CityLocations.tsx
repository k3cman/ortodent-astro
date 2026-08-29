import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import CityCards from "@/components/site/locations/CityCards";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationsMap from "@/components/site/locations/LocationsMap";
import {
  getCityBySlug,
  getLocationsByCity,
  type Location,
  type LocationCitySlug,
} from "@/lib/locations";

function CityLocations({ citySlug }: { citySlug: LocationCitySlug }) {
  const city = getCityBySlug(citySlug)!;
  const locations = useMemo(() => getLocationsByCity(citySlug), [citySlug]);
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  const selectLocation = (location: Location) => {
    setSelectedLocation(location);
    document
      .getElementById("city-map")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="border-b border-border/50 bg-cream py-10 md:py-14">
          <div className="container mx-auto px-6">
            <SiteLink
              to="/lokacije"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Sve lokacije
            </SiteLink>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-8 max-w-2xl"
            >
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                <MapPin className="h-4 w-4" />
                OrtoDent centri
              </span>
              <h1 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">
                Lokacije — {city.name}
              </h1>
              <p className="text-lg text-muted-foreground">{city.description}</p>
            </motion.div>

            <CityCards activeCity={citySlug} />
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-6">
            <div id="city-map" className="scroll-mt-28">
              <LocationsMap
                locations={locations}
                selectedId={selectedLocation.id}
                onSelect={setSelectedLocation}
                className="min-h-[430px] md:min-h-[560px]"
              />
            </div>

            <div className="mb-7 mt-12 max-w-2xl">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                OrtoDent lokacije u gradu {city.name}
              </h2>
              <p className="mt-2 text-muted-foreground">
                Izaberite centar kako biste ga pronašli na mapi ili pozvali
                direktno.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  selected={selectedLocation.id === location.id}
                  showDetails
                  onSelect={selectLocation}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function CityLocationsPage({
  citySlug,
}: {
  citySlug: LocationCitySlug;
}) {
  return (
    <SiteProviders>
      <CityLocations citySlug={citySlug} />
    </SiteProviders>
  );
}
