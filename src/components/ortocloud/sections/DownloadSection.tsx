import type { FC } from "react";
import { Globe, Smartphone } from "lucide-react";
import patientPhone from "@/assets/home/ortocloud-phone.webp";

const GooglePlayIcon: FC = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.61 1.81 13.79 12 3.61 22.19A1 1 0 0 1 3 21.27V2.73a1 1 0 0 1 .61-.92Zm10.89 10.9 2.3 2.3-10.94 6.33 8.64-8.63Zm3.2-3.2 2.81 1.63a1 1 0 0 1 0 1.73l-2.81 1.62L15.21 12l2.49-2.49ZM5.86 2.66 16.8 8.99l-2.3 2.3-8.64-8.63Z" /></svg>;
const AppStoreIcon: FC = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" /></svg>;
const stores = [{ label: "Web aplikacija", icon: Globe }, { label: "Google Play", icon: GooglePlayIcon }, { label: "App Store", icon: AppStoreIcon }, { label: "AppGallery", icon: Smartphone }] as const;

export default function DownloadSection() {
  return (
    <section id="preuzmi" className="odc-download" aria-labelledby="odc-download-title">
      <div className="odc-container odc-download__layout">
        <div className="odc-download__copy"><p className="odc-eyebrow">Pristup sa svih uređaja</p><h2 id="odc-download-title">OrtoCloud uvek sa vama.</h2><p>Preuzmite aplikaciju i pristupite svojim snimcima bilo kada i bilo gde.</p><div className="odc-store-row" aria-label="OrtoCloud platforme">{stores.map(({ label, icon: Icon }) => <a key={label} href="#"><Icon />{label}</a>)}</div></div>
        <div className="odc-download__visual"><img src={patientPhone.src} alt="OrtoCloud aplikacija na mobilnom telefonu" loading="lazy" decoding="async" /></div>
      </div>
    </section>
  );
}
