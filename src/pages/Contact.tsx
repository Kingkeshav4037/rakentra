import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ShieldAlert
} from "lucide-react";
import FAQAccordion from '../components/FAQAccordion';
import '../styles/Contact.css';
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  division: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  division?: string;
  subject?: string;
  message?: string;
}

const offices = [
  {
    city: "Helsinki HQ",
    address: "Mannerheimintie 12A, 00100 Helsinki",
    phone: "+358 (0) 9 123 4567",
    email: "helsinki@rakentra.fi",
    hours: "Mon - Fri: 08:00 - 16:30"
  },
  {
    city: "Tampere Branch",
    address: "Hatanpään valtatie 18, 33100 Tampere",
    phone: "+358 (0) 3 987 6543",
    email: "tampere@rakentra.fi",
    hours: "Mon - Fri: 08:00 - 16:00"
  },
  {
    city: "Oulu Operations",
    address: "Kirkkokatu 14, 90100 Oulu",
    phone: "+358 (0) 8 555 4321",
    email: "oulu@rakentra.fi",
    hours: "Mon - Fri: 08:00 - 15:30"
  }
];

const departments = [
  { name: "Estimating & Tenders", email: "tenders@rakentra.fi" },
  { name: "HSE & Site Safety", email: "safety@rakentra.fi" },
  { name: "Human Resources", email: "careers@rakentra.fi" },
  { name: "Media & PR relations", email: "media@rakentra.fi" }
];

const contactFaq = [
  {
    question: "How quickly can I expect an estimation for a commercial tender?",
    answer: "For standard commercial builds with completed architectural plans, our Vantaa estimation desk delivers initial bids within 10 to 14 business days. For complex infrastructural projects, timelines are set based on engineering scope audits."
  },
  {
    question: "Who should I call in case of a municipal utility line emergency?",
    answer: "Please contact our 24/7 Site Dispatch helpline immediately at +358 (0) 9 999 1120. This line connects directly to our emergency engineers for rapid crew deployment."
  },
  {
    question: "Do you offer partnership opportunities for local subcontractors?",
    answer: "Yes, we regularly collaborate with RALA-certified local subcontractors for earthmoving, glazing, and interior detailing. Subcontractors must pass our safety qualification audit before bidding on active slots."
  }
];

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    division: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!form.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^[+0-9\s-]{6,15}$/.test(form.phone)) {
      tempErrors.phone = 'Please enter a valid phone number (6 to 15 digits).';
    }

    if (!form.division) tempErrors.division = 'Please select a construction division.';
    if (!form.subject.trim()) tempErrors.subject = 'Subject is required.';
    
    if (!form.message.trim() || form.message.length < 20) {
      tempErrors.message = 'Please provide a message detailing your request (min 20 characters).';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted contact request:', form);
      setIsSubmitted(true);
      setForm({ name: '', email: '', phone: '', division: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="contact-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      
      {/* 1. Hero Section (Varying Background: Large image with dark overlay) */}
      <header className="contact-hero bg-hero" aria-label="Contact Details Hero">
        <div className="hero-overlay"></div>
        <div className="container contact-hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">Contact Us</span>
            <h1 className="hero-title">Request Project Consultation</h1>
            <p className="hero-subtitle">
              Reach our engineering offices, coordinate emergency dispatch, or submit a request for project estimation bids.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Introduction: Contact Cards & Directory (Varying Background: Solid White) */}
      <section className="contact-cards-section bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">Locations</span>
            <h2>Regional Offices Directory</h2>
            <p className="contact-intro-p">We operate from central hubs to coordinate project sites across Finland.</p>
          </div>

          <div className="grid grid-cols-3 offices-grid">
            {offices.map((office, idx) => (
              <div key={idx} className="office-contact-card card">
                <h3 className="office-city-title">{office.city}</h3>
                
                <div className="office-detail-row">
                  <MapPin size={16} className="contact-icon-mini" />
                  <span>{office.address}</span>
                </div>
                
                <div className="office-detail-row">
                  <Phone size={16} className="contact-icon-mini" />
                  <span>{office.phone}</span>
                </div>
                
                <div className="office-detail-row">
                  <Mail size={16} className="contact-icon-mini" />
                  <span>{office.email}</span>
                </div>
                
                <div className="office-detail-row font-semibold">
                  <Clock size={16} className="contact-icon-mini" />
                  <span>{office.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content: Inquiry Form & Departments (Varying Background: Light Gray) */}
      <section className="contact-form-section bg-light section">
        <div className="container form-layout-grid">
          
          {/* Left Column: Form submission */}
          <div className="form-col bg-white">
            <span className="badge badge-accent">Inquiry Form</span>
            <h2 className="form-grid-title">Submit Project Request</h2>
            <p className="form-instruction-p">Submit details regarding your tender or scheduling requirements. Required *</p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-row-dual">
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      placeholder="Antti Laine"
                      aria-required="true"
                    />
                    {errors.name && <span className="field-error-text">{errors.name}</span>}
                  </div>
                  
                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      placeholder="antti.laine@company.fi"
                      aria-required="true"
                    />
                    {errors.email && <span className="field-error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row-dual">
                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      type="text"
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      placeholder="+358 40 123 4567"
                      aria-required="true"
                    />
                    {errors.phone && <span className="field-error-text">{errors.phone}</span>}
                  </div>

                  {/* Division Selection */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="division">Project Division *</label>
                    <select
                      id="division"
                      value={form.division}
                      onChange={(e) => setForm({ ...form, division: e.target.value })}
                      className={`form-select ${errors.division ? 'input-error' : ''}`}
                      aria-required="true"
                    >
                      <option value="">Select Division</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="infrastructure">Infrastructure & Roads</option>
                      <option value="industrial">Industrial & Warehousing</option>
                      <option value="residential">Residential Development</option>
                    </select>
                    {errors.division && <span className="field-error-text">{errors.division}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                    placeholder="Tender inquiry for Vantaa retail complex"
                    aria-required="true"
                  />
                  {errors.subject && <span className="field-error-text">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Project Description & Requirements *</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder="Describe building specifications, timeline expectations, and BIM coordinates..."
                    aria-required="true"
                  />
                  {errors.message && <span className="field-error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary submit-btn-form">
                  Submit Project Request <Send size={14} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            ) : (
              <div className="form-success-alert">
                <CheckCircle size={48} className="success-icon-alert" />
                <h3>Project Request Received</h3>
                <p>
                  Thank you for submitting your project request. Our estimating desk will review your details and contact you within 2 business days.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">Submit Another Form</button>
              </div>
            )}
          </div>

          {/* Right Column: Departments & Emergency contacts */}
          <div className="directories-col">
            <div className="directory-block bg-white">
              <h3>Department Directories</h3>
              <div className="dept-list">
                {departments.map((dept, idx) => (
                  <div key={idx} className="dept-row">
                    <span className="dept-name">{dept.name}</span>
                    <a href={`mailto:${dept.email}`} className="dept-email">{dept.email}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="emergency-dispatch-card bg-navy">
              <ShieldAlert size={36} className="dispatch-icon-glow" />
              <h3>24/7 Site Emergency Dispatch</h3>
              <p className="dispatch-number">+358 (0) 9 999 1120</p>
              <p className="dispatch-warning">
                This phone line is dedicated to municipal utility lines, structural failures, and immediate hazard reports only.
              </p>
            </div>
            
            {/* Social linkages */}
            <div className="social-links-block bg-white">
              <h3>Rakentra Online</h3>
              <div className="social-grid">
                <a href="#/linkedin" className="social-link-item">
                  <Globe size={18} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="#/facebook" className="social-link-item">
                  <Globe size={18} />
                  <span>Facebook Portal</span>
                </a>
                <a href="#/website" className="social-link-item">
                  <Globe size={18} />
                  <span>RALA Registry</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. Trust Section: FAQ accordion (Varying Background: Solid White) */}
      <section className="contact-faq-section bg-white section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="badge badge-accent">FAQ</span>
            <h2>Tender & Contact Inquiries</h2>
            <p className="faq-intro">Common questions regarding tenders, dispatch lines, and subcontractor safety requirements.</p>
          </div>
          <FAQAccordion items={contactFaq} />
        </div>
      </section>

    </motion.div>
  );
};
export default Contact;
