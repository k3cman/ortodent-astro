import { ArrowUpRight, Phone } from "lucide-react";
import {
  openStreetMapPageUrl,
  phoneHref,
  type Location,
} from "@/lib/locations";

export default function LocationActions({
  location,
  compact = false,
}: {
  location: Location;
  compact?: boolean;
}) {
  return (
    <div className={`od-location-actions${compact ? " od-location-actions--compact" : ""}`}>
      <a className="od-button od-button--primary" href={`tel:${phoneHref(location.phone)}`}>
        <Phone aria-hidden="true" />
        Pozovite centar
      </a>
      <a
        className="od-button od-button--secondary"
        href={openStreetMapPageUrl(location)}
        target="_blank"
        rel="noreferrer"
      >
        Otvori navigaciju
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
