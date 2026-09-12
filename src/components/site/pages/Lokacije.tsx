import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import CityCards from "@/components/site/locations/CityCards";
import LocationsMap from "@/components/site/locations/LocationsMap";
import { centerCountLabel, LOCATIONS } from "@/lib/locations";
import { withSiteProviders } from "@/components/site/withSiteProviders";
import "@/components/site/locations/locations.css";

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
                <h1>Pronađite najbliži <span>OrtoDent</span> rendgen centar.</h1>
                <p className="od-lead">
                  Izaberite grad i pronađite centar za snimanje zuba najbliži Vama.
                </p>
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


      </main>
      <Footer />
    </div>
  );
}

export default withSiteProviders(Lokacije);
