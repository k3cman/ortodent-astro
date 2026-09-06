import { ArrowRight, Building2, Landmark, Sprout } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  LOCATION_CITIES,
  centerCountLabel,
  getLocationsByCity,
  type LocationCitySlug,
} from "@/lib/locations";

const cityIcons = {
  beograd: Landmark,
  "novi-sad": Sprout,
  pancevo: Building2,
} as const;

export default function CityCards({
  activeCity,
}: {
  activeCity?: LocationCitySlug;
}) {
  return (
    <div className="od-city-grid">
      {LOCATION_CITIES.map((city) => {
        const count = getLocationsByCity(city.slug).length;
        const active = activeCity === city.slug;
        const Icon = cityIcons[city.slug];

        return (
          <SiteLink
            key={city.slug}
            to={`/lokacije/${city.slug}`}
            className={`od-city-card${active ? " is-active" : ""}`}
          >
            <div className="od-city-card__main">
              <span className="od-city-card__icon"><Icon aria-hidden="true" /></span>
              <span>
                <strong>{city.name}</strong>
                <span>{centerCountLabel(count)}</span>
                <small>Snimanje zuba · {city.name}</small>
              </span>
            </div>
            <ArrowRight aria-hidden="true" />
          </SiteLink>
        );
      })}
    </div>
  );
}
