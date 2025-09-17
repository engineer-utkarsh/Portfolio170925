import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com" aria-label="GitHub">GitHub</a>
        <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
        <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Utkarsh Shukla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;