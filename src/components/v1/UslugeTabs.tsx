import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VersionLink } from "@/components/v1/VersionContext";
import {
  USLUGE_TAB_LABELS,
  USLUGE_TABS,
  type UslugeTab,
} from "@/lib/paths";

export function UslugeTabs({ currentTab }: { currentTab: UslugeTab }) {
  return (
    <Tabs value={currentTab} className="w-full">
      <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12 bg-muted/50 p-1 rounded-full">
        {USLUGE_TABS.map((path) => (
          <TabsTrigger
            key={path}
            value={path}
            asChild
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
          >
            <VersionLink to={`/usluge/${path}`}>
              {USLUGE_TAB_LABELS[path]}
            </VersionLink>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
