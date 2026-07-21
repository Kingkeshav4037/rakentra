export interface JobOpening {
  id: string;
  title: string;
  department: 'Engineering' | 'Site Management' | 'HSE' | 'Craftsmen';
  location: string;
  type: 'Full-time' | 'Contract' | 'Summer Internship';
  requirements: string[];
  responsibilities: string[];
  description: string;
  salaryRange?: string;
}

export const jobOpeningsData: JobOpening[] = [
  {
    id: "site-manager-helsinki",
    title: "Senior Site Manager (Vastaava Työnjohtaja)",
    department: "Site Management",
    location: "Helsinki HQ & South Finland sites",
    type: "Full-time",
    requirements: [
      "B.Sc. or M.Sc. in Civil Engineering or Construction Management (Rakennusmestari / insinööri)",
      "Minimum 5 years of experience managing commercial or infrastructure sites in Finland",
      "Valid Finnish Vastaava Työnjohtaja qualifications and safety certifications (Työturvallisuuskortti)",
      "Strong command of Finnish and English languages"
    ],
    responsibilities: [
      "Manage daily onsite operations, scheduling, subcontractor teams, and material logistics",
      "Ensure full compliance with construction plans, codes, and RALA quality standards",
      "Enforce site safety regulations (Zero Accidents target) and document weekly safety audits (TR-mittaus)",
      "Act as primary point of contact for clients, architects, and municipal inspectors"
    ],
    description: "We are seeking a seasoned Site Manager to lead premium commercial construction projects in the capital region. You will oversee execution from ground excavation through to structural assembly and final commissioning.",
    salaryRange: "€4,800 - €6,200 / month"
  },
  {
    id: "bim-engineer-vantaa",
    title: "BIM Coordination Engineer (Tietomallikoordinaattori)",
    department: "Engineering",
    location: "Vantaa Office",
    type: "Full-time",
    requirements: [
      "Degree in Civil Engineering, Structural Design, or Arch-tech",
      "Proficiency in Tekla Structures, Autodesk Revit, and Solibri Model Checker",
      "Experience setting up BIM Level 3 project environments and resolving multi-trade design clashes",
      "Strong communication skills for presenting models to clients and site teams"
    ],
    responsibilities: [
      "Combine structural, MEP, and architectural CAD files into unified Solibri coordinate models",
      "Run clash-detection audits and coordinate design revisions with project engineers",
      "Maintain the project digital twin and ensure BIM guidelines are followed across all contracting parties",
      "Prepare model exports for field layout teams utilizing GPS-guided machinery"
    ],
    description: "Join our central engineering office to coordinate digital modeling for complex infrastructural and industrial projects. You will be responsible for ensuring that all designs are clash-free before site construction begins.",
    salaryRange: "€4,200 - €5,500 / month"
  },
  {
    id: "safety-coordinator-tampere",
    title: "HSE Specialist & Safety Coordinator",
    department: "HSE",
    location: "Tampere Branch",
    type: "Full-time",
    requirements: [
      "Degree in Occupational Health, Environmental Engineering, or Civil Engineering with safety focus",
      "In-depth knowledge of Finnish safety regulations (Työturvallisuussäädökset)",
      "Experience conducting risk assessments and incident investigations in heavy civil construction",
      "Fluent in Finnish and English"
    ],
    responsibilities: [
      "Develop project-specific Health, Safety, and Environment (HSE) manuals and emergency response plans",
      "Conduct regular onsite inspections, safety training sessions, and audit subcontractor safety practices",
      "Maintain the digital safety dashboard and report safety metrics directly to executive leadership",
      "Promote a culture of safety-first engagement and identify proactive measures to minimize risk"
    ],
    description: "Help us maintain our Zero Accidents goal. We are looking for an HSE Coordinator to oversee safety practices across our expanding infrastructure and residential projects in Central Finland.",
    salaryRange: "€4,000 - €5,000 / month"
  }
];

export const cultureData = {
  headline: "Scandinavian Simplicity in the Office, Excellence on the Scaffold",
  introduction: "At Rakentra, our engineering excellence is built on the well-being of our team. We embrace a flat management structure, honest dialogue, and the Finnish values of sisu and trust.",
  benefits: [
    { title: "Sauna & Gym", desc: "Access to our corporate sauna lounges and comprehensive sports/wellness voucher allowances (epassi)." },
    { title: "Training Programs", desc: "Annual professional development budget for safety certifications, engineering degrees, and BIM modeling software courses." },
    { title: "Modern Equipment", desc: "Work with top-tier tools, from Trimble 3D gear to premium ergonomic clothing and equipment." },
    { title: "Work-Life Balance", desc: "Flexible working hours and remote options for design/management staff, prioritizing family time." }
  ],
  hiringSteps: [
    { step: 1, title: "Application Review", desc: "Our recruitment team evaluates your background, qualifications, and portfolio against project requirements." },
    { step: 2, title: "Technical Interview", desc: "A discussion with our engineering or site directors to review technical competency and past projects." },
    { step: 3, title: "Values & Team Fit", desc: "A meeting with team members to align on safety philosophy, collaboration, and work culture." },
    { step: 4, title: "Offer & Onboarding", desc: "We extend a formal contract and start our comprehensive safety-first site induction program." }
  ]
};

export const careersFaqData = [
  {
    question: "Do you offer summer jobs or internships?",
    answer: "Yes, every year we hire between 20 to 30 engineering and vocational students for summer training programs (kesätyö). Applications open in January and close in March."
  },
  {
    question: "Do I need to speak fluent Finnish to apply?",
    answer: "For site management and direct safety roles, a strong command of Finnish is required for legal documentation and coordination. For BIM engineering, estimating, and structural design roles, English is sufficient."
  },
  {
    question: "How does Rakentra invest in safety training?",
    answer: "Every employee is sponsored to obtain Finnish national safety cards (Työturvallisuuskortti, Tulityökortti, Tieturvakortti). We run weekly safety seminars on our active sites and provide training on ergonomic lifting and equipment operations."
  }
];
