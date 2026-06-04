export type CenovnikPriceRow = {
  label: string;
  amount: string;
};

export type CenovnikSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: CenovnikPriceRow[];
};

/** Fixed display order — do not rely on object key iteration. */
export const CENOVNIK_SECTIONS: CenovnikSection[] = [
  {
    id: "2d",
    title: "2D SNIMCI",
    subtitle:
      "Osnovna cena obuhvata digitalno izdavanje putem OrtoCloud platforme.",
    items: [
      { label: "Retroalveolarni / retrokoronalni snimak", amount: "800" },
      { label: "Ortopantomogram", amount: "2500" },
      { label: "Lateralni kefalogram", amount: "2500" },
      { label: "PA kefalogram", amount: "2500" },
      { label: "Snimak paranazalnih šupljina", amount: "2500" },
      { label: "Snimak TM zglobova", amount: "2500" },
      { label: "Tomografska analiza", amount: "2500" },
    ],
  },
  {
    id: "3d",
    title: "3D SNIMCI",
    subtitle:
      "U cenu je uključeno digitalno izdavanje na OrtoCloudu i na USB kartici.",
    items: [
      { label: "3D polje 5×5 cm - S", amount: "4500" },
      { label: "3D polje 8×5 cm - M", amount: "5500" },
      { label: "3D polje 12×9 cm - L", amount: "6500" },
      { label: "3D maksilarnih sinusa", amount: "6500" },
    ],
  },
  {
    id: "kefalometrija",
    title: "KEFALOMETRIJSKE ANALIZE",
    items: [{ label: "KefAnalize", amount: "1500" }],
  },
  {
    id: "dodaci",
    title: "DODATNE USLUGE IZDAVANJA",
    items: [
      { label: "Izrada na filmu (mala folija)", amount: "100" },
      { label: "Izrada na filmu (velika folija)", amount: "200" },
      { label: "CD", amount: "200" },
    ],
  },
];
