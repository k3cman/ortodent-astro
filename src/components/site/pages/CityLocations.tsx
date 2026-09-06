import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import belgradeImage from "@/assets/cities/beograd.jpg";
import noviSadImage from "@/assets/cities/novi-sad.jpg";
import pancevoImage from "@/assets/cities/pancevo.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import RegionCards from "@/components/site/locations/RegionCards";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationBenefits from "@/components/site/locations/LocationBenefits";
import LocationsMap from "@/components/site/locations/LocationsMap";
import OrtoCloudBanner from "@/components/site/locations/OrtoCloudBanner";
import {
  centerCountLabel,
  getCityBySlug,
  getLocationsByCity,
  type Location,
  type LocationCitySlug,
} from "@/lib/locations";
import "@/components/site/locations/locations.css";

const cityLocatives: Record<LocationCitySlug, string> = {
  beograd: "Beogradu",
  "novi-sad": "Novom Sadu",
  pancevo: "Pančevu",
};

const cityHeroImages: Record<LocationCitySlug, { src: string; alt: string; position: string }> = {
  pancevo: {
    src: pancevoImage.src,
    alt: "Gradski centar Pančeva",
    position: "center",
  },
  "novi-sad": {
    src: noviSadImage.src,
    alt: "Petrovaradinska tvrđava i Dunav u Novom Sadu",
    position: "center 48%",
  },
  beograd: {
    src: belgradeImage.src,
    alt: "Panorama Beograda i reka Save i Dunava",
    position: "center 56%",
  },
};

function CityLocations({ citySlug }: { citySlug: LocationCitySlug }) {
  const city = getCityBySlug(citySlug)!;
  const locations = useMemo(() => getLocationsByCity(citySlug), [citySlug]);
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const heroImage = cityHeroImages[citySlug];

  return (
    <div className="od-page">
      <Header currentPath="/lokacije" />
      <main>
        <section className="od-city-hero">
          <div className="od-shell">
            <nav className="od-breadcrumb" aria-label="Putanja">
              <SiteLink to="/">Početna</SiteLink><span>›</span><SiteLink to="/lokacije">Lokacije</SiteLink><span>›</span><span>{city.name}</span>
            </nav>
            <div className="od-hero-grid">
              <div className="od-hero-copy">
                <p className="od-kicker">OrtoDent {city.name}</p>
                <h1>Snimanje zuba <span>u {cityLocatives[citySlug]}</span>.</h1>
                <p className="od-lead">{city.description} Digitalna 2D, 3D i kefalometrijska dijagnostika bez zakazivanja.</p>
                <LocationBenefits />
              </div>
              <figure className="od-city-hero__image">
                <img src={heroImage.src} alt={heroImage.alt} style={{ objectPosition: heroImage.position }} fetchPriority="high" decoding="async" />
                <figcaption>{centerCountLabel(locations.length)} u {cityLocatives[citySlug]}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="od-discovery-section">
          <div className="od-shell">
            <div className="od-info-note"><Info aria-hidden="true" /><span>Za dolazak nije potrebno zakazivanje. Izaberite centar koji Vam najviše odgovara.</span></div>
            <div className="od-region-block">
              <p className="od-kicker">Delovi grada</p>
              <RegionCards citySlug={citySlug} />
            </div>
            <header className="od-centered-heading"><h2>Pregled centara u {cityLocatives[citySlug]}</h2><span /></header>
            <div className="od-list-map-layout">
              <div className="od-location-list">
                {locations.map((location) => (
                  <LocationCard
                    key={location.id}
                    location={location}
                    selected={selectedLocation.id === location.id}
                    showDetails
                    onSelect={setSelectedLocation}
                  />
                ))}
              </div>
              <div className="od-sticky-map">
                <LocationsMap
                  locations={locations}
                  selectedId={selectedLocation.id}
                  onSelect={setSelectedLocation}
                  className="od-map--listing"
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

export default function CityLocationsPage({ citySlug }: { citySlug: LocationCitySlug }) {
  return <SiteProviders><CityLocations citySlug={citySlug} /></SiteProviders>;
}
