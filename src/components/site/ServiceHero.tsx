import type { ReactNode } from "react";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  children?: ReactNode;
};

export default function ServiceHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imagePosition,
  children,
}: ServiceHeroProps) {
  return (
    <section className="oc-service-hero" aria-labelledby="service-hero-title">
      <div className="oc-service-hero__copy">
        <p className="oc-service-hero__eyebrow">{eyebrow}</p>
        <h1 id="service-hero-title">{title}</h1>
        <div className="oc-service-hero__lead">{lead}</div>
        {children}
      </div>
      <figure className="oc-service-hero__visual">
        <img
          src={image}
          alt={imageAlt}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          fetchPriority="high"
          decoding="async"
        />
      </figure>
    </section>
  );
}
