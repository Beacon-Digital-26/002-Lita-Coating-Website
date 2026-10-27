export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  /** First entry is used as the cover image shown in the carousel. */
  images: string[];
};

const folder = "/case-portfolio";

const withFolder = (files: string[]) => files.map((file) => `${folder}/${file}`);

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "dedaun-bungalow-batu-kawan",
    title: "Dedaun Bungalow, Batu Kawan",
    description: "Custom framed mesh panels and matching entrance gates",
    images: withFolder([
      "Batu Kawan Dedaun Bungalow 1.jpg",
      "Batu Kawan Dedaun Bungalow 2.jpg",
      "Batu Kawan Dedaun Bungalow 3.jpg",
      "batu kawan dedaun bungalow  6.jpg",
    ]),
  },
  {
    id: "qdos-batu-kawan",
    title: "QDOS, Batu Kawan",
    description: "Corporate blue boundary fencing with angled framed panels",
    images: withFolder(["Batu Kawan QDOS 1.jpg", "Batu Kawan QDOS  2.jpg"]),
  },
  {
    id: "sustio-batu-kawan",
    title: "Sustio Sdn Bhd Factory",
    description: "Factory perimeter fencing in corporate blue finish",
    images: withFolder(["IMG_20230403_122207.jpg", "IMG_20230403_122303.jpg"]),
  },
  {
    id: "test-tooling-solutions",
    title: "Test Tooling Solutions Group",
    description: "Streetfront security fencing for a precision manufacturing plant",
    images: withFolder(["test tooling solutions 1.jpg", "test tooling solutions 2.jpg"]),
  },
  {
    id: "setia-lakeside-promenade",
    title: "Setia Lakeside Promenade",
    description: "Waterfront balustrade fencing with custom logo panels",
    images: withFolder([
      "IMG_20200918_140422.jpg",
      "IMG_20200625_104610.jpg",
      "IMG_20200918_140711.jpg",
      "IMG_20220228_151813.jpg",
    ]),
  },
  {
    id: "rooftop-futsal-court-penang",
    title: "Rooftop Futsal Court, Penang",
    description: "High-rise ball-stop fencing with raked upper panels",
    images: withFolder([
      "IMG_20201006_114041.jpg",
      "IMG_20201006_113928.jpg",
      "IMG_20201006_113941.jpg",
      "IMG_20201006_114053.jpg",
      "IMG_20201006_114144.jpg",
    ]),
  },
  {
    id: "ijm-sanctuary-residence-alma",
    title: "IJM Sanctuary Residence, Alma",
    description: "High-level basketball court enclosure and access gate",
    images: withFolder([
      "Alma IJM Sanctuary Residence Basket Ball Court 2.jpg",
      "Alma IJM Sanctuary Residence Basket Ball Court 3.jpg",
    ]),
  },
  {
    id: "multipurpose-sports-court",
    title: "Multipurpose Sports Court",
    description: "Braced blue ball-stop enclosure for a synthetic turf court",
    images: withFolder([
      "IMG_20200826_112726.jpg",
      "IMG_20200826_112448.jpg",
      "IMG_20200826_113202.jpg",
    ]),
  },
  {
    id: "community-sports-court",
    title: "Community Sports Court",
    description: "Tall mesh court enclosure for a residential neighbourhood",
    images: withFolder([
      "IMG_20230425_160314.jpg",
      "IMG_20230425_160526.jpg",
      "IMG_20230425_160732.jpg",
    ]),
  },
  {
    id: "hilltop-residence-recreation-deck",
    title: "Hilltop Residence Recreation Deck",
    description: "Pool and court perimeter fencing on an elevated podium",
    images: withFolder([
      "IMG_20200707_111436.jpg",
      "IMG_20200707_111546.jpg",
      "IMG_20200707_112603.jpg",
    ]),
  },
  {
    id: "eco-residence-bertam",
    title: "Eco Residence, Bertam",
    description: "Roll-top mesh fencing across a new housing phase",
    images: withFolder(["Bertam Eco 3.jpg", "Bertam Eco 4.jpg", "Bertam Eco 8.jpg"]),
  },
  {
    id: "aspera-bukit-banyan",
    title: "Aspera, Bukit Banyan",
    description: "Boundary fencing for a Paramount township development",
    images: withFolder([
      "paramount Bukit Banyan Aspera 5.jpg",
      "paramount Bukit Banyan Aspera 4.jpg",
    ]),
  },
  {
    id: "cento-hill-penang",
    title: "Cento Hill, Penang",
    description: "Rooftop safety fencing with privacy infill panels",
    images: withFolder(["Cento Hill 1.jpg", "Cento Hill 2.jpg"]),
  },
  {
    id: "airmas-condominium-bukit-mertajam",
    title: "Airmas Condominium, Bukit Mertajam",
    description: "Framed mesh screening along a landscaped sky terrace",
    images: withFolder(["Airmas Bukit Mertajam Condominium 1.jpg"]),
  },
  {
    id: "florissa-park",
    title: "Florissa Park, UDA Land",
    description: "Decorative framed mesh fencing on a boundary wall",
    images: withFolder(["Uda Land Florissa 1.jpg", "Uda Land Florissa 2.jpg"]),
  },
  {
    id: "platinum-phase-factory",
    title: "Platinum Phase Factory",
    description: "White powder-coated infill panels along a covered walkway",
    images: withFolder(["Platinum Phase Factory.jpg", "Platinum Phase  2.jpg"]),
  },
  {
    id: "deakon-logistics-facility",
    title: "Deakon Logistics Facility",
    description: "Galvanised 358 anti-climb fencing along the site frontage",
    images: withFolder(["IMG_20240311_122710.jpg", "IMG_20240311_122754.jpg"]),
  },
  {
    id: "commercial-sliding-gate",
    title: "Commercial Perimeter & Sliding Gate",
    description: "358 security fencing paired with a motorised sliding gate",
    images: withFolder([
      "IMG_20250115_112841.jpg",
      "IMG_20250115_112847.jpg",
      "IMG_20250115_112933.jpg",
    ]),
  },
  {
    id: "industrial-park-perimeter",
    title: "Industrial Park Perimeter",
    description: "Blue roll-top fencing on reinforced concrete kerbing",
    images: withFolder(["IMG_20220425_114226.jpg", "IMG_20220509_110517.jpg"]),
  },
  {
    id: "hillside-retaining-wall",
    title: "Hillside Retaining Wall Fencing",
    description: "Protective fencing along an exposed rock cut slope",
    images: withFolder(["20150702_133551.jpg", "20150702_133714.jpg"]),
  },
  {
    id: "hillside-condominium",
    title: "Hillside Condominium Boundary",
    description: "Braced boundary fencing for a hillside residential block",
    images: withFolder(["20150806_120843.jpg"]),
  },
  {
    id: "slope-perimeter-fencing",
    title: "Slope Perimeter Fencing",
    description: "Stepped perimeter fencing following a steep embankment",
    images: withFolder(["20180524_165825.jpg", "20180524_165948.jpg"]),
  },
  {
    id: "institutional-compound",
    title: "Institutional Compound Fencing",
    description: "Green roll-top fencing securing a service compound",
    images: withFolder(["20190722_131715.jpg", "20190722_131755.jpg"]),
  },
  {
    id: "commercial-perimeter-installation",
    title: "Commercial Perimeter Installation",
    description: "Powder-coated fencing delivered as a turnkey installation",
    images: withFolder(["IMG_20251023_085645.jpg"]),
  },
];
