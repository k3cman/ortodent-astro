import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UslugeTabs } from "@/components/site/UslugeTabs";
import { UslugeKefa } from "@/components/site/pages/usluge/UslugeKefa";

const UslugeKefaPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <UslugeTabs currentTab="kefalometrija" />
        <UslugeKefa />
      </div>
    </main>
    <Footer />
  </div>
);

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(UslugeKefaPage);
