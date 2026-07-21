export interface Industry {
  id: number;
  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  image: string;

  icon: string;

  statistics: {
    projects: string;
    experience: string;
    satisfaction: string;
  };

  services: string[];

  highlights: string[];
}

export const industries: Industry[] = [
  {
    id: 1,
    slug: "commercial",

    title: "Commercial",

    shortDescription:
      "Modern commercial spaces designed for productivity, scalability, and sustainability.",

    description:
      "Rakentra Works develops office buildings, business parks, shopping centres, retail developments, and mixed-use commercial facilities that combine modern architecture with energy-efficient engineering.",

    image: "/assets/images/industries/commercial.jpg",

    icon: "Building2",

    statistics: {
      projects: "180+",
      experience: "18 Years",
      satisfaction: "98%",
    },

    services: [
      "Commercial Construction",
      "Interior Fit-Out",
      "Project Management",
      "Structural Engineering",
      "MEP Engineering",
    ],

    highlights: [
      "Office Buildings",
      "Business Parks",
      "Retail Centres",
      "Shopping Complexes",
      "Corporate Headquarters",
    ],
  },

  {
    id: 2,
    slug: "residential",

    title: "Residential",

    shortDescription:
      "Premium residential developments built with quality, comfort, and long-term value.",

    description:
      "From luxury villas to multi-storey apartments and smart residential communities, Rakentra Works delivers homes focused on durability, sustainability, and exceptional living experiences.",

    image: "/assets/images/industries/residential.jpg",

    icon: "Home",

    statistics: {
      projects: "220+",
      experience: "18 Years",
      satisfaction: "99%",
    },

    services: [
      "Residential Construction",
      "Luxury Villas",
      "Apartment Complexes",
      "Renovation",
      "Smart Home Integration",
    ],

    highlights: [
      "Luxury Villas",
      "Apartment Towers",
      "Townships",
      "Affordable Housing",
      "Residential Renovation",
    ],
  },

  {
    id: 3,
    slug: "industrial",

    title: "Industrial",

    shortDescription:
      "Industrial facilities engineered for efficiency, safety, and operational excellence.",

    description:
      "We design and construct factories, logistics hubs, warehouses, manufacturing plants, and industrial infrastructure tailored to modern production requirements.",

    image: "/assets/images/industries/industrial.jpg",

    icon: "Factory",

    statistics: {
      projects: "90+",
      experience: "18 Years",
      satisfaction: "97%",
    },

    services: [
      "Factory Construction",
      "Warehouse Development",
      "Industrial Infrastructure",
      "Steel Structures",
      "MEP Solutions",
    ],

    highlights: [
      "Factories",
      "Warehouses",
      "Distribution Centres",
      "Manufacturing Plants",
      "Cold Storage Facilities",
    ],
  },

  {
    id: 4,
    slug: "infrastructure",

    title: "Infrastructure",

    shortDescription:
      "Large-scale infrastructure projects supporting sustainable urban development.",

    description:
      "Rakentra Works delivers bridges, roads, public infrastructure, transportation facilities, utilities, and civic projects using advanced engineering and construction practices.",

    image: "/assets/images/industries/infrastructure.jpg",

    icon: "Landmark",

    statistics: {
      projects: "120+",
      experience: "18 Years",
      satisfaction: "98%",
    },

    services: [
      "Infrastructure Construction",
      "Road Development",
      "Bridge Engineering",
      "Utility Networks",
      "Civil Engineering",
    ],

    highlights: [
      "Roads",
      "Bridges",
      "Metro Infrastructure",
      "Public Utilities",
      "Government Projects",
    ],
  },
];

export default industries;