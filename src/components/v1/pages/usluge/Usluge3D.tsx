import { motion } from "framer-motion";

export const Usluge3D = () => (
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
        3D/CBCT{" "}
        <span className="text-primary">(Cone Beam Computed Tomography)</span>
      </h2>
    </div>

    {/* Split: Image Left, Text Right */}
    <div className="grid lg:grid-cols-2 gap-8 items-start lg:items-stretch">
      {/* Left - 3D CBCT video (stretches to match text column on lg+) */}
      <div className="soft-card flex h-full min-h-0 flex-col p-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/40 bg-black lg:min-h-0 lg:flex-1 lg:aspect-auto">
          <iframe
            src="https://www.youtube.com/embed/fLM5W-d17HU"
            title="3D CBCT prikaz"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-primary">
          3D/CBCT – Zlatni standard dijagnostike
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          CBCT tehnologija koristi konusni snop rendgenskih zraka za dobijanje
          preciznog 3D prikaza Vaših zuba i vilica. Za razliku od klasičnog
          skenera (CT), CBCT koristi neuporedivo manje doze zračenja, čineći
          snimanje maksimalno bezbednim.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Za Vas to znači precizniju dijagnozu, bezbedniju intervenciju i plan
          lečenja potpuno prilagođen Vašoj anatomiji.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-primary text-sm">
            Gde se sve koristi 3D snimak?
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">
                  Implantologija i hirurgija:
                </strong>{" "}
                Sigurno postavljanje implantata i bezbedno vađenje umnjaka uz
                jasan uvid u položaj nerava, strukturu i dimenzije alveolarne
                kosti i odnose sa maksilarnim sinusom.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">Endodoncija:</strong>{" "}
                Precizan prikaz kanala korena zuba i upalnih procesa na vrhu
                korena zuba.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">Ortodoncija:</strong>{" "}
                Analiza koštanih struktura lica i jasan prikaz odnosa zuba i
                viličnih zglobova (temporomandibularni zglobovi).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">
                  Maksilofacijalna hirurgija:
                </strong>{" "}
                Detekcija trauma, preloma i patoloških promena u koštanom tkivu.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Tri veličine polja - 3 column row */}
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-foreground text-center">
        Tri veličine polja
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">S</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">
            Malo Polje (5 × 5 cm)
          </h5>
          <p className="text-muted-foreground text-xs">
            Obuhvata ciljanu regiju, zahvatajući 2-3 zuba u nizu.
          </p>
        </div>

        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">M</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">
            Srednje Polje (8 × 5 cm)
          </h5>
          <p className="text-muted-foreground text-xs">
            Obuhvata celu gornju ili celu donju vilicu.
          </p>
        </div>

        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">L</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">
            Veliko Polje (12 × 9 cm)
          </h5>
          <p className="text-muted-foreground text-xs">Obuhvata obe vilice.</p>
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="p-4 bg-muted/50 rounded-xl text-center">
      <p className="text-sm text-muted-foreground">
        3D snimci se izdaju na USB-u i otpremaju na{" "}
        <strong className="text-primary">OrtoCloud</strong>, gde su 15 dana
        dostupni Vama i Vašem stomatologu. Pristup je moguć isključivo putem
        računara.
      </p>
    </div>
  </motion.div>
);
