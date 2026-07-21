export interface Statistic {
  id: number;
  value: string;
  label: string;
  description: string;
}

export const statistics: Statistic[] = [
  {
    id: 1,
    value: "18+",
    label: "Years of Excellence",
    description:
      "Delivering premium commercial, residential and industrial construction across Finland.",
  },
  {
    id: 2,
    value: "650+",
    label: "Projects Completed",
    description:
      "Successfully completed projects with uncompromising quality and engineering precision.",
  },
  {
    id: 3,
    value: "320+",
    label: "Construction Professionals",
    description:
      "Experienced engineers, architects, project managers and skilled craftsmen.",
  },
  {
    id: 4,
    value: "98%",
    label: "Client Satisfaction",
    description:
      "Long-term relationships built through transparency, quality and timely delivery.",
  },
  {
    id: 5,
    value: "120M€",
    label: "Annual Project Value",
    description:
      "Managing complex projects ranging from public infrastructure to private developments.",
  },
  {
    id: 6,
    value: "0",
    label: "Compromise on Safety",
    description:
      "Safety-first culture supported by continuous training and strict operational standards.",
  },
];

export default statistics;