import { SiteProviders } from "@/components/site/SiteProviders";
import Header from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import DownloadSection from "./sections/DownloadSection";
import AccessSection from "./sections/AccessSection";
import "./ortocloud.css";
import { localizePath, type Locale } from "@/lib/i18n";

export default function OrtoCloudPage({ locale = "sr" }: { locale?: Locale }) {
  return (
    <SiteProviders locale={locale}>
      <Header currentPath={localizePath("/ortocloud", locale)} />
      <div className="ortocloud-theme">
        <main>
          <HeroSection />
          <FeaturesSection><DownloadSection /></FeaturesSection>
          <AccessSection />
        </main>
        <SiteFooter />
      </div>
    </SiteProviders>
  );
}
