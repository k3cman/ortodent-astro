import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CenovnikPricing } from "./cenovnik/CenovnikPricing";

const Cenovnik = () => {
  return (
    <div className="oc-site">
      <Header currentPath="/cenovnik" />
      <main className="oc-pricing-page">
        <div className="oc-container">
          <CenovnikPricing />
        </div>
      </main>
      <Footer />
    </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Cenovnik);
