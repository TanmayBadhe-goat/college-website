/**
 * Navbar 
 */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation links data
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/departments', label: 'Departments' },
    { to: '/admission', label: 'Admission' },
    { to: '/contact', label: 'Contact' },
    { to: '/calendar', label: 'Calendar' },
    { to: '/library', label: 'Library' },
    { to: '/portal', label: 'Portal' },
    { to: '/career', label: 'Career' },
  ];

  // Handle navigation click
  const handleNavClick = (to) => {
    navigate(to);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand" onClick={() => handleNavClick('/')}>
          <span className="brand-icon">⚡</span>
          <span className="brand-text">Hogwarts</span>
        </div>

        {/* Hamburger button for mobile */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="navbar-item">
              <NavLink
                to={link.to}
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
