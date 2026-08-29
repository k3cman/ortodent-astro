export const homeContent = {
  hero: {
    eyebrow: "Dentalna radiologija",
    title: "Precizna 2D i 3D dijagnostika.",
    description: "13 centara. Bez zakazivanja.\nRezultati dostupni putem OrtoClouda.",
    locations: ["Beograd", "Novi Sad", "Pančevo"],
  },
  services: [
    {
      eyebrow: "3D dijagnostika",
      title: "3D snimanja / CBCT",
      description: "Detaljan 3D prikaz anatomskih struktura za precizno planiranje implantata, hirurških zahvata i ortodontskih terapija.",
      href: "/usluge/3d",
    },
    {
      eyebrow: "2D dijagnostika",
      title: "2D snimanja",
      description: "Panoramski i retroalveolarni snimci za brzu, pouzdanu i sigurnu dijagnozu u svakom koraku lečenja.",
      href: "/usluge/2d",
    },
    {
      eyebrow: "Funkcionalna analiza",
      title: "Kefalometrijske analize",
      description: "Precizne analize za ortodontsko planiranje i praćenje rasta i razvoja kod dece i adolescenata.",
      href: "/usluge/kefalometrija",
    },
  ],
  dentistBenefits: [
    ["01", "Rezultati online", "Pristupite nalazima odmah, bilo kada i bilo gde."],
    ["02", "Precizna dijagnostika", "2D, 3D/CBCT i kefalometrijske analize visoke preciznosti."],
    ["03", "Jednostavna saradnja", "Delite nalaze, komunikacija i podrška bez zastoja."],
  ],
  stats: [
    ["13", "centara"],
    ["500K+", "snimaka"],
    ["17", "godina iskustva"],
  ],
  reviews: [
    ["tanja macura", "Sve preporuke,ljubazno osoblje i vrhunski kvalitet usluge👍"],
    ["Vera Nikolić", "Very nice, clean and quick. The staff is polite and friendly. They are connected to the local dentists via app and they can send them files digitally."],
    ["Nemanja Pantelić", "Pa uz ovakve ljude i ovakvu uslugu, ne boli ni zub, a kamo li novčanik, za svaku pohvalu!"],
    ["Nebojša Stojanović", "Profesionalno,ljubazno.Pišem najiskrenije kao pacijent.Snimak odmah gotov i poslato stomatologu.Svaka čast.Čistoća na visokom nivou."],
    ["Trivun Mijailovic", "Brzo, efikasno, jednostavno, nema cekanja puno, ordinacije cista, lepa, komforna, prezadovoljan sam uslugom sve najbolje u daljem radu i poslovanju"],
    ["Mina", "Ljubazni, stručni i što je najbitnije kvalitetan snimak."],
    ["Zorica", "professionan staff, quick service, safety measures in place"],
  ],
} as const;
