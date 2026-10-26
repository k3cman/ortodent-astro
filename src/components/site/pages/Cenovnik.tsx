import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CenovnikPricing } from "./cenovnik/CenovnikPricing";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

const Cenovnik = () => {
  const locale = useLocale();
  return (
    <div className="oc-site">
      <Header currentPath={localizePath("/cenovnik", locale)} />
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
