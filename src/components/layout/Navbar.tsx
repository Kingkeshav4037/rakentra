import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-shrunk' : ''}`} aria-label="Main Navigation">
      <div className="navbar-inner">
        <div className="navbar-content">
          {/* Brand Section */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <div className="brand-wrapper">
              <div className="brand-text">
                <div className="brand-name">RAKENTRA<span className="brand-accent">.</span></div>
                <div className="brand-tagline">BUILDING EXCELLENCE</div>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div className="navbar-divider"></div>

          {/* Desktop Navigation */}
          <div className="navbar-nav-desktop">
            <ul className="navbar-links">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/equipment" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  Fleet
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="navbar-actions">
              <Link to="/contact" className="btn btn-primary nav-cta-btn" onClick={closeMenu}>
                Get Consultation
              </Link>
              <div className="nav-rala-badge">
                <ShieldCheck size={16} />
                <span>RALA Certified</span>
              </div>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`navbar-menu-mobile ${isOpen ? 'is-open' : ''}`} id="navbar-menu">
          <ul className="navbar-links-mobile">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/equipment" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                Fleet
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'mobile-link active-link' : 'mobile-link')} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="mobile-actions">
            <Link to="/contact" className="btn btn-primary nav-cta-btn-mobile" onClick={closeMenu}>
              Get Consultation
            </Link>
            <div className="nav-rala-badge-mobile">
              <ShieldCheck size={16} />
              <span>RALA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
