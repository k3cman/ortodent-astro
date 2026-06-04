import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Map, List, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Location {
  id: number;
  city: string;
  name: string;
  address: string;
  phone: string;
  phone2?: string;
  workingHours?: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  // Beograd
  { id: 1, city: "Beograd", name: "Vračar", address: "Njegoševa 42", phone: "+381 11 244 05 01", phone2: "+381 62 872 00 46", lat: 44.8015, lng: 20.4785 },
  { id: 2, city: "Beograd", name: "Zvezdara", address: "Vojvode Šupljikca 37", phone: "+381 11 344 10 44", phone2: "+381 63 846 50 63", lat: 44.8035, lng: 20.5012 },
  { id: 3, city: "Beograd", name: "Stari Grad", address: "Džordža Vašingtona 21a", phone: "+381 11 323 73 85", phone2: "+381 63 846 50 58", lat: 44.8176, lng: 20.4569 },
  { id: 4, city: "Beograd", name: "Voždovac", address: "Vojvode Stepe 32, lok.3", phone: "+381 11 396 24 00", phone2: "+381 63 846 50 59", lat: 44.7681, lng: 20.4872 },
  { id: 5, city: "Beograd", name: "Novi Beograd", address: "Španskih boraca 22v, lok.16", phone: "+381 11 313 23 30", phone2: "+381 62 165 36 64", lat: 44.8186, lng: 20.4177 },
  { id: 6, city: "Beograd", name: "Banovo Brdo", address: "Blagoja Parovića 25", phone: "+381 11 254 30 87", phone2: "+381 62 840 05 50", lat: 44.7783, lng: 20.4267 },
  { id: 7, city: "Beograd", name: "Immo Centar", address: "Japanska 5, lok.7", phone: "+381 11 406 21 44", phone2: "+381 62 810 40 49", lat: 44.8125, lng: 20.4698 },
  { id: 8, city: "Beograd", name: "Stari Merkator", address: "Palmira Toljatija 5, lok.4", phone: "+381 11 312 98 99", phone2: "+381 62 854 91 11", workingHours: "Radno vreme 9–17h. Subotom ne radi.", lat: 44.8150, lng: 20.4520 },
  { id: 9, city: "Beograd", name: "Cerak", address: "Ratka Mitrovića 150", phone: "+381 11 231 02 44", phone2: "+381 62 144 47 72", lat: 44.7522, lng: 20.4388 },
  // Novi Sad
  { id: 10, city: "Novi Sad", name: "Braće Ribnikar", address: "Braće Ribnikar 3", phone: "+381 21 661 166", phone2: "+381 62 871 78 61", lat: 45.2551, lng: 19.8425 },
  { id: 11, city: "Novi Sad", name: "Hadži Ruvimova", address: "Hadži Ruvimova 52, lok.3", phone: "+381 21 510 036", phone2: "+381 62 148 32 48", lat: 45.2461, lng: 19.8282 },
  // Pančevo
  { id: 12, city: "Pančevo", name: "Oslobođenja", address: "Oslobođenja 18a", phone: "+381 13 332 982", phone2: "+381 62 833 30 80", lat: 44.8708, lng: 20.6403 },
  { id: 13, city: "Pančevo", name: "Braće Jovanovića", address: "Braće Jovanovića 40", phone: "+381 13 231 07 35", phone2: "+381 63 120 89 69", lat: 44.8751, lng: 20.6508 },
];

const MapPlaceholder = ({ selectedLocation }: { selectedLocation: Location | null }) => {
  return (
    <div className="relative w-full h-full bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Grid pattern to simulate map */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Simulated map markers */}
      <div className="absolute inset-0">
        {locations.map((loc) => {
          const isSelected = selectedLocation?.id === loc.id;
          // Normalize coordinates to percentage positions within the container
          const minLat = 44.75, maxLat = 45.28;
          const minLng = 19.82, maxLng = 20.66;
          const top = 100 - ((loc.lat - minLat) / (maxLat - minLat)) * 80 - 10;
          const left = ((loc.lng - minLng) / (maxLng - minLng)) * 80 + 10;

          return (
            <motion.div
              key={loc.id}
              className="absolute"
              style={{ top: `${top}%`, left: `${left}%` }}
              animate={isSelected ? { scale: 1.5 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`w-4 h-4 rounded-full border-2 border-card shadow-md transition-colors duration-300 ${
                isSelected ? 'bg-secondary w-5 h-5' : 'bg-secondary/60'
              }`} />
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card shadow-raised rounded-lg px-3 py-1.5 whitespace-nowrap z-10"
                >
                  <p className="text-xs font-semibold text-foreground">{loc.name}</p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-card rotate-45 shadow-sm" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Center label */}
      {!selectedLocation && (
        <div className="text-center z-10 p-6">
          <Map className="w-12 h-12 text-secondary/40 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm font-semibold">Izaberite lokaciju za prikaz na mapi</p>
        </div>
      )}
    </div>
  );
};

const LocationCard = ({ 
  location, 
  isSelected, 
  onClick 
}: { 
  location: Location; 
  isSelected: boolean; 
  onClick: () => void;
}) => {
  const cityColor = location.city === "Beograd" 
    ? "bg-secondary/10 text-secondary" 
    : location.city === "Novi Sad" 
      ? "bg-accent/10 text-accent" 
      : "bg-muted text-muted-foreground";

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`accent-card p-5 cursor-pointer transition-all duration-300 border-2 ${
        isSelected 
          ? 'border-secondary/40 shadow-glow' 
          : 'border-transparent hover:border-secondary/10 hover:shadow-raised'
      }`}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground text-base">{location.name}</h3>
          <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mt-1 ${cityColor}`}>
            {location.city}
          </span>
        </div>
        <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-sm text-muted-foreground flex items-start gap-2">
          <MapPin className="w-4 h-4 text-secondary/50 mt-0.5 flex-shrink-0" />
          {location.address}
        </p>
        <div className="text-sm text-muted-foreground flex items-start gap-2">
          <Phone className="w-4 h-4 text-secondary/50 mt-0.5 flex-shrink-0" />
          <span className="flex flex-wrap items-center gap-x-1">
            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-secondary transition-colors">{location.phone}</a>
            {location.phone2 && (
              <>
                <span className="text-muted-foreground/70">·</span>
                <a href={`tel:${location.phone2.replace(/\s/g, '')}`} className="hover:text-secondary transition-colors">{location.phone2}</a>
              </>
            )}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{location.workingHours ?? "Radnim danima 8–20h, subotom 9–16h"}</span>
          </div>
        </div>
        <Button variant="glow" size="sm" className="text-xs h-8 px-4" onClick={(e) => e.stopPropagation()}>
          Zakaži termin
        </Button>
      </div>
    </motion.div>
  );
};

const Lokacije = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [showMap, setShowMap] = useState(false);

  const groupedLocations = {
    "Beograd": locations.filter(l => l.city === "Beograd"),
    "Novi Sad": locations.filter(l => l.city === "Novi Sad"),
    "Pančevo": locations.filter(l => l.city === "Pančevo"),
  };

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    setShowMap(true); // On mobile, auto-switch to map
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-cream py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                Lokacije
              </h1>
              <p className="text-muted-foreground text-lg">
                Pronađite najbližu Ortodent lokaciju. Bez zakazivanja — dođite kada Vam odgovara.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Desktop Layout */}
        <section className="hidden lg:block">
          <div className="container mx-auto px-6">
            <div className="flex h-[calc(100vh-220px)] gap-6 py-6 pb-16">
              {/* Left: Location List */}
              <div className="w-[42%] overflow-y-auto pr-4">
                <div className="space-y-8">
                  {Object.entries(groupedLocations).map(([city, locs]) => (
                    <div key={city}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <h2 className="text-lg font-semibold text-foreground">{city}</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {locs.length} {locs.length === 1 ? 'lokacija' : locs.length < 5 ? 'lokacije' : 'lokacija'}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {locs.map((loc) => (
                          <LocationCard
                            key={loc.id}
                            location={loc}
                            isSelected={selectedLocation?.id === loc.id}
                            onClick={() => setSelectedLocation(loc)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Map */}
              <div className="w-[58%]">
                <MapPlaceholder selectedLocation={selectedLocation} />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Layout */}
        <section className="lg:hidden">
          <AnimatePresence mode="wait">
            {!showMap ? (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto px-6 py-6 pb-24 space-y-6"
              >
                {Object.entries(groupedLocations).map(([city, locs]) => (
                  <div key={city}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <h2 className="text-base font-semibold text-foreground">{city}</h2>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {locs.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {locs.map((loc) => (
                        <LocationCard
                          key={loc.id}
                          location={loc}
                          isSelected={selectedLocation?.id === loc.id}
                          onClick={() => handleLocationClick(loc)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto px-6 h-[calc(100vh-140px)] py-4 pb-24"
              >
                <MapPlaceholder selectedLocation={selectedLocation} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Toggle Button */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <Button
              variant="glow"
              size="lg"
              onClick={() => setShowMap(!showMap)}
              className="shadow-glow px-6 gap-2"
            >
              {showMap ? (
                <>
                  <List className="w-5 h-5" />
                  Prikaži Listu
                </>
              ) : (
                <>
                  <Map className="w-5 h-5" />
                  Prikaži Mapu
                </>
              )}
            </Button>
          </div>
        </section>
      </main>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

import { withVersion } from "@/components/v1/withVersion";

export default withVersion(Lokacije);
