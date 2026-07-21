export interface BlogPost {
  id: string;
  title: string;
  category: 'industry-news' | 'technology' | 'green-construction' | 'project-stories' | 'safety' | 'engineering';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    id: "carbon-neutral-clt-building",
    title: "The Future of Wood: Building with Cross-Laminated Timber (CLT) in Finland",
    category: "green-construction",
    date: "May 12, 2026",
    author: "Elina Korhonen, Sustainability Lead",
    readTime: "6 Min Read",
    summary: "How wooden architecture is revolutionizing urban residential projects, acting as carbon sinks, and meeting fire and moisture safety standards in cold climates.",
    content: "Finland is covered in forests, and wood has been our primary construction material for centuries. However, building tall residential structures with timber was historically limited. With the advent of Cross-Laminated Timber (CLT), we can now build up to 8 storeys and beyond, combining structural strength with carbon capture. CLT panels are composed of layers of timber glued at right angles, providing load-bearing capabilities that rival concrete. When integrated into residential buildings, CLT stores carbon for decades. At Rakentra, we protect wood elements during construction using complete weather-protection tents (sääsuoja), ensuring structural durability. Combined with advanced fire-retardant coatings and dry-installation sequences, timber represents the future of sustainable Nordic building."
  },
  {
    id: "laser-screed-flatness",
    title: "Engineering the Flat: Monolithic Concrete Slabs for Automated Warehouses",
    category: "technology",
    date: "March 18, 2026",
    author: "Antti Virtanen, Concrete Superintendent",
    readTime: "8 Min Read",
    summary: "A technical dive into achieving sub-millimeter floor flatness tolerances (TR-34 compliance) for automated logistics systems utilizing laser screed operations.",
    content: "Automated logistics yards rely on self-driving robots (AGVs) and high-mast forklifts that navigate without manual correction. For these systems to run smoothly, floor flatness is critical. Even a tiny bump can tilt a high mast and hit racking units. To solve this, Rakentra utilizes continuous monolithic pouring. Instead of pouring small squares with joints, we pour large bays up to 2,000 square meters. We deploy Somero laser-guided screed machines that level concrete dynamically based on laser transceivers. We mix steel-fiber additives directly into the concrete, eliminating the need for joint cuts. The result is a smooth, wear-resistant concrete slab that satisfies the strict TR-34 Class 1 standard, enabling 24/7 automated warehouse operations."
  },
  {
    id: "zero-accident-culture-finland",
    title: "Zero is Possible: Our Safety Philosophy and Weekly TR-Mittaus Audits",
    category: "safety",
    date: "January 22, 2026",
    author: "Juhani Koskinen, HSE Director",
    readTime: "5 Min Read",
    summary: "How Rakentra utilizes daily digital safety updates and strict TR safety metrics on site to achieve a zero-accident record in heavy infrastructure projects.",
    content: "Safety is not an afterthought; it is our primary engineering criteria. In Finland, site safety is audited weekly using the standardized TR-mittaus method, which evaluates safety barriers, electrical safety, scaffolding, orderliness, and equipment safety on a percentage scale. Rakentra target is a score above 95% on all sites. To achieve this, we hold daily site stand-up meetings to review risks. We have equipped our technicians with passive back exoskeletons to reduce lifting strain and retrofitted machinery with radar proximity alarms. By fostering a proactive safety culture where every technician can report issues immediately, we prove that a zero-accident project is not just a target, but a reality."
  },
  {
    id: "keha-iii-expressway-rehab",
    title: "Chronicles of the Kehä III Expressway Expansion: Scheduling in High Traffic",
    category: "project-stories",
    date: "November 14, 2025",
    author: "Kaisa Hakala, Infrastructure Engineer",
    readTime: "7 Min Read",
    summary: "How our infrastructure team widened a major traffic corridor in Helsinki under tight schedules, utilizing prefabricated bridges and nighttime traffic diversions.",
    content: "Widening the Kehä III expressway—one of Finland's busiest transport corridors—required balancing heavy construction works with active vehicle flows. To minimize traffic congestion, our team scheduled bridge launches and highway crossings exclusively during low-volume night hours. We deployed precast concrete bridge beams that were manufactured offsite and lifted into place using massive cranes in under six hours. Utilizing Trimble 3D machine control, our excavation fleets graded the road expansions with sub-centimeter accuracy, reducing the construction timeline by 20% and avoiding major disruptions for commuters."
  }
];
export const blogCategories = [
  { id: "all", name: "All Articles" },
  { id: "industry-news", name: "Industry News" },
  { id: "technology", name: "Technology & BIM" },
  { id: "green-construction", name: "Green & Sustainability" },
  { id: "project-stories", name: "Project Chronicles" },
  { id: "safety", name: "Safety & HSE" },
  { id: "engineering", name: "Engineering Excellence" }
];
export const newsletterData = {
  headline: "Stay Informed on Finnish Engineering",
  description: "Receive monthly technical insights, case studies, environmental updates, and careers notifications from the Rakentra team."
};
