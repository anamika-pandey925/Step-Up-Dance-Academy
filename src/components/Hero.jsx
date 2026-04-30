import React from 'react';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="container relative z-10">
        <div className="hero-content reveal" data-speed="0.2">
          <span className="hero-badge">✦ Premier Dance Academy, with branches in Nangloi, New Delhi and Bahadurgarh, Haryana</span>
          <h1 className="hero-title">
            Move - Express - <br />
            <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>Transform.</em>
          </h1>
          <p className="hero-sub">
            Award-winning dance training for all ages & levels in Nangloi, New Delhi & Bahadurgarh Haryana. From Bollywood to
            All Dance Style — find your rhythm at STEP UP DANCE ACADEMY.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px' }}>
            <a href="#classes" className="btn-primary hero-btn">Explore Classes</a>
            <a href="tel:+917982404565" className="btn-outline hero-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Now
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">18</span><span className="stat-label">Google Reviews</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-num">5</span><span className="stat-label">Dance Styles</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-num">10</span><span className="stat-label">Years Training</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
