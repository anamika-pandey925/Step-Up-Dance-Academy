import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content reveal">
        <span className="hero-badge">Premier Dance Academy in Nangloi Delhi & Bahadurgarh Haryana</span>
        <h1 className="hero-title">Move – Express – <br /><em>Transform.</em></h1>
        <p className="hero-sub">
          Award-winning dance training for all ages & levels. Join the most prestigious dance community in Delhi and Haryana.
        </p>
        
        <div className="hero-actions">
          <a href="#classes" className="btn-primary">Explore Classes</a>
          <a href="tel:+917982404565" className="btn-ghost">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now (+91 7982404565)
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">18+</span>
            <span className="stat-label">Google Reviews</span>
          </div>
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Dance Styles</span>
          </div>
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Years Training</span>
          </div>
        </div>
      </div>

      <div className="hero-visual reveal" style={{ position: 'absolute', right: '5%', top: '20%', zIndex: 1, opacity: 0.1, pointerEvents: 'none' }}>
        {/* Silhouette placeholder for premium feel */}
        <div style={{ width: '400px', height: '600px', background: 'linear-gradient(to bottom, var(--primary), transparent)', borderRadius: '200px 200px 0 0', filter: 'blur(80px)' }}></div>
      </div>
      
      <div className="grid-lines" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', zIndex: 0 }}></div>
    </section>
  );
};

export default Hero;
