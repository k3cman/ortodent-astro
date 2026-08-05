import { ArrowRight, MapPin } from "lucide-react";
import { VersionLink } from "@/components/v1/VersionContext";
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
    <div className="grid gap-3 md:grid-cols-3">
      {LOCATION_CITIES.map((city) => {
        const count = getLocationsByCity(city.slug).length;
        const active = activeCity === city.slug;

        return (
          <VersionLink
            key={city.slug}
            to={`/lokacije/${city.slug}`}
            className={`group flex min-h-28 items-center justify-between gap-4 rounded-2xl border p-5 transition-all duration-300 ${
              active
                ? "border-secondary bg-secondary text-secondary-foreground shadow-glow"
                : "border-border/60 bg-card hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-raised"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                  active ? "bg-white/15" : "bg-secondary/10 text-secondary"
                }`}
              >
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-base font-semibold">{city.name}</strong>
                <span
                  className={`mt-1 block text-xs ${
                    active ? "text-secondary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {locationCountLabel(count)}
                </span>
              </span>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </VersionLink>
        );
      })}
    </div>
  );
}
