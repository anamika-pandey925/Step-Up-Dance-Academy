import React from 'react';
import addyImg from '../assets/addy-photo.jpeg';

const Founder = () => {
  return (
    <section className="founder section" id="founder">
      <div className="container">
        <div className="founder-grid">
          <div className="founder-visual reveal">
            <div className="founder-img">
              <img src={addyImg} alt="Addy Sir" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <a href="https://instagram.com" className="btn-ghost" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Instagram (90K+)</a>
              <a href="https://facebook.com" className="btn-ghost" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Facebook</a>
            </div>
          </div>

          <div className="founder-info reveal">
            <span className="section-tag">The Visionary</span>
            <h3 className="section-title">ADDY <em>SIR</em></h3>
            <span className="founder-role">Founder, Professional Dancer & Choreographer</span>
            
            <p className="founder-bio" style={{ marginBottom: '24px' }}>
              With an engineering background fueled by an unstoppable passion for dance, Addy Sir has built Step Up Dance Academy from the ground up. Today, he leads two branches with over 300+ students.
            </p>

            <div className="founder-stats">
              <div className="f-stat"><span>100+</span><span>Trophies</span></div>
              <div className="f-stat"><span>150+</span><span>Medals</span></div>
              <div className="f-stat"><span>200+</span><span>Certificates</span></div>
            </div>

            <div className="achievements" style={{ marginTop: '40px' }}>
              <h4 style={{ marginBottom: '15px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Achievements & TV Shows</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <li style={{ color: 'var(--muted)' }}>• 2025 Hip Hop Champion Delhi</li>
                <li style={{ color: 'var(--muted)' }}>• Nacho Dil Se Winner</li>
                <li style={{ color: 'var(--muted)' }}>• Best Choreographer (2021–2024)</li>
                <li style={{ color: 'var(--muted)' }}>• India’s Talent Fight Semi-finalist</li>
                <li style={{ color: 'var(--muted)' }}>• Zee Telugu Aata Show</li>
                <li style={{ color: 'var(--muted)' }}>• Worked with Yo Yo Honey Singh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
