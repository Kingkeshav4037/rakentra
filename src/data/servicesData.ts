export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  overview: string;
  whoItIsFor: string;
  keyFeatures: string[];
  process: ServiceProcess[];
  industriesServed: string[];
  technologiesUsed: string[];
  benefits: string[];
  projectExamples: string[];
  safetyStandards: string[];
  equipmentUsed: string[];
  faqs: ServiceFAQ[];
  ctaText: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "commercial",
    title: "Commercial Construction",
    slug: "commercial",
    shortDescription: "High-performance office complexes, shopping centers, and public facilities engineered for modern corporate requirements and built with strict RALA quality certifications.",
    overview: "Rakentra stands at the forefront of commercial building construction in Finland, delivering complex structural assets that blend modern aesthetics with absolute structural efficiency. Our commercial portfolio ranges from high-rise corporate headquarters and regional retail hubs to state-of-the-art administrative facilities and multi-purpose civic complexes. We operate with a fundamental belief that a commercial asset must be a high-performance engine for our clients. Consequently, we integrate lifecycle efficiency, energy conservation, and flexible workspace plans into our structural engineering from day one. Every commercial build we execute represents a close collaboration between developers, structural architects, municipal planning boards, and our master builders, ensuring that timelines are met despite challenging sub-zero Nordic winters. We leverage high-density precast concrete columns, premium insulated steel frame spans, and energy-optimized triple-glazed timber-clad glass facades to achieve insulation metrics that surpass national regulations. Furthermore, our commercial division utilizes advanced BIM (Building Information Modeling) level-3 coordination to identify design clashes before a single metric ton of steel is cast, ensuring seamless site execution and zero downtime.",
    whoItIsFor: "Institutional property developers, municipal governments, corporate owner-occupiers, and investment firms seeking premium real estate assets across the Nordic region.",
    keyFeatures: [
      "Clash-free BIM Level 3 project modeling and lifecycle simulations",
      "Thermally insulated triple-glazed curtain walls designed for Arctic performance",
      "Modular interior layouts offering flexible office configuration scaling",
      "Energy class A compliance featuring geothermal heat exchange integration",
      "Acoustic isolation chambers and structural soundproofing built to national standards"
    ],
    process: [
      {
        step: 1,
        title: "Feasibility & Pre-Construction Modeling",
        description: "Comprehensive site surveys, geothermal testing, and detailed BIM level-3 structural modeling. We map the site constraints, underground utilities, and model local weather patterns to optimize thermal capture and natural lighting angles."
      },
      {
        step: 2,
        title: "Foundation & Substructure Engineering",
        description: "Excavation, piling through bedrock, and pouring high-durability frost-resistant concrete foundations. We integrate heavy-duty subterranean drainage and structural waterproofing systems designed for high spring melt volumes."
      },
      {
        step: 3,
        title: "Framework & Core Structural Assembly",
        description: "Erecting the load-bearing skeleton using high-tensile structural steel frames and precast concrete hollowcore slabs. This phase requires extreme precision, aligning laser-guided crane operations to tolerance margins under 2 millimeters."
      },
      {
        step: 4,
        title: "Envelope & Facade Insulation",
        description: "Installation of the thermal envelope. High-performance insulated sandwich panels, high-spec triple-glazed fenestration, and green-roof vegetation trays are fitted to create an airtight structural barrier."
      },
      {
        step: 5,
        title: "Building Services & Lifecycle Finishes",
        description: "Integration of smart building automation systems, HVAC heat recovery loops, and clean energy systems (solar arrays/geothermal pumps), followed by Scandinavian-grade interior finishing."
      }
    ],
    industriesServed: [
      "Corporate Real Estate & Office Parks",
      "Retail, Shopping Malls, and Hospitality Sites",
      "Public Administration & Civic Spaces",
      "Education, Research Facilities, and Laboratories"
    ],
    technologiesUsed: [
      "BIM Level 3 (Autodesk Revit & Tekla Structures)",
      "Digital Twin Asset Monitoring Systems",
      "Acoustic Decibel Modeling & Sound Simulations",
      "Geothermal Loop Temperature Analysis Software"
    ],
    benefits: [
      "Reduced operating costs through certified Class A Energy efficiency.",
      "Accelerated commercial occupancy times via precast modular assembly.",
      "High asset valuation driven by prestigious environmental certifications (LEED Platinum / BREEAM Outstanding).",
      "Maximized space utilization via custom load-bearing column placements."
    ],
    projectExamples: [
      "Torniolinna Corporate Tower, Helsinki (22 storeys, LEED Platinum)",
      "Vantaa Commerce Hub (Retail complex utilizing geothermal heating)",
      "Espoo Innovation Center (Timber-concrete hybrid research facility)"
    ],
    safetyStandards: [
      "Strict zero-accident policy with daily digital safety checkpoints for all onsite technicians.",
      "Mandatory fall-arrest harnesses, structural edge protection barriers, and automated site warning alarms.",
      "Strict compliance with Finnish national occupational safety act Työturvallisuuslaki (738/2002)."
    ],
    equipmentUsed: [
      "Heavy-duty Liebherr luffing jib tower cranes",
      "Putzmeister high-pressure concrete placing booms",
      "Laser-guided concrete screed machines",
      "Airtightness blower door testing systems"
    ],
    faqs: [
      {
        question: "How does Rakentra manage commercial building during severe Finnish winters?",
        answer: "We employ advanced winterization protocols including heated concrete mixes, insulated enclosure tarps, and localized diesel-powered district heating systems. Our scheduling accounts for limited daylight hours by utilizing specialized high-intensity LED light towers, ensuring progress remains constant without sacrificing worker safety."
      },
      {
        question: "What environmental certifications can Rakentra achieve for our commercial project?",
        answer: "Rakentra routinely delivers projects that meet LEED (Leadership in Energy and Environmental Design) Gold and Platinum, as well as BREEAM Outstanding ratings. We handle the entire documentation, tracking of raw materials, and verification process from pre-construction to final audit."
      },
      {
        question: "How flexible are the floor layouts for future corporate tenants?",
        answer: "Our structural engineering prioritizes post-tensioned flat slabs and perimeter load-bearing column grids. This minimizes interior structural walls, giving tenants full flexibility to configure open-plan offices, modular meeting rooms, or individual executive suites as their organizational needs change."
      }
    ],
    ctaText: "Request a Commercial Project Consultation"
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Roads",
    slug: "infrastructure",
    shortDescription: "Bridges, highways, and municipal rail links engineered for high durability under harsh seasonal temperature differentials and heavy load distributions.",
    overview: "Infrastructure forms the skeletal framework of society, and at Rakentra, we engineer that framework to withstand the test of time, geology, and weather. Our civil infrastructure division is specialized in major highway corridors, bridge structures, rail networks, and heavy foundation engineering across Finland. In a climate defined by intense seasonal shifts—where temperatures swing from -30°C in winter to +30°C in summer—roads and bridges face extreme thermal expansion and frost-heave cycles. Rakentra addresses this challenge through advanced materials science and geotechnical engineering. We design asphalt-aggregate mixes with custom bitumen polymers that maintain elasticity under freezing temperatures and resist tracking during summer heat. Our bridge engineering leverages post-tensioned cast-in-place concrete structures and weathering steel configurations that reduce long-term maintenance overhead. We work in close compliance with Väylävirasto (the Finnish Transport Infrastructure Agency), ensuring that every bridge and highway meets stringent national safety, load-bearing, and environmental guidelines. By deploying GPS-guided heavy excavators and automated grading fleets, we execute earthworks with sub-centimeter precision, optimizing material placement and slashing carbon footprints during high-volume earth-moving operations.",
    whoItIsFor: "National transport authorities, regional municipal unions, civil logistics corporations, and public-private partnership (PPP) consortia.",
    keyFeatures: [
      "Polymetric frost-resistant asphalt compounds optimized for heavy shipping corridors",
      "Post-tensioned concrete and weathering steel bridge spans designed for 100-year lifespans",
      "GPS-guided automated grading and earthmoving fleets for precise grade compliance",
      "Bio-diverse ecological wildlife crossings and migratory underpasses",
      "Sub-surface geo-textile reinforcement layers to prevent frost-heaving and sinkholes"
    ],
    process: [
      {
        step: 1,
        title: "Geotechnical Exploration & Soil Stabilization",
        description: "Drilling core samples, assessing bedrock depth, and evaluating clay stability. We apply lime-cement column stabilization to soft clay soils, creating a solid base capable of supporting high-speed transport networks."
      },
      {
        step: 2,
        title: "Major Earthworks & Hydrological Management",
        description: "Mass excavation and grading using automated 3D-GPS guided fleets. We construct structural embankments and install high-capacity stormwater run-off networks, bypass channels, and sediment basins."
      },
      {
        step: 3,
        title: "Piling & Substructure Abutments",
        description: "Driving heavy steel and concrete piles down to solid bedrock to anchor bridge abutments and piers. All piling operations are monitored with dynamic load-testing sensors."
      },
      {
        step: 4,
        title: "Structural Span Construction & Deck Pouring",
        description: "Erecting precast prestressed concrete girders or launching structural steel spans. Bridge decks are poured in controlled, sequential segments followed by membrane waterproofing."
      },
      {
        step: 5,
        title: "Wearing Course & Safety Infrastructure",
        description: "Laying polymer-modified base and wearing courses of asphalt. We install high-tension safety barriers, low-noise joint seals, LED smart lighting networks, and digital traffic monitoring loops."
      }
    ],
    industriesServed: [
      "State Highway & Expressway Networks",
      "High-speed Rail and Light Transit Links",
      "Municipal Bridge & Viaduct Overpasses",
      "Port & Logistics Yard Heavy Pavement Work"
    ],
    technologiesUsed: [
      "3D Machine Control (Trimble & Leica Geosystems)",
      "Ground Penetrating Radar (GPR) for Sub-surface Imaging",
      "Finite Element Analysis (FEA) for Bridge Structural Modeling",
      "Acoustic Emission Sensors for Structural Integrity Monitoring"
    ],
    benefits: [
      "Significantly extended pavement life cycles, reducing municipal repaving intervals.",
      "Minimized ecological impact through the design of dedicated wildlife corridors.",
      "Accelerated route completion times through high-capacity GPS grading machinery.",
      "Lower operational maintenance costs via weathering steel and self-sealing concrete."
    ],
    projectExamples: [
      "Kehä III Expressway Widening & Interchange (Helsinki region)",
      "Oulu River Cable-Stayed Bridge (Structural steel-concrete composite)",
      "Tampere Light Rail Expansion Substructure (Urban transit corridor)"
    ],
    safetyStandards: [
      "Rigid traffic-control staging with automated impact barriers protecting active workzones.",
      "Vibration monitoring of surrounding structures during heavy pile-driving operations.",
      "Environmental containment barriers ensuring no silt or concrete runoff enters local waterways."
    ],
    equipmentUsed: [
      "GPS-integrated Caterpillar heavy excavators and motor graders",
      "Junttan hydraulic pile-driving rigs",
      "Wirtgen asphalt paving and milling machines",
      "Dynapac heavy vibratory soil compactors"
    ],
    faqs: [
      {
        question: "How does Rakentra prevent frost damage and cracks on highways?",
        answer: "We lay a multi-tiered foundation starting with a specialized non-frost-susceptible sand and gravel sub-base, followed by a crushed bedrock base course and geo-textile grid reinforcement. The final surface uses polymer-modified asphalt binders that remain elastic in freezing temperatures, preventing water penetration and subsequent expansion."
      },
      {
        question: "What is your approach to soil stabilization in soft clay areas?",
        answer: "We utilize lime-cement dry soil mixing. Our heavy mixing rigs inject a dry binder agent deep into the soft clay layers, forming structural lime-cement columns that solidify the ground, increase load-bearing capacity, and eliminate long-term settling risks."
      },
      {
        question: "How do you coordinate construction around active traffic zones?",
        answer: "We develop phased traffic management plans in coordination with transport authorities. Much of our tie-in and bridge launching work is scheduled during low-traffic night hours using rapid-install precast elements to ensure commuter delays are kept to a minimum."
      }
    ],
    ctaText: "Discuss Civil Infrastructure Capabilities"
  },
  {
    id: "industrial",
    title: "Industrial & Warehousing",
    slug: "industrial",
    shortDescription: "Heavy industrial processing plants, cleanrooms, and automated logistics warehouses engineered for massive floor loads and integrated process piping.",
    overview: "Industrial facilities are complex machines wrapped in a building envelope. At Rakentra, we understand that manufacturing plants, food processing facilities, and automated distribution centers require specialized engineering that prioritizes process integration, floor flatness, and massive loading tolerances. Our industrial division designs and constructs facilities that accommodate massive overhead cranes, complex MEP (Mechanical, Electrical, Plumbing) routing, cleanroom climates, and heavy-duty vibrating equipment. A core specialization of Rakentra is the delivery of jointless, high-flatness concrete floors. Using laser screeds and steel-fiber reinforced concrete mixes, we pour monolithic floor slabs that satisfy strict TR-34 flatness standards, crucial for the stable operation of high-bay Automated Storage and Retrieval Systems (ASRS). We design structural frames with massive column-free spans using custom steel truss designs, allowing maximum freedom for assembly lines and internal logistics routing. Our engineering teams work hand-in-hand with our clients' process engineers to pre-integrate foundation pads for heavy machinery, utility trenches for high-pressure gas, specialized wastewater treatment pipelines, and high-capacity electrical substations, ensuring a smooth hand-over and rapid production startup.",
    whoItIsFor: "Manufacturing corporations, third-party logistics (3PL) providers, food processing enterprises, and heavy equipment manufacturers.",
    keyFeatures: [
      "Monolithic jointless concrete floor slabs meeting strict TR-34 flatness limits",
      "Massive column-free bays using custom-engineered structural steel truss assemblies",
      "Dedicated foundation slabs with vibration dampening for heavy stamping and milling machines",
      "Integrated process utility routing including gas, chemical, steam, and compressed air",
      "Explosion-proof hazardous material storage vaults and automated foam suppression systems"
    ],
    process: [
      {
        step: 1,
        title: "Process Integration & Structural Planning",
        description: "Collaborating with client process engineers to map out production flows, heavy equipment load spots, and utility access points. We design custom foundation blocks with integrated vibration-isolation joints."
      },
      {
        step: 2,
        title: "Sub-surface Foundations & Floor Prep",
        description: "Soil compaction and installation of sub-slab utility conduits. We set up laser-guided levelling guides and place dense reinforcement grids combined with steel fiber additives to prevent crack propagation."
      },
      {
        step: 3,
        title: "Monolithic Laser-Screed Pouring",
        description: "Continuous pouring of the concrete floor slab using Somero laser screeds. Slabs are finished with dry-shake floor hardeners to resist heavy forklift abrasion."
      },
      {
        step: 4,
        title: "Steel Truss & Crane Gantry Erection",
        description: "Assembling structural steel columns and long-span roof trusses. We integrate overhead crane runway beams directly into the building's load-bearing structural columns."
      },
      {
        step: 5,
        title: "Process Mechanical & Enclosure Fitting",
        description: "Installing insulated sandwich panels, high-capacity HVAC units, fire curtains, automated loading docks, and routing complex high-voltage and industrial process piping."
      }
    ],
    industriesServed: [
      "Automated High-Bay Logistics & Distribution Centers",
      "Heavy Machinery Manufacturing & Assembly Plants",
      "Food & Beverage Processing Facilities (Hygiene-grade)",
      "High-tech Electronics Cleanrooms & Data Centers"
    ],
    technologiesUsed: [
      "Somero Laser-Screed Floor Levelling Systems",
      "Vibration Analysis & Dampening Structural Modeling",
      "3D MEP Coordination Models (Navisworks)",
      "Epoxy Floor Coating & Hardener Formulations"
    ],
    benefits: [
      "Increased logistics efficiency through high-bay ASRS compatibility.",
      "Reduced maintenance costs via abrasion-resistant, jointless concrete floors.",
      "Seamless machinery installation through precision pre-engineered foundation pads.",
      "Enhanced worker comfort via radiant floor heating and smart ventilation zoning."
    ],
    projectExamples: [
      "Vantaa Logistics Gateway (Automated ASRS warehouse, 35,000 sqm)",
      "Salo Electronics Assembly Plant (Class 100 cleanroom integration)",
      "Oulu Food Processing Center (Stainless steel hygienic layout)"
    ],
    safetyStandards: [
      "Rigid containment of hazardous construction materials and strict hot-work permit controls.",
      "Confined-space entry monitoring systems and heavy ventilation during sub-slab conduit work.",
      "Strict compliance with European ATEX directives for potentially explosive dust/gas environments."
    ],
    equipmentUsed: [
      "Somero S-22E laser screed machines",
      "High-capacity mobile lattice boom cranes",
      "Ride-on concrete power trowels",
      "Laser level measurement systems"
    ],
    faqs: [
      {
        question: "What is a TR-34 concrete floor and why is it important for warehousing?",
        answer: "TR-34 is a technical standard governing the flatness and levelness of concrete floors. In high-bay warehouses, automated forklifts operate at heights up to 15 meters. Even a 1-millimeter deviation at floor level can cause a dangerous lean at the top of a mast, leading to collisions with racking systems. Our laser screeds ensure floors are perfectly flat within strict tolerances."
      },
      {
        question: "How does Rakentra manage vibration isolation for heavy machinery?",
        answer: "We design independent structural foundation blocks separated from the main building floor slab by expansion joints filled with vibration-dampening materials (such as neoprene or specialized cork composites). This isolates the vibrations, preventing them from transferring to sensitive measurement equipment or causing structural fatigue elsewhere."
      },
      {
        question: "Can you construct hygienic facilities for food production?",
        answer: "Yes, our industrial division is trained in constructing clean, hygienic environments. We use coved wall-to-floor junctions, chemical-resistant epoxy coatings, stainless steel drainage channels, and airlock systems that prevent dust contamination, fully complying with European food safety regulations."
      }
    ],
    ctaText: "Discuss Industrial Facility Requirements"
  },
  {
    id: "residential",
    title: "Residential Development",
    slug: "residential",
    shortDescription: "Premium apartment blocks and modern timber-frame residential complexes built with sustainable materials and carbon-neutral lifecycle parameters.",
    overview: "Creating a home requires a balance between architectural beauty, functional comfort, and long-term sustainability. At Rakentra, we develop and build multi-family residential complexes, apartment towers, and sustainable timber-framed housing communities that define modern Nordic living. Our residential philosophy is deeply rooted in Scandinavian simplicity and environmental stewardship. We recognize that residential buildings must be built to last generations while minimizing their carbon footprints during construction and occupancy. To achieve this, we are pioneers in timber hybrid construction (Puukerrostalo), utilizing cross-laminated timber (CLT) panels and glue-laminated structural elements sourced from sustainably managed Finnish forests. These timber systems act as natural carbon sinks, significantly reducing the embodied carbon of the building envelope compared to traditional concrete. For our high-density urban developments, we employ advanced precast concrete designs wrapped in thick, eco-insulated facade systems that achieve exceptional acoustic dampening and thermal retention. We integrate smart home technologies, underfloor hydronic heating, heat-recovery ventilation, and rooftop solar installations as standard features, offering homeowners comfortable living spaces with exceptionally low energy bills and carbon-neutral footprint profiles.",
    whoItIsFor: "Municipal housing corporations, private real estate developers, housing cooperatives, and eco-conscious private investment syndicates.",
    keyFeatures: [
      "Sustainable Cross-Laminated Timber (CLT) hybrid building envelopes",
      "High-efficiency hydronic floor heating integrated with geothermal district loops",
      "Advanced acoustic isolation walls providing quiet living spaces in busy urban areas",
      "Smart home energy management dashboards and EV charging stations for all residents",
      "Generous shared community facilities including wood-fired saunas and rooftop gardens"
    ],
    process: [
      {
        step: 1,
        title: "Community Design & Energy Modeling",
        description: "Designing residential layouts that maximize natural light and foster community connections. We conduct lifecycle analysis (LCA) to model the carbon footprint of structural material choices."
      },
      {
        step: 2,
        title: "Site Prep & Geothermal Drilling",
        description: "Preparing the site and drilling geothermal boreholes (typically 300 meters deep) to establish the sustainable heating source for the entire development."
      },
      {
        step: 3,
        title: "Prefabricated Panel & Core Assembly",
        description: "Assembling the building core. Using prefabricated CLT panels or concrete wall units manufactured offsite in controlled conditions, we erect the structure rapidly and dryly."
      },
      {
        step: 4,
        title: "Interior Fitting & Acoustic Sealing",
        description: "Installing insulation, double-drywall acoustic partitions, triple-glazed windows, and sealing all joints to ensure an airtight building envelope."
      },
      {
        step: 5,
        title: "Finishes, Commissioning & Handover",
        description: "Fitting premium wood floorings, Finnish sauna panels, energy-efficient kitchens, commissioning smart home meters, and organizing resident inspections."
      }
    ],
    industriesServed: [
      "Urban High-density Apartment Complexes",
      "Suburban Sustainable Timber Communities",
      "Student & Senior Assisted Living Facilities",
      "Mixed-Use Residential-Commercial Blocks"
    ],
    technologiesUsed: [
      "Cross-Laminated Timber (CLT) Structural Engineering",
      "Underfloor Hydronic Heating & Cooling Systems",
      "Decentralized Mechanical Ventilation with Heat Recovery (MVHR)",
      "Smart Home Automation & Sub-metering Platforms"
    ],
    benefits: [
      "Significant reduction in carbon footprint via renewable CLT timber frameworks.",
      "Low heating and utility bills achieved through geothermal and insulation systems.",
      "High resident retention driven by excellent indoor air quality and acoustic privacy.",
      "Fast construction timelines with offsite prefabricated component assembly."
    ],
    projectExamples: [
      "Katajanokka Timber Heights, Helsinki (8-storey CLT apartment block)",
      "Tampere Eco-Village (Carbon-neutral community utilizing solar and geothermal energy)",
      "Espoo Marina Apartments (Waterfront concrete precast tower with premium finishes)"
    ],
    safetyStandards: [
      "Strict moisture-control protocols (Sääsuoja) using full-overhead scaffolding tents during assembly.",
      "Fire safety engineering with advanced fire retardant wood coatings and automatic sprinkler grids.",
      "Strict compliance with Finnish building code guidelines (Suomen rakentamismääräyskokoelma)."
    ],
    equipmentUsed: [
      "Mobile tower cranes for panel erection",
      "All-weather overhead scaffolding tent structures",
      "Thermal imaging and air infiltration testing equipment",
      "Laser leveling systems for flooring installation"
    ],
    faqs: [
      {
        question: "What is Cross-Laminated Timber (CLT) and is it safe against fire?",
        answer: "CLT consists of layers of solid wood glued together at right angles, creating massive structural panels. In a fire, the outer layer of a thick CLT panel chars, forming a natural protective barrier that slows down combustion and maintains structural integrity longer than steel. We supplement this with automatic sprinkler systems and fire-rated gypsum board overlays."
      },
      {
        question: "How does Rakentra protect wooden elements from moisture during construction?",
        answer: "We use a complete 'sääsuoja' (weather protection tent) over the entire building structure during construction. This massive temporary roof tent keeps rain and snow off the CLT elements until the building envelope is fully sealed and clad, preventing mold and wood expansion."
      },
      {
        question: "What heating system is used in your residential projects?",
        answer: "We integrate centralized geothermal heat pumps connected to underfloor hydronic heating loops. In summer, the system can reverse to provide gentle, draft-free floor cooling (maakylmä), utilizing the natural cool temperatures of the earth at very low energy costs."
      }
    ],
    ctaText: "Discuss Residential Development Opportunities"
  }
];
