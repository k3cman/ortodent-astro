import { ArrowRight, CircleGauge, Clock3, Cloud, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import LocationsMap from "@/components/site/locations/LocationsMap";
import { withSiteProviders } from "@/components/site/withSiteProviders";
import heroImage from "@/assets/about/hero-consultation.png";
import peopleImage from "@/assets/about/people-technology.png";
import patientImage from "@/assets/home/cbct-patient.webp";
import patientImageSmall from "@/assets/home/cbct-patient-640.webp";
import dentistImage from "@/assets/home/dentist-workstation.webp";
import dentistImageSmall from "@/assets/home/dentist-workstation-960.webp";
import { homeContent } from "@/content/home";
import { LOCATION_CITIES, LOCATIONS } from "@/lib/locations";
import "@/components/site/pages/o-nama.css";

const proof = [
  {
    value: homeContent.stats.find((item) => item[1] === "godina iskustva")?.[0] ?? "17",
    label: "godina iskustva",
    detail: "Kontinuirano radimo na razvoju dijagnostike i usluge.",
  },
  {
    value: String(LOCATIONS.length),
    label: "centara",
    detail: "U Beogradu, Novom Sadu i Pančevu.",
  },
  {
    value: homeContent.stats.find((item) => item[1] === "snimaka")?.[0] ?? "500K+",
    label: "snimaka",
    detail: "Poverenje pacijenata i stomatologa širom Srbije.",
  },
] as const;

const principles = [
  {
    icon: CircleGauge,
    title: "Precizno",
    text: "Savremena 2D i 3D tehnologija i standardizovan proces za pouzdanu dijagnostiku.",
  },
  {
    icon: Clock3,
    title: "Brzo",
    text: "Jednostavan dolazak bez zakazivanja i digitalno dostupni rezultati.",
  },
  {
    icon: Cloud,
    title: "Povezano",
    text: "OrtoCloud povezuje pacijenta, stomatologa i OrtoDent u efikasnijem toku rada.",
  },
] as const;

function ONama() {
  return (
    <div className="oc-site about-page">
      <Header currentPath="/o-nama" />
      <main>
        <section className="about-hero" aria-labelledby="about-title">
          <div className="oc-container">
            <nav className="about-breadcrumb" aria-label="Putanja">
              <SiteLink to="/">Početna</SiteLink>
              <span aria-hidden="true">›</span>
              <span>O nama</span>
            </nav>

            <div className="about-hero__grid">
              <div className="about-hero__copy">
                <p className="about-kicker">O nama</p>
                <h1 id="about-title">Preciznost kojoj<br />možete da verujete.</h1>
                <p className="about-lead">
                  OrtoDent je mreža centara za 2D i 3D dentalnu radiologiju,
                  sa fokusom na pouzdanu dijagnostiku, savremenu tehnologiju i
                  jednostavno iskustvo za pacijente i stomatologe.
                </p>
                <div className="about-actions">
                  <SiteLink to="/usluge/2d" className="about-button">
                    Naše usluge <ArrowRight aria-hidden="true" />
                  </SiteLink>
                  <SiteLink to="/kontakt" className="about-link">
                    Kontaktirajte nas <ArrowRight aria-hidden="true" />
                  </SiteLink>
                </div>
              </div>

              <figure className="about-photo about-hero__photo">
                <img
                  src={heroImage.src}
                  alt="Radiološki tehničar razgovara sa pacijentkinjom pored CBCT uređaja"
                  fetchPriority="high"
                />
              </figure>
            </div>

            <div className="about-proof" aria-label="OrtoDent u brojkama">
              {proof.map((item) => (
                <div className="about-proof__item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-approach" aria-labelledby="approach-title">
          <div className="oc-container">
            <div className="about-heading-row">
              <div>
                <p className="about-kicker">Kako radimo</p>
                <h2 id="approach-title">Jednostavan proces.<br />Vrhunski rezultati.</h2>
              </div>
              <p>
                Verujemo da vrhunska dijagnostika treba da bude precizna,
                brza i dostupna — za svakog pacijenta i svakog stomatologa.
              </p>
            </div>

            <div className="about-principles">
              {principles.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <span className="about-principles__icon"><Icon aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-people" aria-labelledby="people-title">
          <div className="oc-container about-editorial">
            <figure className="about-photo about-editorial__photo">
              <img
                src={peopleImage.src}
                alt="Stručnjak objašnjava pacijentkinji panoramski snimak zuba"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="about-editorial__copy">
              <p className="about-kicker">Naš tim</p>
              <h2 id="people-title">Tehnologija je važna.<br />Ljudi još više.</h2>
              <p>
                Iza savremene tehnologije su ljudi posvećeni tome da svaki
                korak bude jasan, a dijagnostika precizna i pouzdana.
              </p>
              <p>
                Ulažemo u znanje i opremu jer najbolji rezultat nastaje kada
                se stručnost i briga o pacijentu prirodno dopunjuju.
              </p>
            </div>
          </div>
        </section>

        <section className="about-network" aria-labelledby="network-title">
          <div className="oc-container about-network__grid">
            <div className="about-network__copy">
              <p className="about-kicker">Mreža centara</p>
              <h2 id="network-title">Uvek blizu vas.</h2>
              <p>
                {LOCATIONS.length} centara u Beogradu, Novom Sadu i Pančevu,
                sa jednostavnim dolaskom bez zakazivanja.
              </p>
              <SiteLink to="/lokacije" className="about-button">
                Pronađite najbliži centar <ArrowRight aria-hidden="true" />
              </SiteLink>
              <dl className="about-city-counts">
                {LOCATION_CITIES.map((city) => {
                  const count = LOCATIONS.filter((location) => location.citySlug === city.slug).length;
                  return (
                    <div key={city.slug}>
                      <dt>{city.name}</dt>
                      <dd>{count} {count === 1 ? "centar" : count < 5 ? "centra" : "centara"}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className="about-map-wrap">
              <LocationsMap locations={LOCATIONS} className="about-map" />
              <div className="about-map__label">
                <MapPin aria-hidden="true" />
                <span><strong>{LOCATIONS.length} centara</strong><small>širom regiona</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-paths" aria-label="Informacije za pacijente i stomatologe">
          <div className="oc-container about-paths__grid">
            <article className="about-path-card">
              <div className="about-path-card__copy">
                <p className="about-kicker">Za pacijente</p>
                <h2>Brza dijagnostika.<br />Bez komplikacija.</h2>
                <p>Jasan proces, prijatno iskustvo i digitalni rezultati u OrtoCloudu.</p>
                <SiteLink to="/informacije" className="about-link">
                  Kako izgleda snimanje <ArrowRight aria-hidden="true" />
                </SiteLink>
              </div>
              <img
                src={patientImage.src}
                srcSet={`${patientImageSmall.src} 640w, ${patientImage.src} 960w`}
                sizes="(max-width: 720px) 100vw, 24vw"
                alt="Pacijentkinja tokom CBCT snimanja"
                decoding="async"
              />
            </article>

            <article className="about-path-card">
              <div className="about-path-card__copy">
                <p className="about-kicker">Za stomatologe</p>
                <h2>Pouzdana dijagnostika.<br />Podrška u planiranju.</h2>
                <p>OrtoCloud, digitalni rezultati i saradnja na koju možete da se oslonite.</p>
                <SiteLink to="/za-doktore" className="about-link">
                  Saradnja sa OrtoDentom <ArrowRight aria-hidden="true" />
                </SiteLink>
              </div>
              <img
                src={dentistImage.src}
                srcSet={`${dentistImageSmall.src} 960w, ${dentistImage.src} 1672w`}
                sizes="(max-width: 720px) 100vw, 24vw"
                alt="Stomatolog pregleda digitalne snimke za planiranje terapije"
                decoding="async"
              />
            </article>
          </div>
        </section>

        <section className="about-statement" aria-label="Naša filozofija">
          <div className="oc-container about-statement__inner">
            <div>
              <p className="about-kicker">Naša filozofija</p>
              <h2>Precizno. Mirno. Ljudski.</h2>
            </div>
            <p>
              Moderna dijagnostika treba da donese jasnoću, sigurnost i mir —
              pacijentima, stomatolozima i celoj zajednici.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default withSiteProviders(ONama);
