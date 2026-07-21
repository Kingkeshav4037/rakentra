export interface Project {
  id: number;
  slug: string;

  title: string;
  category:
    | "Commercial"
    | "Residential"
    | "Industrial"
    | "Infrastructure";

  status: "Completed" | "Ongoing";

  heroImage: string;
  gallery: string[];

  location: string;

  completionYear: number;

  duration: string;

  budget: string;

  client: string;

  area: string;

  overview: string;

  challenge: string;

  solution: string;

  outcome: string;

  technologies: string[];

  services: string[];

  metrics: {
    label: string;
    value: string;
  }[];

  timeline: {
    phase: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "helsinki-business-center",

    title: "Helsinki Business Center",

    category: "Commercial",

    status: "Completed",

    heroImage: "/assets/images/projects/business-center/hero.jpg",

    gallery: [
      "/assets/images/projects/business-center/1.jpg",
      "/assets/images/projects/business-center/2.jpg",
      "/assets/images/projects/business-center/3.jpg",
      "/assets/images/projects/business-center/4.jpg",
    ],

    location: "Helsinki, Finland",

    completionYear: 2024,

    duration: "24 Months",

    budget: "€42 Million",

    client: "Nordic Commercial Group",

    area: "45,000 m²",

    overview:
      "A premium mixed-use commercial development featuring Grade A office space, retail units and sustainable building systems.",

    challenge:
      "Deliver a high-density commercial building while maintaining uninterrupted access to neighbouring businesses.",

    solution:
      "Implemented phased construction, BIM coordination and prefabricated structural components.",

    outcome:
      "Delivered ahead of schedule with LEED Gold certification and a 30% reduction in operational energy usage.",

    technologies: [
      "BIM",
      "Digital Twin",
      "Smart HVAC",
      "Energy Monitoring",
      "Steel Structure",
    ],

    services: [
      "Commercial Construction",
      "Project Management",
    ],

    metrics: [
      {
        label: "Floors",
        value: "18",
      },
      {
        label: "Office Capacity",
        value: "4,500",
      },
      {
        label: "Parking",
        value: "820",
      },
      {
        label: "Energy Reduction",
        value: "30%",
      },
    ],

    timeline: [
      {
        phase: "Planning",
        description: "Site analysis and architectural planning.",
      },
      {
        phase: "Engineering",
        description: "Structural and MEP coordination.",
      },
      {
        phase: "Construction",
        description: "Core structure and facade completion.",
      },
      {
        phase: "Commissioning",
        description: "Testing and final handover.",
      },
    ],
  },

  {
    id: 2,

    slug: "nordic-residential-village",

    title: "Nordic Residential Village",

    category: "Residential",

    status: "Completed",

    heroImage: "/assets/images/projects/residential-village/hero.jpg",

    gallery: [
      "/assets/images/projects/residential-village/1.jpg",
      "/assets/images/projects/residential-village/2.jpg",
      "/assets/images/projects/residential-village/3.jpg",
    ],

    location: "Espoo, Finland",

    completionYear: 2023,

    duration: "20 Months",

    budget: "€26 Million",

    client: "Nordic Homes",

    area: "31,000 m²",

    overview:
      "Modern Scandinavian residential development featuring sustainable homes and green public spaces.",

    challenge:
      "Create energy-efficient housing while preserving surrounding natural landscapes.",

    solution:
      "Low-carbon materials, geothermal heating and smart home technologies.",

    outcome:
      "Completed with excellent customer satisfaction and nearly zero-energy certification.",

    technologies: [
      "Smart Homes",
      "Solar Panels",
      "Geothermal Heating",
      "Timber Hybrid Construction",
    ],

    services: [
      "Residential Construction",
      "Project Management",
    ],

    metrics: [
      {
        label: "Homes",
        value: "180",
      },
      {
        label: "Green Area",
        value: "42%",
      },
      {
        label: "Energy Class",
        value: "A",
      },
    ],

    timeline: [
      {
        phase: "Planning",
        description: "Community master planning.",
      },
      {
        phase: "Infrastructure",
        description: "Roads and utility installation.",
      },
      {
        phase: "Construction",
        description: "Housing development.",
      },
      {
        phase: "Completion",
        description: "Final landscaping and delivery.",
      },
    ],
  },

  {
    id: 3,

    slug: "turku-logistics-hub",

    title: "Turku Logistics Hub",

    category: "Industrial",

    status: "Completed",

    heroImage: "/assets/images/projects/logistics-hub/hero.jpg",

    gallery: [
      "/assets/images/projects/logistics-hub/1.jpg",
      "/assets/images/projects/logistics-hub/2.jpg",
      "/assets/images/projects/logistics-hub/3.jpg",
    ],

    location: "Turku, Finland",

    completionYear: 2025,

    duration: "18 Months",

    budget: "€58 Million",

    client: "NordCargo",

    area: "72,000 m²",

    overview:
      "Large-scale logistics and warehouse facility supporting national distribution operations.",

    challenge:
      "Complete construction while maintaining continuous logistics operations nearby.",

    solution:
      "Phased execution and modular steel construction.",

    outcome:
      "Delivered with advanced warehouse automation infrastructure.",

    technologies: [
      "Automation",
      "Steel Structure",
      "Smart Lighting",
      "Warehouse Robotics",
    ],

    services: [
      "Industrial Construction",
    ],

    metrics: [
      {
        label: "Loading Bays",
        value: "84",
      },
      {
        label: "Warehouse Area",
        value: "72,000 m²",
      },
      {
        label: "Daily Capacity",
        value: "18,000 Packages",
      },
    ],

    timeline: [
      {
        phase: "Planning",
        description: "Industrial design and logistics planning.",
      },
      {
        phase: "Construction",
        description: "Steel framework and warehouse construction.",
      },
      {
        phase: "Automation",
        description: "Equipment installation.",
      },
      {
        phase: "Commissioning",
        description: "Operational testing.",
      },
    ],
  },
];

export default projects;