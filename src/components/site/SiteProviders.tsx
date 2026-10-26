import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider } from "@/components/site/i18n/LocaleContext";
import type { Locale } from "@/lib/i18n";

export function SiteProviders({ children, locale = "sr" }: { children: ReactNode; locale?: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </LocaleProvider>
  );
}
