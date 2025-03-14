import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  return (
    <div className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#projects" onClick={() => scrollToSection('project')}>Projects</a>
        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
        <a href="#resume" onClick={() => scrollToSection('skills')}>Skills</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
