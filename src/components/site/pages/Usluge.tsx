import { Outlet, useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export { Usluge2D } from "./usluge/Usluge2D";
export { Usluge3D } from "./usluge/Usluge3D";
export { UslugeKefa } from "./usluge/UslugeKefa";

const USLUGE_TAB_PATHS = ["2d", "3d", "kefalometrija"] as const;
const USLUGE_TAB_LABELS: Record<(typeof USLUGE_TAB_PATHS)[number], string> = {
  "2d": "2D snimanje",
  "3d": "3D snimanje",
  kefalometrija: "Kefalometrija",
};

const UslugeLayout = () => {
  const { pathname } = useLocation();
  const pathSegment = pathname.replace(/^\/usluge\/?/, "") || "2d";
  const currentTab = USLUGE_TAB_PATHS.includes(
    pathSegment as (typeof USLUGE_TAB_PATHS)[number],
  )
    ? pathSegment
    : "2d";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Tabs value={currentTab} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12 bg-muted/50 p-1 rounded-full">
              {USLUGE_TAB_PATHS.map((path) => (
                <TabsTrigger
                  key={path}
                  value={path}
                  asChild
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
                >
                  <Link to={`/usluge/${path}`}>{USLUGE_TAB_LABELS[path]}</Link>
                </TabsTrigger>
              ))}
            </TabsList>

            <Outlet />
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UslugeLayout;
