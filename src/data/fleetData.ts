export interface FleetItem {
  id: string;
  name: string;
  model: string;
  category: 'earthmoving' | 'cranes' | 'concrete' | 'road' | 'digital' | 'safety';
  specifications: Record<string, string>;
  description: string;
  fuelType: 'Electric' | 'Hybrid' | 'Stage V Diesel' | 'N/A';
  maintenanceInterval: string;
  role: string;
}

export const fleetData: FleetItem[] = [
  {
    id: "cat-330",
    name: "Heavy-Duty Crawler Excavator",
    model: "Caterpillar 330 Next Gen",
    category: "earthmoving",
    role: "High-volume excavation and trenching",
    specifications: {
      "Operating Weight": "30,900 kg",
      "Engine Power": "204 kW (273 hp)",
      "Max Digging Depth": "7.24 meters",
      "Bucket Capacity": "1.8 m³"
    },
    description: "Equipped with factory-integrated 2D grade control systems, payload weighing tech, and an ultra-efficient hydraulic system. Runs on low-emission Stage V diesel.",
    fuelType: "Stage V Diesel",
    maintenanceInterval: "500 Operating Hours"
  },
  {
    id: "liebherr-172-ec",
    name: "Luffing Jib Tower Crane",
    model: "Liebherr 172 EC-B 8 Litronic",
    category: "cranes",
    role: "Urban commercial and high-rise material lifts",
    specifications: {
      "Max Lifting Capacity": "8,000 kg",
      "Max Jib Radius": "60.0 meters",
      "Capacity at Max Jib": "1,800 kg",
      "Hook Height": "Self-climbing up to 120m"
    },
    description: "An electric-drive tower crane with intelligent load monitoring. Ideal for tight urban environments where precise, low-noise operations are required.",
    fuelType: "Electric",
    maintenanceInterval: "12 Months / Standard Inspection"
  },
  {
    id: "putzmeister-bsf38",
    name: "Truck-Mounted Concrete Boom Pump",
    model: "Putzmeister BSF 38-5",
    category: "concrete",
    role: "High-volume structural concrete placement",
    specifications: {
      "Vertical Reach": "37.6 meters",
      "Horizontal Reach": "33.6 meters",
      "Max Concrete Output": "160 m³/h",
      "Delivery Line Diameter": "125 mm"
    },
    description: "Features a 5-arm folding boom configuration for maximum flexibility in low-clearance areas. Equipped with Ergonic Boom Control (EBC) for smooth vibration-dampened movements.",
    fuelType: "Stage V Diesel",
    maintenanceInterval: "250 Operating Hours"
  },
  {
    id: "somero-s22e",
    name: "Laser-Guided Concrete Screed",
    model: "Somero S-22E Laser Screed",
    category: "concrete",
    role: "Monolithic, high-flatness concrete floor finishing",
    specifications: {
      "Screed Head Width": "3.7 meters",
      "Telescopic Boom Reach": "6.0 meters",
      "Coverage Capacity": "465 m²/hour",
      "Levelling System": "3D Profiler Laser System"
    },
    description: "The gold standard for achieving flat, jointless industrial concrete floors. Uses continuous laser receiver checks to achieve sub-millimeter level flatness.",
    fuelType: "Stage V Diesel",
    maintenanceInterval: "200 Operating Hours"
  },
  {
    id: "wirtgen-w210i",
    name: "Cold Milling Road Recycler",
    model: "Wirtgen W 210 Fi",
    category: "road",
    role: "Asphalt pavement removal and reclamation",
    specifications: {
      "Milling Width": "2,000 mm",
      "Milling Depth": "0 to 330 mm",
      "Engine Power": "563 kW (755 hp)",
      "Operating Weight": "29,800 kg"
    },
    description: "High-performance milling machine designed for rapid road rehabilitation. Integrates intelligent milling assistant tech to optimize fuel consumption and bit wear.",
    fuelType: "Stage V Diesel",
    maintenanceInterval: "250 Operating Hours"
  },
  {
    id: "trimble-3d-system",
    name: "3D Machine Control System",
    model: "Trimble GCS900 Grade Control",
    category: "digital",
    role: "Automatic blade and bucket guidance",
    specifications: {
      "Positioning Accuracy": "± 10 mm",
      "Sensors Integrated": "Dual GNSS, Angle Sensors, Rotation Sensors",
      "Display Screen": "10-inch rugged touch display",
      "Telematic Link": "Wireless real-time office sync"
    },
    description: "Retrofitted onto Rakentra's earthmoving fleet. This system inputs BIM profiles directly into excavators and graders, guiding hydraulics automatically for grade-perfect cuts.",
    fuelType: "N/A",
    maintenanceInterval: "Software update every 6 months"
  },
  {
    id: "exoskeleton-back",
    name: "Ergonomic Back Support Exoskeleton",
    model: "Huniu Exo-Back-Pro V2",
    category: "safety",
    role: "Heavy lifting support for concrete and rebar workers",
    specifications: {
      "Load Assistance": "Up to 25 kg relief",
      "Weight of Device": "2.8 kg",
      "Adjustability": "Fully adjustable spine/thigh harnesses",
      "Battery Life": "Passive spring-assisted (No battery)"
    },
    description: "A lightweight passive exoskeleton deployed to site workers to reduce lumbar fatigue and prevent spinal strain during manual material handling tasks.",
    fuelType: "N/A",
    maintenanceInterval: "Weekly fabric and hinge wash/check"
  }
];
export const maintenanceProcess = {
  overview: "At Rakentra, our Zero Accident policy and engineering standards are powered by our predictive maintenance workflow. Rather than waiting for machine downtime, we track machinery statistics in real-time.",
  steps: [
    { title: "Telematics Monitoring", desc: "Every excavator, crane, and roller streams fuel, vibration, temperature, and operating hours data to our central asset management console." },
    { title: "Predictive Diagnostics", desc: "When telemetry shows abnormal vibrations or temperature spikes, our maintenance software alerts technicians before mechanical failure occurs." },
    { title: "Authorized Service", desc: "Servicing is executed at our central depots in Vantaa and Oulu using original components and documented in our digital logs." }
  ]
};
export const fleetSafetyStandards = [
  "All equipment undergoes certified safety checks before arriving at any project site.",
  "Excavators and cranes are retrofitted with 360-degree cameras and radar proximity alarms.",
  "Lifting equipment is subjected to annual load and cable inspections by licensed third-party inspectors.",
  "Equipment operators must complete specialized certification training for every machine model."
];
