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
      <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-4 mb-12 bg-muted/50 p-1 rounded-full">
        {USLUGE_TABS.map((path) => (
          <TabsTrigger
            key={path}
            value={path}
            asChild
            className="rounded-full px-1 text-[10px] transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow sm:px-3 sm:text-sm"
          >
            <VersionLink to={`/usluge/${path}`}>
              {USLUGE_TAB_LABELS[path]}
            </VersionLink>
          </TabsTrigger>
        ))}
        <TabsTrigger
          value="cenovnik"
          asChild
          className="rounded-full px-1 text-[10px] transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow sm:px-3 sm:text-sm"
        >
          <VersionLink to="/cenovnik">Cenovnik</VersionLink>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
