import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, ShieldCheck, Leaf, Target, Users, 
  ArrowRight, MapPin 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import '../styles/About.css';

const leadershipTeam = [
  { name: "Henrik Sundqvist", role: "Chief Executive Officer & Founder", bio: "Over 25 years of construction management experience. Former structural advisor to the Ministry of Transport." },
  { name: "Lars Lindgren", role: "Director of Engineering & BIM", bio: "M.Sc. in Civil Engineering. Pioneer in timber hybrid construction and digital twin integrations." },
  { name: "Anu Räsänen", role: "Head of HSE & Safety Operations", bio: "15 years driving zero-accident safety initiatives across civil infrastructure corridors." },
  { name: "Elina Korhonen", role: "Sustainability & Carbon Lifecycle Lead", bio: "Specialist in carbon-neutral material sourcing, CLT modeling, and BREEAM audits." }
];

const milestones = [
  { step: "1998", title: "Rakentra Foundation", description: "Established in Helsinki by Henrik Sundqvist, focusing on local commercial renovations and steel structural assemblies." },
  { step: "2005", title: "RALA Certification & Road Division", description: "Awarded RALA certifications for structural works. Launched our civil infrastructure and road paving division." },
  { step: "2012", title: "BIM Integration Initiative", description: "Mandated Building Information Modeling (BIM) Level 2 across all commercial and industrial project contracts." },
  { step: "2018", title: "Timber CLT Pioneer Projects", description: "Successfully completed our first multi-storey Cross-Laminated Timber (CLT) residential development in Tampere." },
  { step: "2024", title: "Zero Accidents Milestone", description: "Achieved a consecutive 1,000 days without a lost-time incident across all active heavy civil project sites." }
];

export const About: React.FC = () => {
  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="about-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      
      {/* 1. Hero Section (Varying Background: Large image with dark overlay) */}
      <header className="about-hero bg-hero" aria-label="About Us Hero">
        <div className="hero-overlay"></div>
        <div className="container about-hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">About Rakentra</span>
            <h1 className="hero-title">Engineered to Stand. Built on Trust.</h1>
            <p className="hero-subtitle">
              Learn about our history, our leadership, our strict engineering philosophy, and our commitment to a sustainable future.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Introduction: Founder Story & Journey (Varying Background: Solid White) */}
      <section className="story-section bg-white section">
        <div className="container story-grid">
          <div className="story-text">
            <span className="badge badge-accent font-semibold">Our Journey</span>
            <h2>From a Single Helsinki Scaffold to National Infrastructure</h2>
            <p className="story-p">
              In 1998, Henrik Sundqvist founded Rakentra Oy in a small Helsinki office, driven by a simple realization: the construction industry was becoming overly complex and losing touch with the core craftsmanship that makes structures endure. Henrik believed that a building should be a clean, minimal, high-performing asset.
            </p>
            <p className="story-p">
              Guided by the Finnish value of <em>Sisu</em> (unyielding grit) and a dedication to Scandinavian design, Rakentra earned a reputation for technical precision. As we expanded from commercial frame assemblies to major expressways and high-bay distribution depots, we remained committed to Henrik's original principle: <strong>always deliver on trust.</strong>
            </p>
          </div>
          <div className="story-stats-visual">
            <div className="journey-card">
              <span className="journey-year">1998</span>
              <span className="journey-lbl">Year Founded</span>
            </div>
            <div className="journey-card">
              <span className="journey-year">ISO</span>
              <span className="journey-lbl">9001 & 14001 Audited</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content: Engineering Philosophy & Values (Varying Background: Light Gray) */}
      <section className="philosophy-section bg-light section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Our Core values</span>
            <h2>Precision Engineering Philosophy</h2>
            <p className="philosophy-intro">We design structures that perform cleanly, prioritize lifecycle durability, and respect environmental limits.</p>
          </div>

          <div className="grid grid-cols-3 philosophy-cards-grid">
            <div className="philosophy-card card">
              <Target size={32} className="philosophy-icon" />
              <h3>Function First</h3>
              <p>We do not add unnecessary decorations. Every structural column, beam, joint, and facade panel is engineered to optimize space, lighting, and thermal retention.</p>
            </div>
            <div className="philosophy-card card">
              <ShieldCheck size={32} className="philosophy-icon" />
              <h3>Precision Tolerances</h3>
              <p>Using clash-free BIM Level 3 modeling and GPS-guided grading fleets, we build to sub-millimeter tolerances, reducing waste and accelerating project speed.</p>
            </div>
            <div className="philosophy-card card">
              <Leaf size={32} className="philosophy-icon" />
              <h3>Eco-Lifecycle Design</h3>
              <p>We analyze the embodied carbon of every concrete slab and timber joint. We design for geothermal district systems and high-density thermal envelopes.</p>
            </div>
          </div>

          {/* Detailed Engineering Standards block */}
          <div className="standards-block bg-white">
            <div className="standards-text">
              <h3>Winter Building & Curing Standards</h3>
              <p>
                Building in Finland requires mastering cold weather. We operate dynamic heated enclosures (sääsuoja) that cover entire structural builds. We mix concrete with specialized heating agents, monitoring the inner core curing temperatures via wireless embedded sensors to ensure it reaches full structural rating without freeze cracking.
              </p>
              <ul className="standards-list">
                <li>Wireless sensor-monitored concrete thermal curing curves</li>
                <li>Full weather protective scaffolding tents (Sääsuoja) as standard</li>
                <li>Pre-fabrication of key timber CLT panels in dry offsite mills</li>
              </ul>
            </div>
            <div className="standards-badge-display">
              <ShieldAlert size={48} className="standards-shield-icon" />
              <span>RALA ACCREDITED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust Section: Timeline Milestones (Varying Background: Solid White) */}
      <section className="milestones-section bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Milestones</span>
            <h2>Our Development Timeline</h2>
            <p className="timeline-intro">A history of technical milestones and sustainable growth.</p>
          </div>
          <Timeline steps={milestones} />
        </div>
      </section>

      {/* 5. Supporting Information: Leadership & Certs & Gallery (Varying Background: Dark Navy) */}
      <section className="leadership-section bg-navy section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge">Our Leaders</span>
            <h2 className="text-white">Executive Management</h2>
            <p className="text-white-opacity">An experienced management team focused on engineering details and safety values.</p>
          </div>

          <div className="grid grid-cols-4 leadership-grid">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-photo-placeholder">
                  <Users size={48} className="leader-avatar-icon" />
                </div>
                <h3 className="leader-name">{leader.name}</h3>
                <span className="leader-role">{leader.role}</span>
                <p className="leader-bio">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Office Gallery (Varying Background: Warm White) */}
      <section className="gallery-section bg-warm section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Facilities</span>
            <h2>Our Offices & Depots</h2>
            <p className="gallery-intro">Rakentra operates regional engineering offices and heavy equipment depots across Finland.</p>
          </div>

          <div className="grid grid-cols-3 office-gallery-grid">
            <div className="office-card card">
              <div className="office-image-box helsinki">
                <MapPin size={24} className="office-pin-icon" />
              </div>
              <h3 className="office-title">Helsinki Headquarters</h3>
              <p className="office-desc">Located on Mannerheimintie, housing our executive team, estimating engineers, and BIM model clash coordinators.</p>
            </div>
            <div className="office-card card">
              <div className="office-image-box tampere">
                <MapPin size={24} className="office-pin-icon" />
              </div>
              <h3 className="office-title">Tampere Operations</h3>
              <p className="office-desc">Our primary base for infrastructure engineering and structural cement column mixing hubs for central regions.</p>
            </div>
            <div className="office-card card">
              <div className="office-image-box oulu">
                <MapPin size={24} className="office-pin-icon" />
              </div>
              <h3 className="office-title">Oulu Depot</h3>
              <p className="office-desc">Northern logistics center and extreme weather machinery testing hub, managing Oulu and Lapland civil sites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section (Varying Background: Orange Gradient) */}
      <section className="about-cta bg-orange-gradient section">
        <div className="container about-cta-container">
          <h2>Want to Join the Rakentra Engineering Team?</h2>
          <p>We are always looking for certified site managers, structural designers, and safety inspectors who share our sisu and values.</p>
          <Link to="/careers" className="btn btn-secondary about-cta-btn">
            View Open Careers <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

    </motion.div>
  );
};
export default About;
