export type NavItem = {
  name: string;
  path: string;
};

export const MAIN_NAV: NavItem[] = [
  { name: "Cenovnik", path: "/cenovnik" },
  { name: "Informacije", path: "/informacije" },
  { name: "Za stomatologe", path: "/za-doktore" },
  { name: "Lokacije", path: "/lokacije" },
  { name: "Kontakt", path: "/kontakt" },
];

export const USLUGE_NAV: NavItem[] = [
  { name: "2D Snimanje", path: "/usluge/2d" },
  { name: "3D Snimanje", path: "/usluge/3d" },
  { name: "Kefalometrija", path: "/usluge/kefalometrija" },
];
