import React from 'react';
import ptPoster from '../assets/poster-personal.png';

const PersonalTraining = () => {
  return (
    <section className="pt-section section" id="pt">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">One-on-One Excellence</span>
          <h2 className="title-serif" style={{ fontSize: '4rem' }}>Personal <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>Training</em></h2>
        </div>

        <div className="founder-main">
          <div className="reveal">
            <img src={ptPoster} alt="Personal Training Poster" style={{ width: '100%', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>

          <div className="founder-details reveal">
            <div className="founder-bio-box">
              <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Weekend Batch (Sat & Sun)</h3>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginBottom: '25px', textTransform: 'uppercase' }}>Trainer: ADDY SIR</span>
              
              <p style={{ color: 'var(--muted)', marginBottom: '30px' }}>
                Exclusive training at the Nangloi branch designed for those who want to reach professional levels quickly.
              </p>

              <div className="info-card orange-border" style={{ marginBottom: '40px' }}>
                <h4>✦ What's Included</h4>
                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <li style={{ paddingLeft: '25px' }}>Body movement training</li>
                  <li style={{ paddingLeft: '25px' }}>Solo video shoot</li>
                  <li style={{ paddingLeft: '25px' }}>Music mixing</li>
                  <li style={{ paddingLeft: '25px' }}>Confidence training</li>
                  <li style={{ paddingLeft: '25px' }}>Choreography</li>
                  <li style={{ paddingLeft: '25px' }}>Reality show guidance</li>
                </ul>
              </div>

              <div style={{ background: '#111', padding: '30px', borderRadius: '15px', border: '1px solid var(--border)', marginBottom: '40px' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>Price: ₹5,000</p>
                <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>LIMITED SEATS AVAILABLE</p>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="tel:+917982404565" className="btn-primary">Book Now</a>
                <a href="tel:+919555972389" className="btn-outline">Enquire Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
