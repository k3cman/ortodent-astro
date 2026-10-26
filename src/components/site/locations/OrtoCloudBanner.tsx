import { ArrowRight, Cloud } from "lucide-react";
import { SiteLink } from "@/components/site/SiteLink";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function OrtoCloudBanner() {
  const en = useLocale() === "en";
  return (
    <aside className="od-cloud-banner">
      <span className="od-cloud-banner__icon"><Cloud aria-hidden="true" /></span>
      <p>
        <strong>{en ? "Results available immediately on OrtoCloud" : "Rezultati odmah dostupni na OrtoCloud platformi"}</strong>
        {en ? "Secure storage, fast access and easy sharing with your dentist." : "Sigurno čuvanje, brz pristup i deljenje sa Vašim stomatologom."}
      </p>
      <SiteLink to="/ortocloud">
        {en ? "Learn more about OrtoCloud" : "Saznajte više o OrtoCloudu"} <ArrowRight aria-hidden="true" />
      </SiteLink>
    </aside>
  );
}
