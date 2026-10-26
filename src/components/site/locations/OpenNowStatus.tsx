import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import {
  getLocationOpenState,
  type OpeningHours,
} from "@/lib/locations";
import { useLocale } from "@/components/site/i18n/LocaleContext";

type OpenNowStatusProps = {
  openingHours?: OpeningHours;
  compact?: boolean;
  showToday?: boolean;
};

export default function OpenNowStatus({
  openingHours,
  compact = false,
  showToday = true,
}: OpenNowStatusProps) {
  const en = useLocale() === "en";
  const [state, setState] = useState(() => getLocationOpenState());
  const englishLabel = (label: string) => label
    .replace("Radno vreme proverite telefonom", "Please confirm opening hours by phone")
    .replace("Otvoreno sada", "Open now")
    .replace("Zatvoreno", "Closed")
    .replace("otvara danas u", "opens today at")
    .replace("otvara sutra u", "opens tomorrow at")
    .replace("Danas", "Today")
    .replace("Ne radi", "Closed");

  useEffect(() => {
    const updateState = () => setState(getLocationOpenState(openingHours));
    updateState();

    if (!openingHours) return;
    const interval = window.setInterval(updateState, 60_000);
    return () => window.clearInterval(interval);
  }, [openingHours]);

  return (
    <div className={`od-open-status od-open-status--${state.kind}${compact ? " od-open-status--compact" : ""}`}>
      {state.kind === "unknown" ? (
        <Clock3 aria-hidden="true" />
      ) : (
        <span className="od-open-status__dot" aria-hidden="true" />
      )}
      <span>
        <strong>{en ? englishLabel(state.statusLabel) : state.statusLabel}</strong>
        {state.todayLabel && showToday && !compact && <small>{en ? englishLabel(state.todayLabel) : state.todayLabel}</small>}
      </span>
    </div>
  );
}
