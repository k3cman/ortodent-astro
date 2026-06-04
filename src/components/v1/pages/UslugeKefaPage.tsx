import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UslugeTabs } from "@/components/v1/UslugeTabs";
import { UslugeKefa } from "@/components/v1/pages/usluge/UslugeKefa";

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

import { withVersion } from "@/components/v1/withVersion";

export default withVersion(UslugeKefaPage);
