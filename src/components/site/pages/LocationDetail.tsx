import { useMemo } from "react";
import { LOCATION_GALLERIES } from "@/lib/location-gallery";
import LocationGallery from "@/components/site/locations/LocationGallery";
import {
  Accessibility,
  Bus,
  Box,
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
import { localizePath, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import LocationCard from "@/components/site/locations/LocationCard";
import LocationActions from "@/components/site/locations/LocationActions";
import LocationsMap from "@/components/site/locations/LocationsMap";
import OpenNowStatus from "@/components/site/locations/OpenNowStatus";
import OrtoCloudBanner from "@/components/site/locations/OrtoCloudBanner";
import WeeklyOpeningHours from "@/components/site/locations/WeeklyOpeningHours";
import ServiceIndicators from "@/components/site/locations/ServiceIndicators";
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
  const locale = useLocale(); const en = locale === "en";
  const location = getLocationBySlug(citySlug, locationSlug)!;
  const photos = LOCATION_GALLERIES[`${citySlug}/${locationSlug}`] ?? [];
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
        [Bus, en ? "Public transport" : "Javni prevoz", location.practicalInfo.publicTransport],
        [Accessibility, en ? "Accessibility" : "Pristupačnost", location.practicalInfo.access],
        [DoorOpen, en ? "Entrance" : "Ulaz", location.practicalInfo.entrance],
      ].filter((item): item is [typeof Car, string, string] => Boolean(item[2]))
    : [];

  return (
    <div className="od-page">
      <Header currentPath={localizePath(`/lokacije/${citySlug}/${locationSlug}`, locale)} />

      <main>
        <section className="od-detail-hero">
          <div className="od-shell">
            <nav className="od-breadcrumb" aria-label={en ? "Breadcrumb" : "Putanja"}>
              <SiteLink to="/lokacije">{en ? "Locations" : "Lokacije"}</SiteLink><span>›</span><SiteLink to={`/lokacije/${citySlug}`}>{location.city}</SiteLink><span>›</span><span>{location.name}</span>
            </nav>
            <div className="od-detail-hero__grid">
              <div>
                <p className="od-kicker">{en ? "OrtoDent - dental imaging" : "OrtoDent - snimanje zuba"}</p>
                <h1>{location.name}</h1>
                <p className="od-detail-address"><MapPin aria-hidden="true" /> {location.address}</p>
                {location.entranceNote && <p className="od-detail-entrance-note">{en ? "Entrance from Karađorđeva Street" : location.entranceNote}</p>}
                <OpenNowStatus openingHours={location.openingHours} />
              </div>
              <LocationActions location={location} />
            </div>
          </div>
        </section>

        <section className="od-detail-main od-detail-main--utility">
          <div className="od-shell">
            <div className="od-detail-map-layout">
              <div className="od-detail-desktop-map">
              <LocationsMap
                locations={mapLocations}
                selectedId={location.id}
                className="od-map--detail"
              />
              </div>

              <aside className="od-contact-panel">
                <h2>{en ? "Contact and address" : "Kontakt i adresa"}</h2>

                <div className="od-contact-panel__facts">
                  <div>
                    <span className="od-contact-panel__icon"><MapPin aria-hidden="true" /></span>
                    <div>
                      <small>{en ? "Address" : "Adresa"}</small><strong>{location.address}</strong>
                      {location.entranceNote && <span className="od-contact-panel__note">{en ? "Entrance from Karađorđeva Street" : location.entranceNote}</span>}
                    </div>
                  </div>

                  <div>
                    <span className="od-contact-panel__icon"><Phone aria-hidden="true" /></span>
                    <div>
                      <small>{en ? "Phone numbers" : "Telefoni"}</small>
                      <a href={`tel:${phoneHref(location.phone)}`}>{location.phone}</a>
                      {location.phone2 && <a href={`tel:${phoneHref(location.phone2)}`}>{location.phone2}</a>}
                    </div>
                  </div>

                  <div>
                    <span className="od-contact-panel__icon"><Clock3 aria-hidden="true" /></span>
                    <div>
                      <small>{en ? "Current status" : "Trenutni status"}</small>
                      <OpenNowStatus openingHours={location.openingHours} showToday={false} />
                    </div>
                  </div>
                </div>
                {location.openingHours && <div className="od-contact-panel__schedule">
                  <h3>{en ? "Opening hours" : "Radno vreme"}</h3>
                  <p><span>{en ? "Weekdays" : "Radni dani"}</span><strong>08:00–20:00</strong></p>
                  <p><span>{en ? "Saturday" : "Subota"}</span><strong>09:00–16:00</strong></p>
                  <p><span>{en ? "Sunday" : "Nedelja"}</span><strong>{en ? "Closed" : "Ne radimo"}</strong></p>
                </div>}

              </aside>
            </div>

            <div className="od-detail-inline-mobile-map">
              <LocationsMap locations={mapLocations} selectedId={location.id} className="od-map--detail" />
            </div>
            <div className="od-practical-strip">
              <div><span><ShieldCheck aria-hidden="true" /></span><p><strong>{en ? "No appointment" : "Bez zakazivanja"}</strong>{en ? "Visit the centre that suits you." : "Dođite direktno u centar koji Vam odgovara."}</p></div>
              <div><span><Box aria-hidden="true" /></span><div><strong>{en ? "Available services" : "Dostupna snimanja"}</strong><ServiceIndicators location={location} /></div></div>
              <div><span><Cloud aria-hidden="true" /></span><p><strong>{en ? "OrtoCloud results" : "OrtoCloud rezultati"}</strong>{en ? "Fast and secure online access to results." : "Brz i siguran pristup rezultatima online."}</p></div>
            </div>
            <div className="od-mobile-weekly-hours"><h2>{en ? "Opening hours" : "Radno vreme"}</h2><WeeklyOpeningHours openingHours={location.openingHours} compact /></div>
          </div>
        </section>

        {practicalItems.length > 0 && (
          <section className="od-detail-section">
            <div className="od-shell od-detail-section__grid">
              <header className="od-section-heading"><p className="od-kicker">{en ? "Getting here" : "Dolazak"}</p><h2>{en ? "Practical information" : "Praktične informacije"}</h2></header>
              <div className="od-practical-list">
                {practicalItems.map(([Icon, label, value]) => <div key={label}><Icon aria-hidden="true" /><p><strong>{label}</strong>{value}</p></div>)}
              </div>
            </div>
          </section>
        )}

        {photos.length > 0 && <LocationGallery photos={photos} name={location.name} />}

        {relatedLocations.length > 0 && (
          <section className="od-nearby-section">
            <div className="od-shell">
              <header className="od-section-heading"><p className="od-kicker">{en ? "Nearby" : "U blizini"}</p><h2>{en ? "Other nearby centres" : "Ostali centri u blizini"}</h2><p>{en ? `More OrtoDent centres in ${location.city}.` : `Još nekoliko OrtoDent centara u gradu ${location.city}.`}</p></header>
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
  locale = "sr",
}: {
  citySlug: LocationCitySlug;
  locationSlug: string;
  locale?: Locale;
}) {
  return (
    <SiteProviders locale={locale}>
      <LocationDetail citySlug={citySlug} locationSlug={locationSlug} />
    </SiteProviders>
  );
}
