import type { CenovnikSection } from "@/content/cenovnik";
import { CENOVNIK_SECTIONS } from "@/content/cenovnik";

const currency = "din";

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

const CenovnikInfoBox = () => (
  <aside className="oc-price-info" aria-label="Informacije o izdavanju snimaka">
    <p>
      Osnovne cene <strong>2D</strong> snimaka odnose se na digitalno izdavanje
      putem <strong className="oc-price-info__accent">OrtoCloud</strong>{" "}
      platforme (pregled, preuzimanje i deljenje). Izdavanje 2D snimaka na filmu
      ili CD-u se dodatno naplaćuje prema cenovniku. Uz svaki <strong>3D</strong>{" "}
      snimak, pored <strong className="oc-price-info__accent">OrtoCloud</strong>{" "}
      pristupa, besplatno dobijate i{" "}
      <strong className="oc-price-info__accent">USB</strong> (pristup 3D
      snimcima je moguć isključivo putem računara).
    </p>
  </aside>
);

export const CenovnikPricing = () => (
  <div className="oc-pricing">
    <header className="oc-pricing__intro">
      <h1>Cenovnik</h1>
      <p>
        Pregled cena za 2D i 3D / CBCT dijagnostiku, kefalometrijske analize i
        dodatne usluge izdavanja.
      </p>
    </header>

    <div className="oc-pricing__content">
      {CENOVNIK_SECTIONS.map((section) => (
        <PriceSection key={section.id} section={section} />
      ))}

      <CenovnikInfoBox />

      <p className="oc-pricing__payment">
        Plaćanje je moguće izvršiti gotovinom ili platnim karticama, isključivo
        u dinarskoj protivvrednosti.
      </p>
    </div>
  </div>
);
