import { homeContent } from "@/content/home";

export default function StatsSection() {
  return (
    <section className="oc-stats" aria-label="OrtoDent u brojkama">
      <div className="oc-container">
        <p className="oc-eyebrow">Verodostojni rezultati. Stalno iskustvo.</p>
        <div className="oc-stats__grid">
          {homeContent.stats.map(([value, label]) => (
            <div className="oc-stat" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
