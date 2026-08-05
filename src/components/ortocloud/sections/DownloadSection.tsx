import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppStore { icon: LucideIcon | FC<{ className?: string }>; label: string; href: string; }
const GooglePlayIcon: FC<{ className?: string }> = ({ className }) => <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" /></svg>;
const AppStoreIcon: FC<{ className?: string }> = ({ className }) => <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>;
const HuaweiIcon: FC<{ className?: string }> = ({ className }) => <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>;
const appStores: AppStore[] = [
  { icon: Globe, label: "Web Aplikacija", href: "#" },
  { icon: GooglePlayIcon, label: "Google Play", href: "#" },
  { icon: AppStoreIcon, label: "App Store", href: "#" },
  { icon: HuaweiIcon, label: "App Gallery", href: "#" },
];

export default function DownloadSection() {
  return <section id="preuzmi" className="py-20 lg:py-32 bg-background"><div className="container mx-auto px-4 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Preuzmite OrtoCloud aplikaciju</h2><p className="text-muted-foreground text-lg">Pristupite svojim snimcima sa bilo kog uređaja</p></div>
    <div className="flex flex-wrap justify-center gap-4">{appStores.map((store, index) => { const Icon = store.icon; return <Button key={store.label} variant="outline" size="lg" className="min-w-[180px] gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }} asChild><a href={store.href}><Icon className="w-5 h-5" />{store.label}</a></Button>; })}</div>
  </div></section>;
}
