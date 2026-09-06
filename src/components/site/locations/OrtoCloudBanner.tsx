import { ArrowRight, Cloud } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";

export default function OrtoCloudBanner() {
  return (
    <aside className="od-cloud-banner">
      <span className="od-cloud-banner__icon"><Cloud aria-hidden="true" /></span>
      <p>
        <strong>Rezultati odmah dostupni na OrtoCloud platformi</strong>
        Sigurno čuvanje, brz pristup i deljenje sa Vašim stomatologom.
      </p>
      <SiteLink to="/ortocloud">
        Saznajte više o OrtoCloudu <ArrowRight aria-hidden="true" />
      </SiteLink>
    </aside>
  );
}
