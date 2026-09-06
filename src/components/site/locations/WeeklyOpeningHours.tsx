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
}: {
  openingHours?: OpeningHours;
}) {
  if (!openingHours) return null;

  const today = getBelgradeWeekday();

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
