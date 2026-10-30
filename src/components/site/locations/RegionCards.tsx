import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  centerCountLabel,
  getLocationsByRegion,
  getRegionsByCity,
  localizeLocationText,
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
  const locale = useLocale();
  const en = locale === "en";
  return (
    <nav className="od-region-nav" aria-label={en ? "City areas" : "Delovi grada"}>
      {getRegionsByCity(citySlug).map((region) => {
        const count = getLocationsByRegion(citySlug, region.slug).length;
        const regionName = localizeLocationText(region.name, locale);

        return (
          <SiteLink
            key={region.slug}
            to={regionPath(region)}
            className={activeRegion === region.slug ? "is-active" : undefined}
          >
            <span>
              <strong>{regionName}</strong>
              <small>{en ? `${count} locations` : centerCountLabel(count)}</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </SiteLink>
        );
      })}
    </nav>
  );
}
