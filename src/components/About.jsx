import React from 'react';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div className="about-text reveal" style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase' }}>
                ABOUT OUR ACADEMY
              </span>
            </div>
            <h2 className="title-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '30px', lineHeight: '1.2' }}>
              Best Dance Academy <br />
              in <span style={{ color: 'var(--primary)' }}>Nangloi</span> New Delhi & <span style={{ color: 'var(--primary)' }}>Bahadurgarh</span> Haryana.
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '20px' }}>
              Step Up Dance Academy has been providing award-winning dance training for many years. Our stylish, well-appointed studios host some of New Delhi’s premier instructors — offering beginner, intermediate, and advanced dance instruction.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
              We also offer taster sessions for those looking to experience new dance styles for the first time. Whatever your passion — celebrate it at our studio!
            </p>
            
            <div className="about-features" style={{ gridTemplateColumns: '1fr', gap: '15px', marginBottom: '40px' }}>
               <div className="af-item"><span className="af-icon">✦</span> 10+ Years of Excellence</div>
               <div className="af-item"><span className="af-icon">✦</span> Certified Professional Instructors</div>
               <div className="af-item"><span className="af-icon">✦</span> Specialized Reality Show Training</div>
               <div className="af-item"><span className="af-icon">✦</span> Branches in Delhi & Haryana</div>
            </div>

            <div className="about-contact-strip" style={{ justifyContent: 'flex-start' }}>
              <a href="tel:+919555972389" className="contact-pill">
                <span>📞</span> 9555972389
              </a>
              <a href="tel:+917982404565" className="contact-pill">
                <span>📞</span> 7982404565
              </a>
            </div>
          </div>

          <div className="about-visual reveal">
            <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
              <img 
                src="/Photos/Front.jpeg" 
                alt="Step Up Dance Academy Front" 
                style={{ width: '100%', display: 'block', height: 'auto' }} 
              />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--primary)', color: '#fff', padding: '10px 20px', borderRadius: '10px', fontWeight: '800', fontSize: '0.8rem' }}>
                SINCE 1999
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
