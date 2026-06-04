import type { ComponentType } from "react";
import type { SiteVersion } from "@/lib/paths";
import { VersionProvider } from "@/components/v1/VersionContext";
import { V1Providers } from "@/components/v1/V1Providers";

export function withVersion(Page: ComponentType) {
  return function VersionedPage({ version }: { version: SiteVersion }) {
    return (
      <VersionProvider version={version}>
        <V1Providers>
          <Page />
        </V1Providers>
      </VersionProvider>
    );
  };
}
