import { useCallback, useEffect, useRef, useState } from "react";
import { LoaderCircle, Navigation } from "lucide-react";
import { getNearestLocation, locationPath } from "@/lib/locations";
import { sitePath } from "@/lib/paths";

const SESSION_KEY = "ortodent-location-requested";

export default function NearestLocationFinder() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const mounted = useRef(false);
  const attempted = useRef(false);
  const pending = useRef(false);

  const findNearest = useCallback(() => {
    if (pending.current) return;
    if (!window.isSecureContext || !navigator.geolocation) {
      setMessage("Pristup lokaciji nije dostupan. Izaberite grad ispod.");
      return;
    }
    pending.current = true;
    setLoading(true);
    setMessage("Odobrite pristup lokaciji da bismo otvorili najbliži centar.");
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
        if (!center) { fail("Lokacija nije dostupna. Pokušajte ponovo ili izaberite grad ispod."); return; }
        window.location.assign(sitePath(locationPath(center)));
      },
      (error) => fail(error.code === 1
        ? "Pristup lokaciji nije odobren. Izaberite grad ispod ili omogućite lokaciju u podešavanjima browsera."
        : "Lokacija nije dostupna. Pokušajte ponovo ili izaberite grad ispod."),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }, []);

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
        {loading ? "Tražimo najbliži centar…" : "Pronađite najbliži centar"}
      </button>
      <p role="status" aria-live="polite">{message || "Uz Vašu dozvolu otvaramo centar najbliži Vašoj lokaciji."}</p>
    </div>
  );
}
