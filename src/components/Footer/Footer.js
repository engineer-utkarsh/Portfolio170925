import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com" aria-label="GitHub" className="social-link">
            <span className="social-icon">🐱</span>
            <span className="social-text">GitHub</span>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="social-link">
            <span className="social-icon">💼</span>
            <span className="social-text">LinkedIn</span>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="social-link">
            <span className="social-icon">🐦</span>
            <span className="social-text">Twitter</span>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Utkarsh Shukla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;