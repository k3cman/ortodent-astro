import { ArrowRight, MapPin } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  LOCATION_CITIES,
  getLocationsByCity,
  locationCountLabel,
  type LocationCitySlug,
} from "@/lib/locations";

export default function CityCards({
  activeCity,
}: {
  activeCity?: LocationCitySlug;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {LOCATION_CITIES.map((city) => {
        const count = getLocationsByCity(city.slug).length;
        const active = activeCity === city.slug;

        return (
          <SiteLink
            key={city.slug}
            to={`/lokacije/${city.slug}`}
            className={`group flex min-h-36 items-center justify-between gap-5 rounded-2xl border bg-card p-6 transition-all duration-300 ${
              active
                ? "border-secondary shadow-glow"
                : "border-border/60 hover:-translate-y-1 hover:border-secondary/35 hover:shadow-raised"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary"
              >
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-lg font-semibold text-foreground">{city.name}</strong>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {locationCountLabel(count)}
                </span>
                <span className="mt-2 block text-xs text-muted-foreground">Snimanje zuba u gradu {city.name}</span>
              </span>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-secondary transition-transform group-hover:translate-x-1" />
          </SiteLink>
        );
      })}
    </div>
  );
}
