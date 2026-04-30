import React from 'react';
import ptImg from '../assets/personal-training.jpeg';

const PersonalTraining = () => {
  return (
    <section className="pt-section section" id="pt">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">One-on-One Excellence</span>
          <h2 className="section-title">Personal <em>Training</em> Programs</h2>
        </div>

        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-img-box">
              <img src={ptImg} alt="Personal Training with Addy Sir" />
            </div>
            <div className="experience-badge" style={{ background: 'var(--neon-purple)' }}>
              <span className="exp-val">₹5,000</span>
              <span className="exp-txt">Limited Seats</span>
            </div>
          </div>

          <div className="about-text reveal">
            <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Weekend Batch (Sat & Sun)</h3>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginBottom: '25px' }}>Trainer: ADDY SIR</span>
            
            <p className="about-para">Exclusive training at the Nangloi branch including:</p>
            <div className="about-features" style={{ marginBottom: '40px' }}>
              <div className="feat-item"><span>✦</span> Body movement training</div>
              <div className="feat-item"><span>✦</span> Advanced Choreography</div>
              <div className="feat-item"><span>✦</span> Solo video shoot</div>
              <div className="feat-item"><span>✦</span> Music mixing</div>
              <div className="feat-item"><span>✦</span> Confidence training</div>
              <div className="feat-item"><span>✦</span> Reality show guidance</div>
            </div>

            <div style={{ background: 'var(--bg2)', padding: '30px', borderRadius: 'var(--r)', border: '1px solid var(--border)', marginBottom: '40px' }}>
              <h4 style={{ color: 'var(--neon-pink)', marginBottom: '10px' }}>Premium Service</h4>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Personal Choreographer: ₹10,000 <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>/ per event</span></p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Includes: Theme planning, advanced choreography, music mixing, and practice sessions.</p>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="tel:+919555972389" className="btn-primary">Register Now</a>
              <a href="tel:+917982404565" className="btn-ghost">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
