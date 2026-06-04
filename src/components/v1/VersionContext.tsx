import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import { vPath, type SiteVersion } from "@/lib/paths";

const VersionContext = createContext<SiteVersion>("v1");

export function VersionProvider({
  version,
  children,
}: {
  version: SiteVersion;
  children: ReactNode;
}) {
  return (
    <VersionContext.Provider value={version}>{children}</VersionContext.Provider>
  );
}

export function useVersion(): SiteVersion {
  return useContext(VersionContext);
}

type VersionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export function VersionLink({ to, href, children, ...rest }: VersionLinkProps) {
  const version = useVersion();
  return (
    <a href={href ?? vPath(version, to)} {...rest}>
      {children}
    </a>
  );
}
