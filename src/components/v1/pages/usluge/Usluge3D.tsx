import { motion } from "framer-motion";

export const Usluge3D = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-12 max-w-6xl mx-auto"
  >
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        3D/CBCT{" "}
        <span className="text-primary">(Cone Beam Computed Tomography)</span>
      </h2>
    </div>

    <section className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="soft-card p-6 md:p-8">
        <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-2xl border border-border/40 bg-black">
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

      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-primary">
          3D/CBCT - Zlatni standard dijagnostike
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          3D CBCT snimak predstavlja najsavremeniji oblik dijagnostike u
          stomatologiji. Za razliku od klasičnih 2D snimaka, ova tehnologija
          daje precizan trodimenzionalni prikaz zuba, viličnih kostiju, nerava
          i okolnih anatomskih struktura.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          CBCT aparat koristi značajno manju dozu zračenja u odnosu na
          medicinski CT, što postupak čini bezbednim i pogodnim za rutinsku
          stomatološku praksu.
        </p>

        <div className="space-y-2">
          <h4 className="font-bold text-primary text-sm md:text-base">
            Gde se sve koristi 3D snimak?
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">
                  Implantologija i hirurgija:
                </strong>{" "}
                Planiranje ugradnje implantata i vađenja umnjaka uz jasan prikaz
                odnosa korena, nerva i maksilarnog sinusa.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">Endodoncija:</strong>{" "}
                Detaljan prikaz korenskih kanala, dodatnih kanala i zapaljenskih
                procesa na vrhovima korena.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">Ortodoncija:</strong>{" "}
                Analiza položaja impaktiranih zuba i odnosa vilica pre i tokom
                ortodontske terapije.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">
                  Maksilofacijalna hirurgija:
                </strong>{" "}
                Procena trauma, cista, patoloških promena i koštanih defekata.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="space-y-5">
      <h4 className="text-center text-xl md:text-2xl font-bold text-foreground">
        Tri veličine polja
      </h4>
      <div className="grid md:grid-cols-3 gap-5">
        <article className="soft-card p-6 text-center space-y-3 border-t-2 border-primary/40">
          <div className="w-11 h-11 mx-auto rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
            S
          </div>
          <h5 className="font-semibold text-sm text-foreground">
            Malo Polje (5 × 5 cm)
          </h5>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Obuhvata ciljanu regiju, zahvatajući 2-3 zuba u nizu.
          </p>
        </article>

        <article className="soft-card p-6 text-center space-y-3 border-t-2 border-primary/40">
          <div className="w-11 h-11 mx-auto rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
            M
          </div>
          <h5 className="font-semibold text-sm text-foreground">
            Srednje Polje (8 × 5 cm)
          </h5>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Obuhvata celu gornju ili celu donju vilicu.
          </p>
        </article>

        <article className="soft-card p-6 text-center space-y-3 border-t-2 border-primary/40">
          <div className="w-11 h-11 mx-auto rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
            L
          </div>
          <h5 className="font-semibold text-sm text-foreground">
            Veliko Polje (12 × 9 cm)
          </h5>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Obuhvata obe vilice.
          </p>
        </article>
      </div>
    </section>

    <section className="soft-card px-5 py-4 md:px-8 md:py-5">
      <p className="text-center text-sm text-muted-foreground leading-relaxed">
        3D snimci se izdaju na USB-u i otpremaju na{" "}
        <strong className="text-primary">OrtoCloud platformu</strong>, gde su
        privremeno dostupni Vama i Vašem stomatologu radi planiranja terapije i
        praćenja toka lečenja.
      </p>
    </section>

    <section className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-border/40 bg-black">
          <img
            src="/images/image 36.png"
            alt="3D prikaz vilice na CBCT snimku"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-xl border border-border/40 bg-black">
            <img
              src="/images/image 37.png"
              alt="CBCT preseci vilice - koronarni i aksijalni prikaz"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-border/40 bg-black">
            <img
              src="/images/image 38.png"
              alt="CBCT preseci vilice - sagitalni i 3D prikaz"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-1">
        <h3 className="text-lg md:text-xl font-bold text-primary">
          Digitalna tačnost i bezbedna dijagnostika
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Kombinacijom 3D volumetrijskog prikaza i multiplanarnih preseka,
          stomatolog dobija potpunu dijagnostičku sliku jednim snimanjem. Ovo je
          posebno važno u implantologiji, oralnoj hirurgiji i složenijim
          endodontskim slučajevima.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Precizniji uvid znači sigurnije planiranje zahvata, manje
          intraoperativnih iznenađenja i bolju predvidivost terapijskog ishoda.
        </p>
      </div>
    </section>

    <section className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-end">
      <div className="lg:col-span-2 soft-card p-6 md:p-7 space-y-3">
        <h3 className="text-lg font-bold text-primary">
          Snimanje na vrhunskom 3D uređaju
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Koristimo savremen CBCT aparat visoke rezolucije koji omogućava
          precizne i pouzdane snimke uz optimizovanu dozu zračenja.
        </p>
      </div>

      <div className="lg:col-span-3 relative">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background/70 to-transparent" />
        <img
          src="/images/image 34.png"
          alt="3D CBCT aparat"
          className="relative z-10 w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
        <div className="soft-card p-4 md:p-5 max-w-xs ml-auto -mt-10 relative z-20">
          <h4 className="text-sm font-bold text-primary mb-1">
            Brzo i stručno tumačenje
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Nalaz i snimci su organizovani za jednostavno deljenje sa Vašim
            stomatologom i dalje planiranje terapije.
          </p>
        </div>
      </div>
    </section>
  </motion.div>
);
