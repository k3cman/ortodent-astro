import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Usluge2D } from "@/components/site/pages/usluge/Usluge2D";

const Usluge2DPage = () => (
  <div className="oc-site min-h-screen bg-background">
    <Header />
    <main className="oc-2d-page">
      <div className="oc-container">
        <Usluge2D />
      </div>
    </main>
    <Footer />
  </div>
);

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Usluge2DPage);
