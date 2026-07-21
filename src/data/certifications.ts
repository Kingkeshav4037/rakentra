export interface Certification {
  id: number;
  name: string;
  code: string;
  issuedBy: string;
  description: string;
  image: string;
  valid: boolean;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "ISO 9001",
    code: "Quality Management System",
    issuedBy: "International Organization for Standardization",
    description:
      "Certified quality management system ensuring consistent project execution, customer satisfaction and continual improvement.",
    image: "/assets/images/certifications/iso9001.svg",
    valid: true,
  },

  {
    id: 2,
    name: "ISO 14001",
    code: "Environmental Management",
    issuedBy: "International Organization for Standardization",
    description:
      "Demonstrates commitment to sustainable construction, environmental responsibility and efficient resource management.",
    image: "/assets/images/certifications/iso14001.svg",
    valid: true,
  },

  {
    id: 3,
    name: "ISO 45001",
    code: "Occupational Health & Safety",
    issuedBy: "International Organization for Standardization",
    description:
      "Ensures safe working environments through proactive health and safety management systems.",
    image: "/assets/images/certifications/iso45001.svg",
    valid: true,
  },

  {
    id: 4,
    name: "CE Marking Compliance",
    code: "EU Construction Products Regulation",
    issuedBy: "European Union",
    description:
      "Compliance with European standards for construction materials, structural products and engineering systems.",
    image: "/assets/images/certifications/ce.svg",
    valid: true,
  },

  {
    id: 5,
    name: "LEED Accredited Construction",
    code: "Leadership in Energy & Environmental Design",
    issuedBy: "U.S. Green Building Council",
    description:
      "Qualified to deliver sustainable, environmentally responsible and energy-efficient building projects.",
    image: "/assets/images/certifications/leed.svg",
    valid: true,
  },

  {
    id: 6,
    name: "BREEAM Assessment Partner",
    code: "Building Research Establishment",
    issuedBy: "BRE Global",
    description:
      "Supports environmentally sustainable building design, construction and lifecycle management.",
    image: "/assets/images/certifications/breeam.svg",
    valid: true,
  },

  {
    id: 7,
    name: "RT Building Information Foundation",
    code: "Finnish Construction Standards",
    issuedBy: "Rakennustieto",
    description:
      "Operates in accordance with Finnish construction regulations, technical standards and best practices.",
    image: "/assets/images/certifications/rt.svg",
    valid: true,
  },

  {
    id: 8,
    name: "Carbon Neutral Construction Initiative",
    code: "Green Construction",
    issuedBy: "Nordic Sustainability Council",
    description:
      "Committed to reducing construction-related carbon emissions through responsible material selection and energy-efficient processes.",
    image: "/assets/images/certifications/carbon-neutral.svg",
    valid: true,
  },
];

export default certifications;