import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  centerCountLabel,
  getLocationsByRegion,
  getRegionsByCity,
  regionPath,
  type LocationCitySlug,
} from "@/lib/locations";

export default function RegionCards({
  citySlug,
  activeRegion,
}: {
  citySlug: LocationCitySlug;
  activeRegion?: string;
}) {
  return (
    <nav className="od-region-nav" aria-label="Delovi grada">
      {getRegionsByCity(citySlug).map((region) => {
        const count = getLocationsByRegion(citySlug, region.slug).length;

        return (
          <SiteLink
            key={region.slug}
            to={regionPath(region)}
            className={activeRegion === region.slug ? "is-active" : undefined}
          >
            <span>
              <strong>{region.name}</strong>
              <small>{centerCountLabel(count)}</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </SiteLink>
        );
      })}
    </nav>
  );
}
