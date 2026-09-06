import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Usluge3D } from "@/components/site/pages/usluge/Usluge3D";

const Usluge3DPage = () => (
  <div className="oc-site min-h-screen bg-background">
    <Header />
    <main className="od3d-page">
      <div className="oc-container">
        <Usluge3D />
      </div>
    </main>
    <Footer />
  </div>
);

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Usluge3DPage);
