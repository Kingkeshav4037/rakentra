export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  shortDescription: string;
  description: string;

  icon: string;

  duration: string;

  deliverables: string[];

  activities: string[];

  technologies: string[];

  outcome: string;
}

export const process: ProcessStep[] = [
  {
    id: 1,

    step: "01",

    title: "Consultation & Discovery",

    shortDescription:
      "Understanding client goals, project scope and site requirements.",

    description:
      "Every successful project begins with a detailed consultation. Our specialists meet with stakeholders to understand business objectives, technical requirements, budget expectations and project constraints before planning begins.",

    icon: "Handshake",

    duration: "1–2 Weeks",

    deliverables: [
      "Project Brief",
      "Requirement Analysis",
      "Budget Estimation",
      "Initial Timeline",
      "Risk Assessment",
    ],

    activities: [
      "Client Meetings",
      "Requirement Gathering",
      "Site Visit",
      "Feasibility Study",
      "Budget Planning",
    ],

    technologies: [
      "Digital Survey",
      "Drone Inspection",
      "3D Site Mapping",
    ],

    outcome:
      "A clear understanding of project objectives, constraints and expected deliverables.",
  },

  {
    id: 2,

    step: "02",

    title: "Planning & Design",

    shortDescription:
      "Developing architectural, engineering and construction plans.",

    description:
      "Our multidisciplinary team prepares architectural concepts, structural engineering, MEP coordination and detailed construction documentation while ensuring compliance with Finnish regulations.",

    icon: "PencilRuler",

    duration: "2–6 Weeks",

    deliverables: [
      "Architectural Drawings",
      "Structural Plans",
      "MEP Coordination",
      "Construction Schedule",
      "Permit Documentation",
    ],

    activities: [
      "Concept Design",
      "Engineering",
      "BIM Modeling",
      "Permit Approval",
    ],

    technologies: [
      "AutoCAD",
      "Revit",
      "Building Information Modeling",
    ],

    outcome:
      "Complete project documentation ready for execution.",
  },

  {
    id: 3,

    step: "03",

    title: "Pre-Construction",

    shortDescription:
      "Preparing the site, logistics and procurement before construction starts.",

    description:
      "Before physical work begins, our team secures permits, procures materials, mobilizes equipment and establishes strict health and safety procedures.",

    icon: "HardHat",

    duration: "2–4 Weeks",

    deliverables: [
      "Site Preparation",
      "Safety Plan",
      "Material Procurement",
      "Construction Schedule",
      "Resource Allocation",
    ],

    activities: [
      "Equipment Mobilization",
      "Supplier Coordination",
      "Site Fencing",
      "Utility Preparation",
    ],

    technologies: [
      "Project Management Software",
      "Digital Procurement",
      "Construction Scheduling",
    ],

    outcome:
      "Construction site fully prepared for efficient execution.",
  },

  {
    id: 4,

    step: "04",

    title: "Construction Execution",

    shortDescription:
      "Delivering the project using proven engineering and quality standards.",

    description:
      "Construction activities are carried out according to approved plans while maintaining strict quality control, safety compliance and transparent communication with stakeholders.",

    icon: "Building2",

    duration: "6–24 Months",

    deliverables: [
      "Structural Works",
      "Civil Works",
      "Mechanical Systems",
      "Electrical Systems",
      "Interior Finishes",
    ],

    activities: [
      "Concrete Works",
      "Steel Installation",
      "MEP Installation",
      "Facade Construction",
      "Interior Construction",
    ],

    technologies: [
      "BIM Coordination",
      "Drones",
      "Laser Measurement",
      "Digital Site Monitoring",
    ],

    outcome:
      "High-quality construction completed according to specifications and schedule.",
  },

  {
    id: 5,

    step: "05",

    title: "Quality Assurance & Safety",

    shortDescription:
      "Continuous inspection and verification throughout the project lifecycle.",

    description:
      "Independent inspections, testing procedures and safety audits are performed throughout construction to ensure compliance with Finnish building regulations and international standards.",

    icon: "ShieldCheck",

    duration: "Entire Project",

    deliverables: [
      "Inspection Reports",
      "Quality Audits",
      "Safety Audits",
      "Compliance Documentation",
    ],

    activities: [
      "Material Testing",
      "Structural Inspection",
      "Safety Monitoring",
      "Documentation",
    ],

    technologies: [
      "Digital Inspection",
      "Quality Management Systems",
      "Construction Analytics",
    ],

    outcome:
      "Consistent construction quality with zero compromise on safety.",
  },

  {
    id: 6,

    step: "06",

    title: "Project Completion & Handover",

    shortDescription:
      "Delivering a fully completed project ready for occupancy and operation.",

    description:
      "Following final inspections, commissioning and documentation, the completed project is handed over with warranties, maintenance documentation and post-project support.",

    icon: "KeyRound",

    duration: "1–2 Weeks",

    deliverables: [
      "Final Inspection",
      "Completion Certificate",
      "Warranty Documents",
      "Maintenance Manual",
      "Project Handover",
    ],

    activities: [
      "Commissioning",
      "Client Walkthrough",
      "Final Documentation",
      "Training",
    ],

    technologies: [
      "Digital Documentation",
      "Building Management Systems",
    ],

    outcome:
      "Client receives a fully operational building delivered to the highest quality standards.",
  },
];

export default process;