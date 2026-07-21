export interface Award {
  id: number;
  title: string;
  organization: string;
  year: number;
  category: string;
  description: string;
  image: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "Finnish Construction Excellence Award",
    organization: "Finnish Construction Association",
    year: 2024,
    category: "Commercial Construction",
    description:
      "Recognized for delivering exceptional commercial developments with outstanding quality, sustainability and project management.",
    image: "/assets/images/awards/excellence-2024.png",
  },

  {
    id: 2,
    title: "Nordic Sustainable Building Award",
    organization: "Nordic Green Building Council",
    year: 2023,
    category: "Sustainability",
    description:
      "Awarded for integrating energy-efficient systems, low-carbon materials and environmentally responsible construction practices.",
    image: "/assets/images/awards/sustainability-2023.png",
  },

  {
    id: 3,
    title: "Safety Leadership Award",
    organization: "European Construction Safety Council",
    year: 2023,
    category: "Workplace Safety",
    description:
      "Recognized for maintaining industry-leading health and safety standards across all construction sites.",
    image: "/assets/images/awards/safety-2023.png",
  },

  {
    id: 4,
    title: "Innovation in Construction",
    organization: "BuildTech Europe",
    year: 2022,
    category: "Innovation",
    description:
      "Awarded for adopting Building Information Modeling (BIM), digital project monitoring and smart construction technologies.",
    image: "/assets/images/awards/innovation-2022.png",
  },

  {
    id: 5,
    title: "Client Satisfaction Award",
    organization: "Nordic Business Review",
    year: 2024,
    category: "Customer Experience",
    description:
      "Recognized for consistently achieving outstanding customer satisfaction and long-term client relationships.",
    image: "/assets/images/awards/client-2024.png",
  },

  {
    id: 6,
    title: "Employer of the Year",
    organization: "Finnish Employers Federation",
    year: 2022,
    category: "Workplace",
    description:
      "Awarded for creating an inclusive, safe and growth-oriented work environment for construction professionals.",
    image: "/assets/images/awards/employer-2022.png",
  },
];

export default awards;