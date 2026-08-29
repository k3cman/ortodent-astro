import type { AnchorHTMLAttributes } from "react";
import { sitePath } from "@/lib/paths";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export function SiteLink({ to, href, children, ...rest }: SiteLinkProps) {
  return (
    <a href={href ?? sitePath(to)} {...rest}>
      {children}
    </a>
  );
}
