import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import type { CenovnikSection } from "@/content/cenovnik";
import { CENOVNIK_SECTIONS, PRICING_SECTIONS_EN } from "@/content/cenovnik";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const currency = "RSD";

const PriceSection = ({ section }: { section: CenovnikSection }) => (
  <section
    className="oc-price-section"
    aria-labelledby={`cenovnik-section-${section.id}`}
  >
    <header className="oc-price-section__header">
      <h2
        id={`cenovnik-section-${section.id}`}
      >
        {section.title}
      </h2>
      {section.subtitle ? (
        <p>{section.subtitle}</p>
      ) : null}
    </header>
    <table aria-labelledby={`cenovnik-section-${section.id}`}>
      <tbody>
        {section.items.map((item) => (
          <tr key={`${section.id}-${item.label}`}>
            <th scope="row">{item.label}</th>
            <td>
              <span>{item.amount}</span> {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const CenovnikInfoBox = ({ locale }: { locale: "sr" | "en" }) => (
  <aside className="oc-price-info" aria-label={locale === "sr" ? "Informacije o izdavanju snimaka" : "X-ray delivery information"}>
    <p>
      {locale === "sr" ? <>Osnovne cene <strong>2D</strong> snimaka odnose se na digitalno izdavanje
      putem <strong className="oc-price-info__accent">OrtoCloud</strong>{" "}
      platforme (pregled, preuzimanje i deljenje). Izdavanje 2D snimaka na filmu
      ili CD-u se dodatno naplaćuje prema cenovniku. Uz svaki <strong>3D</strong>{" "}
      snimak, pored <strong className="oc-price-info__accent">OrtoCloud</strong>{" "}
      pristupa, besplatno dobijate i{" "}
      <strong className="oc-price-info__accent">CD</strong> (pristup 3D
      snimcima je moguć isključivo putem računara).</> : <>Base prices for <strong>2D</strong> X-rays include digital delivery through the <strong className="oc-price-info__accent">OrtoCloud</strong> platform (viewing, downloading and sharing). Film or CD delivery is charged separately according to the price list. Every <strong>3D</strong> scan includes <strong className="oc-price-info__accent">OrtoCloud</strong> access and a complimentary <strong className="oc-price-info__accent">CD</strong> (3D scans can only be viewed on a computer).</>}
    </p>
    <SiteLink to="/ortocloud#cuvanje-podataka" className="oc-text-link oc-price-info__link">
      {locale === "sr" ? "Pravila čuvanja snimaka na OrtoCloudu" : "OrtoCloud X-ray retention policy"} <ArrowRight aria-hidden="true" />
    </SiteLink>
  </aside>
);

export const CenovnikPricing = () => {
  const locale = useLocale();
  const sections = locale === "sr" ? CENOVNIK_SECTIONS : PRICING_SECTIONS_EN;
  return (
  <div className="oc-pricing">
    <header className="oc-pricing__intro">
      <h1>{locale === "sr" ? "Cenovnik" : "Price list"}</h1>
      <p>
        {locale === "sr" ? "Pregled cena za 2D i 3D / CBCT dijagnostiku, kefalometrijske analize i dodatne usluge izdavanja." : "Prices for 2D and 3D / CBCT diagnostics, cephalometric analyses and additional delivery services."}
      </p>
    </header>

    <div className="oc-pricing__content">
      {sections.map((section) => (
        <PriceSection key={section.id} section={section} />
      ))}

      <CenovnikInfoBox locale={locale} />

      <p className="oc-pricing__payment">
        {locale === "sr" ? "Plaćanje je moguće izvršiti gotovinom ili platnim karticama, isključivo u RSD." : "Payment is accepted in cash or by card, exclusively in RSD."}
      </p>
    </div>
  </div>
  );
};
