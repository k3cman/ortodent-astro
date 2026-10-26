import { ArrowRight, MapPin } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  LOCATION_CITIES,
  centerCountLabel,
  getLocationsByCity,
  type LocationCitySlug,
} from "@/lib/locations";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function CityCards({
  activeCity,
}: {
  activeCity?: LocationCitySlug;
}) {
  const en = useLocale() === "en";
  return (
    <div className="od-city-grid">
      {LOCATION_CITIES.map((city) => {
        const count = getLocationsByCity(city.slug).length;
        const active = activeCity === city.slug;
        return (
          <SiteLink
            key={city.slug}
            to={`/lokacije/${city.slug}`}
            className={`od-city-card${active ? " is-active" : ""}`}
          >
            <div className="od-city-card__main">
              <span className="od-city-card__icon"><MapPin aria-hidden="true" /></span>
              <span>
                <strong>{city.name}</strong>
                <span>{en ? `${count} locations` : centerCountLabel(count)}</span>
                <small>{en ? "Dental imaging" : "Snimanje zuba"} · {city.name}</small>
              </span>
            </div>
            <ArrowRight aria-hidden="true" />
          </SiteLink>
        );
      })}
    </div>
  );
}
