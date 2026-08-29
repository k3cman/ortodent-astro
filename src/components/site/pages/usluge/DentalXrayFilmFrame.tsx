/** Mimics intraoral radiographs on blue-green film base (clinical “printed film” look). */
export const DentalXrayFilmFrame = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title?: string;
}) => (
  <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl border border-cyan-950/25 bg-[hsl(206,44%,15%)]">
    <img
      src={src}
      alt={alt}
      title={title}
      className="relative z-[1] h-full w-full object-contain brightness-[1.04] contrast-[1.07]"
      loading="lazy"
      decoding="async"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] bg-gradient-to-b from-sky-300/25 via-cyan-600/38 to-blue-950/45 mix-blend-color"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[3] rounded-[inherit] mix-blend-soft-light bg-gradient-to-tr from-white/[0.07] via-transparent to-cyan-950/20"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[4] rounded-[inherit] shadow-[inset_0_0_90px_rgba(8,28,45,0.55)]"
    />
  </div>
);
