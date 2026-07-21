export interface TimelineItem {
  id: number;

  year: string;

  title: string;

  description: string;

  image?: string;

  milestone: boolean;
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2008",
    title: "Company Founded",
    description:
      "Rakentra Works was established with a vision of delivering reliable, innovative, and sustainable construction solutions for residential and commercial clients.",
    image: "/assets/images/timeline/founding.jpg",
    milestone: true,
  },

  {
    id: 2,
    year: "2011",
    title: "50 Successful Projects",
    description:
      "Successfully completed more than 50 residential and commercial construction projects while expanding engineering and project management capabilities.",
    image: "/assets/images/timeline/projects-50.jpg",
    milestone: false,
  },

  {
    id: 3,
    year: "2014",
    title: "Industrial Division Launch",
    description:
      "Expanded operations into industrial construction, including factories, logistics centers, warehouses, and manufacturing facilities.",
    image: "/assets/images/timeline/industrial.jpg",
    milestone: true,
  },

  {
    id: 4,
    year: "2017",
    title: "ISO Certified",
    description:
      "Achieved internationally recognized quality, environmental, and occupational safety certifications, reinforcing commitment to excellence.",
    image: "/assets/images/timeline/iso.jpg",
    milestone: true,
  },

  {
    id: 5,
    year: "2020",
    title: "500+ Projects Completed",
    description:
      "Reached the milestone of delivering more than 500 successful projects across commercial, residential, industrial, and infrastructure sectors.",
    image: "/assets/images/timeline/500-projects.jpg",
    milestone: true,
  },

  {
    id: 6,
    year: "2023",
    title: "Sustainability Initiative",
    description:
      "Integrated green building practices, energy-efficient construction methods, and environmentally responsible materials into every major project.",
    image: "/assets/images/timeline/sustainability.jpg",
    milestone: false,
  },

  {
    id: 7,
    year: "2025",
    title: "International Expansion",
    description:
      "Expanded services into new international markets while strengthening strategic partnerships with engineering firms, suppliers, and technology providers.",
    image: "/assets/images/timeline/global.jpg",
    milestone: true,
  },

  {
    id: 8,
    year: "Today",
    title: "Building the Future",
    description:
      "Rakentra Works continues to deliver innovative construction solutions with a focus on quality, safety, sustainability, and client satisfaction.",
    image: "/assets/images/timeline/today.jpg",
    milestone: true,
  },
];

export default timeline;