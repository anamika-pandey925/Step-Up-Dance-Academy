import React, { useState } from 'react';
import logo from '../assets/Photos/logo.jpg.jpeg';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#" className="nav-logo">
          <img src={logo} alt="Step Up Logo" className="logo-img" />
          <span>STEP UP <em>DANCE</em></span>
        </a>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#branches" onClick={() => setIsOpen(false)}>Branches</a></li>
          <li><a href="#wedding" onClick={() => setIsOpen(false)}>Wedding</a></li>
          <li><a href="#tv-reality" onClick={() => setIsOpen(false)}>TV Reality</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li className="mobile-only"><a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>Book Trial</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="#contact" className="btn-primary nav-cta" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>Book Trial</a>
          <button className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .burger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }
        .burger span {
          width: 30px;
          height: 2px;
          background: #fff;
          transition: 0.3s;
        }
        .mobile-only { display: none; }

        @media (max-width: 1024px) {
          .burger { display: flex; }
          .nav-cta { display: none; }
          .nav-links {
            position: fixed;
            top: 0; right: ${isOpen ? '0' : '-100%'};
            width: 80%; height: 100vh;
            background: var(--bg2);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.4s;
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
            display: flex;
          }
          .mobile-only { display: block; margin-top: 20px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
