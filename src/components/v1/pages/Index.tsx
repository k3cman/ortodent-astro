import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import ServiceCards from "@/components/ServiceCards";
import OrtoCloudSection from "@/components/OrtoCloudSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <OrtoCloudSection />
        <TrustStats />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

import { withVersion } from "@/components/v1/withVersion";

export default withVersion(Index);
