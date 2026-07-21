export interface ClientReview {
  author: string;
  role: string;
  comment: string;
  rating: number;
}

export interface ProjectTimelineStep {
  date: string;
  event: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'commercial' | 'infrastructure' | 'industrial' | 'residential';
  status: 'completed' | 'ongoing';
  location: string;
  coordinates: {
    lat: number;
    lng: number;
    mapX: number; // Percent from left on custom SVG map (0-100)
    mapY: number; // Percent from top on custom SVG map (0-100)
  };
  budget: string;
  duration: string;
  completionDate: string;
  shortDescription: string;
  description: string;
  challenges: string;
  solutions: string;
  beforeImageDescription: string;
  afterImageDescription: string;
  clientReview: ClientReview;
  gallery: string[];
  timelineSteps: ProjectTimelineStep[];
}

export const projectsData: Project[] = [
  {
    id: "torniolinna-tower",
    title: "Torniolinna Corporate Tower",
    category: "commercial",
    status: "completed",
    location: "Helsinki",
    coordinates: { lat: 60.1699, lng: 24.9384, mapX: 47, mapY: 88 },
    budget: "€78,500,000",
    duration: "28 Months",
    completionDate: "October 2025",
    shortDescription: "A 22-storey architectural landmark in Helsinki's business district, achieved LEED Platinum and zero carbon emissions during construction.",
    description: "The Torniolinna Corporate Tower stands as a testament to modern engineering, sustainable design, and Scandinavian simplicity. As a focal point of Helsinki's skyline, this 22-storey skyscraper represents an architectural achievement that is both visually striking and energy-efficient. Our team delivered the project ahead of schedule, incorporating geothermal temperature control loops, structural timber integrations, and a smart double-skin facade that regulates indoor temperatures.",
    challenges: "Excavating a massive three-storey basement foundation directly into solid urban granite without disrupting adjacent historic buildings. Piling operations had to avoid intersecting local metro tunnels, and the project had to maintain progress during the freezing winter of 2024-2025, which saw record snowfall and sub-zero temperatures.",
    solutions: "We deployed low-vibration chemical rock splitting and micro-blasting techniques to carve the basement vaults safely. To proceed through winter, we erected a modular heated shelter over the core and heated our concrete aggregate mixes dynamically. We utilized real-time seismic sensors along adjacent properties to monitor and limit vibration frequencies to under 1.5mm/s.",
    beforeImageDescription: "An old industrial parking lot with cracked asphalt and outdated storage warehouses in the central dock district.",
    afterImageDescription: "A soaring 22-storey glass-and-steel skyscraper featuring sharp straight lines, integrated solar canopies, and a landscaped public park at its base.",
    clientReview: {
      author: "Mikael Lindqvist",
      role: "VP of Development, Nordia Property Group",
      comment: "Rakentra proved to be a highly trustworthy partner. Their commitment to engineering excellence was evident when they managed rock excavations under 2 millimeters of tolerance from active subway lines.",
      rating: 5
    },
    gallery: [
      "Urban tower facade showing double-glazed curtain walls",
      "Spacious geothermal energy control center in the lower basement",
      "Triple-height timber lobby featuring native Finnish pine paneling"
    ],
    timelineSteps: [
      { date: "June 2023", event: "Geotechnical survey and granite micro-blasting begun" },
      { date: "December 2023", event: "Concrete core foundation completed below grade" },
      { date: "August 2024", event: "Structural steel framing topped out at 22 storeys" },
      { date: "April 2025", event: "Thermal envelope, triple-glazing, and solar cladding completed" },
      { date: "October 2025", event: "Final systems commissioning, RALA inspection, and client hand-over" }
    ]
  },
  {
    id: "oulu-river-bridge",
    title: "Oulu River Cable-Stayed Bridge",
    category: "infrastructure",
    status: "completed",
    location: "Oulu",
    coordinates: { lat: 65.0124, lng: 25.4682, mapX: 49, mapY: 53 },
    budget: "€42,000,000",
    duration: "24 Months",
    completionDate: "August 2024",
    shortDescription: "A steel-concrete composite cable-stayed bridge spanning the Oulu River, carrying four highway lanes and dual pedestrian paths.",
    description: "Designed to improve logistics and traffic flow in northern Finland, the Oulu River Bridge is a masterpiece of infrastructural engineering. The structure incorporates weathering steel beams and high-durability concrete designed to resist freezing river currents and salt abrasion. The bridge deck is suspended from a single 85-meter concrete pylon by high-tensile steel cables, maintaining a wide clearances for marine traffic.",
    challenges: "Pouring concrete bridge foundations directly into the riverbed during spring melt runoff, when water volumes and flow velocities increase by 300%. The bridge pylon also required absolute vertical alignment despite strong crosswinds off the Gulf of Bothnia.",
    solutions: "We constructed temporary watertight steel cofferdams and utilized continuous underwater tremie concrete pouring. Our alignment engineers monitored the pylon using automated GPS receivers and laser leveling transceivers, correcting for wind-load deflections in real-time before tensioning the stay cables.",
    beforeImageDescription: "A bottlenecked two-lane bridge built in the 1960s with structural concrete spalling and frequent winter gridlocks.",
    afterImageDescription: "An elegant, single-pylon cable-stayed bridge with minimalist straight lines, glowing under subtle LED structural lighting at night.",
    clientReview: {
      author: "Kaisa Hakala",
      role: "Director of Infrastructure, Northern Ostrobothnia Transport Division",
      comment: "Rakentra's engineering precision was remarkable. The cofferdam installation and underwater concrete pouring were executed flawlessly without impacting local salmon migration.",
      rating: 5
    },
    gallery: [
      "Aerial view of the bridge crossing the Oulu River",
      "Pylon cable anchor detail displaying heavy weathering steel castings",
      "Illuminated pedestrian walkway featuring high-contrast safety rails"
    ],
    timelineSteps: [
      { date: "September 2022", event: "Watertight cofferdam construction and river piling" },
      { date: "March 2023", event: "Underwater pouring of structural piers completed" },
      { date: "November 2023", event: "85-meter central concrete pylon casting finished" },
      { date: "May 2024", event: "Stay-cables tensioned and steel-concrete deck segments launched" },
      { date: "August 2024", event: "Asphalt wearing course laid and bridge opened to traffic" }
    ]
  },
  {
    id: "vantaa-logistics-gateway",
    title: "Vantaa Logistics Gateway",
    category: "industrial",
    status: "completed",
    location: "Vantaa",
    coordinates: { lat: 60.2934, lng: 25.0378, mapX: 49, mapY: 86 },
    budget: "€54,000,000",
    duration: "18 Months",
    completionDate: "February 2026",
    shortDescription: "A state-of-the-art 35,000 sqm automated logistics warehouse featuring high-flatness concrete floors and geothermal district integrations.",
    description: "Designed for rapid distribution and automated logistics, this massive industrial facility features a completely column-free layout in its main sorting area. The project's highlight is its monolithic, jointless concrete slab floor, engineered to accommodate high-mast automated forklifts and complex robotic racking structures.",
    challenges: "The client specified a concrete floor flatness limit exceeding TR-34 Class 1 standards (less than 1.5mm deviation over any 3-meter span). Standard pouring methods would create joints that wear down forklift wheels and disrupt laser-guided autonomous navigation bots.",
    solutions: "We deployed advanced Somero laser screed machines for continuous monolithic concrete pouring. We utilized steel-fiber reinforcement in place of traditional rebar grids, allowing us to eliminate control joints. We poured segments up to 2,000 square meters in a single continuous operation, finishing with vacuum-dewatering and ride-on power trowels.",
    beforeImageDescription: "An undeveloped marshy clay field with high groundwater table and poor soil stability.",
    afterImageDescription: "A massive, clean-lined industrial complex with multi-door loading docks, solar arrays, and high-frequency logistics truck lanes.",
    clientReview: {
      author: "Antti Virtanen",
      role: "Logistics Director, Fennica Logistics Group",
      comment: "Our autonomous sorting robots require perfectly flat floors to navigate safely at speed. Rakentra delivered a jointless concrete floor that is a work of engineering art.",
      rating: 5
    },
    gallery: [
      "Wide angle view of the automated racking aisles",
      "Somero laser screed finishing a monolithic concrete bay",
      "Array of 12 automated loading docks equipped with inflatable seals"
    ],
    timelineSteps: [
      { date: "August 2024", event: "Soil stabilization and installation of 1,200 cement columns" },
      { date: "December 2024", event: "Pouring of monolithic concrete slabs under protective enclosures" },
      { date: "June 2025", event: "Erection of 120-meter clear span structural steel trusses" },
      { date: "November 2025", event: "Installation of automated HVAC and sprinkler piping networks" },
      { date: "February 2026", event: "Floor flatness certification and facility handover" }
    ]
  },
  {
    id: "katajanokka-timber-heights",
    title: "Katajanokka Timber Heights",
    category: "residential",
    status: "completed",
    location: "Helsinki",
    coordinates: { lat: 60.1685, lng: 24.9650, mapX: 48, mapY: 89 },
    budget: "€31,200,000",
    duration: "20 Months",
    completionDate: "May 2025",
    shortDescription: "An 8-storey sustainable residential complex constructed primarily of Cross-Laminated Timber (CLT), serving as a carbon sink.",
    description: "Katajanokka Timber Heights represents the cutting edge of green residential architecture. Built from certified Finnish timber, the 8-storey apartment block sequesters carbon for its entire lifecycle. The building integrates geothermal heating, smart thermostats, mechanical ventilation with heat recovery, and a beautiful rooftop community sauna overlooking the Baltic Sea.",
    challenges: "Protecting the exposed wooden CLT columns and floor panels from rain and moisture during assembly. Wood absorption would lead to swelling and compromise structural tolerances. The urban site also had zero space for material staging.",
    solutions: "We erected a massive, weather-proof temporary scaffolding tent (sääsuoja) that enclosed the entire building footprint. We scheduled just-in-time delivery of CLT panels from the mill directly to the site cranes, lifting panels from the flatbed trucks straight under the protective cover.",
    beforeImageDescription: "A vacant lot in a historic harbor district, surrounded by brick warehouses and stone paving.",
    afterImageDescription: "An elegant, warm timber facade residential building that harmonizes with the surrounding historic structures.",
    clientReview: {
      author: "Elina Korhonen",
      role: "Board Member, Katajanokka Housing Cooperative",
      comment: "Living in a timber building is a unique experience. The indoor air quality is superb, soundproofing between apartments is excellent, and our energy bills are 40% lower than standard buildings.",
      rating: 5
    },
    gallery: [
      "View of the warm timber facade facing the harbor",
      "Interior CLT wall detailing in a typical double-bedroom apartment",
      "Rooftop community sauna with panoramic sea views"
    ],
    timelineSteps: [
      { date: "September 2023", event: "Drilling of 8 geothermal wells and foundation pouring" },
      { date: "January 2024", event: "Installation of the all-weather scaffolding tent" },
      { date: "June 2024", event: "Rapid assembly of CLT panels (1 floor per week)" },
      { date: "December 2024", event: "Removal of the weather tent and facade cladding" },
      { date: "May 2025", event: "Interior timber finishes, sauna installations, and handover" }
    ]
  },
  {
    id: "tampere-infra-loop",
    title: "Tampere Light Rail Substructure",
    category: "infrastructure",
    status: "ongoing",
    location: "Tampere",
    coordinates: { lat: 61.4978, lng: 23.7610, mapX: 45, mapY: 82 },
    budget: "€89,000,000",
    duration: "36 Months",
    completionDate: "October 2027",
    shortDescription: "Construction of the urban light rail foundation, utility tunnels, and concrete guide bridges through central Tampere.",
    description: "Part of Tampere's major carbon-neutral public transit initiative, this project involves laying the structural foundation for the light rail network. The route crosses difficult soft clay beds and busy urban avenues, requiring extensive geotechnical stabilization and utility relocations.",
    challenges: "Stabilizing deep, high-moisture clay soil beds next to historic brick factories without causing settlement or cracked walls in neighboring structures. We also have to coordinate excavations with a complex grid of 100-year-old municipal water, gas, and electrical lines.",
    solutions: "We are using lime-cement dry soil mixing to create stable underground columns, combined with sheet-piling walls to retain excavation trenches. We utilized ground-penetrating radar (GPR) to map all existing pipes and cables before digging, and installed automated laser sensors to monitor historic buildings for any micro-movements.",
    beforeImageDescription: "A congested city street with multiple bus lanes, cracked pavements, and aging water mains.",
    afterImageDescription: "A modern urban corridor with green track beds (grass-grown rail foundations) and sleek concrete platforms.",
    clientReview: {
      author: "Juhani Koskinen",
      role: "Project Manager, Tampere Tramway Alliance",
      comment: "Rakentra's team has integrated seamlessly into our multi-contractor alliance. Their geotechnical expertise in clay stabilization has kept this phase of the light rail expansion on track.",
      rating: 4
    },
    gallery: [
      "Lime-cement soil mixing rig operating in central Tampere",
      "Steel sheet-pile walls supporting utility diversion trenches",
      "Completed segment of the concrete light rail deck"
    ],
    timelineSteps: [
      { date: "April 2025", event: "GPR utility mapping and traffic diversions established" },
      { date: "September 2025", event: "Clay stabilization and sheet-pile installations begun" },
      { date: "February 2026", event: "High-density concrete foundation track slab pouring (Ongoing)" }
    ]
  }
];
