import type { ComponentType } from "react";
import { SiteProviders } from "@/components/site/SiteProviders";

export function withSiteProviders(Page: ComponentType) {
  return function SitePage() {
    return (
      <SiteProviders>
        <Page />
      </SiteProviders>
    );
  };
}
