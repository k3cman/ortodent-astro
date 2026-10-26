import type { ComponentType } from "react";
import { SiteProviders } from "@/components/site/SiteProviders";
import type { Locale } from "@/lib/i18n";

export function withSiteProviders<P extends object>(Page: ComponentType<P>) {
  return function SitePage(props: P & { locale?: Locale }) {
    const { locale = "sr", ...pageProps } = props;
    return (
      <SiteProviders locale={locale}>
        <Page {...(pageProps as P)} />
      </SiteProviders>
    );
  };
}
