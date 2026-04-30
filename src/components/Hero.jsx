import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="container reveal">
        <div className="hero-badge">✦ Premier Dance Academy, with branches in Nangloi, New Delhi and Bahadurgarh, Haryana</div>
        <h1 className="hero-title title-serif">Move - Express - <br /><span style={{ color: 'var(--primary)' }}>Transform.</span></h1>
        <p className="hero-sub">
          Award-winning dance training for all ages & levels in Nangloi, New Delhi & Bahadurgarh Haryana. 
          From Bollywood to All Dance Style — find your rhythm at STEP UP DANCE ACADEMY.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#classes" className="btn-primary">Explore Classes</a>
          <a href="tel:+917982404565" className="btn-outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
