export interface Leadership {
  id: number;

  name: string;

  role: string;

  image: string;

  experience: string;

  specialization: string;

  education: string;

  biography: string;

  linkedin: string;
}

export const leadership: Leadership[] = [
  {
    id: 1,

    name: "Mikko Laine",

    role: "Chief Executive Officer",

    image: "/assets/images/team/mikko-laine.jpg",

    experience: "25+ Years",

    specialization: "Corporate Leadership & Construction Strategy",

    education: "M.Sc. Civil Engineering",

    biography:
      "Mikko has led large-scale commercial and infrastructure developments across Finland for more than two decades. He focuses on sustainable growth, innovation and long-term client partnerships.",

    linkedin: "#",
  },

  {
    id: 2,

    name: "Anna Virtanen",

    role: "Chief Operating Officer",

    image: "/assets/images/team/anna-virtanen.jpg",

    experience: "20+ Years",

    specialization: "Project Delivery",

    education: "M.Sc. Construction Management",

    biography:
      "Anna oversees project execution, operational excellence and quality assurance, ensuring projects are delivered safely, efficiently and on schedule.",

    linkedin: "#",
  },

  {
    id: 3,

    name: "Juhani Nieminen",

    role: "Head of Engineering",

    image: "/assets/images/team/juhani-nieminen.jpg",

    experience: "18+ Years",

    specialization: "Structural Engineering",

    education: "M.Sc. Structural Engineering",

    biography:
      "Juhani leads multidisciplinary engineering teams and specializes in complex steel, concrete and hybrid structural systems.",

    linkedin: "#",
  },

  {
    id: 4,

    name: "Laura Koskinen",

    role: "Director of Sustainability",

    image: "/assets/images/team/laura-koskinen.jpg",

    experience: "15+ Years",

    specialization: "Green Construction",

    education: "M.Sc. Environmental Engineering",

    biography:
      "Laura develops sustainable construction practices, carbon reduction initiatives and environmentally responsible building solutions.",

    linkedin: "#",
  },

  {
    id: 5,

    name: "Olli Saarinen",

    role: "Health & Safety Director",

    image: "/assets/images/team/olli-saarinen.jpg",

    experience: "17+ Years",

    specialization: "Construction Safety",

    education: "B.Eng. Occupational Safety",

    biography:
      "Olli ensures every project complies with Finnish and European safety regulations while fostering a zero-compromise safety culture.",

    linkedin: "#",
  },
];

export default leadership;