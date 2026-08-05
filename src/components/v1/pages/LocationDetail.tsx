import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { VersionLink, VersionProvider } from "@/components/v1/VersionContext";
import { V1Providers } from "@/components/v1/V1Providers";
import LocationCard from "@/components/v1/locations/LocationCard";
import LocationsMap from "@/components/v1/locations/LocationsMap";
import {
  getLocationBySlug,
  getLocationsByCity,
  openStreetMapPageUrl,
  phoneHref,
  type LocationCitySlug,
} from "@/lib/locations";
import type { SiteVersion } from "@/lib/paths";

function LocationDetail({
  citySlug,
  locationSlug,
}: {
  citySlug: LocationCitySlug;
  locationSlug: string;
}) {
  const location = getLocationBySlug(citySlug, locationSlug)!;
  const mapLocations = useMemo(() => [location], [location]);
  const relatedLocations = useMemo(
    () => getLocationsByCity(citySlug).filter((item) => item.id !== location.id),
    [citySlug, location.id],
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="border-b border-border/50 bg-cream py-10 md:py-14">
          <div className="container mx-auto px-6">
            <VersionLink
              to={`/lokacije/${citySlug}`}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Sve lokacije — {location.city}
            </VersionLink>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl"
            >
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                <MapPin className="h-4 w-4" />
                OrtoDent {location.city}
              </span>
              <h1 className="mb-3 text-3xl font-semibold text-foreground md:text-5xl">
                {location.name}
              </h1>
              <p className="flex items-center gap-2 text-lg text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                {location.address}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-6">
            <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.5fr)]">
              <LocationsMap
                locations={mapLocations}
                selectedId={location.id}
                className="min-h-[430px] md:min-h-[560px]"
              />

              <aside className="rounded-2xl border border-border/60 bg-card p-6 shadow-raised md:p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Kontakt i adresa
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Pozovite centar direktno ili otvorite preciznu lokaciju u
                  OpenStreetMap-u.
                </p>

                <div className="mt-7 space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Adresa
                      </p>
                      <p className="mt-1 font-medium text-foreground">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Telefoni
                      </p>
                      <a
                        href={`tel:${phoneHref(location.phone)}`}
                        className="block font-medium text-foreground transition-colors hover:text-secondary"
                      >
                        {location.phone}
                      </a>
                      <a
                        href={`tel:${phoneHref(location.phone2)}`}
                        className="block font-medium text-foreground transition-colors hover:text-secondary"
                      >
                        {location.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Button variant="glow" size="lg" asChild>
                    <a href={`tel:${phoneHref(location.phone)}`}>
                      <Phone className="h-4 w-4" />
                      Pozovite centar
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={openStreetMapPageUrl(location)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Otvori mapu
                    </a>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {relatedLocations.length > 0 && (
          <section className="border-t border-border/50 bg-muted/30 py-12 md:py-16">
            <div className="container mx-auto px-6">
              <div className="mb-8 max-w-2xl">
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                  Ostale lokacije — {location.city}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Pogledajte i druge OrtoDent centre u istom gradu.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedLocations.map((relatedLocation) => (
                  <LocationCard
                    key={relatedLocation.id}
                    location={relatedLocation}
                    showDetails
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function LocationDetailPage({
  version,
  citySlug,
  locationSlug,
}: {
  version: SiteVersion;
  citySlug: LocationCitySlug;
  locationSlug: string;
}) {
  return (
    <VersionProvider version={version}>
      <V1Providers>
        <LocationDetail citySlug={citySlug} locationSlug={locationSlug} />
      </V1Providers>
    </VersionProvider>
  );
}
