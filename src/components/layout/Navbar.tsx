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
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-bold">RAKENTRA</span>
          <span className="logo-accent">.</span>
        </Link>

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

        {/* Navigation Links */}
        <div className={`navbar-links-wrapper ${isOpen ? 'is-open' : ''}`} id="navbar-menu">
          <ul className="navbar-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/equipment" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                Fleet
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="navbar-cta-wrapper">
            <Link to="/contact" className="btn btn-primary nav-cta-btn" onClick={closeMenu}>
              Get Consultation
            </Link>
            <div className="nav-rala-badge">
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
