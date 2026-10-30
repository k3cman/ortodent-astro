import { homeContentByLocale } from "@/content/home";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function StatsSection() {
  const locale = useLocale();
  return (
    <section className="oc-stats" aria-label={locale === "sr" ? "OrtoDent u brojkama" : "OrtoDent in numbers"}>
      <div className="oc-container">
        <p className="oc-eyebrow">{locale === "sr" ? "Verodostojni rezultati. Dugogodišnje iskustvo." : "Reliable results. Proven experience."}</p>
        <div className="oc-stats__grid">
          {homeContentByLocale[locale].stats.map(([value, label]) => (
            <div className="oc-stat" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
