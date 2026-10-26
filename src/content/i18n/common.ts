import type { Locale } from "../../lib/i18n.ts";

export const commonContent: Record<Locale, {
  navigation: {
    services: string;
    pricing: string;
    information: string;
    locations: string;
    forDentists: string;
    contact: string;
    cloud: string;
    service2d: string;
    service3d: string;
    cephalometry: string;
    allLocations: string;
    belgrade: string;
    noviSad: string;
    pancevo: string;
  };
  header: {
    homeLabel: string;
    mainNavigation: string;
    mobileNavigation: string;
    openMenu: string;
    closeMenu: string;
    showServices: string;
    showCities: string;
    language: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    services: string;
    servicesNavigation: string;
    legalNavigation: string;
    homeLabel: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
}> = {
  sr: {
    navigation: {
      services: "Usluge",
      pricing: "Cenovnik",
      information: "Informacije",
      locations: "Lokacije",
      forDentists: "Za stomatologe",
      contact: "Kontakt",
      cloud: "OrtoCloud",
      service2d: "2D snimanja",
      service3d: "3D snimanja / CBCT",
      cephalometry: "Kefalometrijske analize",
      allLocations: "Sve lokacije",
      belgrade: "Beograd",
      noviSad: "Novi Sad",
      pancevo: "Pančevo",
    },
    header: {
      homeLabel: "OrtoDent naslovna",
      mainNavigation: "Glavna navigacija",
      mobileNavigation: "Mobilna navigacija",
      openMenu: "Otvori meni",
      closeMenu: "Zatvori meni",
      showServices: "Prikaži usluge",
      showCities: "Prikaži lokacije po gradovima",
      language: "Izaberite jezik",
    },
    footer: {
      tagline: "Digitalna dijagnostika koja donosi preciznost, sigurnost i poverenje u svaki plan terapije.",
      quickLinks: "Brzi linkovi",
      services: "Usluge",
      servicesNavigation: "Usluge u podnožju",
      legalNavigation: "Pravne informacije",
      homeLabel: "OrtoDent naslovna",
      privacy: "Politika privatnosti",
      terms: "Uslovi korišćenja",
      copyright: "© 2026 OrtoDent. Sva prava zadržana.",
    },
  },
  en: {
    navigation: {
      services: "Services",
      pricing: "Pricing",
      information: "Information",
      locations: "Locations",
      forDentists: "For dentists",
      contact: "Contact",
      cloud: "OrtoCloud",
      service2d: "2D imaging",
      service3d: "3D imaging / CBCT",
      cephalometry: "Cephalometric analyses",
      allLocations: "All locations",
      belgrade: "Belgrade",
      noviSad: "Novi Sad",
      pancevo: "Pančevo",
    },
    header: {
      homeLabel: "OrtoDent home",
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      showServices: "Show services",
      showCities: "Show locations by city",
      language: "Choose language",
    },
    footer: {
      tagline: "Digital diagnostics that bring precision, safety and confidence to every treatment plan.",
      quickLinks: "Quick links",
      services: "Services",
      servicesNavigation: "Footer services",
      legalNavigation: "Legal information",
      homeLabel: "OrtoDent home",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      copyright: "© 2026 OrtoDent. All rights reserved.",
    },
  },
};

