import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      if (window.innerWidth > 720) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const headerClass = `header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`;

  return (
    <header className={headerClass}>
      <nav className="nav">
        <div className="logo">
          <span>Utkarsh Shukla</span>
        </div>
        
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Overlay for mobile menu */}
        <div 
          className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      </nav>
    </header>
  );
};

export default Header;