import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import type { Location } from "@/lib/locations";
import { locationPath } from "@/lib/locations";
import { sitePath } from "@/lib/paths";
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
  const selectedIdRef = useRef(selectedId);

  onSelectRef.current = onSelect;
  selectedIdRef.current = selectedId;

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

      const escapeHtml = (value: string) =>
        value.replace(/[&<>'"]/g, (character) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#039;",
          '"': "&quot;",
        })[character] ?? character);

      locations.forEach((location) => {
        const isSelected = location.id === selectedIdRef.current;
        const marker = L.marker([location.lat, location.lng], {
          icon: L.divIcon({
            className: `od-leaflet-marker${isSelected ? " is-selected" : ""}`,
            html: '<span aria-hidden="true"><i></i></span>',
            iconSize: [32, 40],
            iconAnchor: [16, 38],
            popupAnchor: [0, -32],
          }),
          title: `${location.name}, ${location.address}`,
        })
          .addTo(map)
          .bindPopup(
            `<div class="od-map-popup"><strong>${escapeHtml(location.name)}</strong><span>${escapeHtml(location.address)}</span><a href="${sitePath(locationPath(location))}">Detalji centra →</a></div>`,
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

      if (selectedIdRef.current) {
        markers.get(selectedIdRef.current)?.openPopup();
      }
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

    markersRef.current.forEach((item, id) => {
      item.getElement()?.classList.toggle("is-selected", id === selectedId);
    });

    mapRef.current.flyTo(marker.getLatLng(), Math.max(mapRef.current.getZoom(), 15), {
      duration: 0.6,
    });
    marker.openPopup();
  }, [selectedId]);

  return (
    <div
      className={`od-locations-map ${className}`}
      aria-label="Mapa OrtoDent lokacija"
    >
      <div ref={elementRef} className="absolute inset-0 z-0" />
    </div>
  );
}
