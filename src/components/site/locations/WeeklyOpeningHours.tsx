import {
  WEEKDAYS,
  formatDayHours,
  getBelgradeWeekday,
  type OpeningHours,
  type Weekday,
} from "@/lib/locations";

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
  if (!openingHours) return null;

  const today = getBelgradeWeekday();

  if (compact) {
    const rows = [
      ["Radni dani", "monday"],
      ["Subota", "saturday"],
      ["Nedelja", "sunday"],
    ] as const;
    return <div className="od-weekly-hours">{rows.map(([label, day]) => (
      <div key={day} className="od-weekly-hours__row">
        <span>{label}</span>
        <strong>{openingHours[day] ? formatDayHours(openingHours[day]) : openingHours[day] === null ? "Ne radimo" : "Nije navedeno"}</strong>
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
            <span>{labels[day]}</span>
            <strong>
              {!hasValue ? "Nije navedeno" : hours ? formatDayHours(hours) : "Ne radi"}
            </strong>
          </div>
        );
      })}
    </div>
  );
}
