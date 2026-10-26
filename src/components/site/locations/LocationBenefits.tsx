import { Cloud, ScanLine, ShieldCheck } from "lucide-react";
import { useLocale } from "@/components/site/i18n/LocaleContext";

const benefits = [
  [ShieldCheck, "Bez zakazivanja", "Dođite direktno u centar"],
  [ScanLine, "2D i 3D snimanja", "Precizna dentalna dijagnostika"],
  [Cloud, "OrtoCloud rezultati", "Brz i siguran pristup"],
] as const;

export default function LocationBenefits() {
  const en = useLocale() === "en";
  const items = en ? [[ShieldCheck, "No appointment", "Visit the centre directly"], [ScanLine, "2D and 3D imaging", "Precise dental diagnostics"], [Cloud, "OrtoCloud results", "Fast and secure access"]] as const : benefits;
  return (
    <div className="od-benefits">
      {items.map(([Icon, title, detail]) => (
        <div key={title}>
          <Icon aria-hidden="true" />
          <span><strong>{title}</strong><small>{detail}</small></span>
        </div>
      ))}
    </div>
  );
}
