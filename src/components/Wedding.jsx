import React from 'react';
import weddingVid from '../assets/wedding.mp4';

const Wedding = () => {
  return (
    <section className="wedding section" id="wedding">
      <div className="container">
        <div className="about-grid"> {/* Reusing grid for consistent layout */}
          <div className="about-text reveal">
            <span className="section-tag">Special Occasions</span>
            <h2 className="section-title">Premium <em>Wedding</em> Choreography</h2>
            <p className="about-para" style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
              Make your big day unforgettable with custom dance routines for Sangeet, Mehendi, and the Wedding day.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--primary)' }}>✔</span> Custom routines for the whole family
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--primary)' }}>✔</span> Professional choreography for bride & groom
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--primary)' }}>✔</span> Music mixing and thematic planning
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">Book Now</a>
              <a href="https://instagram.com" className="btn-ghost">View on Instagram</a>
            </div>
          </div>

          <div className="about-visual reveal">
            <div className="about-img-box" style={{ borderRadius: 'var(--r)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <video 
                src={weddingVid} 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.8rem' }}>
              LIVE PRACTICE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wedding;
