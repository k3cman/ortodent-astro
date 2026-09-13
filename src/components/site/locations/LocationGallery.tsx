import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sitePath } from "@/lib/paths";
import type { LocationPhoto } from "@/lib/location-gallery";

export default function LocationGallery({ photos, name }: { photos: readonly LocationPhoto[]; name: string }) {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const updateControls = useCallback(() => {
    setCanPrev(api?.canScrollPrev() ?? false);
    setCanNext(api?.canScrollNext() ?? false);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateControls();
    api.on("select", updateControls).on("reInit", updateControls);
    return () => { api.off("select", updateControls).off("reInit", updateControls); };
  }, [api, updateControls]);

  return (
    <section className="od-detail-section od-center-gallery-section" aria-label={`Fotografije centra ${name}`} aria-roledescription="karusel" onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); api?.scrollPrev(); }
      if (event.key === "ArrowRight") { event.preventDefault(); api?.scrollNext(); }
    }}>
      <div className="od-shell">
        <div className="od-gallery-viewport" ref={viewportRef}>
          <div className="od-center-gallery">
            {photos.map((photo, index) => (
              <figure key={photo.src} role="group" aria-label={`Fotografija ${index + 1} od ${photos.length}`}>
                <img src={sitePath(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
        <div className="od-gallery-controls">
          <button type="button" aria-label="Prethodna fotografija" disabled={!canPrev} onClick={() => api?.scrollPrev()}><ArrowLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Sledeća fotografija" disabled={!canNext} onClick={() => api?.scrollNext()}><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
