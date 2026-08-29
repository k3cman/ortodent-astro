import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CityCards from "@/components/site/locations/CityCards";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationsMap from "@/components/site/locations/LocationsMap";
import {
  LOCATION_CITIES,
  LOCATIONS,
  getLocationsByCity,
  locationCountLabel,
  type Location,
  type LocationCitySlug,
} from "@/lib/locations";
import { withSiteProviders } from "@/components/site/withSiteProviders";

const Lokacije = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(LOCATIONS[0]);
  const [openCity, setOpenCity] = useState<LocationCitySlug>("beograd");
  const mapLocations = useMemo(() => LOCATIONS, []);

  const handleCityChange = (value: string) => {
    if (!value) return;

    const slug = value as LocationCitySlug;
    setOpenCity(slug);
    const firstLocation = getLocationsByCity(slug)[0];
    if (firstLocation) setSelectedLocation(firstLocation);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="border-b border-border/50 bg-cream py-12 md:py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 max-w-2xl"
            >
              <h1 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">
                Lokacije
              </h1>
              <p className="text-lg text-muted-foreground">
                Izaberite grad ili pronađite jedan od naših 13 centara koji Vam
                najviše odgovara.
              </p>
            </motion.div>

            <CityCards />
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-6">
            <div className="mb-8 max-w-2xl">
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                <MapPin className="h-4 w-4" />
                Sve lokacije
              </span>
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                Pronađite najbliži OrtoDent centar
              </h2>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <Accordion
                type="single"
                collapsible
                value={openCity}
                onValueChange={handleCityChange}
                className="space-y-4"
              >
                {LOCATION_CITIES.map((city) => {
                  const cityLocations = getLocationsByCity(city.slug);

                  return (
                    <AccordionItem
                      key={city.slug}
                      value={city.slug}
                      className="overflow-hidden rounded-2xl border border-border/60 bg-card px-5 shadow-soft"
                    >
                      <AccordionTrigger className="py-5 text-left hover:no-underline">
                        <span className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                          <span>
                            <strong className="block text-lg font-semibold text-foreground">
                              {city.name}
                            </strong>
                            <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                              {locationCountLabel(cityLocations.length)}
                            </span>
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-3 pb-5">
                        {cityLocations.map((location) => (
                          <LocationCard
                            key={location.id}
                            location={location}
                            selected={selectedLocation.id === location.id}
                            showDetails
                            onSelect={setSelectedLocation}
                          />
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>

              <div className="lg:sticky lg:top-28">
                <LocationsMap
                  locations={mapLocations}
                  selectedId={selectedLocation.id}
                  onSelect={setSelectedLocation}
                  className="min-h-[460px] md:min-h-[620px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default withSiteProviders(Lokacije);
