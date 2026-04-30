import React from 'react';
import logo from '../assets/Photos/logo.jpg.jpeg';

const Footer = () => {
  return (
    <footer className="footer section" style={{ background: '#000', padding: '80px 0 40px', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ marginBottom: '25px' }}>
              <img src={logo} alt="Step Up Logo" className="logo-img" />
              <span>STEP UP</span>
            </a>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              Move – Express – Transform. The premier dance academy in Delhi and Haryana, dedicated to professional dance training and performance excellence.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#about" style={{ color: 'var(--muted)', transition: '0.3s' }}>About Us</a></li>
              <li><a href="#classes" style={{ color: 'var(--muted)', transition: '0.3s' }}>Dance Styles</a></li>
              <li><a href="#branches" style={{ color: 'var(--muted)', transition: '0.3s' }}>Our Branches</a></li>
              <li><a href="#wedding" style={{ color: 'var(--muted)', transition: '0.3s' }}>Wedding Choreography</a></li>
              <li><a href="#contact" style={{ color: 'var(--muted)', transition: '0.3s' }}>Book Trial</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Connect</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: 'var(--muted)', transition: '0.3s' }}>Instagram (90K+)</a></li>
              <li><a href="#" style={{ color: 'var(--muted)', transition: '0.3s' }}>Facebook</a></li>
              <li><a href="#" style={{ color: 'var(--muted)', transition: '0.3s' }}>YouTube</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h4>
            <p style={{ color: 'var(--muted)', marginBottom: '10px' }}>📞 9555972389, 7982404565</p>
            <p style={{ color: 'var(--muted)' }}>📍 Nangloi, New Delhi</p>
            <p style={{ color: 'var(--muted)' }}>📍 Bahadurgarh, Haryana</p>
          </div>
        </div>

        <div style={{ paddingTop: '40px', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--muted)', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} STEP UP DANCE ACADEMY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
