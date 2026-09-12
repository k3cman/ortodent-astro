import { ArrowRight, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLink } from "@/components/site/SiteLink";
import OpenNowStatus from "@/components/site/locations/OpenNowStatus";
import ServiceIndicators from "@/components/site/locations/ServiceIndicators";
import {
  locationPath,
  phoneHref,
  type Location,
} from "@/lib/locations";

interface LocationCardProps {
  location: Location;
  selected?: boolean;
  showCity?: boolean;
  showDetails?: boolean;
  onSelect?: (location: Location) => void;
}

export default function LocationCard({
  location,
  selected = false,
  showCity = false,
  showDetails = false,
  onSelect,
}: LocationCardProps) {
  return (
    <motion.article
      layout
      className={`od-location-item${selected ? " is-selected" : ""}`}
      whileTap={onSelect ? { scale: 0.99 } : undefined}
      onClick={onSelect ? (event) => {
        if ((event.target as HTMLElement).closest("a, button, input, select, textarea")) return;
        onSelect(location);
      } : undefined}
      style={onSelect ? { cursor: "pointer" } : undefined}
    >
      <div className="od-location-item__head">
        <div className="od-location-item__title">
          <MapPin aria-hidden="true" />
          <div>
            <h3>
              {showDetails ? (
                <SiteLink to={locationPath(location)}>{location.name}</SiteLink>
              ) : (
                location.name
              )}
            </h3>
          {showCity && (
              <span className="od-location-item__city">{location.city}</span>
          )}
          </div>
        </div>
        {showDetails && (
          <SiteLink
            to={locationPath(location)}
            className="od-location-item__arrow"
            aria-label={`Detalji centra ${location.name}`}
          >
            <ArrowRight aria-hidden="true" />
          </SiteLink>
        )}
      </div>

      <div className="od-location-item__facts">
        <p>{location.address}</p>
        <p className="od-location-item__phones">
          <Phone aria-hidden="true" />
          <span>
            <a
              href={`tel:${phoneHref(location.phone)}`}
            >
              {location.phone}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${phoneHref(location.phone2)}`}
            >
              {location.phone2}
            </a>
          </span>
        </p>
        <OpenNowStatus openingHours={location.openingHours} compact />
        <ServiceIndicators location={location} />
      </div>

    </motion.article>
  );
}
