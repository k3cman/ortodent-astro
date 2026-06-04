import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

export const UslugeKefa = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-12 max-w-5xl mx-auto"
  >
    {/* Title */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Kefalometrijske analize
      </h2>
    </div>

    {/* Split: Image Left, Text Right */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left - Kefalometrijski tracing */}
      <div className="soft-card p-6 border">
        <div className="overflow-hidden rounded-xl border border-border/40 bg-muted/30">
          <img
            src="/images/Kef-analize2-400x367.jpg"
            alt="Kefalometrijski tracing – lateralni kefalogram sa digitalnim merenjima"
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6 mt-6">
        <h3 className="m-0">
          <img
            src="/images/Kef-analize-logo.png"
            alt="KefAnalize dentamed"
            className="h-9 w-auto max-w-full object-contain object-left md:h-11"
            loading="eager"
            decoding="async"
          />
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          Da bi planiranje Vaše terapije fiksnom protezom bilo potpuno precizno,
          stomatologu je potreban detaljan uvid u odnos Vaših zuba i struktura
          lica. Naše digitalne kefalometrijske analize pružaju lekaru neophodne
          podatke za sigurno i precizno planiranje Vaše terapije.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
            Ključne karakteristike:
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Vrhunska digitalna preciznost:
                </strong>{" "}
                Koristimo savremeni softver za precizno iscrtavanje ključnih
                tačaka lica i vilica, čime eliminišemo mogućnost manuelne
                greške.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Efikasniji put do novog osmeha:
                </strong>{" "}
                Digitalna obrada podataka značajno skraćuje vreme potrebno za
                izradu plana lečenja, omogućavajući Vašem stomatologu da se brže
                i više posveti početku Vaše terapije.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Digitalna dostupnost:
                </strong>{" "}
                Vaši rezultati se čuvaju na OrtoCloud nalogu Vašeg stomatologa u
                digitalnom formatu, omogućavajući brz i jednostavan uvid kad god
                je to potrebno tokom procesa lečenja.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);
