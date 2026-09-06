import { useEffect, useState } from "react";
import { Map, MapPin, Phone, ScanLine } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import CityCards from "@/components/site/locations/CityCards";
import LocationBenefits from "@/components/site/locations/LocationBenefits";
import LocationsMap from "@/components/site/locations/LocationsMap";
import OrtoCloudBanner from "@/components/site/locations/OrtoCloudBanner";
import { centerCountLabel, LOCATIONS } from "@/lib/locations";
import { withSiteProviders } from "@/components/site/withSiteProviders";
import "@/components/site/locations/locations.css";

const steps = [
  [Map, "01", "Izaberite grad", "Odaberite grad u kojem želite da pronađete OrtoDent centar."],
  [MapPin, "02", "Pronađite centar", "Pogledajte dostupne centre po regionima, na mapi ili u listi."],
  [Phone, "03", "Kontaktirajte", "Pozovite nas ili otvorite navigaciju do izabranog centra."],
  [ScanLine, "04", "Snimajte bez čekanja", "Dođite bez zakazivanja i uradite snimanje."],
] as const;

function Lokacije() {
  const [compactLayout, setCompactLayout] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 820px)");
    const updateLayout = () => setCompactLayout(query.matches);
    updateLayout();
    query.addEventListener("change", updateLayout);
    return () => query.removeEventListener("change", updateLayout);
  }, []);

  return (
    <div className="od-page">
      <Header currentPath="/lokacije" />
      <main>
        <section className="od-overview-hero">
          <div className="od-shell">
            <nav className="od-breadcrumb" aria-label="Putanja">
              <SiteLink to="/">Početna</SiteLink><span>›</span><span>Lokacije</span>
            </nav>

            <div className="od-hero-grid">
              <div className="od-hero-copy">
                <p className="od-kicker"><MapPin aria-hidden="true" /> Lokacije</p>
                <h1>Pronađite najbliži <span>OrtoDent</span> centar.</h1>
                <p className="od-lead">
                  Digitalna preciznost dostupna na više lokacija. Izaberite grad i pronađite centar najbliži Vama.
                </p>
                <LocationBenefits />
              </div>

              {!compactLayout && <div className="od-hero-map">
                <LocationsMap locations={LOCATIONS} className="od-map--hero" />
                <div className="od-map-count">
                  <MapPin aria-hidden="true" />
                  <span><strong>{centerCountLabel(LOCATIONS.length)}</strong><small>u Srbiji</small></span>
                </div>
              </div>}
            </div>
          </div>
        </section>

        <section className="od-city-section">
          <div className="od-shell">
            <header className="od-centered-heading"><h2>Izaberite grad</h2><span /></header>
            <CityCards />
            {compactLayout && <div className="od-overview-mobile-map">
              <LocationsMap locations={LOCATIONS} className="od-map--mobile-overview" />
              <div className="od-map-count">
                <MapPin aria-hidden="true" />
                <span><strong>{centerCountLabel(LOCATIONS.length)}</strong><small>u Srbiji</small></span>
              </div>
            </div>}
          </div>
        </section>

        <section className="od-process-section">
          <div className="od-shell">
            <header className="od-centered-heading"><h2>Kako funkcioniše?</h2><span /></header>
            <div className="od-process-grid">
              {steps.map(([Icon, number, title, description]) => (
                <article key={number}>
                  <span className="od-process-grid__icon"><Icon aria-hidden="true" /></span>
                  <strong>{number}</strong>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <OrtoCloudBanner />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default withSiteProviders(Lokacije);
