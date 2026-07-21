import React, { useState } from 'react';
import { MapPin, Building, Briefcase } from 'lucide-react';
import './MapContainer.css';

interface MapNode {
  id: string;
  name: string;
  type: 'office' | 'project' | 'both';
  x: number; // Percentage from left of SVG container
  y: number; // Percentage from top of SVG container
  projectsCount: number;
  description: string;
  address?: string;
  featuredProject?: string;
}

const locations: MapNode[] = [
  {
    id: "helsinki",
    name: "Helsinki (Headquarters)",
    type: "both",
    x: 48,
    y: 88,
    projectsCount: 2,
    address: "Mannerheimintie 12A, 00100 Helsinki",
    description: " Rakentra Central Office. Engineering design center, BIM coordination hub, and leadership headquarters.",
    featuredProject: "Torniolinna Corporate Tower"
  },
  {
    id: "tampere",
    name: "Tampere Operations",
    type: "both",
    x: 45,
    y: 82,
    projectsCount: 1,
    address: "Hatanpään valtatie 18, 33100 Tampere",
    description: "Regional office managing heavy infrastructure and structural concrete piling hubs for Western Finland.",
    featuredProject: "Tampere Light Rail Expansion"
  },
  {
    id: "oulu",
    name: "Oulu Northern Operations",
    type: "both",
    x: 49,
    y: 53,
    projectsCount: 1,
    address: "Kirkkokatu 14, 90100 Oulu",
    description: "Nordic climate testing depot and heavy civil works equipment base for Northern Finland.",
    featuredProject: "Oulu River Cable-Stayed Bridge"
  },
  {
    id: "vantaa",
    name: "Vantaa Logistics Depot",
    type: "project",
    x: 49,
    y: 86,
    projectsCount: 1,
    address: "Kehä III Junction, 01510 Vantaa",
    description: "Heavy machinery depot, main equipment maintenance workshop, and steel prefabrication yard.",
    featuredProject: "Vantaa Logistics Gateway"
  }
];

export const MapContainer: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(locations[0]);

  return (
    <div className="map-section-container">
      <div className="map-grid">
        
        {/* Interactive SVG Canvas */}
        <div className="map-canvas-wrapper" aria-label="Interactive Map of Finland">
          <svg
            className="finland-svg"
            viewBox="0 0 400 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Minimal abstract outline of Finland */}
            <path
              className="finland-outline"
              d="M 180,680 
                 C 160,670 140,650 140,630 
                 C 140,610 150,600 160,590 
                 C 170,580 180,560 170,540 
                 C 160,520 150,510 160,490 
                 C 170,470 190,460 200,430 
                 C 210,400 200,380 200,350 
                 C 200,320 210,300 220,280 
                 C 230,260 220,230 210,210 
                 C 200,190 190,170 180,140 
                 C 170,110 160,80 160,60 
                 C 160,40 180,30 200,30 
                 C 220,30 230,40 240,60 
                 C 250,80 240,110 230,140 
                 C 220,170 230,190 240,210 
                 C 250,230 260,260 250,280 
                 C 240,300 250,320 250,350 
                 C 250,380 260,400 270,430 
                 C 280,460 290,480 300,510 
                 C 310,540 300,560 280,580 
                 C 260,600 240,620 230,640 
                 C 220,660 200,680 180,680 Z"
            />
            
            {/* Grid references for engineering aesthetic */}
            <line x1="50" y1="0" x2="50" y2="700" className="map-grid-line" />
            <line x1="150" y1="0" x2="150" y2="700" className="map-grid-line" />
            <line x1="250" y1="0" x2="250" y2="700" className="map-grid-line" />
            <line x1="350" y1="0" x2="350" y2="700" className="map-grid-line" />
            
            <line x1="0" y1="100" x2="400" y2="100" className="map-grid-line" />
            <line x1="0" y1="300" x2="400" y2="300" className="map-grid-line" />
            <line x1="0" y1="500" x2="400" y2="500" className="map-grid-line" />

            {/* Render City Pins */}
            {locations.map((node) => {
              const svgX = (node.x / 100) * 400;
              const svgY = (node.y / 100) * 700;
              const isSelected = selectedNode?.id === node.id;

              return (
                <g key={node.id} className="map-pin-group">
                  {/* Outer pulse */}
                  <circle
                    cx={svgX}
                    cy={svgY}
                    r={isSelected ? "14" : "10"}
                    className={`map-pulse-circle ${isSelected ? 'active-pulse' : ''}`}
                  />
                  {/* Center Dot */}
                  <circle
                    cx={svgX}
                    cy={svgY}
                    r={isSelected ? "7" : "5"}
                    className={`map-pin-dot ${isSelected ? 'active-dot' : ''}`}
                    onClick={() => setSelectedNode(node)}
                    style={{ cursor: 'pointer' }}
                  />
                </g>
              );
            })}
          </svg>
          <div className="map-scale-legend">
            <span>60° N - 70° N Latitude</span>
            <span>Scale: 1 : 4 500 000</span>
          </div>
        </div>

        {/* Location Information Card */}
        <div className="map-info-panel">
          {selectedNode ? (
            <div className="location-detail-card">
              <span className="badge badge-accent location-type">
                {selectedNode.type === 'both' ? 'Office & Project Hub' : 'Project Facility'}
              </span>
              <h3 className="location-name">{selectedNode.name}</h3>
              {selectedNode.address && (
                <div className="location-address">
                  <MapPin size={16} className="loc-icon" />
                  <span>{selectedNode.address}</span>
                </div>
              )}
              <p className="location-desc">{selectedNode.description}</p>
              
              <div className="location-stats-row">
                <div className="loc-stat-box">
                  <Briefcase size={20} className="loc-stat-icon" />
                  <div>
                    <span className="loc-stat-val">{selectedNode.projectsCount}</span>
                    <span className="loc-stat-lbl">Active Projects</span>
                  </div>
                </div>
                <div className="loc-stat-box">
                  <Building size={20} className="loc-stat-icon" />
                  <div>
                    <span className="loc-stat-val">RALA</span>
                    <span className="loc-stat-lbl">Audited Site</span>
                  </div>
                </div>
              </div>

              {selectedNode.featuredProject && (
                <div className="featured-proj-box">
                  <span className="feat-lbl">Key Regional Reference</span>
                  <span className="feat-val">{selectedNode.featuredProject}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="location-placeholder">
              <p>Select a node on the map to inspect Rakentra's regional offices and project facilities.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MapContainer;
