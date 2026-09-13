import { Cloud, Play, Apple, Smartphone } from "lucide-react";
import "./ortocloud-platforms.css";

const platforms = [
  { name: "OrtoCloud", caption: "Web aplikacija", href: "https://ortocloud.org/", icon: "web" },
  { name: "Google Play", caption: "GET IT ON", href: "https://play.google.com/store/apps/details?id=org.stomatolozi.orto&hl=sr&pli=1", icon: "google" },
  { name: "App Store", caption: "Download on the", href: "https://apps.apple.com/hr/app/ortocloud/id1536090680", icon: "apple" },
  { name: "AppGallery", caption: "EXPLORE IT ON", href: "https://appgallery.huawei.com/#/app/C103205855", icon: "huawei" },
];

function PlatformIcon({ type }: { type: string }) {
  const Icon = type === "web" ? Cloud : type === "google" ? Play : type === "apple" ? Apple : Smartphone;
  return <Icon aria-hidden="true" />;
}

export default function OrtoCloudPlatforms({ variant = "compact" }: { variant?: "compact" | "download" }) {
  return <nav className={`oc-platforms oc-platforms--${variant}`} aria-label="OrtoCloud platforme">
    <div className="oc-platforms__grid">
      {platforms.map(({ name, href, icon }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="oc-platforms__badge" aria-label={`${name} — otvara se u novom tabu`}>
        <PlatformIcon type={icon} />
        <span>{variant === "compact" && <small>{icon === "web" ? "Otvorite" : icon === "google" ? "Dostupno na" : icon === "apple" ? "Preuzmite u" : "Istraži u"}</small>}<strong>{variant === "download" && icon === "web" ? "Web aplikacija" : name}</strong></span>
      </a>)}
    </div>
  </nav>;
}
