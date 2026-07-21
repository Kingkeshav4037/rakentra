import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award, CheckCircle } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-navy" aria-label="Site Footer">
      <div className="container footer-container">
        
        {/* Company Info Column */}
        <div className="footer-col company-info">
          <Link to="/" className="footer-logo">
            <span className="logo-bold">RAKENTRA</span>
            <span className="logo-accent">.</span>
          </Link>
          <p className="footer-desc">
            Premium Finnish construction and civil engineering. We build sustainable assets with Scandinavian simplicity and precision engineering.
          </p>
          <div className="footer-credentials">
            <div className="cred-badge">
              <Award size={18} className="cred-icon" />
              <div>
                <span className="cred-title">ISO 9001 / 14001</span>
                <span className="cred-sub">Quality & Environment</span>
              </div>
            </div>
            <div className="cred-badge">
              <CheckCircle size={18} className="cred-icon" />
              <div>
                <span className="cred-title">RALA CERTIFIED</span>
                <span className="cred-sub">Pätevyys ja Luotettavuus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Commercial Construction</Link></li>
            <li><Link to="/services">Infrastructure & Roads</Link></li>
            <li><Link to="/services">Industrial & Warehousing</Link></li>
            <li><Link to="/services">Residential Development</Link></li>
            <li><Link to="/equipment">Heavy Equipment Fleet</Link></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Rakentra</Link></li>
            <li><Link to="/projects">Case Studies</Link></li>
            <li><Link to="/careers">Open Careers</Link></li>
            <li><Link to="/blog">Industry Insights</Link></li>
            <li><Link to="/contact">Contact Offices</Link></li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="footer-col contact-col">
          <h3 className="footer-heading">Headquarters</h3>
          <div className="footer-contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>Mannerheimintie 12A, 00100 Helsinki, Finland</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} className="contact-icon" />
            <span>+358 (0) 9 123 4567</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={18} className="contact-icon" />
            <span>contact@rakentra.fi</span>
          </div>
          
          <div className="emergency-box">
            <h4 className="emergency-title">24/7 Site Dispatch</h4>
            <p className="emergency-num">+358 (0) 9 999 1120</p>
            <p className="emergency-note">For civil works and utility emergencies only.</p>
          </div>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} Rakentra Oy. All rights reserved.
          </p>
          <ul className="footer-legal-links">
            <li><a href="#/privacy">Privacy Policy</a></li>
            <li><a href="#/terms">Terms of Use</a></li>
            <li><a href="#/accessibility">Accessibility Statement (WCAG AA)</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
