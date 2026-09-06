import { SiteProviders } from "@/components/site/SiteProviders";
import Header from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import DownloadSection from "./sections/DownloadSection";
import AccessSection from "./sections/AccessSection";
import ContactSection from "./sections/ContactSection";
import "./ortocloud.css";

export default function OrtoCloudPage() {
  return (
    <SiteProviders>
      <Header currentPath="/ortocloud" />
      <div className="ortocloud-theme">
        <main>
          <HeroSection />
          <FeaturesSection />
          <DownloadSection />
          <AccessSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </SiteProviders>
  );
}
