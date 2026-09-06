import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UslugeKefa } from "@/components/site/pages/usluge/UslugeKefa";
import "./usluge/kefalometrija.css";

const UslugeKefaPage = () => (
  <div className="oc-site min-h-screen bg-background">
    <Header />
    <main className="oc-kefa-page">
      <UslugeKefa />
    </main>
    <Footer />
  </div>
);

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(UslugeKefaPage);
