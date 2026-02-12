/**
 * Navbar Component
 * Responsive navigation bar with mobile hamburger menu
 * Props:
 *   - currentPage: string indicating the active page
 *   - setCurrentPage: function to change the current page
 */
import React, { useState } from 'react';

function Navbar({ currentPage, setCurrentPage }) {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'departments', label: 'Departments' },
    { id: 'admission', label: 'Admission' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle navigation click
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
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
            <li key={link.id} className="navbar-item">
              <button
                className={`navbar-link ${currentPage === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
