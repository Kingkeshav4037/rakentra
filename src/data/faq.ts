export interface FAQCategory {
  id: number;
  title: string;
  faqs: FAQ[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqCategories: FAQCategory[] = [
  {
    id: 1,
    title: "General",

    faqs: [
      {
        id: 1,
        question: "What services does Rakentra Works provide?",

        answer:
          "Rakentra Works provides commercial, residential, industrial and infrastructure construction services together with renovation, project management, engineering consultation and sustainable building solutions across Finland.",
      },

      {
        id: 2,
        question: "Where does Rakentra Works operate?",

        answer:
          "Our primary operations cover Finland, including Helsinki, Espoo, Tampere, Turku, Oulu and surrounding municipalities. We also collaborate on selected Nordic projects.",
      },

      {
        id: 3,
        question: "How long has Rakentra Works been operating?",

        answer:
          "With more than 18 years of experience, Rakentra Works has successfully completed hundreds of construction projects while maintaining a strong reputation for quality, safety and reliability.",
      },

      {
        id: 4,
        question: "What types of clients do you work with?",

        answer:
          "We work with private developers, businesses, municipalities, public sector organizations, industrial companies and residential clients.",
      },
    ],
  },

  {
    id: 2,

    title: "Projects",

    faqs: [
      {
        id: 5,

        question: "How do you manage project schedules?",

        answer:
          "Every project follows a structured planning process supported by Building Information Modeling (BIM), detailed scheduling, risk management and continuous progress monitoring to ensure on-time delivery.",
      },

      {
        id: 6,

        question: "Can Rakentra Works manage large-scale commercial developments?",

        answer:
          "Yes. Our multidisciplinary team has extensive experience delivering complex commercial developments, office buildings, logistics centers, retail facilities and industrial projects.",
      },

      {
        id: 7,

        question: "How is project quality maintained?",

        answer:
          "Quality is maintained through strict inspections, engineering reviews, material testing, independent audits and compliance with Finnish building regulations and international standards.",
      },

      {
        id: 8,

        question: "Can clients monitor project progress?",

        answer:
          "Yes. Clients receive regular project updates, milestone reports, site meeting summaries and progress documentation throughout the construction lifecycle.",
      },
    ],
  },

  {
    id: 3,

    title: "Safety",

    faqs: [
      {
        id: 9,

        question: "How important is workplace safety?",

        answer:
          "Safety is our highest priority. Every project follows comprehensive health and safety procedures supported by continuous staff training, risk assessments and compliance inspections.",
      },

      {
        id: 10,

        question: "Which safety standards do you follow?",

        answer:
          "Our operations align with Finnish construction regulations together with internationally recognized occupational health and safety management systems including ISO 45001 principles.",
      },

      {
        id: 11,

        question: "How often are safety inspections performed?",

        answer:
          "Safety inspections are performed throughout the project lifecycle, including daily site monitoring, scheduled audits and independent inspections whenever required.",
      },
    ],
  },

  {
    id: 4,

    title: "Sustainability",

    faqs: [
      {
        id: 12,

        question: "How does Rakentra Works support sustainable construction?",

        answer:
          "We prioritize energy-efficient building systems, environmentally responsible materials, low-carbon construction methods, waste reduction and lifecycle-focused engineering solutions.",
      },

      {
        id: 13,

        question: "Do you construct green buildings?",

        answer:
          "Yes. We actively participate in projects targeting LEED, BREEAM and other sustainable building certifications while incorporating renewable energy technologies whenever feasible.",
      },

      {
        id: 14,

        question: "How do you reduce environmental impact?",

        answer:
          "Environmental impact is minimized through responsible procurement, digital planning, optimized logistics, efficient resource management and continuous monitoring of sustainability objectives.",
      },
    ],
  },

  {
    id: 5,

    title: "Careers",

    faqs: [
      {
        id: 15,

        question: "How can I apply for a position?",

        answer:
          "Visit our Careers page, review available opportunities and submit your application using our online recruitment form together with your CV and supporting documents.",
      },

      {
        id: 16,

        question: "Do you offer internships?",

        answer:
          "Yes. We regularly offer internships, graduate programs and apprenticeship opportunities for students and early-career professionals interested in construction and engineering.",
      },

      {
        id: 17,

        question: "What qualities do you look for in candidates?",

        answer:
          "We value professionalism, technical expertise, teamwork, integrity, safety awareness, innovation and a commitment to delivering high-quality work.",
      },
    ],
  },

  {
    id: 6,

    title: "Contact",

    faqs: [
      {
        id: 18,

        question: "How can I request a quotation?",

        answer:
          "You can request a quotation by completing the contact form on our website or contacting our commercial team directly. We will arrange an initial consultation to understand your project requirements.",
      },

      {
        id: 19,

        question: "How quickly do you respond to inquiries?",

        answer:
          "Most inquiries receive a response within one business day. Complex project requests may require additional review before a detailed response is provided.",
      },

      {
        id: 20,

        question: "Can I schedule a consultation?",

        answer:
          "Yes. We offer consultations for commercial, residential, industrial and infrastructure projects to discuss scope, timelines, budgets and technical requirements.",
      },
    ],
  },
];

export default faqCategories;