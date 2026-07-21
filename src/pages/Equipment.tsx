import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, ShieldCheck, Zap, AlertTriangle, 
  ArrowRight, HeartPulse, HardHat, Info 
} from 'lucide-react';
import { fleetData, maintenanceProcess, fleetSafetyStandards } from '../data/fleetData';
import Timeline from '../components/Timeline';
import '../styles/Equipment.css';

export const Equipment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFleet = useMemo(() => {
    if (selectedCategory === 'all') return fleetData;
    return fleetData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="equipment-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      
      {/* 1. Hero Section (Varying Background: Machinery Image with Overlay) */}
      <header className="equipment-hero bg-hero" aria-label="Equipment Fleet Hero">
        <div className="hero-overlay"></div>
        <div className="container equipment-hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">Rakentra Fleet</span>
            <h1 className="hero-title">High-Capacity Equipment & Digital Tech</h1>
            <p className="hero-subtitle">
              We own and maintain our heavy machinery, integrating 3D machine control and low-emission power systems.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Introduction: Fleet Statistics and Category Filters (Varying Background: Solid White) */}
      <section className="fleet-intro-section bg-white section">
        <div className="container intro-flex-equip">
          <div className="intro-text">
            <span className="badge badge-accent">Owner Fleet</span>
            <h2>Our In-House Machinery Advantage</h2>
            <p>
              Unlike firms that rely on third-party rentals, Rakentra owns a premium heavy equipment fleet. This ensures that every excavator, tower crane, and concrete boom pump arriving at your site is maintained to the highest standards, calibrated for 3D BIM, and operated by a certified technician.
            </p>
          </div>

          {/* Quick Categories filter */}
          <div className="fleet-filters-panel">
            <h3>Filter Fleet Category</h3>
            <div className="fleet-filter-buttons">
              <button className={`tab-btn-mini ${selectedCategory === 'all' ? 'active-mini' : ''}`} onClick={() => setSelectedCategory('all')}>All Fleet</button>
              <button className={`tab-btn-mini ${selectedCategory === 'earthmoving' ? 'active-mini' : ''}`} onClick={() => setSelectedCategory('earthmoving')}>Earthmoving</button>
              <button className={`tab-btn-mini ${selectedCategory === 'cranes' ? 'active-mini' : ''}`} onClick={() => setSelectedCategory('cranes')}>Heavy Lifting</button>
              <button className={`tab-btn-mini ${selectedCategory === 'concrete' ? 'active-mini' : ''}`} onClick={() => setSelectedCategory('concrete')}>Concrete</button>
              <button className={`tab-btn-mini ${selectedCategory === 'road' ? 'active-mini' : ''}`} onClick={() => setSelectedCategory('road')}>Road Paving</button>
              <button className={`tab-btn-mini ${selectedCategory === 'digital' ? 'active-mini' : ''}`} onClick={() => setSelectedCategory('digital')}>Digital Tech</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content: Machinery Specification Grid (Varying Background: Light Gray) */}
      <section className="fleet-catalog-section bg-light section">
        <div className="container">
          <div className="section-header-wrapper">
            <span className="badge badge-accent">Specifications</span>
            <h2>Active Machinery Registry</h2>
          </div>

          <div className="grid grid-cols-3 fleet-grid">
            {filteredFleet.map((machine) => (
              <div key={machine.id} className="fleet-card card">
                <div className="fleet-card-header">
                  <div className="fleet-badge-type">{machine.category}</div>
                  <span className={`fuel-badge fuel-${machine.fuelType.toLowerCase().replace(/ /g, '-')}`}>
                    {machine.fuelType}
                  </span>
                </div>
                
                <div className="fleet-card-body">
                  <span className="fleet-model-num">{machine.model}</span>
                  <h3 className="fleet-name-text">{machine.name}</h3>
                  <p className="fleet-role-desc"><strong>Operational Role:</strong> {machine.role}</p>
                  <p className="fleet-desc-p">{machine.description}</p>
                  
                  {/* Technical Specifications specs */}
                  <div className="fleet-specs-table">
                    <h4>Technical Specifications</h4>
                    {Object.entries(machine.specifications).map(([key, value]) => (
                      <div key={key} className="spec-row">
                        <span className="spec-name-lbl">{key}</span>
                        <span className="spec-val-lbl">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="fleet-card-footer">
                  <div className="maintenance-status">
                    <HeartPulse size={14} className="maint-icon" />
                    <span>Interval: {machine.maintenanceInterval}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Section: Predictive Maintenance Process (Varying Background: Solid White) */}
      <section className="maintenance-section bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Reliability</span>
            <h2>Predictive Fleet Maintenance Process</h2>
            <p className="maint-intro">{maintenanceProcess.overview}</p>
          </div>

          <Timeline steps={maintenanceProcess.steps.map((step, idx) => ({
            step: `0${idx + 1}`,
            title: step.title,
            description: step.desc
          }))} />
        </div>
      </section>

      {/* 5. Supporting Information: Safety Regulations (Varying Background: Dark Navy) */}
      <section className="fleet-safety-section bg-navy section">
        <div className="container safety-grid-equip">
          <div className="safety-badge-column">
            <div className="safety-shield-box">
              <ShieldCheck size={64} className="safety-shield" />
            </div>
            <h3>Site Safe Deployment</h3>
            <p>Every single machine is audited before gate entry, ensuring full compliance with Finnish Työturvallisuuslaki guidelines.</p>
          </div>

          <div className="safety-rules-column">
            <span className="badge">Zero Accidents Target</span>
            <h2>Fleet Safety Regulations</h2>
            <ul className="safety-rules-list">
              {fleetSafetyStandards.map((std, idx) => (
                <li key={idx}>
                  <HardHat size={18} className="safety-rule-icon" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner (Varying Background: Orange Gradient) */}
      <section className="fleet-cta bg-orange-gradient section">
        <div className="container fleet-cta-container">
          <h2>Need Specialized Heavy Equipment for Your Contract?</h2>
          <p>We provide full machinery deployment, including certified operators and Trimble 3D data setup for municipal and commercial contracts.</p>
          <div className="fleet-cta-buttons">
            <a href="#/contact" className="btn btn-secondary fleet-btn-action">
              Request Machinery Deployment
            </a>
            <a href="#/services" className="btn btn-outline-dark fleet-btn-outline">
              Review Construction Capabilities
            </a>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
export default Equipment;
