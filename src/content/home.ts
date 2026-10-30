export const homeContent = {
  hero: {
    eyebrow: "Dentalna radiologija",
    title: "Precizna 2D i 3D dijagnostika.",
    description: "Snimanje zuba bez zakazivanja. Na 14 lokacija.\nRezultati dostupni odmah putem OrtoCloud platforme.",
    locations: [
      { label: "Beograd", href: "/lokacije/beograd" },
      { label: "Novi Sad", href: "/lokacije/novi-sad" },
      { label: "Pančevo", href: "/lokacije/pancevo" },
    ],
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
    ["01", "Snimci dostupni odmah", "Brzi elektronski pristup rendgen snimcima."],
    ["02", "Precizna dijagnostika", "2D, 3D/CBCT i kefalometrijske analize visoke preciznosti."],
    ["03", "Jednostavna saradnja", "Komunikacija i podrška bez zastoja."],
  ],
  stats: [
    ["14", "lokacija"],
    ["500K+", "snimaka"],
    ["17", "godina iskustva"],
  ],
  reviews: [
    ["Tanja Macura", "Sve preporuke,ljubazno osoblje i vrhunski kvalitet usluge👌"],
    ["Vera Nikolić", "Very nice, clean and quick. The staff is polite and friendly. They are connected to the local dentists via app and they can send them files digitally."],
    ["Nemanja Blagojevic", "Sve pohvale za ovu ordinaciju. Snimanje zuba je uradjeno brzo i profesionalno. Prostor je lep, aparati novi, a posebna pohvala za izuzetno ljubazno osoblje. Preporuka!"],
    ["Zorica", "professionan staff, quick service, safety measures in place"],
    ["Mina", "Ljubazni, stručni i što je najbitnije kvalitetan snimak."],
    ["Veronika Vieyra", "Everything was done quickly, efficiently, and at a reasonable price!"],
    ["Andrej", "OrtoDent za svaku pohvalu. Upravo sam bio kod njih. Bez prethodnog zakazivanja, zadržavanje svega 5 minuta uz prijatan razgovor, sve smo završili. Posebno bih pohvalio devojku koja radi tamo. Prijatna, nasmejana, profesionalna."],
    ["Aleksandar Krejić", "Prijatna atmosfera. Ljubazno osoblje. Kvalitetna usluga."],
    ["Александра", "The staff was very friendly, everything was clean and tidy, and there was no line. The x-rays were taken well, everything was explained, and the results were sent to the doctor and to my personal account. I highly recommend them 😊"],
    ["Maja Makivic", "Vrlo profesionalni pristup pacijentima ,higijena za 10 ,super snimci .Bravo za ekipu-za svaku preporuku!"],
  ],
} as const;

export const homeContentEn = {
  hero: {
    eyebrow: "Dental radiology",
    title: "Precise 2D and 3D diagnostics.",
    description: "Dental imaging without an appointment. 14 locations.\nResults available immediately through the OrtoCloud platform.",
    locations: [
      { label: "Belgrade", href: "/lokacije/beograd" },
      { label: "Novi Sad", href: "/lokacije/novi-sad" },
      { label: "Pančevo", href: "/lokacije/pancevo" },
    ],
  },
  services: [
    { eyebrow: "3D diagnostics", title: "3D imaging / CBCT", description: "A detailed 3D view of anatomical structures for precise planning of implants, surgical procedures and orthodontic treatment.", href: "/usluge/3d" },
    { eyebrow: "2D diagnostics", title: "2D imaging", description: "Panoramic and intraoral X-rays for a fast, reliable and safe diagnosis at every stage of treatment.", href: "/usluge/2d" },
    { eyebrow: "Functional analysis", title: "Cephalometric analyses", description: "Precise analyses for orthodontic planning and monitoring growth and development in children and adolescents.", href: "/usluge/kefalometrija" },
  ],
  dentistBenefits: [
    ["01", "X-rays available immediately", "Fast electronic access to dental X-rays."],
    ["02", "Precise diagnostics", "High-precision 2D, 3D/CBCT and cephalometric analyses."],
    ["03", "Easy collaboration", "Seamless communication and support."],
  ],
  stats: [["14", "locations"], ["500K+", "scans"], ["17", "years of experience"]],
  reviews: homeContent.reviews,
} as const;

export const homeContentByLocale = { sr: homeContent, en: homeContentEn } as const;
