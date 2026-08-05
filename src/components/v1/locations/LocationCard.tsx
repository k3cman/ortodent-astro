import { ExternalLink, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { VersionLink } from "@/components/v1/VersionContext";
import {
  locationPath,
  openStreetMapPageUrl,
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
      className={`accent-card flex h-full flex-col border-2 p-5 transition-all duration-300 ${
        selected
          ? "border-secondary/40 shadow-glow"
          : "border-transparent hover:border-secondary/10 hover:shadow-raised"
      }`}
      whileTap={onSelect ? { scale: 0.99 } : undefined}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {location.name}
          </h3>
          {showCity && (
            <span className="mt-1 inline-flex rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
              {location.city}
            </span>
          )}
        </div>
        <MapPin className="mt-1 h-5 w-5 shrink-0 text-secondary" />
      </div>

      <div className="mb-5 flex-1 space-y-2.5">
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary/60" />
          {location.address}
        </p>
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary/60" />
          <span className="flex flex-wrap items-center gap-x-1">
            <a
              href={`tel:${phoneHref(location.phone)}`}
              className="transition-colors hover:text-secondary"
            >
              {location.phone}
            </a>
            <span className="text-muted-foreground/70">·</span>
            <a
              href={`tel:${phoneHref(location.phone2)}`}
              className="transition-colors hover:text-secondary"
            >
              {location.phone2}
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <a
          href={openStreetMapPageUrl(location)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-secondary"
        >
          Otvori mapu
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        {onSelect && (
          <Button
            variant="glow"
            size="sm"
            className="h-8 px-4 text-xs"
            onClick={() => onSelect(location)}
          >
            Prikaži na mapi
          </Button>
        )}
        {showDetails && (
          <Button variant="outline" size="sm" className="h-8 px-4 text-xs" asChild>
            <VersionLink to={locationPath(location)}>Detalji lokacije</VersionLink>
          </Button>
        )}
      </div>
    </motion.article>
  );
}
