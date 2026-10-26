import { ArrowUpRight, Phone } from "lucide-react";
import {
  openStreetMapPageUrl,
  phoneHref,
  type Location,
} from "@/lib/locations";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function LocationActions({
  location,
  compact = false,
}: {
  location: Location;
  compact?: boolean;
}) {
  const en = useLocale() === "en";
  return (
    <div className={`od-location-actions${compact ? " od-location-actions--compact" : ""}`}>
      <a className="od-button od-button--primary" href={`tel:${phoneHref(location.phone)}`}>
        <Phone aria-hidden="true" />
        {en ? "Call the centre" : "Pozovite centar"}
      </a>
      <a
        className="od-button od-button--secondary"
        href={openStreetMapPageUrl(location)}
        target="_blank"
        rel="noreferrer"
      >
        {en ? "Open directions" : "Otvori navigaciju"}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
