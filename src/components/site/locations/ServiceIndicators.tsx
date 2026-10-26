import { Box, ScanLine } from "lucide-react";
import {
  getLocationServices,
  type Location,
  type LocationService,
} from "@/lib/locations";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const serviceLabels: Record<LocationService, string> = {
  "2d": "2D snimanje",
  "3d": "3D / CBCT",
};

const serviceIcons = {
  "2d": ScanLine,
  "3d": Box,
};

export default function ServiceIndicators({ location }: { location: Location }) {
  const en = useLocale() === "en";
  return (
    <div className="od-service-indicators" aria-label={en ? "Available imaging" : "Dostupna snimanja"}>
      {getLocationServices(location).map((service) => {
        const Icon = serviceIcons[service];
        return <span key={service}><Icon aria-hidden="true" />{en && service === "2d" ? "2D imaging" : serviceLabels[service]}</span>;
      })}
    </div>
  );
}
