import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import {
  getLocationOpenState,
  type OpeningHours,
} from "@/lib/locations";

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
  const [state, setState] = useState(() => getLocationOpenState());

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
        <strong>{state.statusLabel}</strong>
        {state.todayLabel && showToday && !compact && <small>{state.todayLabel}</small>}
      </span>
    </div>
  );
}
