export interface BlogAuthor {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin?: string;
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface BlogSection {
  heading: string;
  content: string;
}

export interface BlogPost {
  id: number;

  slug: string;

  title: string;

  subtitle: string;

  excerpt: string;

  coverImage: string;

  category: string;

  tags: string[];

  author: BlogAuthor;

  publishedAt: string;

  updatedAt?: string;

  readingTime: string;

  featured: boolean;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  sections: BlogSection[];
}

export const blogAuthors: BlogAuthor[] = [
  {
    id: 1,
    name: "Mikko Laine",
    role: "Chief Executive Officer",
    avatar: "/images/blog/authors/mikko.jpg",
    bio:
      "Mikko has more than twenty years of experience leading large commercial, residential and infrastructure developments across Finland.",
    linkedin: "https://linkedin.com/in/mikkolaine",
  },

  {
    id: 2,
    name: "Anna Virtanen",
    role: "Director of Sustainability",
    avatar: "/images/blog/authors/anna.jpg",
    bio:
      "Anna specializes in sustainable construction, green building certifications and environmental compliance throughout the Nordic region.",
    linkedin: "https://linkedin.com/in/annavirtanen",
  },

  {
    id: 3,
    name: "Juhani Nieminen",
    role: "Head of Engineering",
    avatar: "/images/blog/authors/juhani.jpg",
    bio:
      "Juhani leads multidisciplinary engineering teams focused on BIM, digital construction workflows and structural innovation.",
    linkedin: "https://linkedin.com/in/juhaninieminen",
  },

  {
    id: 4,
    name: "Laura Koskinen",
    role: "Project Director",
    avatar: "/images/blog/authors/laura.jpg",
    bio:
      "Laura manages complex commercial construction projects while driving quality, client satisfaction and operational excellence.",
    linkedin: "https://linkedin.com/in/laurakoskinen",
  },
];

export const blogCategories: BlogCategory[] = [
  {
    id: 1,
    name: "Construction",
    slug: "construction",
    description:
      "Construction techniques, project delivery and industry best practices.",
  },

  {
    id: 2,
    name: "Engineering",
    slug: "engineering",
    description:
      "Structural engineering, digital design and modern building technologies.",
  },

  {
    id: 3,
    name: "Sustainability",
    slug: "sustainability",
    description:
      "Green building, renewable energy and environmentally responsible construction.",
  },

  {
    id: 4,
    name: "Innovation",
    slug: "innovation",
    description:
      "Emerging technologies transforming the construction industry.",
  },

  {
    id: 5,
    name: "Project Management",
    slug: "project-management",
    description:
      "Planning, scheduling, risk management and project leadership insights.",
  },

  {
    id: 6,
    name: "Company News",
    slug: "company-news",
    description:
      "Latest announcements, achievements and milestones from Rakentra Works.",
  },
];

export const blogTags = [
  "Construction",
  "Engineering",
  "Commercial",
  "Residential",
  "Infrastructure",
  "Project Management",
  "Digital Construction",
  "BIM",
  "Innovation",
  "Smart Buildings",
  "Green Building",
  "LEED",
  "BREEAM",
  "Safety",
  "Quality",
  "Architecture",
  "Concrete",
  "Steel",
  "Renewable Energy",
  "Finland",
];

export const defaultSEO = {
  siteName: "Rakentra Works",
  defaultImage: "/images/blog/default-cover.jpg",
  twitterCard: "summary_large_image",
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,

    slug: "future-of-sustainable-construction-finland",

    title: "The Future of Sustainable Construction in Finland",

    subtitle:
      "How innovation, digital engineering and environmental responsibility are transforming the Finnish construction industry.",

    excerpt:
      "Sustainability is no longer an optional consideration—it is becoming the foundation of modern construction. Discover how Finnish companies are embracing green building practices, digital workflows and renewable technologies.",

    coverImage:
      "/images/blog/sustainable-construction-finland.jpg",

    category: "Sustainability",

    tags: [
      "Sustainability",
      "Green Building",
      "LEED",
      "BREEAM",
      "Construction",
      "Renewable Energy",
      "Finland",
    ],

    author: blogAuthors[1],

    publishedAt: "2026-05-15",

    updatedAt: "2026-06-08",

    readingTime: "8 min",

    featured: true,

    seo: {
      title:
        "The Future of Sustainable Construction in Finland | Rakentra Works",

      description:
        "Explore how sustainable construction practices, digital engineering and renewable technologies are shaping Finland's building industry.",

      keywords: [
        "sustainable construction",
        "green buildings",
        "Finland construction",
        "LEED",
        "BREEAM",
        "renewable energy",
      ],
    },

    sections: [
      {
        heading: "Why Sustainability Matters",

        content:
          "Construction has a significant impact on energy consumption, carbon emissions and resource utilization. Across Finland, developers are increasingly prioritizing environmentally responsible construction practices that reduce emissions while improving long-term operational efficiency. Sustainable projects not only benefit the environment but also deliver lower operating costs and healthier spaces for occupants.",
      },

      {
        heading: "Digital Planning Improves Efficiency",

        content:
          "Modern Building Information Modeling (BIM), digital twins and collaborative planning platforms allow project teams to optimize materials, reduce waste and detect design conflicts before construction begins. These technologies improve project quality while minimizing unnecessary environmental impact.",
      },

      {
        heading: "Renewable Energy Integration",

        content:
          "Solar energy, geothermal heating, high-performance insulation and intelligent building automation have become common components of contemporary Finnish developments. Integrating renewable technologies during the design phase significantly improves a building's long-term sustainability performance.",
      },

      {
        heading: "Material Selection",

        content:
          "Responsible procurement emphasizes recycled steel, certified timber, low-carbon concrete and locally sourced construction materials whenever practical. Careful material selection reduces transportation emissions while supporting regional suppliers and circular economy initiatives.",
      },

      {
        heading: "Green Building Certifications",

        content:
          "International certification systems such as LEED and BREEAM encourage measurable improvements in energy performance, water efficiency, indoor environmental quality and responsible resource management. These frameworks provide confidence for investors, building owners and occupants alike.",
      },

      {
        heading: "The Rakentra Works Approach",

        content:
          "Rakentra Works incorporates sustainability throughout every project lifecycle—from early feasibility studies to long-term facility performance. Our multidisciplinary teams evaluate environmental impact, optimize engineering solutions and deliver buildings designed for future generations without compromising quality or functionality.",
      },     
    ],
  },
    {
    id: 2,

    slug: "building-information-modeling-transforming-construction",

    title: "How Building Information Modeling (BIM) Is Transforming Modern Construction",

    subtitle:
      "Why digital collaboration has become the backbone of efficient, predictable and high-quality construction projects.",

    excerpt:
      "Building Information Modeling (BIM) has fundamentally changed the way construction projects are designed, coordinated and delivered. Learn how BIM improves collaboration, minimizes errors and enables smarter decision-making throughout the project lifecycle.",

    coverImage:
      "/images/blog/building-information-modeling.jpg",

    category: "Engineering",

    tags: [
      "BIM",
      "Engineering",
      "Digital Construction",
      "Project Management",
      "Innovation",
      "Construction",
      "Finland",
    ],

    author: blogAuthors[2],

    publishedAt: "2026-04-28",

    updatedAt: "2026-05-20",

    readingTime: "9 min",

    featured: true,

    seo: {
      title:
        "How BIM Is Transforming Modern Construction | Rakentra Works",

      description:
        "Discover how Building Information Modeling improves collaboration, reduces construction risks and increases project efficiency.",

      keywords: [
        "Building Information Modeling",
        "BIM",
        "Digital Construction",
        "Engineering",
        "Construction Technology",
        "Project Coordination",
      ],
    },

    sections: [
      {
        heading: "What Is Building Information Modeling?",

        content:
          "Building Information Modeling (BIM) is a collaborative digital process that creates intelligent three-dimensional representations of buildings and infrastructure. Unlike traditional CAD drawings, BIM combines geometry, engineering data, schedules, quantities and documentation into a unified project model that evolves throughout the construction lifecycle.",
      },

      {
        heading: "Improved Collaboration",

        content:
          "Architects, structural engineers, MEP consultants, contractors and clients work from the same coordinated model. This shared source of information reduces communication gaps, improves transparency and enables every stakeholder to make informed decisions based on current project data.",
      },

      {
        heading: "Early Clash Detection",

        content:
          "One of BIM's greatest advantages is identifying design conflicts before construction begins. Automated clash detection helps teams resolve structural, electrical and mechanical conflicts digitally, preventing expensive on-site rework and minimizing project delays.",
      },

      {
        heading: "Better Cost and Schedule Control",

        content:
          "Integrating quantities, procurement information and construction schedules into BIM allows project managers to estimate costs more accurately and monitor progress in real time. These insights support proactive decision-making throughout every phase of the project.",
      },

      {
        heading: "Facility Management After Handover",

        content:
          "The value of BIM continues after construction. Building owners can use the digital model to manage maintenance schedules, equipment records, renovations and operational performance over the building's entire lifecycle.",
      },

      {
        heading: "BIM at Rakentra Works",

        content:
          "Rakentra Works applies BIM from concept development through project handover. Our engineering teams leverage coordinated digital workflows to improve quality, increase productivity, reduce project risk and deliver greater value for clients across commercial, residential and infrastructure developments.",
      },
    ],
  },
    {
    id: 3,

    slug: "five-principles-of-successful-construction-project-management",

    title: "Five Principles of Successful Construction Project Management",

    subtitle:
      "Discover the core practices that consistently deliver projects on time, within budget and to the highest quality standards.",

    excerpt:
      "Successful construction projects rely on more than technical expertise. Effective planning, communication, risk management and quality control are essential to delivering outstanding results for clients and stakeholders.",

    coverImage:
      "/images/blog/construction-project-management.jpg",

    category: "Project Management",

    tags: [
      "Project Management",
      "Construction",
      "Leadership",
      "Quality",
      "Safety",
      "Risk Management",
      "Planning",
    ],

    author: blogAuthors[3],

    publishedAt: "2026-03-18",

    updatedAt: "2026-04-02",

    readingTime: "7 min",

    featured: false,

    seo: {
      title:
        "Five Principles of Successful Construction Project Management | Rakentra Works",

      description:
        "Learn the five essential principles that help construction teams deliver successful projects through planning, communication, quality assurance and proactive risk management.",

      keywords: [
        "construction project management",
        "project planning",
        "construction leadership",
        "quality assurance",
        "risk management",
        "construction best practices",
      ],
    },

    sections: [
      {
        heading: "1. Establish Clear Project Objectives",

        content:
          "Every successful construction project begins with clearly defined goals. Project scope, budget, schedule, technical requirements and stakeholder expectations should be documented before work begins. Well-defined objectives reduce uncertainty and provide measurable benchmarks throughout the project lifecycle.",
      },

      {
        heading: "2. Plan Before You Build",

        content:
          "Detailed planning minimizes delays and unexpected costs. Comprehensive scheduling, procurement planning, resource allocation and engineering coordination enable teams to identify potential challenges before they impact construction activities.",
      },

      {
        heading: "3. Communicate Continuously",

        content:
          "Construction projects involve architects, engineers, contractors, suppliers and clients. Regular meetings, transparent reporting and collaborative digital platforms ensure that every stakeholder works with accurate and up-to-date information, reducing misunderstandings and improving decision-making.",
      },

      {
        heading: "4. Prioritize Quality and Safety",

        content:
          "Quality assurance and workplace safety should be integrated into every stage of construction rather than treated as final inspections. Continuous monitoring, documented procedures and routine audits help maintain high standards while protecting workers and project assets.",
      },

      {
        heading: "5. Manage Risks Proactively",

        content:
          "Unexpected events such as weather conditions, supply chain disruptions, design modifications and regulatory changes can affect project performance. Identifying risks early and maintaining contingency plans enables project teams to respond quickly while minimizing schedule and budget impacts.",
      },

      {
        heading: "Delivering Excellence at Rakentra Works",

        content:
          "At Rakentra Works, project management combines experienced leadership, modern digital technologies and proven construction methodologies. By emphasizing planning, collaboration, safety and continuous improvement, we consistently deliver commercial, residential and infrastructure projects that meet the highest standards of quality, reliability and client satisfaction.",
      },
    ],
  },
];
export const featuredPosts = blogPosts.filter((post) => post.featured);

export const recentPosts = [...blogPosts].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() -
    new Date(a.publishedAt).getTime()
);

export const popularPosts = [
  ...blogPosts.filter((post) => post.featured),
  ...blogPosts.filter((post) => !post.featured),
].slice(0, 3);

/**
 * Find a blog post by slug.
 */
export const getBlogPostBySlug = (
  slug: string
): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

/**
 * Get all posts within a category.
 */
export const getPostsByCategory = (
  category: string
): BlogPost[] => {
  return blogPosts.filter(
    (post) =>
      post.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Get all posts that contain a specific tag.
 */
export const getPostsByTag = (
  tag: string
): BlogPost[] => {
  return blogPosts.filter((post) =>
    post.tags.some(
      (item) => item.toLowerCase() === tag.toLowerCase()
    )
  );
};

/**
 * Find related posts based on shared category or tags.
 */
export const getRelatedPosts = (
  currentSlug: string,
  limit = 3
): BlogPost[] => {
  const current = getBlogPostBySlug(currentSlug);

  if (!current) return [];

  const scored = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;

      if (post.category === current.category) {
        score += 5;
      }

      score += post.tags.filter((tag) =>
        current.tags.includes(tag)
      ).length;

      return {
        post,
        score,
      };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.post);
};

/**
 * Search blog posts by title, excerpt or tags.
 */
export const searchBlogPosts = (
  query: string
): BlogPost[] => {
  const search = query.trim().toLowerCase();

  if (!search) return blogPosts;

  return blogPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search) ||
      post.subtitle.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      ) ||
      post.category.toLowerCase().includes(search)
    );
  });
};

export default {
  blogAuthors,
  blogCategories,
  blogTags,
  blogPosts,
  featuredPosts,
  recentPosts,
  popularPosts,
  getBlogPostBySlug,
  getPostsByCategory,
  getPostsByTag,
  getRelatedPosts,
  searchBlogPosts,
}; 

  