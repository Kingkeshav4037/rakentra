import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, SlidersHorizontal, ArrowUpDown, 
  MapPin, Calendar, DollarSign, Clock,
  ShieldCheck, Quote, Star, Eye
} from 'lucide-react';
import { projectsData, type Project } from '../data/projectsData';
import MapContainer from '../components/MapContainer';
import Modal from '../components/Modal';
import '../styles/Projects.css';

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date-desc');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project) => {
        const matchesSearch = 
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = 
          selectedCategory === 'all' || project.category === selectedCategory;
          
        const matchesStatus = 
          selectedStatus === 'all' || project.status === selectedStatus;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'date-desc') {
          // Simplistic comparison for dates
          return b.completionDate.localeCompare(a.completionDate);
        }
        if (sortBy === 'budget-desc') {
          // Parse budget number (e.g. €78,500,000 -> 78500000)
          const numA = parseInt(a.budget.replace(/[^0-9]/g, ''), 10);
          const numB = parseInt(b.budget.replace(/[^0-9]/g, ''), 10);
          return numB - numA;
        }
        if (sortBy === 'duration-desc') {
          const numA = parseInt(a.duration.split(' ')[0], 10);
          const numB = parseInt(b.duration.split(' ')[0], 10);
          return numB - numA;
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedStatus, sortBy]);

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="projects-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      
      {/* 1. Hero Section (Varying Background: Large image with dark overlay) */}
      <header className="projects-hero bg-hero" aria-label="Projects Reference Portfolio Hero">
        <div className="hero-overlay"></div>
        <div className="container projects-hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">Case Studies</span>
            <h1 className="hero-title">References & Technical Achievements</h1>
            <p className="hero-subtitle">
              Explore our portfolio of commercial landmark towers, highway corridors, heavy-flatness logistics depots, and CLT timber residential blocks.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Interactive Map Section (Varying Background: Solid White) */}
      <section className="map-showcase-section bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Locations Map</span>
            <h2>Regional Projects Map</h2>
            <p className="map-intro-p">Select pins to view regional offices and reference project coordinates across Finland.</p>
          </div>
          <MapContainer />
        </div>
      </section>

      {/* 3. Main Content: Search, Filter, Sort and Project Grid (Varying Background: Light Gray) */}
      <section className="portfolio-section bg-light section">
        <div className="container">
          
          {/* Advanced Filter Toolbar */}
          <div className="filter-toolbar bg-white">
            <div className="toolbar-row search-row">
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by project name, location, or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-bar-field"
                  aria-label="Search projects"
                />
              </div>
            </div>

            <div className="toolbar-row filters-row">
              <div className="filter-group-buttons">
                <span className="filter-lbl"><SlidersHorizontal size={14} /> Division:</span>
                <button className={`chip-btn ${selectedCategory === 'all' ? 'active-chip' : ''}`} onClick={() => setSelectedCategory('all')}>All</button>
                <button className={`chip-btn ${selectedCategory === 'commercial' ? 'active-chip' : ''}`} onClick={() => setSelectedCategory('commercial')}>Commercial</button>
                <button className={`chip-btn ${selectedCategory === 'infrastructure' ? 'active-chip' : ''}`} onClick={() => setSelectedCategory('infrastructure')}>Infrastructure</button>
                <button className={`chip-btn ${selectedCategory === 'industrial' ? 'active-chip' : ''}`} onClick={() => setSelectedCategory('industrial')}>Industrial</button>
                <button className={`chip-btn ${selectedCategory === 'residential' ? 'active-chip' : ''}`} onClick={() => setSelectedCategory('residential')}>Residential</button>
              </div>

              <div className="filter-dropdowns">
                <div className="select-wrapper">
                  <span className="drop-lbl">Status:</span>
                  <select 
                    value={selectedStatus} 
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="toolbar-select"
                    aria-label="Filter by Status"
                  >
                    <option value="all">All Statuses</option>
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                </div>

                <div className="select-wrapper">
                  <span className="drop-lbl"><ArrowUpDown size={14} /> Sort:</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="toolbar-select"
                    aria-label="Sort projects"
                  >
                    <option value="date-desc">Newest Completed</option>
                    <option value="budget-desc">Highest Budget</option>
                    <option value="duration-desc">Longest Duration</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Results Count */}
          <div className="results-count">
            Showing <strong>{filteredProjects.length}</strong> matching projects
          </div>

          {/* Project Cards Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-3 projects-card-grid">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="project-card card hover-trigger"
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveProjectModal(project)}
                  style={{ cursor: 'pointer' }}
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
                  <button className="project-card-link-btn" aria-label={`View case study for ${project.title}`}>
                    Inspect Case Details <Eye size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="no-results-panel">
              <p>No projects match your search constraints. Try resetting filters.</p>
            </div>
          )}

        </div>
      </section>

      {/* 4. Trust Section (Varying Background: Dark Navy) */}
      <section className="projects-trust bg-navy section">
        <div className="container trust-flex">
          <div className="trust-icon-badge">
            <ShieldCheck size={48} className="trust-icon-glow" />
          </div>
          <div>
            <h2 className="text-white">RALA Audited Technical References</h2>
            <p className="text-white-opacity">
              All reported statistics, timelines, and budgets are logged under our official RALA certificates. We maintain historical coordinates and verified compliance audits for every site.
            </p>
          </div>
        </div>
      </section>

      {/* Project Detail Modal Overlay */}
      <Modal
        isOpen={activeProjectModal !== null}
        onClose={() => setActiveProjectModal(null)}
        title={activeProjectModal?.title}
      >
        {activeProjectModal && (
          <div className="project-modal-details">
            <span className="badge badge-accent mb-md">{activeProjectModal.category} division</span>
            
            <p className="modal-long-desc">{activeProjectModal.description}</p>
            
            {/* Project Specifications List */}
            <div className="modal-specs-grid">
              <div className="modal-spec-card">
                <MapPin size={18} className="spec-icon" />
                <div>
                  <span className="spec-val">{activeProjectModal.location}</span>
                  <span className="spec-lbl">Coordinates Hub</span>
                </div>
              </div>
              <div className="modal-spec-card">
                <DollarSign size={18} className="spec-icon" />
                <div>
                  <span className="spec-val">{activeProjectModal.budget}</span>
                  <span className="spec-lbl">Project Budget</span>
                </div>
              </div>
              <div className="modal-spec-card">
                <Clock size={18} className="spec-icon" />
                <div>
                  <span className="spec-val">{activeProjectModal.duration}</span>
                  <span className="spec-lbl">Duration</span>
                </div>
              </div>
              <div className="modal-spec-card">
                <Calendar size={18} className="spec-icon" />
                <div>
                  <span className="spec-val">{activeProjectModal.completionDate}</span>
                  <span className="spec-lbl">Completion</span>
                </div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="modal-challenges-solutions">
              <div className="challenge-block">
                <h4>Engineering Challenges</h4>
                <p>{activeProjectModal.challenges}</p>
              </div>
              <div className="solution-block">
                <h4>Rakentra Solutions</h4>
                <p>{activeProjectModal.solutions}</p>
              </div>
            </div>

            {/* Before and After Image Descriptions */}
            <div className="before-after-descriptions">
              <div className="before-desc">
                <h5>Site Pre-construction State</h5>
                <p>{activeProjectModal.beforeImageDescription}</p>
              </div>
              <div className="after-desc">
                <h5>Finished Engineered Asset</h5>
                <p>{activeProjectModal.afterImageDescription}</p>
              </div>
            </div>

            {/* Project Timeline steps */}
            <div className="modal-timeline">
              <h4>Construction Milestones</h4>
              <ul className="modal-timeline-list">
                {activeProjectModal.timelineSteps.map((step, idx) => (
                  <li key={idx}>
                    <span className="timeline-date">{step.date}</span>
                    <span className="timeline-event">{step.event}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Review Quotation block */}
            <div className="modal-review-block">
              <div className="review-quote-header">
                <Quote size={32} className="quote-icon" />
                <div className="review-rating">
                  {Array.from({ length: activeProjectModal.clientReview.rating }).map((_, i) => (
                    <Star key={i} size={14} className="star-icon" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="review-comment">"{activeProjectModal.clientReview.comment}"</p>
              <div className="review-author">
                <strong>{activeProjectModal.clientReview.author}</strong>
                <span>{activeProjectModal.clientReview.role}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>

    </motion.div>
  );
};
export default Projects;
