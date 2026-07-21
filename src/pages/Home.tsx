// React
import React, { useState } from 'react';

// Routing
import { Link } from 'react-router-dom';

// Animation
import { motion } from 'framer-motion';

// Icons
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  HardHat,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Building2,
  Eye,
  Calendar,
  DollarSign,
} from 'lucide-react';

// Data
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { blogData } from '../data/blogData';

// Components
import CountUp from '../components/CountUp';
import FAQAccordion from '../components/FAQAccordion';
import Timeline from '../components/Timeline';

// Styles
import './Home.css';


const clientLogos = [
  "SATO OYJ", "YIT FINLAND", "HELSINKI PORT", "FINAVIA", "NESTE OYJ", "METSÄ GROUP"
];

const testimonials = [
  {
    quote: "Rakentra delivered our data center expansion with zero structural delay despite a record winter. Their engineering standards are second to none in Finland.",
    author: "Juho Ruotsalainen",
    role: "Director of Facilities, Nordic Cloud Systems",
    project: "Espoo Data Center"
  },
  {
    quote: "Their commitment to the Zero Accident policy was evident every single day on site. Daily safety checkpoints and clear communications kept our project safe and on schedule.",
    author: "Maija Peltonen",
    role: "HSE Coordinator, Southern Transport Agency",
    project: "Kehä III Expressway Widening"
  },
  {
    quote: "Building with CLT panels was a new challenge for us, but Rakentra's team managed the weather protection scaffolding perfectly, delivering a carbon-neutral building of high quality.",
    author: "Sven-Erik Lindström",
    role: "Chairman, Katajanokka Housing Coop",
    project: "Katajanokka Timber Heights"
  }
];

const homeFaq = [
  {
    question: "What geographical regions does Rakentra cover?",
    answer: "We cover all major regions of Finland, with active offices and material depots in Helsinki, Vantaa, Tampere, and Oulu. Our mobile construction crews can deploy to remote infrastructure projects nationwide."
  },
  {
    question: "How does Rakentra guarantee construction quality?",
    answer: "We hold formal RALA (The Construction Quality Association) certifications and maintain ISO 9001:2015 Quality Management and ISO 14001:2015 Environmental Management systems. All our work is subjected to strict quality control schedules."
  },
  {
    question: "Can Rakentra assist in design phases and BIM management?",
    answer: "Yes, we have an in-house team of BIM coordination engineers who utilize Tekla and Revit platforms to build clash-free models, optimizing cost and material quantities during pre-construction phases."
  }
];

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="home-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      
      {/* 1. Hero Section (Varying Background: Construction Image with Dark Overlay) */}
      <header className="hero-section bg-hero" aria-label="Hero Introduction">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">Nordic Engineering & Construction</span>
            <h1 className="hero-title">Engineering Trust. Building Sustainability.</h1>
            <p className="hero-subtitle">
              We deliver premium commercial, industrial, and civil infrastructure assets across Finland with Scandinavian simplicity and zero-accident precision.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary hero-btn">
                Explore Case Studies <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/contact" className="btn btn-secondary hero-btn">
                Consult Our Engineers
              </Link>
            </div>
          </div>
        </div>
        
        {/* Quick Credentials Strip */}
        <div className="hero-strip">
          <div className="container hero-strip-container">
            <div className="strip-item">
              <ShieldCheck size={18} className="strip-icon" />
              <span>RALA Certified Quality</span>
            </div>
            <div className="strip-item">
              <HardHat size={18} className="strip-icon" />
              <span>Zero-Accident HSE Goal</span>
            </div>
            <div className="strip-item">
              <Leaf size={18} className="strip-icon" />
              <span>ISO 14001 Carbon-Neutral Target</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Client Logos Bar (Varying Background: Solid White) */}
      <section className="client-logos-section bg-white">
        <div className="container">
          <h2 className="sr-only">Our Institutional Partners</h2>
          <p className="logos-title-label">Trusted by Nordic Industry Leaders</p>
          <div className="logos-grid">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="logo-item">
                <span className="logo-placeholder-text">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Statistics Section (Varying Background: Solid White) */}
      <section className="stats-section bg-white section-divider-top">
        <div className="container stats-container">
          <div className="stat-card">
            <span className="stat-num-wrapper">
              <CountUp to={250} suffix="+" />
            </span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-card">
            <span className="stat-num-wrapper">
              <CountUp to={450} suffix="M€" />
            </span>
            <span className="stat-label">Annual Revenue</span>
          </div>
          <div className="stat-card">
            <span className="stat-num-wrapper">
              <CountUp to={500} suffix="+" />
            </span>
            <span className="stat-label">Professional Staff</span>
          </div>
          <div className="stat-card">
            <span className="stat-num-wrapper">
              <CountUp to={96} suffix="%" />
            </span>
            <span className="stat-label">TR-Safety Site Score</span>
          </div>
        </div>
      </section>

      {/* 4. Company Overview Section (Varying Background: Solid White) */}
      <section className="overview-section bg-white section">
        <div className="container overview-grid">
          <div className="overview-text">
            <span className="badge badge-accent">Precision Engineered</span>
            <h2 className="overview-title">Finnish Roots, Scandinavian Design Principles</h2>
            <p className="overview-paragraph">
              Founded in Helsinki, Rakentra is built on the Finnish concept of <strong>Sisu</strong>—determination and resilience in the face of harsh seasonal elements. We combine this strength with the principles of Scandinavian design: functional clarity, high sustainability, and visual minimalism.
            </p>
            <p className="overview-paragraph">
              Whether building high-density timber apartments or cable-stayed highway bridges spanning sub-arctic waterways, we maintain absolute engineering control. We minimize construction waste, maximize thermal envelope insulation, and enforce strict, verified quality gates at every structural phase.
            </p>
            <Link to="/about" className="btn btn-outline-dark overview-cta">
              Read Our Story <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
          <div className="overview-visual">
            <div className="visual-construction-box">
              <div className="visual-graphic-line"></div>
              <div className="visual-badge">EST. 1998</div>
              <div className="visual-text-overlay">
                <h3>Built to Withstand -35°C Winters</h3>
                <p>Advanced thermal core modeling and winterized concrete curing setups form the foundation of our engineering excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Varying Background: Light Gray) */}
      <section className="services-section bg-light section">
        <div className="container">
          <div className="section-header-wrapper">
            <span className="badge badge-accent">What We Do</span>
            <h2 className="section-title">Specialized Construction Divisions</h2>
            <p className="section-subtitle">
              We deploy specialized engineering teams, advanced BIM coordination tools, and high-capacity equipment fleets for every division.
            </p>
          </div>

          <div className="grid grid-cols-2">
            {servicesData.map((service) => (
              <motion.div 
                key={service.id}
                className="service-card card"
                whileHover={{ y: -6 }}
              >
                <div className="service-card-header">
                  <h3 className="service-card-title">{service.title}</h3>
                  <span className="service-step-num">0{service.id === 'commercial' ? 1 : service.id === 'infrastructure' ? 2 : service.id === 'industrial' ? 3 : 4}</span>
                </div>
                <p className="service-card-desc">{service.shortDescription}</p>
                <div className="service-card-tags">
                  {service.projectExamples.slice(0, 2).map((ex, i) => (
                    <span key={i} className="service-tag">{ex.split(',')[0]}</span>
                  ))}
                </div>
                <Link to={`/services?tab=${service.id}`} className="service-card-link">
                  Explore Division Specs <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Rakentra (Varying Background: Light Gray) */}
      <section className="why-choose-section bg-light section section-divider-top">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-header">
              <span className="badge badge-accent">Our Advantages</span>
              <h2>Why Premium Developers Trust Rakentra</h2>
              <p>We do not just construct walls or pave lanes; we manage risk, guarantee timelines, and build structural assets that maintain their value for generations.</p>
            </div>
            
            <div className="why-features-grid">
              <div className="why-feature-item">
                <ShieldCheck size={32} className="why-feat-icon" />
                <h3>RALA Certified Quality</h3>
                <p>We are fully audited by the Finnish Construction Quality Association, verifying our technical skills and financial credit rating.</p>
              </div>
              <div className="why-feature-item">
                <HardHat size={32} className="why-feat-icon" />
                <h3>Zero Accidents HSE</h3>
                <p>We target zero injuries. Through weekly TR audits, site coordinates monitoring, and exoskeletons, our workers stay safe.</p>
              </div>
              <div className="why-feature-item">
                <Leaf size={32} className="why-feat-icon" />
                <h3>Carbon-Neutral Commitment</h3>
                <p>We lead in sustainable timber CLT hybrid frameworks and geothermal district heating setups, minimizing embodied carbon.</p>
              </div>
              <div className="why-feature-item">
                <Zap size={32} className="why-feat-icon" />
                <h3>Winter Engineering</h3>
                <p>We are specialists in sub-zero construction, operating heated scaffolding structures (sääsuoja) during deep Finnish winters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Projects Section (Varying Background: White) */}
      <section className="featured-projects-section bg-white section">
        <div className="container">
          <div className="section-header-wrapper flex-header">
            <div>
              <span className="badge badge-accent">Selected Case Studies</span>
              <h2 className="section-title">Reference Infrastructure & Buildings</h2>
            </div>
            <Link to="/projects" className="btn btn-outline-dark">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-3">
            {projectsData.slice(0, 3).map((project) => (
              <motion.div 
                key={project.id}
                className="project-card card"
                whileHover={{ y: -6 }}
              >
                <div className="project-card-image-box">
                  <div className="project-category-badge">{project.category}</div>
                  <div className="project-status-chip">{project.status}</div>
                </div>
                <div className="project-card-content">
                  <span className="project-loc">{project.location}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.shortDescription}</p>
                  
                  <div className="project-card-meta">
                    <div className="meta-item">
                      <DollarSign size={14} />
                      <span>{project.budget}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
                <Link to="/projects" className="project-card-link-btn">
                  View Full Case Study <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Construction Process - Timeline (Varying Background: White) */}
      <section className="process-section bg-white section section-divider-top">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Client Journey</span>
            <h2>Our Structured Construction Process</h2>
            <p className="process-intro">From project bidding to keys delivery, we maintain a linear, transparent engineering sequence.</p>
          </div>
          
          <Timeline steps={[
            { step: "01", title: "Project Briefing & Estimation", description: "Detailed analysis of site coordinates, zoning limits, and BIM budget estimation." },
            { step: "02", title: "Structural & Material Modeling", description: "Creating BIM coordinates to resolve clashes between structural and utility drafts." },
            { step: "03", title: "Site Foundations & Curing", description: "Excavation and pouring bedrock foundations with dynamic concrete temperature logs." },
            { step: "04", title: "Frame & Shell Assembly", description: "Erecting steel/timber frames with high tolerances and weather insulation envelopes." },
            { step: "05", title: "Systems Commissioning & Handover", description: "Testing geothermal heat pumps, smart grids, and completing RALA inspections." }
          ]} />
        </div>
      </section>

      {/* 9. Industries & Technology Section (Varying Background: White) */}
      <section className="tech-section bg-white section section-divider-top">
        <div className="container grid grid-cols-2 align-center">
          <div className="tech-visual">
            <div className="tech-blueprint-graphic">
              <Cpu size={64} className="blueprint-icon" />
              <div className="blueprint-radar-ring"></div>
            </div>
          </div>
          <div className="tech-text">
            <span className="badge badge-accent">Technology & Machinery</span>
            <h2>Digitized Site Operations</h2>
            <p>
              We deploy Trimble 3D machine control systems across our heavy excavation fleets, enabling grade-perfect site cuts directly from BIM coordinate files. 
            </p>
            <div className="tech-list">
              <div className="tech-list-item">
                <Building2 size={20} className="tech-list-icon" />
                <div>
                  <h4>BIM Level 3 Collaboration</h4>
                  <p>Centralized cloud modeling to coordinate MEP and architecture, preventing structural clashes on site.</p>
                </div>
              </div>
              <div className="tech-list-item">
                <Eye size={20} className="tech-list-icon" />
                <div>
                  <h4>Predictive Site Sensors</h4>
                  <p>Real-time concrete temperature logs and seismographs to monitor piling vibrations next to historical sites.</p>
                </div>
              </div>
            </div>
            <Link to="/equipment" className="btn btn-outline-dark tech-btn">
              Explore Our Fleet Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section (Varying Background: Dark Navy) */}
      <section className="testimonials-section bg-navy section">
        <div className="container testimonials-container">
          <span className="badge section-badge">Client Trust</span>
          <h2 className="testimonials-title">What Our Partners Say</h2>
          
          <div className="testimonial-slider">
            <button className="slider-arrow prev" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            
            <div className="testimonial-card-active">
              <p className="testimonial-quote">"{testimonials[activeTestimonial].quote}"</p>
              <div className="testimonial-author-meta">
                <span className="author-name">{testimonials[activeTestimonial].author}</span>
                <span className="author-role">{testimonials[activeTestimonial].role}</span>
                <span className="author-project">{testimonials[activeTestimonial].project}</span>
              </div>
            </div>
            
            <button className="slider-arrow next" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* 11. FAQ Section (Varying Background: Solid White) */}
      <section className="home-faq-section bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p className="faq-intro">Answers to common structural design and contract questions.</p>
          </div>
          <FAQAccordion items={homeFaq} />
        </div>
      </section>

      {/* 12. Latest Articles (Varying Background: Warm White) */}
      <section className="home-blog-section bg-warm section">
        <div className="container">
          <div className="section-header-wrapper flex-header">
            <div>
              <span className="badge badge-accent">Insights</span>
              <h2>Latest From Our Engineers</h2>
            </div>
            <Link to="/blog" className="btn btn-outline-dark">
              Read All Articles
            </Link>
          </div>

          <div className="grid grid-cols-3">
            {blogData.slice(0, 3).map((post) => (
              <div key={post.id} className="home-blog-card card">
                <span className="blog-card-cat">{post.category.replace('-', ' ')}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <div className="blog-card-footer">
                  <span className="blog-author">{post.author.split(',')[0]}</span>
                  <Link to="/blog" className="blog-read-link">
                    Read Post <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Final CTA Banner (Varying Background: Orange Gradient) */}
      <section className="cta-banner bg-orange-gradient section">
        <div className="container cta-container">
          <h2 className="cta-title">Ready to Engineer Your Next Structural Project?</h2>
          <p className="cta-desc">
            Discuss your commercial, industrial, or infrastructure developments with our senior estimating engineers. We deliver clash-free models and guaranteed timelines.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-secondary cta-btn">
              Book Project Consultation
            </Link>
            <Link to="/projects" className="btn btn-outline-dark cta-btn-outline">
              Review Past References
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
export default Home;
