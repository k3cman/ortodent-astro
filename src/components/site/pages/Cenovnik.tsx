import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CenovnikPricing } from "./cenovnik/CenovnikPricing";

const Cenovnik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <CenovnikPricing />
        </div>
      </main>
      <Footer />
    </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Cenovnik);
