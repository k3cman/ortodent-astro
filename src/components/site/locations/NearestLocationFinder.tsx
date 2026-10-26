import { useCallback, useEffect, useRef, useState } from "react";
import { LoaderCircle, Navigation } from "lucide-react";
import { getNearestLocation, locationPath } from "@/lib/locations";
import { sitePath } from "@/lib/paths";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const SESSION_KEY = "ortodent-location-requested";

export default function NearestLocationFinder() {
  const en = useLocale() === "en";
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const mounted = useRef(false);
  const attempted = useRef(false);
  const pending = useRef(false);

  const findNearest = useCallback(() => {
    if (pending.current) return;
    if (!window.isSecureContext || !navigator.geolocation) {
      setMessage(en ? "Location access is unavailable. Choose a city below." : "Pristup lokaciji nije dostupan. Izaberite grad ispod.");
      return;
    }
    pending.current = true;
    setLoading(true);
    setMessage(en ? "Allow location access so we can open the nearest centre." : "Odobrite pristup lokaciji da bismo otvorili najbliži centar.");
    // Store only the request flag, never the visitor's coordinates.
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* Storage may be disabled. */ }
    const fail = (text: string) => {
      pending.current = false;
      if (!mounted.current) return;
      setLoading(false);
      setMessage(text);
    };
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        if (!mounted.current) return;
        const center = getNearestLocation({ lat: coords.latitude, lng: coords.longitude });
        if (!center) { fail(en ? "Location is unavailable. Try again or choose a city below." : "Lokacija nije dostupna. Pokušajte ponovo ili izaberite grad ispod."); return; }
        window.location.assign(sitePath(locationPath(center)));
      },
      (error) => fail(error.code === 1
        ? (en ? "Location access was not allowed. Choose a city below or enable location access in your browser settings." : "Pristup lokaciji nije odobren. Izaberite grad ispod ili omogućite lokaciju u podešavanjima browsera.")
        : (en ? "Location is unavailable. Try again or choose a city below." : "Lokacija nije dostupna. Pokušajte ponovo ili izaberite grad ispod.")),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }, [en]);

  useEffect(() => {
    mounted.current = true;
    if (!attempted.current) {
      attempted.current = true;
      let alreadyRequested = false;
      try { alreadyRequested = sessionStorage.getItem(SESSION_KEY) === "1"; } catch { /* Use the mount guard instead. */ }
      if (!alreadyRequested) findNearest();
    }
    return () => { mounted.current = false; };
  }, [findNearest]);

  return (
    <div className="od-nearest-location">
      <button className="oc-button oc-button--primary" type="button" disabled={loading} onClick={findNearest}>
        {loading ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : <Navigation aria-hidden="true" />}
        {loading ? (en ? "Finding the nearest centre…" : "Tražimo najbliži centar…") : (en ? "Find the nearest centre" : "Pronađite najbliži centar")}
      </button>
      <p role="status" aria-live="polite">{message || (en ? "With your permission, we will open the centre nearest to your location." : "Uz Vašu dozvolu otvaramo centar najbliži Vašoj lokaciji.")}</p>
    </div>
  );
}
