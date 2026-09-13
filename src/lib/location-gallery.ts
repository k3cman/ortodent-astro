export interface LocationPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Original filenames identify the center; entrance photos appear first.
export const LOCATION_GALLERIES: Readonly<Record<string, readonly LocationPhoto[]>> = {
  "beograd/arena": [
    {
      "src": "/images/locations/beograd/arena/arena-ulaz-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Ulaz — OrtoDent Arena",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/arena/arena-cekaonica-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Čekaonica — OrtoDent Arena",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/arena/arena-2d-3d-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Arena",
      "width": 1600,
      "height": 1200
    }
  ],
  "beograd/immocentar": [
    {
      "src": "/images/locations/beograd/immocentar/immo-ulaz-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Ulaz — OrtoDent ImmoCentar",
      "width": 1200,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/immocentar/immo-recepcija-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Recepcija — OrtoDent ImmoCentar",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/immocentar/immo-2d-3d-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent ImmoCentar",
      "width": 1600,
      "height": 1067
    }
  ],
  "beograd/stari-grad": [
    {
      "src": "/images/locations/beograd/stari-grad/centar-ulaz-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Ulaz — OrtoDent Stari grad",
      "width": 1200,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/stari-grad/centar-cekaonica-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Čekaonica — OrtoDent Stari grad",
      "width": 1200,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/stari-grad/centar-2d-3d-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Stari grad",
      "width": 1200,
      "height": 1600
    }
  ],
  "beograd/banovo-brdo": [
    {
      "src": "/images/locations/beograd/banovo-brdo/banovo-brdo-ulaz-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Ulaz — OrtoDent Banovo brdo",
      "width": 1600,
      "height": 1200
    },
    {
      "src": "/images/locations/beograd/banovo-brdo/banovo-brdo-cekaonica-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Čekaonica — OrtoDent Banovo brdo",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/banovo-brdo/banovo-brdo-2d-3d-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Banovo brdo",
      "width": 1600,
      "height": 1067
    }
  ],
  "beograd/juzni-beograd": [
    {
      "src": "/images/locations/beograd/juzni-beograd/autokomanda-ulaz-snimanje-zuba-ortodent-vozdovac-beograd.webp",
      "alt": "Ulaz — OrtoDent Voždovac",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/images/locations/beograd/juzni-beograd/autokomanda-cekaonica-snimanje-zuba-ortodent-vozdovac-beograd.webp",
      "alt": "Čekaonica — OrtoDent Voždovac",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/juzni-beograd/autokomanda-2d-3d-snimanje-zuba-ortodent-vozdovac-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Voždovac",
      "width": 1067,
      "height": 1600
    }
  ],
  "beograd/zvezdara": [
    {
      "src": "/images/locations/beograd/zvezdara/crveni-krst-ulaz-snimanje-zuba-ortodent-beograd-2.webp",
      "alt": "Ulaz — OrtoDent Zvezdara",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/zvezdara/crveni-krst-recepcija-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Recepcija — OrtoDent Zvezdara",
      "width": 1600,
      "height": 1102
    },
    {
      "src": "/images/locations/beograd/zvezdara/crveni-krst-2d-3d-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Zvezdara",
      "width": 1600,
      "height": 1067
    }
  ],
  "beograd/vracar": [
    {
      "src": "/images/locations/beograd/vracar/vracar-ulaz-snimanje-zuba-ortodent-beograd-2.webp",
      "alt": "Ulaz — OrtoDent Vračar",
      "width": 1200,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/vracar/vracar-cekaonica-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Čekaonica — OrtoDent Vračar",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/vracar/vracar-2d-3d-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Vračar",
      "width": 1067,
      "height": 1600
    }
  ],
  "beograd/cerak": [
    {
      "src": "/images/locations/beograd/cerak/cerak-ulaz-snimanje-zuba-ortodent-beograd-2.webp",
      "alt": "Ulaz — OrtoDent Cerak",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/images/locations/beograd/cerak/cerak-cekaonica-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Čekaonica — OrtoDent Cerak",
      "width": 1061,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/cerak/cerak-2d-3d-snimanje-zuba-ortodent-beograd.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Cerak",
      "width": 1199,
      "height": 1600
    }
  ],
  "beograd/stari-merkator": [
    {
      "src": "/images/locations/beograd/stari-merkator/stari-merkator-ulaz-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Ulaz — OrtoDent Stari Merkator",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/images/locations/beograd/stari-merkator/stari-merkator-cekaonica-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Čekaonica — OrtoDent Stari Merkator",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/images/locations/beograd/stari-merkator/stari-merkator-recepcija-snimanje-zuba-ortodent-novi-beograd.webp",
      "alt": "Recepcija — OrtoDent Stari Merkator",
      "width": 1600,
      "height": 1037
    }
  ],
  "pancevo/oslobodjenja": [
    {
      "src": "/images/locations/pancevo/oslobodjenja/pancevo-oslobodjenja-ulaz-snimanje-zuba-ortodent.webp",
      "alt": "Ulaz — OrtoDent Oslobođenja",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/images/locations/pancevo/oslobodjenja/pancevo-oslobodjenja-cekaonica-snimanje-zuba-ortodent.webp",
      "alt": "Čekaonica — OrtoDent Oslobođenja",
      "width": 1066,
      "height": 1600
    },
    {
      "src": "/images/locations/pancevo/oslobodjenja/pancevo-oslobodjenja-2d-3d-snimanje-zuba-ortodent.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Oslobođenja",
      "width": 1200,
      "height": 1600
    }
  ],
  "pancevo/brace-jovanovica": [
    {
      "src": "/images/locations/pancevo/brace-jovanovica/pancevo-brace-jovanovica-ulaz-snimanje-zuba-ortodent-2.webp",
      "alt": "Ulaz — OrtoDent Braće Jovanovića",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/images/locations/pancevo/brace-jovanovica/pancevo-brace-jovanovica-cekaonica-snimanje-zuba-ortodent.webp",
      "alt": "Čekaonica — OrtoDent Braće Jovanovića",
      "width": 1600,
      "height": 1196
    },
    {
      "src": "/images/locations/pancevo/brace-jovanovica/pancevo-brace-jovanovica-2d-snimanje-zuba-ortodent.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Braće Jovanovića",
      "width": 1067,
      "height": 1600
    }
  ],
  "novi-sad/brace-ribnikar": [
    {
      "src": "/images/locations/novi-sad/brace-ribnikar/novi-sad-brace-ribnikar-ulaz-snimanje-zuba-ortodent-2.webp",
      "alt": "Ulaz — OrtoDent Braće Ribnikar",
      "width": 1600,
      "height": 1066
    },
    {
      "src": "/images/locations/novi-sad/brace-ribnikar/novi-sad-brace-ribnikar-cekaonica-snimanje-zuba-ortodent-3.webp",
      "alt": "Čekaonica — OrtoDent Braće Ribnikar",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/images/locations/novi-sad/brace-ribnikar/novi-sad-brace-ribnikar-2d-3d-snimanje-zuba-ortodent.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Braće Ribnikar",
      "width": 1200,
      "height": 1600
    }
  ],
  "novi-sad/hadzi-ruvimova": [
    {
      "src": "/images/locations/novi-sad/hadzi-ruvimova/novi-sad-hadzi-ruvimova-ulaz-snimanje-zuba-ortodent-2.webp",
      "alt": "Ulaz — OrtoDent Hadži Ruvimova",
      "width": 1200,
      "height": 1600
    },
    {
      "src": "/images/locations/novi-sad/hadzi-ruvimova/novi-sad-hadzi-ruvimova-cekaonica-snimanje-zuba-ortodent.webp",
      "alt": "Čekaonica — OrtoDent Hadži Ruvimova",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/images/locations/novi-sad/hadzi-ruvimova/novi-sad-hadzi-ruvimova-2d-3d-snimanje-zuba-ortodent.webp",
      "alt": "Oprema za snimanje zuba — OrtoDent Hadži Ruvimova",
      "width": 1600,
      "height": 1067
    }
  ]
};
