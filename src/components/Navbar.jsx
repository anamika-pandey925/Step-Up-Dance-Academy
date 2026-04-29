import React, { useState, useEffect } from 'react';
import logo from '../assets/Photos/logo.jpg.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
        <a href="#" className="nav-logo">
          <img src={logo} alt="Step Up Dance Academy Logo" className="logo-img" />
          <span>Step Up <em>Dance Academy</em></span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#branches">Branches</a></li>
          <li><a href="#wedding">Wedding</a></li>
          <li><a href="#tv-reality">TV Reality</a></li>
          <li><a href="#showcase">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="btn-primary nav-cta">Book Trial</a>
        <button 
          className="burger" 
          id="burger" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#hero" className="mm-link" onClick={closeMenu}>Home</a>
        <a href="#about" className="mm-link" onClick={closeMenu}>About</a>
        <a href="#branches" className="mm-link" onClick={closeMenu}>Branches</a>
        <a href="#wedding" className="mm-link" onClick={closeMenu}>Wedding</a>
        <a href="#tv-reality" className="mm-link" onClick={closeMenu}>TV Reality</a>
        <a href="#showcase" className="mm-link" onClick={closeMenu}>Gallery</a>
        <a href="#contact" className="mm-link" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="btn-primary mm-cta" onClick={closeMenu}>Book Trial</a>
      </div>
    </>
  );
};

export default Navbar;
