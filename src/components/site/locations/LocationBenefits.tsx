import { Cloud, ScanLine, ShieldCheck } from "lucide-react";

const benefits = [
  [ShieldCheck, "Bez zakazivanja", "Dođite direktno u centar"],
  [ScanLine, "2D i 3D snimanja", "Precizna dentalna dijagnostika"],
  [Cloud, "OrtoCloud rezultati", "Brz i siguran pristup"],
] as const;

export default function LocationBenefits() {
  return (
    <div className="od-benefits">
      {benefits.map(([Icon, title, detail]) => (
        <div key={title}>
          <Icon aria-hidden="true" />
          <span><strong>{title}</strong><small>{detail}</small></span>
        </div>
      ))}
    </div>
  );
}
