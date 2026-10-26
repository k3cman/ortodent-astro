import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { homeContent } from "@/content/home";
import { getReviewLengthClass } from "@/lib/review-card";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function ReviewsSection() {
  const locale = useLocale();
  const [active, setActive] = useState(0);
  const total = homeContent.reviews.length;
  const change = (direction: number) => setActive((current) => (current + direction + total) % total);

  return (
    <section className="oc-section oc-reviews" aria-labelledby="reviews-title">
      <div className="oc-container oc-reviews__layout">
        <div className="oc-reviews__summary">
          <p className="oc-eyebrow">{locale === "sr" ? "Recenzije" : "Reviews"}</p>
          <h2 id="reviews-title">{locale === "sr" ? <>Šta kažu naši<br /><span>korisnici</span></> : <>What our<br /><span>customers say</span></>}</h2>
          <p>{locale === "sr" ? "Poverenje koje gradimo svakim snimkom." : "Trust built with every X-ray."}</p>
        </div>

        <div className="oc-reviews__carousel" role="region" aria-roledescription="carousel" aria-label={locale === "sr" ? "Recenzije korisnika" : "Customer reviews"} tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft") change(-1); if (event.key === "ArrowRight") change(1); }}>
          <div className="oc-review-panels" id="reviews-panel" aria-live="polite">
            {homeContent.reviews.map((_, panelIndex) => (
              <div className="oc-review-grid" key={panelIndex} aria-hidden={panelIndex !== active}>
                {Array.from({ length: 3 }, (_, offset) => {
                  const [name, review] = homeContent.reviews[(panelIndex + offset) % total];
                  const lengthClass = getReviewLengthClass(review);
                  const cardClass = [
                    "oc-review-card",
                    offset === 0 ? "oc-review-card--featured" : "",
                    lengthClass,
                  ].filter(Boolean).join(" ");
                  return (
                    <article className={cardClass} key={name}>
                      <Quote aria-hidden="true" className="oc-review-card__quote" />
                      <blockquote>{review}</blockquote>
                      <footer><span>{name.split(" ").map((part) => part[0]).join("").toUpperCase()}</span><div><strong>{name}</strong></div></footer>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="oc-carousel-controls">
            <button type="button" onClick={() => change(-1)} aria-label={locale === "sr" ? "Prethodna recenzija" : "Previous review"} aria-controls="reviews-panel"><ArrowLeft /></button>
            <div className="oc-carousel-dots" aria-label={locale === "sr" ? `Recenzija ${active + 1} od ${total}` : `Review ${active + 1} of ${total}`}>{homeContent.reviews.map(([name], index) => <button type="button" key={`${name}-${index}`} aria-label={locale === "sr" ? `Prikaži recenziju ${index + 1}` : `Show review ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} />)}</div>
            <button type="button" onClick={() => change(1)} aria-label={locale === "sr" ? "Sledeća recenzija" : "Next review"} aria-controls="reviews-panel"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
