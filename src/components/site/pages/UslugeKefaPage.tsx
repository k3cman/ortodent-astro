import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UslugeKefa } from "@/components/site/pages/usluge/UslugeKefa";
import "./usluge/kefalometrija.css";
import { useLocale } from "@/components/site/i18n/LocaleContext";
import { localizePath } from "@/lib/i18n";

const UslugeKefaPage = () => {
  const locale = useLocale();
  return (
  <div className="oc-site min-h-screen bg-background">
    <Header currentPath={localizePath("/usluge/kefalometrija", locale)} />
    <main className="oc-kefa-page">
      <UslugeKefa />
    </main>
    <Footer />
  </div>
  );
};

import { withSiteProviders } from "@/components/site/withSiteProviders";

export default withSiteProviders(UslugeKefaPage);
