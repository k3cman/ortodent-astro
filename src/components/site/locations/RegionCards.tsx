import { ArrowRight, MapPin } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  getLocationsByRegion,
  getRegionsByCity,
  locationCountLabel,
  regionPath,
  type LocationCitySlug,
} from "@/lib/locations";

export default function RegionCards({ citySlug }: { citySlug: LocationCitySlug }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {getRegionsByCity(citySlug).map((region) => {
        const count = getLocationsByRegion(citySlug, region.slug).length;

        return (
          <SiteLink
            key={region.slug}
            to={regionPath(region)}
            className="group flex min-h-36 items-center justify-between gap-5 rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-raised"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-lg font-semibold text-foreground">
                  {region.name}
                </strong>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {locationCountLabel(count)}
                </span>
                <span className="mt-2 block text-xs text-muted-foreground">
                  {region.description}
                </span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-secondary transition-transform group-hover:translate-x-1" />
          </SiteLink>
        );
      })}
    </div>
  );
}
