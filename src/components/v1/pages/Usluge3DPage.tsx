import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UslugeTabs } from "@/components/v1/UslugeTabs";
import { Usluge3D } from "@/components/v1/pages/usluge/Usluge3D";

const Usluge3DPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <UslugeTabs currentTab="3d" />
        <Usluge3D />
      </div>
    </main>
    <Footer />
  </div>
);

import { withVersion } from "@/components/v1/withVersion";

export default withVersion(Usluge3DPage);
