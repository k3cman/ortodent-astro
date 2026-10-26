import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import CityCards from "@/components/site/locations/CityCards";
import LocationsMap from "@/components/site/locations/LocationsMap";
import NearestLocationFinder from "@/components/site/locations/NearestLocationFinder";
import { centerCountLabel, LOCATIONS } from "@/lib/locations";
import { withSiteProviders } from "@/components/site/withSiteProviders";
import "@/components/site/locations/locations.css";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

function Lokacije() {
  const locale = useLocale(); const en = locale === "en";
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
      <Header currentPath={localizePath("/lokacije", locale)} />
      <main>
        <section className="od-overview-hero">
          <div className="od-shell">
            <nav className="od-breadcrumb" aria-label={en ? "Breadcrumb" : "Putanja"}>
              <SiteLink to="/">{en ? "Home" : "Početna"}</SiteLink><span>›</span><span>{en ? "Locations" : "Lokacije"}</span>
            </nav>

            <div className="od-hero-grid">
              <div className="od-hero-copy">
                <p className="od-kicker"><MapPin aria-hidden="true" /> {en ? "Locations" : "Lokacije"}</p>
                <h1>{en ? <>Find your nearest <span>OrtoDent</span> X-ray centre.</> : <>Pronađite najbliži <span>OrtoDent</span> rendgen centar.</>}</h1>
                <p className="od-lead">
                  {en ? "Choose a city and find the dental X-ray centre nearest to you." : "Izaberite grad i pronađite centar za snimanje zuba najbliži Vama."}
                </p>
                <NearestLocationFinder />
              </div>

              {!compactLayout && <div className="od-hero-map">
                <LocationsMap locations={LOCATIONS} className="od-map--hero" />
                <div className="od-map-count">
                  <MapPin aria-hidden="true" />
                  <span><strong>{en ? `${LOCATIONS.length} locations` : centerCountLabel(LOCATIONS.length)}</strong><small>{en ? "in Serbia" : "u Srbiji"}</small></span>
                </div>
              </div>}
            </div>
          </div>
        </section>

        <section className="od-city-section">
          <div className="od-shell">
            <header className="od-centered-heading"><h2>{en ? "Choose a city" : "Izaberite grad"}</h2><span /></header>
            <CityCards />
            {compactLayout && <div className="od-overview-mobile-map">
              <LocationsMap collapsibleMobile locations={LOCATIONS} className="od-map--mobile-overview" />
            </div>}
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}

export default withSiteProviders(Lokacije);
