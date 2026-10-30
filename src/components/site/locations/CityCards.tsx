import { ArrowRight, MapPin } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import {
  LOCATION_CITIES,
  centerCountLabel,
  getLocationsByCity,
  localizeLocationText,
  type LocationCitySlug,
} from "@/lib/locations";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function CityCards({
  activeCity,
}: {
  activeCity?: LocationCitySlug;
}) {
  const locale = useLocale();
  const en = locale === "en";
  return (
    <div className="od-city-grid">
      {LOCATION_CITIES.map((city) => {
        const count = getLocationsByCity(city.slug).length;
        const active = activeCity === city.slug;
        const cityName = localizeLocationText(city.name, locale);
        return (
          <SiteLink
            key={city.slug}
            to={`/lokacije/${city.slug}`}
            className={`od-city-card${active ? " is-active" : ""}`}
          >
            <div className="od-city-card__main">
              <span className="od-city-card__icon"><MapPin aria-hidden="true" /></span>
              <span>
                <strong>{cityName}</strong>
                <span>{en ? `${count} locations` : centerCountLabel(count)}</span>
                <small>{en ? "Dental imaging" : "Snimanje zuba"} · {cityName}</small>
              </span>
            </div>
            <ArrowRight aria-hidden="true" />
          </SiteLink>
        );
      })}
    </div>
  );
}
