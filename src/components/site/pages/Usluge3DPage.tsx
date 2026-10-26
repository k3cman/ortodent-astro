import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Usluge3D } from "@/components/site/pages/usluge/Usluge3D";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

const Usluge3DPage = () => {
  const locale = useLocale();
  return (
  <div className="oc-site min-h-screen bg-background">
    <Header currentPath={localizePath("/usluge/3d", locale)} />
    <main className="od3d-page">
      <div className="oc-container">
        <Usluge3D />
      </div>
    </main>
    <Footer />
  </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Usluge3DPage);
