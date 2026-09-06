export const CITY_SLUGS = ["beograd", "novi-sad", "pancevo"] as const;

export type LocationCitySlug = (typeof CITY_SLUGS)[number];
export type LocationCityName = "Beograd" | "Novi Sad" | "Pančevo";

export const WEEKDAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export type Weekday = (typeof WEEKDAYS)[number];

export interface DayHours {
  open: string;
  close: string;
}

export type OpeningHours = Partial<Record<Weekday, DayHours | null>>;

export interface LocationPracticalInfo {
  parking?: string;
  publicTransport?: string;
  access?: string;
  entrance?: string;
}

export interface LocationCity {
  slug: LocationCitySlug;
  name: LocationCityName;
  description: string;
}

export interface LocationRegion {
  slug: string;
  citySlug: LocationCitySlug;
  name: string;
  locative: string;
  description: string;
  locationIds: readonly number[];
}

export interface Location {
  id: number;
  slug: string;
  city: LocationCityName;
  citySlug: LocationCitySlug;
  name: string;
  address: string;
  phone: string;
  phone2: string;
  lat: number;
  lng: number;
  openingHours?: OpeningHours;
  services?: readonly string[];
  practicalInfo?: LocationPracticalInfo;
}

export type LocationOpenState = {
  kind: "open" | "closed" | "unknown";
  statusLabel: string;
  todayLabel?: string;
};

export const LOCATION_CITIES: readonly LocationCity[] = [
  {
    slug: "beograd",
    name: "Beograd",
    description: "Devet OrtoDent centara širom grada.",
  },
  {
    slug: "novi-sad",
    name: "Novi Sad",
    description: "Dva centra na lako dostupnim lokacijama.",
  },
  {
    slug: "pancevo",
    name: "Pančevo",
    description: "Dva centra u centru Pančeva.",
  },
];

export const LOCATIONS: readonly Location[] = [
  {
    id: 1,
    slug: "arena",
    city: "Beograd",
    citySlug: "beograd",
    name: "Arena",
    address: "Španskih boraca 22v, Beograd",
    phone: "011 313 23 30",
    phone2: "062 165 36 64",
    lat: 44.8156336,
    lng: 20.4198943,
  },
  {
    id: 2,
    slug: "immocentar",
    city: "Beograd",
    citySlug: "beograd",
    name: "ImmoCentar",
    address: "Japanska 5, lokal 7, Beograd",
    phone: "011 406 21 44",
    phone2: "062 810 40 49",
    lat: 44.806649,
    lng: 20.3834658,
  },
  {
    id: 3,
    slug: "stari-grad",
    city: "Beograd",
    citySlug: "beograd",
    name: "Stari grad",
    address: "Džordža Vašingtona 21a, Beograd",
    phone: "011 323 73 85",
    phone2: "063 846 50 58",
    lat: 44.8154496,
    lng: 20.471039,
  },
  {
    id: 4,
    slug: "banovo-brdo",
    city: "Beograd",
    citySlug: "beograd",
    name: "Banovo brdo",
    address: "Blagoja Parovića 25, Beograd",
    phone: "011 254 30 87",
    phone2: "062 840 05 50",
    lat: 44.7705875,
    lng: 20.4175057,
  },
  {
    id: 5,
    slug: "juzni-beograd",
    city: "Beograd",
    citySlug: "beograd",
    name: "Voždovac",
    address: "Vojvode Stepe 32, lokal 3, Beograd",
    phone: "011 396 24 00",
    phone2: "063 846 50 59",
    lat: 44.7843987,
    lng: 20.4692256,
  },
  {
    id: 6,
    slug: "zvezdara",
    city: "Beograd",
    citySlug: "beograd",
    name: "Zvezdara",
    address: "Vojvode Šupljikca 37, Beograd",
    phone: "011 344 10 44",
    phone2: "063 846 50 63",
    lat: 44.7986253,
    lng: 20.4861359,
  },
  {
    id: 7,
    slug: "vracar",
    city: "Beograd",
    citySlug: "beograd",
    name: "Vračar",
    address: "Njegoševa 42, Beograd",
    phone: "011 244 05 01",
    phone2: "062 872 00 46",
    lat: 44.8027225,
    lng: 20.47007,
  },
  {
    id: 8,
    slug: "cerak",
    city: "Beograd",
    citySlug: "beograd",
    name: "Cerak",
    address: "Ratka Mitrovića 150, Beograd",
    phone: "011 231 02 44",
    phone2: "062 144 47 72",
    lat: 44.7493107,
    lng: 20.4283677,
  },
  {
    id: 9,
    slug: "stari-merkator",
    city: "Beograd",
    citySlug: "beograd",
    name: "Stari Merkator",
    address: "Palmira Toljatija 5, lokal 4, Beograd",
    phone: "011 312 98 99",
    phone2: "062 854 91 11",
    lat: 44.8289777,
    lng: 20.4125316,
  },
  {
    id: 10,
    slug: "oslobodjenja",
    city: "Pančevo",
    citySlug: "pancevo",
    name: "Oslobođenja",
    address: "Oslobođenja 18a, Pančevo",
    phone: "013 332 982",
    phone2: "062 333 30 80",
    lat: 44.8723342,
    lng: 20.6499484,
  },
  {
    id: 11,
    slug: "brace-jovanovica",
    city: "Pančevo",
    citySlug: "pancevo",
    name: "Braće Jovanovića",
    address: "Braće Jovanovića 40, lokal 4, Pančevo",
    phone: "013 231 07 35",
    phone2: "063 120 89 69",
    lat: 44.8731616,
    lng: 20.6436448,
  },
  {
    id: 12,
    slug: "brace-ribnikar",
    city: "Novi Sad",
    citySlug: "novi-sad",
    name: "Braće Ribnikar",
    address: "Braće Ribnikar 3, Novi Sad",
    phone: "021 661 11 66",
    phone2: "062 871 78 61",
    lat: 45.2475608,
    lng: 19.8385544,
  },
  {
    id: 13,
    slug: "hadzi-ruvimova",
    city: "Novi Sad",
    citySlug: "novi-sad",
    name: "Hadži Ruvimova",
    address: "Hadži Ruvimova 52, lokal 3, Novi Sad",
    phone: "021 510 036",
    phone2: "062 148 32 48",
    lat: 45.2564539,
    lng: 19.8131542,
  },
];

export const LOCATION_REGIONS: readonly LocationRegion[] = [
  {
    slug: "novi-beograd",
    citySlug: "beograd",
    name: "Novi Beograd",
    locative: "na Novom Beogradu",
    description: "Arena, ImmoCentar i Stari Merkator.",
    locationIds: [1, 2, 9],
  },
  {
    slug: "centar",
    citySlug: "beograd",
    name: "Centar i Vračar",
    locative: "u centru i na Vračaru",
    description: "Stari grad i Vračar.",
    locationIds: [3, 7],
  },
  {
    slug: "istocni-beograd",
    citySlug: "beograd",
    name: "Istočni Beograd",
    locative: "u istočnom Beogradu",
    description: "Zvezdara.",
    locationIds: [6],
  },
  {
    slug: "vozdovac",
    citySlug: "beograd",
    name: "Voždovac",
    locative: "na Voždovcu",
    description: "Centar u Vojvode Stepe.",
    locationIds: [5],
  },
  {
    slug: "cukarica",
    citySlug: "beograd",
    name: "Čukarica",
    locative: "na Čukarici",
    description: "Banovo brdo i Cerak.",
    locationIds: [4, 8],
  },
  {
    slug: "centar",
    citySlug: "novi-sad",
    name: "Centar",
    locative: "u centru Novog Sada",
    description: "Braće Ribnikar.",
    locationIds: [12],
  },
  {
    slug: "detelinara",
    citySlug: "novi-sad",
    name: "Detelinara",
    locative: "na Detelinari",
    description: "Hadži Ruvimova.",
    locationIds: [13],
  },
  {
    slug: "centar",
    citySlug: "pancevo",
    name: "Centar Pančeva",
    locative: "u centru Pančeva",
    description: "Oslobođenja i Braće Jovanovića.",
    locationIds: [10, 11],
  },
];

export const isLocationCitySlug = (
  slug: string,
): slug is LocationCitySlug => CITY_SLUGS.includes(slug as LocationCitySlug);

export const getCityBySlug = (slug: string) =>
  LOCATION_CITIES.find((city) => city.slug === slug);

export const getLocationsByCity = (slug: string) =>
  LOCATIONS.filter((location) => location.citySlug === slug);

export const getRegionsByCity = (slug: string) =>
  LOCATION_REGIONS.filter((region) => region.citySlug === slug);

export const getRegionBySlug = (citySlug: string, regionSlug: string) =>
  LOCATION_REGIONS.find(
    (region) => region.citySlug === citySlug && region.slug === regionSlug,
  );

export const getLocationsByRegion = (citySlug: string, regionSlug: string) => {
  const region = getRegionBySlug(citySlug, regionSlug);
  return region
    ? LOCATIONS.filter((location) => region.locationIds.includes(location.id))
    : [];
};

export const getLocationBySlug = (citySlug: string, locationSlug: string) =>
  LOCATIONS.find(
    (location) =>
      location.citySlug === citySlug && location.slug === locationSlug,
  );

export const locationPath = (location: Location) =>
  `/lokacije/${location.citySlug}/${location.slug}`;

export const regionPath = (region: LocationRegion) =>
  `/lokacije/${region.citySlug}/${region.slug}`;

export const locationCountLabel = (count: number) =>
  `${count} ${count === 1 ? "lokacija" : count >= 2 && count <= 4 ? "lokacije" : "lokacija"}`;

export const centerCountLabel = (count: number) =>
  `${count} ${count === 1 ? "centar" : count >= 2 && count <= 4 ? "centra" : "centara"}`;

export const phoneHref = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `+381${digits.slice(1)}` : `+${digits}`;
};

export const openStreetMapPageUrl = (location: Location) =>
  `https://www.openstreetmap.org/?mlat=${location.lat}&mlon=${location.lng}#map=17/${location.lat}/${location.lng}`;

export const distanceBetweenLocations = (
  first: Pick<Location, "lat" | "lng">,
  second: Pick<Location, "lat" | "lng">,
) => {
  const earthRadiusKm = 6371;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const latitudeDelta = toRadians(second.lat - first.lat);
  const longitudeDelta = toRadians(second.lng - first.lng);
  const firstLatitude = toRadians(first.lat);
  const secondLatitude = toRadians(second.lat);
  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(firstLatitude) *
      Math.cos(secondLatitude) *
      Math.sin(longitudeDelta / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
};

const weekdayLabels: Record<Weekday, string> = {
  monday: "ponedeljak",
  tuesday: "utorak",
  wednesday: "sredu",
  thursday: "četvrtak",
  friday: "petak",
  saturday: "subotu",
  sunday: "nedelju",
};

const parseTime = (value: string) => {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
};

const belgradeTime = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Belgrade",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? "";

  return {
    weekday: part("weekday").toLowerCase() as Weekday,
    minutes: Number(part("hour")) * 60 + Number(part("minute")),
  };
};

export const formatDayHours = (hours: DayHours) =>
  `${hours.open}–${hours.close}`;

export const getBelgradeWeekday = (date = new Date()) =>
  belgradeTime(date).weekday;

export const getLocationOpenState = (
  openingHours?: OpeningHours,
  date = new Date(),
): LocationOpenState => {
  if (!openingHours) {
    return {
      kind: "unknown",
      statusLabel: "Radno vreme proverite telefonom",
    };
  }

  const { weekday, minutes } = belgradeTime(date);
  const todayIndex = WEEKDAYS.indexOf(weekday);
  const hasToday = Object.prototype.hasOwnProperty.call(openingHours, weekday);
  const today = openingHours[weekday];

  if (!hasToday) {
    return {
      kind: "unknown",
      statusLabel: "Radno vreme proverite telefonom",
    };
  }

  if (today) {
    const opensAt = parseTime(today.open);
    const closesAt = parseTime(today.close);
    const isOpen = minutes >= opensAt && minutes < closesAt;

    if (isOpen) {
      return {
        kind: "open",
        statusLabel: `Otvoreno sada · do ${today.close}`,
        todayLabel: `Danas ${formatDayHours(today)}`,
      };
    }

    if (minutes < opensAt) {
      return {
        kind: "closed",
        statusLabel: `Zatvoreno · otvara danas u ${today.open}`,
        todayLabel: `Danas ${formatDayHours(today)}`,
      };
    }
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDay = WEEKDAYS[(todayIndex + offset) % WEEKDAYS.length];
    const nextHours = openingHours[nextDay];
    if (!nextHours) continue;

    return {
      kind: "closed",
      statusLabel:
        offset === 1
          ? `Zatvoreno · otvara sutra u ${nextHours.open}`
          : `Zatvoreno · otvara u ${weekdayLabels[nextDay]} u ${nextHours.open}`,
      todayLabel: today
        ? `Danas ${formatDayHours(today)}`
        : "Danas ne radi",
    };
  }

  return {
    kind: "closed",
    statusLabel: "Zatvoreno",
    todayLabel: today ? `Danas ${formatDayHours(today)}` : "Danas ne radi",
  };
};
