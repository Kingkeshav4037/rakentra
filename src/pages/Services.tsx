import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, HardHat, 
  ArrowRight, Cpu, Settings, Check 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import type { ServiceDetail } from '../data/servicesData';
import FAQAccordion from '../components/FAQAccordion';
import Timeline from '../components/Timeline';
import '../styles/Services.css';
export const Services: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
const [activeService, setActiveService] = useState<ServiceDetail>(servicesData[0]);

  // Parse query parameter to allow linking to a specific tab
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      const selected = servicesData.find(s => s.slug === tab);
      if (selected) {
        setActiveService(selected);
      }
    }
  }, [location.search]);

const handleTabChange = (service: ServiceDetail) => {
      setActiveService(service);
    navigate(`/services?tab=${service.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <motion.div 
      className="services-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
      key={activeService.id} // Reload animation when tab changes
    >
      
      {/* 1. Hero Section (Varying Background: Construction Image with Overlay) */}
      <header className="services-hero bg-hero" aria-label="Services Division Hero">
        <div className="hero-overlay"></div>
        <div className="container services-hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">Rakentra Divisions</span>
            <h1 className="hero-title">{activeService.title}</h1>
            <p className="hero-subtitle">
              {activeService.shortDescription}
            </p>
          </div>
        </div>
      </header>

      {/* Division Navigation Tabs - Straight outline, Scandinavian simplicity */}
      <section className="tabs-nav-section bg-white">
        <div className="container tabs-container">
          <div className="tabs-list" role="tablist" aria-label="Construction Divisions">
            {servicesData.map((service) => (
              <button
                key={service.id}
                role="tab"
                aria-selected={activeService.id === service.id}
                aria-controls={`service-panel-${service.id}`}
                className={`tab-btn ${activeService.id === service.id ? 'active-tab' : ''}`}
                onClick={() => handleTabChange(service)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Overview Section (Varying Background: Solid White) */}
      <section className="service-overview bg-white section" id={`service-panel-${activeService.id}`} role="tabpanel">
        <div className="container overview-grid-services">
          <div className="overview-text">
            <span className="badge badge-accent">Division Overview</span>
            <h2 className="overview-title">Engineering Details</h2>
            <p className="overview-p-long">{activeService.overview}</p>
            
            <div className="target-audience-box">
              <h4>Primary Target Audience</h4>
              <p>{activeService.whoItIsFor}</p>
            </div>
          </div>
          
          {/* Sidebar displaying Industries Served & Technologies */}
          <div className="overview-sidebar">
            <div className="sidebar-block">
              <h3>Industries Served</h3>
              <ul className="sidebar-list">
                {activeService.industriesServed.map((ind, idx) => (
                  <li key={idx}>
                    <Building size={16} className="sidebar-icon" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="sidebar-block border-top">
              <h3>Technologies Used</h3>
              <ul className="sidebar-list">
                {activeService.technologiesUsed.map((tech, idx) => (
                  <li key={idx}>
                    <Cpu size={16} className="sidebar-icon" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content: Key Features & Benefits (Varying Background: Light Gray) */}
      <section className="features-benefits bg-light section">
        <div className="container grid grid-cols-2">
          
          {/* Left Column: Key Features */}
          <div className="features-col">
            <span className="badge badge-accent">Technical specs</span>
            <h2 className="column-title">Structural Capabilities</h2>
            <ul className="features-checklist">
              {activeService.keyFeatures.map((feat, idx) => (
                <li key={idx} className="feat-check-item">
                  <div className="check-box">
                    <Check size={16} className="check-icon" />
                  </div>
                  <div>
                    <h4>{feat.split('Featuring')[0].split('containing')[0].trim()}</h4>
                    <p>{feat}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column: Benefits */}
          <div className="benefits-col">
            <span className="badge">Project Value</span>
            <h2 className="column-title">Client Benefits</h2>
            <ul className="benefits-list">
              {activeService.benefits.map((benefit, idx) => (
                <li key={idx} className="benefit-item">
                  <span className="benefit-num">0{idx + 1}</span>
                  <p className="benefit-desc">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* 4. Trust Section: Construction Process & Equipment (Varying Background: Solid White) */}
      <section className="process-equipment bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Workflow</span>
            <h2>Our Operational Process</h2>
            <p className="process-intro">We maintain checked quality stages throughout the construction duration.</p>
          </div>
          
          {/* Chronological Timeline */}
          <Timeline steps={activeService.process} />

          {/* Machinery Used subsection */}
          <div className="machinery-subsection">
            <div className="mach-header">
              <Settings size={28} className="mach-header-icon" />
              <div>
                <h3>Heavy Machinery Deployed</h3>
                <p>We deploy original spec heavy machinery and GPS grading equipment for this division.</p>
              </div>
            </div>
            <div className="mach-grid">
              {activeService.equipmentUsed.map((equip, idx) => (
                <div key={idx} className="mach-item-card">
                  <span className="mach-name">{equip}</span>
                  <span className="mach-check">Active Fleet Spec</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Supporting Information: Safety & Reference Projects (Varying Background: Dark Navy) */}
      <section className="safety-projects bg-navy section">
        <div className="container safety-projects-grid">
          
          {/* Safety Standards Block */}
          <div className="safety-block">
            <span className="badge badge-accent">HSE Policy</span>
            <h2 className="column-title text-white">Safety Measures</h2>
            <p className="safety-desc-p">We operate under a zero-injury standard. Safety audits are integrated weekly.</p>
            <ul className="safety-standards-list">
              {activeService.safetyStandards.map((std, idx) => (
                <li key={idx}>
                  <HardHat size={18} className="safety-icon-bullet" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reference Projects Block */}
          <div className="references-block">
            <span className="badge">References</span>
            <h2 className="column-title text-white">Project Examples</h2>
            <div className="reference-list">
              {activeService.projectExamples.map((ex, idx) => (
                <div key={idx} className="reference-item-card">
                  <span className="ref-index">Ref 0{idx + 1}</span>
                  <h4 className="ref-name">{ex.split('(')[0].trim()}</h4>
                  {ex.includes('(') && (
                    <span className="ref-meta">{ex.substring(ex.indexOf('(') + 1, ex.indexOf(')'))}</span>
                  )}
                </div>
              ))}
            </div>
            <Link to="/projects" className="btn btn-secondary references-btn">
              View Case Study Details <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>

        </div>
      </section>

      {/* FAQs & CTA Banner (Varying Background: Warm White) */}
      <section className="services-faq bg-warm section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Division FAQ</span>
            <h2>Technical Inquiries</h2>
            <p className="faq-intro">Common technical questions regarding our structural engineering setups.</p>
          </div>
          
          <FAQAccordion items={activeService.faqs} />
        </div>
      </section>

      {/* Final Division CTA (Varying Background: Orange Gradient) */}
      <section className="services-cta bg-orange-gradient section">
        <div className="container services-cta-container">
          <h2>Have questions regarding a {activeService.title} contract?</h2>
          <p>Get in touch with our estimating and engineering directors for BIM coordinates and scheduling options.</p>
          <Link to="/contact" className="btn btn-secondary services-cta-btn">
            {activeService.ctaText} <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

    </motion.div>
  );
};
export default Services;
