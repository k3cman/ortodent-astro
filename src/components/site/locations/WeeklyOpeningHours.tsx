import {
  WEEKDAYS,
  formatDayHours,
  getBelgradeWeekday,
  type OpeningHours,
  type Weekday,
} from "@/lib/locations";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const labels: Record<Weekday, string> = {
  monday: "Ponedeljak",
  tuesday: "Utorak",
  wednesday: "Sreda",
  thursday: "Četvrtak",
  friday: "Petak",
  saturday: "Subota",
  sunday: "Nedelja",
};

export default function WeeklyOpeningHours({
  openingHours,
  compact = false,
}: {
  openingHours?: OpeningHours;
  compact?: boolean;
}) {
  const en = useLocale() === "en";
  if (!openingHours) return null;

  const today = getBelgradeWeekday();

  if (compact) {
    const rows = [
      [en ? "Weekdays" : "Radni dani", "monday"],
      [en ? "Saturday" : "Subota", "saturday"],
      [en ? "Sunday" : "Nedelja", "sunday"],
    ] as const;
    return <div className="od-weekly-hours">{rows.map(([label, day]) => (
      <div key={day} className="od-weekly-hours__row">
        <span>{label}</span>
        <strong>{openingHours[day] ? formatDayHours(openingHours[day]) : openingHours[day] === null ? (en ? "Closed" : "Ne radimo") : (en ? "Not specified" : "Nije navedeno")}</strong>
      </div>
    ))}</div>;
  }

  return (
    <div className="od-weekly-hours">
      {WEEKDAYS.map((day) => {
        const hasValue = Object.prototype.hasOwnProperty.call(openingHours, day);
        const hours = openingHours[day];

        return (
          <div
            key={day}
            className={`od-weekly-hours__row${today === day ? " is-today" : ""}`}
          >
            <span>{en ? ({ monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday" } as const)[day] : labels[day]}</span>
            <strong>
              {!hasValue ? (en ? "Not specified" : "Nije navedeno") : hours ? formatDayHours(hours) : (en ? "Closed" : "Ne radi")}
            </strong>
          </div>
        );
      })}
    </div>
  );
}
