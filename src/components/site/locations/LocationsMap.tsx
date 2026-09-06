import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import type { Location } from "@/lib/locations";
import "leaflet/dist/leaflet.css";

interface LocationsMapProps {
  locations: readonly Location[];
  selectedId?: number;
  onSelect?: (location: Location) => void;
  className?: string;
}

export default function LocationsMap({
  locations,
  selectedId,
  onSelect,
  className = "min-h-[480px]",
}: LocationsMapProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef(new Map<number, LeafletMarker>());
  const onSelectRef = useRef(onSelect);

  onSelectRef.current = onSelect;

  useEffect(() => {
    if (!elementRef.current || locations.length === 0) return;

    let cancelled = false;

    void import("leaflet").then((leafletModule) => {
      if (cancelled || !elementRef.current) return;

      const L = leafletModule.default;
      const map = L.map(elementRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const markers = new Map<number, LeafletMarker>();

      locations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng], {
          icon: L.divIcon({
            className: "ortodent-map-marker",
            html: '<span style="display:block;width:18px;height:18px;border:4px solid white;border-radius:9999px;background:#d51155;box-shadow:0 4px 14px rgba(33,29,46,.28)"></span>',
            iconSize: [18, 18],
            iconAnchor: [9, 9],
          }),
          title: `${location.name}, ${location.address}`,
        })
          .addTo(map)
          .bindPopup(
            `<strong>${location.name}</strong><br><span>${location.address}</span>`,
          );

        marker.on("click", () => onSelectRef.current?.(location));
        markers.set(location.id, marker);
      });

      const bounds = L.latLngBounds(
        locations.map((location) => [location.lat, location.lng]),
      );

      if (locations.length === 1) {
        map.setView(bounds.getCenter(), 15);
      } else {
        map.fitBounds(bounds, { padding: [42, 42], maxZoom: 14 });
      }

      mapRef.current = map;
      markersRef.current = markers;
    });

    return () => {
      cancelled = true;
      markersRef.current.clear();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [locations]);

  useEffect(() => {
    if (!selectedId) return;

    const marker = markersRef.current.get(selectedId);
    if (!marker || !mapRef.current) return;

    mapRef.current.flyTo(marker.getLatLng(), Math.max(mapRef.current.getZoom(), 15), {
      duration: 0.6,
    });
    marker.openPopup();
  }, [selectedId]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-muted shadow-raised ${className}`}
      aria-label="Mapa OrtoDent lokacija"
    >
      <div ref={elementRef} className="absolute inset-0 z-0" />
    </div>
  );
}
