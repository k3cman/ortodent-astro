import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  centerCountLabel,
  getLocationsByRegion,
  getRegionsByCity,
  regionPath,
  type LocationCitySlug,
} from "@/lib/locations";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function RegionCards({
  citySlug,
  activeRegion,
}: {
  citySlug: LocationCitySlug;
  activeRegion?: string;
}) {
  const en = useLocale() === "en";
  return (
    <nav className="od-region-nav" aria-label={en ? "City areas" : "Delovi grada"}>
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
              <small>{en ? `${count} locations` : centerCountLabel(count)}</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </SiteLink>
        );
      })}
    </nav>
  );
}
