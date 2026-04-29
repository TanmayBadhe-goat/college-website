import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="footer-title">⚡🏰 Hogwarts</h3>
          <p className="footer-text">
            "Draco Dormiens Nunquam Titillandus" - Training witches and wizards since 990 AD.
          </p>
          <div className="footer-social">
            <span className="social-link">🦉</span>
            <span className="social-link">🔮</span>
            <span className="social-link">⚡</span>
            <span className="social-link">🧙</span>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/calendar">Academic Calendar</Link></li>
            <li><Link to="/library">The Library</Link></li>
            <li><Link to="/portal">Wizard Portal</Link></li>
            <li><Link to="/career">Wizarding Careers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Reach Us</h3>
          <ul className="footer-contact">
            <li>🏰 Hogwarts Castle, Scotland</li>
            <li>🦉 Owl Post Available</li>
            <li>🔥 Floo Network: HOGWARTS</li>
            <li>🚂 Platform 9¾, King's Cross</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Hogwarts School of Witchcraft and Wizardry</p>
        <p>Nitwit! Blubber! Oddment! Tweak!</p>
      </div>
    </footer>
  );
}

export default Footer;
