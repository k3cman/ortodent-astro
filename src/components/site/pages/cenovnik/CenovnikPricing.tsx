import { motion } from "framer-motion";
import type { CenovnikSection } from "@/content/cenovnik";
import { CENOVNIK_SECTIONS } from "@/content/cenovnik";

const currency = "din";

const PriceSection = ({ section }: { section: CenovnikSection }) => (
  <section
    className="soft-card overflow-hidden rounded-xl"
    aria-labelledby={`cenovnik-section-${section.id}`}
  >
    <div className="bg-muted px-6 py-4 rounded-t-xl">
      <h2
        id={`cenovnik-section-${section.id}`}
        className="font-semibold text-foreground uppercase tracking-wider text-sm"
      >
        {section.title}
      </h2>
      {section.subtitle ? (
        <p className="mt-2 text-sm italic text-muted-foreground leading-snug">
          {section.subtitle}
        </p>
      ) : null}
    </div>
    <div className="divide-y divide-border rounded-b-xl overflow-hidden">
      {section.items.map((item, index) => (
        <div
          key={`${section.id}-${index}`}
          className={`flex justify-between items-start gap-4 px-6 py-4 ${
            index % 2 === 0 ? "bg-card" : "bg-muted/30"
          }`}
        >
          <span className="text-foreground text-left min-w-0">{item.label}</span>
          <span className="font-medium text-primary shrink-0 tabular-nums">
            {item.amount} {currency}
          </span>
        </div>
      ))}
    </div>
  </section>
);

const CenovnikInfoBox = () => (
  <div className="rounded-xl border border-primary/15 bg-primary/5 p-6 text-sm leading-relaxed text-foreground">
    <p>
      Osnovne cene <strong>2D</strong> snimaka odnose se na digitalno izdavanje
      putem <span className="font-semibold text-primary">OrtoCloud</span>{" "}
      platforme (pregled, preuzimanje i deljenje). Izdavanje 2D snimaka na filmu
      ili CD-u se dodatno naplaćuje prema cenovniku. Uz svaki <strong>3D</strong>{" "}
      snimak, pored <span className="font-semibold text-primary">OrtoCloud</span>{" "}
      pristupa, besplatno dobijate i{" "}
      <span className="font-semibold text-primary">USB</span> (pristup 3D
      snimcima je moguć isključivo putem računara).
    </p>
  </div>
);

export const CenovnikPricing = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-8"
  >
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Cenovnik
      </h1>
    </div>

    <div className="max-w-4xl mx-auto space-y-8">
      {CENOVNIK_SECTIONS.map((section) => (
        <PriceSection key={section.id} section={section} />
      ))}

      <CenovnikInfoBox />

      <p className="text-center text-sm text-muted-foreground leading-relaxed px-2">
        Plaćanje je moguće izvršiti gotovinom ili platnim karticama, isključivo
        u dinarskoj protivvrednosti.
      </p>
    </div>
  </motion.div>
);
