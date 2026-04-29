import React from 'react';
import logo from '../assets/Photos/logo.jpg.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo footer-logo">
              <img src={logo} alt="Step Up Dance Academy Logo" className="logo-img" />
              <span>Step Up <em>Dance Academy</em></span>
            </a>
            <p>Empowering dancers through professional training, artistic expression, and a passion for movement. Join our community today.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/stepupdanceacademy.official" className="social-icon fb" aria-label="Facebook">FB</a>
              <a href="https://www.instagram.com/step_up_dance_academy_" className="social-icon ig" aria-label="Instagram">IG</a>
              <a href="https://youtube.com/@stepupdanceacademy1999" className="social-icon yt" aria-label="YouTube">YT</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Navigation</h5>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#branches">Branches</a>
            <a href="#wedding">Wedding</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Dance Styles</h5>
            <a href="#classes">Bollywood</a>
            <a href="#classes">Hip-Hop</a>
            <a href="#classes">Classical</a>
            <a href="#classes">Contemporary</a>
            <a href="#classes">Ballet & Jazz</a>
            <a href="#classes">Kids Program</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="tel:+919555972389">📞 09555972389</a>
            <a href="tel:+917982404565">📞 07982404565</a>
            <span>📍 Nangloi, New Delhi</span>
            <span>📍 Bahadurgarh, Haryana</span>
            <span>⏰ 10 AM – 9 PM (Mon–Sat)</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Step Up Dance Academy. All rights reserved.</span>
          <span>Designed with ♥ for dancers</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
