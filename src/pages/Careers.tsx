import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, CheckCircle, Send, User, Mail, LinkIcon 
} from 'lucide-react';
import { jobOpeningsData, cultureData, careersFaqData } from '../data/careersData';
import type { JobOpening } from '../data/careersData';
import FAQAccordion from '../components/FAQAccordion';
import Timeline from '../components/Timeline';
import Modal from '../components/Modal';
import '../styles/Careers.css';

interface FormState {
  fullName: string;
  email: string;
  portfolio: string;
  coverLetter: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  portfolio?: string;
  coverLetter?: string;
}

export const Careers: React.FC = () => {
  const [activeJobModal, setActiveJobModal] = useState<JobOpening | null>(null);
  const [applyJob, setApplyJob] = useState<JobOpening | null>(null);
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    portfolio: '',
    coverLetter: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = (job: JobOpening) => {
    setActiveJobModal(null);
    setApplyJob(job);
  };

  const handleCloseApplyModal = () => {
    setApplyJob(null);
    setFormState({ fullName: '', email: '', portfolio: '', coverLetter: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formState.fullName.trim()) {
      tempErrors.fullName = 'Full name is required.';
    }
    
    if (!formState.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (formState.portfolio.trim() && !/^https?:\/\/\S+/.test(formState.portfolio)) {
      tempErrors.portfolio = 'Please provide a valid URL starting with http:// or https://';
    }

    if (!formState.coverLetter.trim() || formState.coverLetter.length < 50) {
      tempErrors.coverLetter = 'Cover letter must be at least 50 characters long.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API dispatch
      console.log('Submitted application for position:', applyJob?.title, formState);
      setIsSubmitted(true);
    }
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="careers-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      
      {/* 1. Hero Section (Varying Background: Construction Image with Overlay) */}
      <header className="careers-hero bg-hero" aria-label="Careers Hero">
        <div className="hero-overlay"></div>
        <div className="container careers-hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">Careers at Rakentra</span>
            <h1 className="hero-title">Build Your Future in Finland</h1>
            <p className="hero-subtitle">
              Join our engineering and site crews to deliver premium, sustainable, and RALA-certified reference projects.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Introduction: Company Culture & Benefits (Varying Background: Solid White) */}
      <section className="culture-section bg-white section">
        <div className="container culture-grid">
          <div className="culture-text">
            <span className="badge badge-accent">Work Culture</span>
            <h2>{cultureData.headline}</h2>
            <p className="culture-intro-p">{cultureData.introduction}</p>
            <p className="culture-intro-p">
              We operate with structural transparency. In our Helsinki design office and active piling sites in Tampere or Oulu, every team member's safety and well-being are prioritized. We invest in top-tier Trimble 3D modeling gear, ergonomic site clothing, and continuous training.
            </p>
          </div>
          
          <div className="culture-benefits-grid">
            {cultureData.benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card-careers card">
                <Heart size={24} className="benefit-icon-careers" />
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content: Open Positions (Varying Background: Light Gray) */}
      <section className="jobs-section bg-light section">
        <div className="container">
          <div className="section-header-wrapper">
            <span className="badge badge-accent">Vacancies</span>
            <h2>Current Open Positions</h2>
            <p className="jobs-intro-p">We are expanding our teams across Finland. Explore active listings below.</p>
          </div>

          <div className="jobs-list-container">
            {jobOpeningsData.map((job) => (
              <div key={job.id} className="job-row bg-white">
                <div className="job-meta-col">
                  <span className="job-dept-badge">{job.department}</span>
                  <h3 className="job-title-h3">{job.title}</h3>
                  <span className="job-loc-txt">{job.location} &bull; {job.type}</span>
                </div>
                <div className="job-salary-col">
                  {job.salaryRange && (
                    <div className="salary-box">
                      <span className="salary-lbl">Salary Range</span>
                      <span className="salary-val">{job.salaryRange}</span>
                    </div>
                  )}
                </div>
                <div className="job-action-col">
                  <button 
                    onClick={() => setActiveJobModal(job)}
                    className="btn btn-outline-dark job-view-btn"
                  >
                    View Job Details
                  </button>
                  <button 
                    onClick={() => handleApplyClick(job)}
                    className="btn btn-primary job-apply-btn"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Section: Recruitment Process (Varying Background: Solid White) */}
      <section className="hiring-process bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Stages</span>
            <h2>Our Structured Hiring Process</h2>
            <p className="process-intro-p">From review to formal induction, here is what to expect.</p>
          </div>

          <Timeline steps={cultureData.hiringSteps.map((step) => ({
            step: `0${step.step}`,
            title: step.title,
            description: step.desc
          }))} />
        </div>
      </section>

      {/* 5. Supporting Information: Applicant FAQ (Varying Background: Dark Navy) */}
      <section className="careers-faq-section bg-navy section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge">FAQ</span>
            <h2 className="text-white">Applicant Inquiries</h2>
            <p className="text-white-opacity">Common questions regarding visa sponsorships, qualifications, and language criteria.</p>
          </div>
          <div className="dark-faq-wrapper">
            <FAQAccordion items={careersFaqData} />
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Modal
        isOpen={activeJobModal !== null}
        onClose={() => setActiveJobModal(null)}
        title={activeJobModal?.title}
      >
        {activeJobModal && (
          <div className="job-modal-content">
            <div className="job-modal-meta">
              <span className="badge badge-accent">{activeJobModal.department}</span>
              <span>{activeJobModal.location} &bull; {activeJobModal.type}</span>
            </div>
            
            <p className="job-modal-desc">{activeJobModal.description}</p>
            
            <div className="job-modal-section">
              <h4>Key Responsibilities</h4>
              <ul>
                {activeJobModal.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className="job-modal-section">
              <h4>Candidate Qualifications</h4>
              <ul>
                {activeJobModal.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="job-modal-actions">
              <button 
                onClick={() => handleApplyClick(activeJobModal)}
                className="btn btn-primary"
              >
                Submit Application For This Role
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Job Application Form Modal */}
      <Modal
        isOpen={applyJob !== null}
        onClose={handleCloseApplyModal}
        title={`Apply: ${applyJob?.title}`}
      >
        {applyJob && (
          <div className="application-form-wrapper">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="application-form">
                <span className="form-heading-tip">Fill in the fields below. Required *</span>
                
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name *</label>
                  <div className="form-input-icon-wrapper">
                    <User size={16} className="form-icon-field" />
                    <input
                      type="text"
                      id="fullName"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className={`form-input-with-icon ${errors.fullName ? 'input-error' : ''}`}
                      placeholder="Matti Virtanen"
                      aria-required="true"
                    />
                  </div>
                  {errors.fullName && <span className="field-error-text">{errors.fullName}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <div className="form-input-icon-wrapper">
                    <Mail size={16} className="form-icon-field" />
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={`form-input-with-icon ${errors.email ? 'input-error' : ''}`}
                      placeholder="matti.virtanen@gmail.fi"
                      aria-required="true"
                    />
                  </div>
                  {errors.email && <span className="field-error-text">{errors.email}</span>}
                </div>

                {/* CV/Portfolio Link */}
                <div className="form-group">
                  <label className="form-label" htmlFor="portfolio">CV / LinkedIn Link (Optional)</label>
                  <div className="form-input-icon-wrapper">
                    <LinkIcon size={16} className="form-icon-field" />
                    <input
                      type="url"
                      id="portfolio"
                      value={formState.portfolio}
                      onChange={(e) => setFormState({ ...formState, portfolio: e.target.value })}
                      className={`form-input-with-icon ${errors.portfolio ? 'input-error' : ''}`}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  {errors.portfolio && <span className="field-error-text">{errors.portfolio}</span>}
                </div>

                {/* Cover Letter */}
                <div className="form-group">
                  <label className="form-label" htmlFor="coverLetter">Why Rakentra? Cover Letter (Min 50 chars) *</label>
                  <textarea
                    id="coverLetter"
                    value={formState.coverLetter}
                    onChange={(e) => setFormState({ ...formState, coverLetter: e.target.value })}
                    className={`form-textarea ${errors.coverLetter ? 'input-error' : ''}`}
                    placeholder="Describe your qualifications, certificates, and safety record..."
                    aria-required="true"
                  />
                  {errors.coverLetter && <span className="field-error-text">{errors.coverLetter}</span>}
                </div>

                <div className="form-submit-actions">
                  <button type="button" onClick={handleCloseApplyModal} className="btn btn-outline-dark">Cancel</button>
                  <button type="submit" className="btn btn-primary submit-btn-icon">
                    Send Application <Send size={14} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="application-success-box">
                <CheckCircle size={48} className="success-icon-careers" />
                <h3>Application Submitted Successfully</h3>
                <p>
                  Thank you for applying for the <strong>{applyJob.title}</strong> role. Our HSE and recruitment team will audit your certificates and contact you for the technical review phase within 5 business days.
                </p>
                <button onClick={handleCloseApplyModal} className="btn btn-primary">Close Dialog</button>
              </div>
            )}
          </div>
        )}
      </Modal>

    </motion.div>
  );
};
export default Careers;
