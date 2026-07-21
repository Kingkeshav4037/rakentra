export interface Partner {
  id: number;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "NordBuild Finland",
    logo: "/assets/images/partners/nordbuild.svg",
    category: "Construction Partner",
    description:
      "Strategic partner for large-scale commercial developments.",
    website: "#",
  },
  {
    id: 2,
    name: "SteelTech Nordic",
    logo: "/assets/images/partners/steeltech.svg",
    category: "Structural Steel",
    description:
      "Supplier of high-strength structural steel systems.",
    website: "#",
  },
  {
    id: 3,
    name: "Eco Concrete Finland",
    logo: "/assets/images/partners/ecoconcrete.svg",
    category: "Materials",
    description:
      "Provider of low-carbon concrete solutions.",
    website: "#",
  },
  {
    id: 4,
    name: "SmartBuild Solutions",
    logo: "/assets/images/partners/smartbuild.svg",
    category: "Technology",
    description:
      "Digital construction monitoring and BIM solutions.",
    website: "#",
  },
  {
    id: 5,
    name: "Nordic Energy Systems",
    logo: "/assets/images/partners/nordicenergy.svg",
    category: "Energy",
    description:
      "Energy-efficient infrastructure and sustainability partner.",
    website: "#",
  },
  {
    id: 6,
    name: "SafeSite Finland",
    logo: "/assets/images/partners/safesite.svg",
    category: "Safety",
    description:
      "Construction safety equipment and compliance specialist.",
    website: "#",
  },
];

export default partners;