import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Usluge2D } from "@/components/site/pages/usluge/Usluge2D";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

const Usluge2DPage = () => {
  const locale = useLocale();
  return (
  <div className="oc-site min-h-screen bg-background">
    <Header currentPath={localizePath("/usluge/2d", locale)} />
    <main className="oc-2d-page">
      <div className="oc-container">
        <Usluge2D />
      </div>
    </main>
    <Footer />
  </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(Usluge2DPage);
