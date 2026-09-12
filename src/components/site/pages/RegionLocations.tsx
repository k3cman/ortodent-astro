import { useMemo, useState } from "react";
import { Info, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationsMap from "@/components/site/locations/LocationsMap";
import OrtoCloudBanner from "@/components/site/locations/OrtoCloudBanner";
import RegionCards from "@/components/site/locations/RegionCards";
import {
  centerCountLabel,
  getLocationServices,
  getCityBySlug,
  getLocationsByRegion,
  getRegionBySlug,
  type Location,
  type LocationCitySlug,
} from "@/lib/locations";
import "@/components/site/locations/locations.css";

function RegionLocations({
  citySlug,
  regionSlug,
}: {
  citySlug: LocationCitySlug;
  regionSlug: string;
}) {
  const city = getCityBySlug(citySlug)!;
  const region = getRegionBySlug(citySlug, regionSlug)!;
  const locations = useMemo(
    () => getLocationsByRegion(citySlug, regionSlug),
    [citySlug, regionSlug],
  );
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const selectLocation = (location: Location) => setSelectedLocation({ ...location });
  const [only3D, setOnly3D] = useState(false);
  const visibleLocations = useMemo(
    () => only3D ? locations.filter((location) => getLocationServices(location).includes("3d")) : locations,
    [locations, only3D],
  );
  const activeLocation = visibleLocations.find((location) => location.id === selectedLocation.id) ?? visibleLocations[0];

  return (
    <div className="od-page">
      <Header currentPath="/lokacije" />
      <main>
        <section className="od-region-hero">
          <div className="od-shell">
            <nav className="od-breadcrumb" aria-label="Putanja">
              <SiteLink to="/lokacije">Lokacije</SiteLink><span>›</span><SiteLink to={`/lokacije/${citySlug}`}>{city.name}</SiteLink><span>›</span><span>{region.name}</span>
            </nav>
            <div className="od-region-hero__copy">
              <p className="od-kicker"><MapPin aria-hidden="true" /> OrtoDent · {region.name}</p>
              <h1>Snimanje zuba <span>{region.locative}</span>.</h1>
              <p className="od-lead">{centerCountLabel(locations.length)} u ovom delu grada. Uporedite adrese, pozovite centar ili otvorite preciznu lokaciju na mapi.</p>
            </div>
          </div>
        </section>

        <section className="od-discovery-section">
          <div className="od-shell">
            <div className="od-info-note"><Info aria-hidden="true" /><span>Prikazani su samo centri koji pripadaju području {region.name}.</span></div>
            <div className="od-region-block">
              <p className="od-kicker">Drugi delovi grada</p>
              <RegionCards citySlug={citySlug} activeRegion={regionSlug} />
            </div>
            <header className="od-section-heading"><p className="od-kicker">Lokalni centri</p><h2>Centri u području {region.name}</h2></header>
            <div className="od-location-filter">
              <label>
                <input type="checkbox" checked={only3D} onChange={(event) => setOnly3D(event.target.checked)} />
                <span>Samo centri sa 3D snimanjem</span>
              </label>
              <span role="status">{centerCountLabel(visibleLocations.length)}</span>
            </div>
            {visibleLocations.length === 0 ? (
              <p className="od-info-note">U ovom području trenutno nema centara sa 3D snimanjem.</p>
            ) : <div className="od-list-map-layout">
              <div className="od-location-list">
                  {visibleLocations.map((location) => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      selected={activeLocation?.id === location.id}
                      showDetails
                      onSelect={selectLocation}
                    />
                  ))}
              </div>
              <div className="od-sticky-map">
                <LocationsMap
                  locations={visibleLocations}
                  selectedId={activeLocation?.id}
                  focusTarget={activeLocation}
                  onSelect={selectLocation}
                  className="od-map--region"
                />
              </div>
            </div>}
            <OrtoCloudBanner />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function RegionLocationsPage(props: {
  citySlug: LocationCitySlug;
  regionSlug: string;
}) {
  return <SiteProviders><RegionLocations {...props} /></SiteProviders>;
}
