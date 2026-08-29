import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, HeartHandshake, Quote, ShieldCheck, Star } from "lucide-react";
import { homeContent } from "@/content/home";

const trustPoints = [
  [CheckCircle2, "Brza usluga i tačni rezultati"],
  [HeartHandshake, "Ljubazno i stručno osoblje"],
  [ShieldCheck, "Pouzdana dijagnostika kojoj verujete"],
] as const;

function Stars() {
  return <div className="oc-stars" aria-label="5 od 5 zvezdica">{Array.from({ length: 5 }).map((_, i) => <Star key={i} aria-hidden="true" fill="currentColor" />)}</div>;
}

export default function ReviewsSection() {
  const [active, setActive] = useState(0);
  const total = homeContent.reviews.length;
  const change = (direction: number) => setActive((current) => (current + direction + total) % total);
  const visible = Array.from({ length: 3 }, (_, offset) => homeContent.reviews[(active + offset) % total]);

  return (
    <section className="oc-section oc-reviews" aria-labelledby="reviews-title">
      <div className="oc-container oc-reviews__layout">
        <div className="oc-reviews__summary">
          <p className="oc-eyebrow">Recenzije</p>
          <h2 id="reviews-title">Šta kažu naši<br /><span>korisnici</span></h2>
          <p>Poverenje koje gradimo svakim snimkom.</p>
          <div className="oc-rating"><strong>4.9</strong><span>/5</span><div><Stars /><small>na osnovu 500+ recenzija</small></div></div>
          <div className="oc-trust-points">{trustPoints.map(([Icon, label]) => <p key={label}><Icon aria-hidden="true" /> {label}</p>)}</div>
        </div>

        <div className="oc-reviews__carousel" role="region" aria-roledescription="carousel" aria-label="Recenzije korisnika" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft") change(-1); if (event.key === "ArrowRight") change(1); }}>
          <div className="oc-review-grid" id="reviews-panel" aria-live="polite">
            {visible.map(([name, review], index) => (
              <article className={index === 0 ? "oc-review-card oc-review-card--featured" : "oc-review-card"} key={`${name}-${active}-${index}`}>
                <Quote aria-hidden="true" className="oc-review-card__quote" fill="currentColor" />
                <blockquote>{review}</blockquote>
                <Stars />
                <footer><span>{name.split(" ").map((part) => part[0]).join("").toUpperCase()}</span><div><strong>{name}</strong></div></footer>
              </article>
            ))}
          </div>
          <div className="oc-carousel-controls">
            <button type="button" onClick={() => change(-1)} aria-label="Prethodna recenzija" aria-controls="reviews-panel"><ArrowLeft /></button>
            <div className="oc-carousel-dots" aria-label={`Recenzija ${active + 1} od ${total}`}>{homeContent.reviews.map(([name], index) => <button type="button" key={`${name}-${index}`} aria-label={`Prikaži recenziju ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} />)}</div>
            <button type="button" onClick={() => change(1)} aria-label="Sledeća recenzija" aria-controls="reviews-panel"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
