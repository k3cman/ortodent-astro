import { useMemo } from "react";
import {
  Accessibility,
  Bus,
  Car,
  Clock3,
  Cloud,
  DoorOpen,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteLink } from "@/components/site/SiteLink";
import { SiteProviders } from "@/components/site/SiteProviders";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationActions from "@/components/site/locations/LocationActions";
import LocationsMap from "@/components/site/locations/LocationsMap";
import OpenNowStatus from "@/components/site/locations/OpenNowStatus";
import OrtoCloudBanner from "@/components/site/locations/OrtoCloudBanner";
import ServiceIndicators from "@/components/site/locations/ServiceIndicators";
import WeeklyOpeningHours from "@/components/site/locations/WeeklyOpeningHours";
import {
  distanceBetweenLocations,
  getLocationBySlug,
  getLocationsByCity,
  phoneHref,
  type LocationCitySlug,
} from "@/lib/locations";
import "@/components/site/locations/locations.css";

function LocationDetail({
  citySlug,
  locationSlug,
}: {
  citySlug: LocationCitySlug;
  locationSlug: string;
}) {
  const location = getLocationBySlug(citySlug, locationSlug)!;
  const mapLocations = useMemo(() => [location], [location]);
  const relatedLocations = useMemo(
    () =>
      getLocationsByCity(citySlug)
        .filter((item) => item.id !== location.id)
        .sort(
          (first, second) =>
            distanceBetweenLocations(location, first) -
            distanceBetweenLocations(location, second),
        )
        .slice(0, 3),
    [citySlug, location],
  );

  const practicalItems = location.practicalInfo
    ? [
        [Car, "Parking", location.practicalInfo.parking],
        [Bus, "Javni prevoz", location.practicalInfo.publicTransport],
        [Accessibility, "Pristupačnost", location.practicalInfo.access],
        [DoorOpen, "Ulaz", location.practicalInfo.entrance],
      ].filter((item): item is [typeof Car, string, string] => Boolean(item[2]))
    : [];

  return (
    <div className="od-page">
      <Header currentPath="/lokacije" />

      <main>
        <section className="od-detail-hero">
          <div className="od-shell">
            <nav className="od-breadcrumb" aria-label="Putanja">
              <SiteLink to="/lokacije">Lokacije</SiteLink><span>›</span><SiteLink to={`/lokacije/${citySlug}`}>{location.city}</SiteLink><span>›</span><span>{location.name}</span>
            </nav>
            <div className="od-detail-hero__grid">
              <div>
                <p className="od-kicker">OrtoDent centar</p>
                <h1>{location.name}</h1>
                <p className="od-detail-address"><MapPin aria-hidden="true" /> {location.address}</p>
                <OpenNowStatus openingHours={location.openingHours} />
              </div>
              <LocationActions location={location} />
            </div>
          </div>
        </section>

        <section className="od-detail-main">
          <div className="od-shell">
            <div className="od-detail-map-layout">
              <LocationsMap
                locations={mapLocations}
                selectedId={location.id}
                className="od-map--detail"
              />

              <aside className="od-contact-panel">
                <h2>Kontakt i adresa</h2>
                <p>Kontakt podaci i precizna lokacija centra.</p>

                <div className="od-contact-panel__facts">
                  <div>
                    <span className="od-contact-panel__icon"><MapPin aria-hidden="true" /></span>
                    <div>
                      <small>Adresa</small><strong>{location.address}</strong>
                    </div>
                  </div>

                  <div>
                    <span className="od-contact-panel__icon"><Phone aria-hidden="true" /></span>
                    <div>
                      <small>Telefoni</small>
                      <a href={`tel:${phoneHref(location.phone)}`}>{location.phone}</a>
                      <a href={`tel:${phoneHref(location.phone2)}`}>{location.phone2}</a>
                    </div>
                  </div>

                  <div>
                    <span className="od-contact-panel__icon"><Clock3 aria-hidden="true" /></span>
                    <div>
                      <small>Radno vreme</small>
                      <OpenNowStatus openingHours={location.openingHours} />
                    </div>
                  </div>
                </div>
                <ServiceIndicators location={location} />

              </aside>
            </div>

            <div className="od-practical-strip">
              <div><span><ShieldCheck aria-hidden="true" /></span><p><strong>Bez zakazivanja</strong>Dođite direktno u centar koji Vam odgovara.</p></div>
              <div><span><Clock3 aria-hidden="true" /></span><p><strong>Radno vreme</strong>Proverite aktuelno radno vreme telefonom.</p></div>
              <div><span><Cloud aria-hidden="true" /></span><p><strong>OrtoCloud rezultati</strong>Brz i siguran pristup rezultatima online.</p></div>
            </div>
          </div>
        </section>

        {location.openingHours && (
          <section className="od-detail-section">
            <div className="od-shell od-detail-section__grid">
              <header className="od-section-heading"><p className="od-kicker">Pre dolaska</p><h2>Radno vreme</h2><p>Kompletan nedeljni raspored centra {location.name}.</p></header>
              <WeeklyOpeningHours openingHours={location.openingHours} />
            </div>
          </section>
        )}

        {practicalItems.length > 0 && (
          <section className="od-detail-section">
            <div className="od-shell od-detail-section__grid">
              <header className="od-section-heading"><p className="od-kicker">Dolazak</p><h2>Praktične informacije</h2></header>
              <div className="od-practical-list">
                {practicalItems.map(([Icon, label, value]) => <div key={label}><Icon aria-hidden="true" /><p><strong>{label}</strong>{value}</p></div>)}
              </div>
            </div>
          </section>
        )}

        {relatedLocations.length > 0 && (
          <section className="od-nearby-section">
            <div className="od-shell">
              <header className="od-section-heading"><p className="od-kicker">U blizini</p><h2>Ostali centri u blizini</h2><p>Još nekoliko OrtoDent centara u gradu {location.city}.</p></header>
              <div className="od-nearby-grid">
                {relatedLocations.map((relatedLocation) => (
                  <LocationCard
                    key={relatedLocation.id}
                    location={relatedLocation}
                    showDetails
                  />
                ))}
              </div>
              <OrtoCloudBanner />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function LocationDetailPage({
  citySlug,
  locationSlug,
}: {
  citySlug: LocationCitySlug;
  locationSlug: string;
}) {
  return (
    <SiteProviders>
      <LocationDetail citySlug={citySlug} locationSlug={locationSlug} />
    </SiteProviders>
  );
}
