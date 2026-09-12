import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/site/home/HeroSection";
import ServicesSection from "@/components/site/home/ServicesSection";
import DentistSection from "@/components/site/home/DentistSection";
import StatsSection from "@/components/site/home/StatsSection";
import OrtoCloudPromo from "@/components/site/home/OrtoCloudPromo";
import ReviewsSection from "@/components/site/home/ReviewsSection";
import { withSiteProviders } from "@/components/site/withSiteProviders";

function Index() {
  return (
    <div className="oc-site">
      <Header transparent />
      <main>
        <HeroSection />
        <ServicesSection />
        <OrtoCloudPromo />
        <StatsSection />
        <DentistSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default withSiteProviders(Index);
