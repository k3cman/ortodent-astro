import type { SiteVersion } from "@/lib/paths";
import { VersionProvider } from "@/components/v1/VersionContext";
import { V1Providers } from "@/components/v1/V1Providers";
import Header from "@/components/v1/Header";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import DownloadSection from "./sections/DownloadSection";
import AccessSection from "./sections/AccessSection";
import RegistrationSection from "./sections/RegistrationSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import "./ortocloud.css";

export default function OrtoCloudPage({ version }: { version: SiteVersion }) {
  return (
    <VersionProvider version={version}>
      <V1Providers>
        <Header />
        <div className="ortocloud-theme min-h-screen bg-background">
          <main>
            <HeroSection />
            <FeaturesSection />
            <DownloadSection />
            <AccessSection />
            <RegistrationSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </V1Providers>
    </VersionProvider>
  );
}
