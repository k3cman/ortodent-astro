import type { AnchorHTMLAttributes } from "react";
import { sitePath } from "@/lib/paths";
import { useLocale } from "@/components/site/i18n/LocaleContext";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export function SiteLink({ to, href, children, ...rest }: SiteLinkProps) {
  const locale = useLocale();
  return (
    <a href={href ?? sitePath(to, locale)} {...rest}>
      {children}
    </a>
  );
}
