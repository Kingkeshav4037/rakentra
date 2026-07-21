export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface RecruitmentStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface JobOpening {
  id: number;
  slug: string;

  title: string;

  department: string;

  employmentType:
    | "Full Time"
    | "Part Time"
    | "Internship"
    | "Contract";

  location: string;

  experience: string;

  salary: string;

  workMode:
    | "On-site"
    | "Hybrid"
    | "Remote";

  description: string;

  responsibilities: string[];

  requirements: string[];

  preferredQualifications: string[];

  benefits: string[];

  applicationDeadline: string;

  featured: boolean;
}

export const companyBenefits: Benefit[] = [
  {
    id: 1,
    title: "Competitive Compensation",
    description:
      "Market-leading salary packages with annual performance reviews and bonus opportunities.",
    icon: "Wallet",
  },

  {
    id: 2,
    title: "Professional Development",
    description:
      "Continuous learning through technical training, certifications and leadership development programs.",
    icon: "GraduationCap",
  },

  {
    id: 3,
    title: "Health & Wellbeing",
    description:
      "Comprehensive occupational healthcare, wellness initiatives and employee assistance programs.",
    icon: "HeartPulse",
  },

  {
    id: 4,
    title: "Modern Work Environment",
    description:
      "Safe workplaces equipped with modern construction technologies and collaborative tools.",
    icon: "Building2",
  },

  {
    id: 5,
    title: "Career Growth",
    description:
      "Clear career progression with opportunities to work on landmark projects across Finland.",
    icon: "TrendingUp",
  },

  {
    id: 6,
    title: "Work-Life Balance",
    description:
      "Flexible policies that support productivity while respecting personal wellbeing.",
    icon: "Clock3",
  },
];

export const recruitmentProcess: RecruitmentStep[] = [
  {
    id: 1,
    step: "01",
    title: "Application",
    description:
      "Submit your CV, portfolio and supporting documents through our online application portal.",
  },

  {
    id: 2,
    step: "02",
    title: "Initial Review",
    description:
      "Our recruitment team reviews your qualifications and professional experience.",
  },

  {
    id: 3,
    step: "03",
    title: "Interview",
    description:
      "Meet hiring managers to discuss your experience, technical skills and career goals.",
  },

  {
    id: 4,
    step: "04",
    title: "Technical Assessment",
    description:
      "Selected roles include practical or technical evaluations relevant to the position.",
  },

  {
    id: 5,
    step: "05",
    title: "Offer",
    description:
      "Successful candidates receive a formal employment offer and onboarding information.",
  },

  {
    id: 6,
    step: "06",
    title: "Onboarding",
    description:
      "Begin your journey with structured orientation, training and integration into your team.",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: 1,

    slug: "senior-project-manager",

    title: "Senior Project Manager",

    department: "Project Management",

    employmentType: "Full Time",

    location: "Helsinki, Finland",

    experience: "8+ Years",

    salary: "€75,000 – €95,000",

    workMode: "On-site",

    description:
      "Lead large-scale commercial and infrastructure projects from planning through final delivery while managing multidisciplinary teams.",

    responsibilities: [
      "Lead project execution",
      "Manage budgets and schedules",
      "Coordinate contractors",
      "Client communication",
      "Quality assurance",
      "Risk management",
    ],

    requirements: [
      "Civil Engineering degree",
      "8+ years of construction management",
      "Excellent communication",
      "Leadership experience",
    ],

    preferredQualifications: [
      "PMP Certification",
      "Experience with BIM",
      "Knowledge of Finnish regulations",
    ],

    benefits: [
      "Performance bonus",
      "Private healthcare",
      "Professional training",
    ],

    applicationDeadline: "31 December 2026",

    featured: true,
  },

  {
    id: 2,

    slug: "structural-engineer",

    title: "Structural Engineer",

    department: "Engineering",

    employmentType: "Full Time",

    location: "Espoo, Finland",

    experience: "4+ Years",

    salary: "€58,000 – €72,000",

    workMode: "Hybrid",

    description:
      "Design and review structural systems for commercial, residential and industrial developments.",

    responsibilities: [
      "Structural calculations",
      "Design review",
      "Engineering coordination",
      "Technical documentation",
    ],

    requirements: [
      "Bachelor's or Master's in Structural Engineering",
      "Experience with Eurocodes",
      "Revit and AutoCAD",
    ],

    preferredQualifications: [
      "BIM Coordination",
      "Steel structure experience",
    ],

    benefits: [
      "Hybrid work",
      "Learning budget",
      "Healthcare",
    ],

    applicationDeadline: "15 January 2027",

    featured: true,
  },

  {
    id: 3,

    slug: "site-engineer",

    title: "Site Engineer",

    department: "Construction",

    employmentType: "Full Time",

    location: "Tampere, Finland",

    experience: "3+ Years",

    salary: "€48,000 – €60,000",

    workMode: "On-site",

    description:
      "Supervise daily construction activities while ensuring quality, safety and schedule compliance.",

    responsibilities: [
      "Site supervision",
      "Contractor coordination",
      "Safety monitoring",
      "Daily reporting",
    ],

    requirements: [
      "Construction Engineering degree",
      "3+ years site experience",
      "Problem-solving skills",
    ],

    preferredQualifications: [
      "Safety certification",
      "BIM familiarity",
    ],

    benefits: [
      "Company vehicle",
      "Annual bonus",
      "Healthcare",
    ],

    applicationDeadline: "20 January 2027",

    featured: false,
  },

  {
    id: 4,

    slug: "bim-coordinator",

    title: "BIM Coordinator",

    department: "Digital Engineering",

    employmentType: "Full Time",

    location: "Helsinki, Finland",

    experience: "3+ Years",

    salary: "€55,000 – €70,000",

    workMode: "Hybrid",

    description:
      "Coordinate Building Information Modeling workflows across multidisciplinary project teams.",

    responsibilities: [
      "Maintain BIM models",
      "Coordinate consultants",
      "Clash detection",
      "Documentation",
    ],

    requirements: [
      "Experience with Autodesk Revit",
      "Knowledge of BIM workflows",
      "Construction background",
    ],

    preferredQualifications: [
      "Navisworks",
      "Civil 3D",
    ],

    benefits: [
      "Hybrid work",
      "Training budget",
      "Certification support",
    ],

    applicationDeadline: "10 February 2027",

    featured: false,
  },

  {
    id: 5,

    slug: "graduate-engineer",

    title: "Graduate Engineer",

    department: "Engineering",

    employmentType: "Internship",

    location: "Helsinki, Finland",

    experience: "Fresh Graduate",

    salary: "Competitive",

    workMode: "On-site",

    description:
      "Graduate development programme designed for engineering students and recent graduates interested in modern construction.",

    responsibilities: [
      "Support engineering teams",
      "Site visits",
      "Project documentation",
      "Technical learning",
    ],

    requirements: [
      "Engineering student or graduate",
      "Strong analytical skills",
      "Willingness to learn",
    ],

    preferredQualifications: [
      "Knowledge of CAD",
      "Construction internship",
    ],

    benefits: [
      "Mentorship",
      "Training",
      "Career progression",
    ],

    applicationDeadline: "Open",

    featured: true,
  },
];

export default {
  companyBenefits,
  recruitmentProcess,
  jobOpenings,
};