import { useMemo, useState } from "react";
import { Info, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import type { Locale } from "@/lib/i18n";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationsMap from "@/components/site/locations/LocationsMap";
import OrtoCloudBanner from "@/components/site/locations/OrtoCloudBanner";
import RegionCards from "@/components/site/locations/RegionCards";
import {
  centerCountLabel,
  getCityBySlug,
  getLocationsByRegion,
  getRegionBySlug,
  type Location,
  type LocationCitySlug,
} from "@/lib/locations";
import "@/components/site/locations/locations.css";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

function RegionLocations({
  citySlug,
  regionSlug,
}: {
  citySlug: LocationCitySlug;
  regionSlug: string;
}) {
  const locale = useLocale(); const en = locale === "en";
  const city = getCityBySlug(citySlug)!;
  const region = getRegionBySlug(citySlug, regionSlug)!;
  const locations = useMemo(
    () => getLocationsByRegion(citySlug, regionSlug),
    [citySlug, regionSlug],
  );
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const selectLocation = (location: Location) => setSelectedLocation({ ...location });
  const visibleLocations = locations;
  const activeLocation = visibleLocations.find((location) => location.id === selectedLocation.id) ?? visibleLocations[0];

  return (
    <div className="od-page">
      <Header currentPath={localizePath(`/lokacije/${citySlug}/${regionSlug}`, locale)} />
      <main>
        <section className="od-region-hero">
          <div className="od-shell">
            <nav className="od-breadcrumb" aria-label={en ? "Breadcrumb" : "Putanja"}>
              <SiteLink to="/lokacije">{en ? "Locations" : "Lokacije"}</SiteLink><span>›</span><SiteLink to={`/lokacije/${citySlug}`}>{city.name}</SiteLink><span>›</span><span>{region.name}</span>
            </nav>
            <div className="od-region-hero__copy">
              <p className="od-kicker"><MapPin aria-hidden="true" /> OrtoDent · {region.name}</p>
              <h1>{en ? <>Dental imaging <span>in {region.name}</span>.</> : <>Snimanje zuba <span>{region.locative}</span>.</>}</h1>
              <p className="od-lead">{en ? `${locations.length} locations in this part of the city. Compare addresses, call a centre or open its exact map location.` : `${centerCountLabel(locations.length)} u ovom delu grada. Uporedite adrese, pozovite centar ili otvorite preciznu lokaciju na mapi.`}</p>
            </div>
          </div>
        </section>

        <section className="od-discovery-section">
          <div className="od-shell">
            <div className="od-info-note"><Info aria-hidden="true" /><span>{en ? `Only centres in ${region.name} are shown.` : `Prikazani su samo centri koji pripadaju području ${region.name}.`}</span></div>
            <div className="od-region-block">
              <p className="od-kicker">{en ? "Other city areas" : "Drugi delovi grada"}</p>
              <RegionCards citySlug={citySlug} activeRegion={regionSlug} />
            </div>
            <header className="od-section-heading"><p className="od-kicker">{en ? "Local centres" : "Lokalni centri"}</p><h2>{en ? `Centres in ${region.name}` : `Centri u području ${region.name}`}</h2></header>
            <div className="od-list-map-layout">
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
                  collapsibleMobile
                  locations={visibleLocations}
                  selectedId={activeLocation?.id}
                  focusTarget={activeLocation}
                  onSelect={selectLocation}
                  className="od-map--region"
                />
              </div>
            </div>
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
  locale?: Locale;
}) {
  const { locale = "sr", ...regionProps } = props;
  return <SiteProviders locale={locale}><RegionLocations {...regionProps} /></SiteProviders>;
}
