import { useCallback, useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { sitePath } from "@/lib/paths";
import type { LocationPhoto } from "@/lib/location-gallery";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function LocationGallery({ photos, name }: { photos: readonly LocationPhoto[]; name: string }) {
  const en = useLocale() === "en";
  const translatedAlt = (alt: string) => en
    ? alt
        .replace(/^Ulaz/, "Entrance")
        .replace(/^Čekaonica/, "Waiting area")
        .replace(/^Recepcija/, "Reception")
        .replace(/^Oprema za snimanje zuba/, "Dental imaging equipment")
    : alt;
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const changePhoto = (direction: number) => setActivePhoto((current) => current === null ? null : (current + direction + photos.length) % photos.length);
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
    <section className="od-detail-section od-center-gallery-section" aria-label={en ? `Photos of the ${name} centre` : `Fotografije centra ${name}`} aria-roledescription={en ? "carousel" : "karusel"} onKeyDown={(event) => {
      if (activePhoto !== null) return;
      if (event.key === "ArrowLeft") { event.preventDefault(); api?.scrollPrev(); }
      if (event.key === "ArrowRight") { event.preventDefault(); api?.scrollNext(); }
    }}>
      <div className="od-shell">
        <div className="od-gallery-viewport" ref={viewportRef}>
          <div className="od-center-gallery">
            {photos.map((photo, index) => (
              <figure key={photo.src} role="group" aria-label={en ? `Photo ${index + 1} of ${photos.length}` : `Fotografija ${index + 1} od ${photos.length}`}>
                <button className="od-gallery-photo" type="button" aria-label={en ? `Enlarge photo ${index + 1}: ${translatedAlt(photo.alt)}` : `Uvećajte fotografiju ${index + 1}: ${photo.alt}`} onClick={(event) => { opener.current = event.currentTarget; setActivePhoto(index); }}>
                  <img src={sitePath(photo.src)} alt={translatedAlt(photo.alt)} width={photo.width} height={photo.height} loading="lazy" />
                </button>
              </figure>
            ))}
          </div>
        </div>
        <div className="od-gallery-controls">
          <button type="button" aria-label={en ? "Previous photo" : "Prethodna fotografija"} disabled={!canPrev} onClick={() => api?.scrollPrev()}><ArrowLeft aria-hidden="true" /></button>
          <button type="button" aria-label={en ? "Next photo" : "Sledeća fotografija"} disabled={!canNext} onClick={() => api?.scrollNext()}><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <Dialog.Root open={activePhoto !== null} onOpenChange={(open) => { if (!open) setActivePhoto(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="od-lightbox-overlay" />
          <Dialog.Content className="od-lightbox" aria-describedby={undefined} onCloseAutoFocus={(event) => { event.preventDefault(); opener.current?.focus(); }} onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault(); event.stopPropagation(); changePhoto(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}>
            <Dialog.Title className="sr-only">{en ? `Photos of the ${name} centre` : `Fotografije centra ${name}`}</Dialog.Title>
            <div className="od-lightbox-header">
              <span aria-live="polite">{activePhoto === null ? "" : `${activePhoto + 1} / ${photos.length}`}</span>
              <Dialog.Close className="od-lightbox-button" aria-label={en ? "Close photo" : "Zatvorite fotografiju"}><X aria-hidden="true" /></Dialog.Close>
            </div>
            {activePhoto !== null && <img className="od-lightbox-image" src={sitePath(photos[activePhoto].src)} alt={translatedAlt(photos[activePhoto].alt)} />}
            <div className="od-lightbox-controls">
              <button className="od-lightbox-button" type="button" aria-label={en ? "Previous photo in lightbox" : "Prethodna fotografija u lightboxu"} disabled={photos.length < 2} onClick={() => changePhoto(-1)}><ArrowLeft aria-hidden="true" /></button>
              <p>{activePhoto === null ? "" : translatedAlt(photos[activePhoto].alt)}</p>
              <button className="od-lightbox-button" type="button" aria-label={en ? "Next photo in lightbox" : "Sledeća fotografija u lightboxu"} disabled={photos.length < 2} onClick={() => changePhoto(1)}><ArrowRight aria-hidden="true" /></button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
