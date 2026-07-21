export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  icon: string;

  features: string[];
  benefits: string[];
  process: string[];

  industries: string[];

  cta: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "commercial-construction",
    title: "Commercial Construction",

    shortDescription:
      "Modern commercial spaces designed for long-term business growth.",

    description:
      "Rakentra Works delivers premium commercial buildings including office complexes, retail developments, business parks and mixed-use properties with a focus on quality, sustainability and operational efficiency.",

    heroImage: "/assets/images/services/commercial.jpg",

    icon: "Building2",

    features: [
      "Office Buildings",
      "Retail Spaces",
      "Business Parks",
      "Hotels",
      "Mixed-use Developments",
    ],

    benefits: [
      "Energy-efficient design",
      "Optimized construction schedule",
      "Scalable infrastructure",
      "High-quality materials",
    ],

    process: [
      "Planning",
      "Design Coordination",
      "Construction",
      "Quality Inspection",
      "Project Delivery",
    ],

    industries: [
      "Corporate",
      "Retail",
      "Healthcare",
      "Hospitality",
    ],

    cta: "Request Commercial Consultation",
  },

  {
    id: 2,
    slug: "residential-construction",
    title: "Residential Construction",

    shortDescription:
      "Premium homes and residential communities built for modern living.",

    description:
      "From luxury villas to apartment complexes, we deliver residential projects that combine Scandinavian architecture, sustainability and engineering excellence.",

    heroImage: "/assets/images/services/residential.jpg",

    icon: "Home",

    features: [
      "Luxury Homes",
      "Apartments",
      "Townhouses",
      "Residential Communities",
    ],

    benefits: [
      "Smart home readiness",
      "Low maintenance",
      "Sustainable materials",
      "Excellent insulation",
    ],

    process: [
      "Consultation",
      "Architecture",
      "Engineering",
      "Construction",
      "Final Inspection",
    ],

    industries: ["Residential"],

    cta: "Start Your Residential Project",
  },

  {
    id: 3,
    slug: "industrial-construction",
    title: "Industrial Construction",

    shortDescription:
      "High-performance industrial facilities engineered for productivity.",

    description:
      "We specialize in factories, warehouses, logistics centres and production facilities built to support industrial growth and operational efficiency.",

    heroImage: "/assets/images/services/industrial.jpg",

    icon: "Factory",

    features: [
      "Warehouses",
      "Factories",
      "Distribution Centers",
      "Manufacturing Plants",
    ],

    benefits: [
      "Large-span structures",
      "Optimized workflows",
      "Heavy-duty engineering",
      "Future scalability",
    ],

    process: [
      "Site Analysis",
      "Engineering",
      "Construction",
      "Testing",
      "Commissioning",
    ],

    industries: [
      "Manufacturing",
      "Logistics",
      "Energy",
      "Heavy Industry",
    ],

    cta: "Discuss Industrial Project",
  },

  {
    id: 4,
    slug: "infrastructure",
    title: "Infrastructure",

    shortDescription:
      "Public infrastructure designed to support communities for generations.",

    description:
      "Our infrastructure division delivers roads, bridges, public facilities and utility projects with precision and long-term durability.",

    heroImage: "/assets/images/services/infrastructure.jpg",

    icon: "Landmark",

    features: [
      "Road Construction",
      "Bridges",
      "Public Buildings",
      "Utilities",
    ],

    benefits: [
      "Long service life",
      "Minimal maintenance",
      "High structural integrity",
      "Compliance with Finnish standards",
    ],

    process: [
      "Planning",
      "Permits",
      "Construction",
      "Quality Assurance",
      "Completion",
    ],

    industries: [
      "Government",
      "Municipal",
      "Transportation",
    ],

    cta: "Contact Infrastructure Team",
  },

  {
    id: 5,
    slug: "renovation",
    title: "Renovation & Restoration",

    shortDescription:
      "Transforming existing structures while preserving their value.",

    description:
      "We modernize commercial, residential and historical buildings through carefully planned renovation and restoration services.",

    heroImage: "/assets/images/services/renovation.jpg",

    icon: "Hammer",

    features: [
      "Building Upgrades",
      "Structural Repair",
      "Facade Renewal",
      "Interior Modernization",
    ],

    benefits: [
      "Extended building life",
      "Improved efficiency",
      "Enhanced aesthetics",
      "Lower operational costs",
    ],

    process: [
      "Inspection",
      "Planning",
      "Renovation",
      "Quality Review",
      "Delivery",
    ],

    industries: [
      "Commercial",
      "Residential",
      "Government",
    ],

    cta: "Book Site Inspection",
  },

  {
    id: 6,
    slug: "project-management",
    title: "Project Management",

    shortDescription:
      "Professional planning and coordination from concept to completion.",

    description:
      "Our experienced project managers coordinate budgets, timelines, contractors and quality assurance to ensure successful project delivery.",

    heroImage: "/assets/images/services/project-management.jpg",

    icon: "ClipboardCheck",

    features: [
      "Budget Planning",
      "Scheduling",
      "Risk Management",
      "Quality Control",
    ],

    benefits: [
      "Predictable delivery",
      "Cost optimization",
      "Transparent reporting",
      "Reduced project risk",
    ],

    process: [
      "Planning",
      "Execution",
      "Monitoring",
      "Reporting",
      "Project Closeout",
    ],

    industries: [
      "Commercial",
      "Industrial",
      "Residential",
    ],

    cta: "Talk to Our Project Managers",
  },
];

export default services;