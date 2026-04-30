import React from 'react';

function About() {
  return (
    <section className="about section" id="about" style={{ textAlign: 'center' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '20px' }}>
          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase' }}>
            ABOUT US
          </span>
        </div>
        <h2 className="title-serif reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '40px', lineHeight: '1.2' }}>
          Best Dance Academy <br />
          in <span style={{ color: 'var(--primary)' }}>Nangloi</span> New Delhi & <span style={{ color: 'var(--primary)' }}>Bahadurgarh</span> Haryana.
        </h2>
        <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
            We've been providing award-winning dance training for many years. At Step Up Dance Academy, our stylish, well-appointed studios host some of New Delhi's premier instructors — offering beginner, intermediate, and advanced dance instruction.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '40px' }}>
            We also offer taster sessions for those looking to experience new dance styles for the first time. Whatever your passion — celebrate it at our studio!
          </p>
          
          <div className="about-features" style={{ maxWidth: '700px', margin: '0 auto 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left' }}>
            <div className="af-item"><span className="af-icon" style={{ color: 'var(--primary)' }}>✦</span> All experience levels welcome</div>
            <div className="af-item"><span className="af-icon" style={{ color: 'var(--primary)' }}>✦</span> Certified & expert instructors</div>
            <div className="af-item"><span className="af-icon" style={{ color: 'var(--primary)' }}>✦</span> Children's graded programs</div>
            <div className="af-item"><span className="af-icon" style={{ color: 'var(--primary)' }}>✦</span> TV Reality Show preparation</div>
          </div>
          
          <div className="about-contact-strip" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="tel:+919555972389" className="contact-pill" style={{ padding: '12px 24px', borderRadius: '50px', border: '1px solid var(--border)', background: 'var(--bg2)', color: '#fff', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--primary)' }}>📞</span> 09555972389
            </a>
            <a href="tel:+917982404565" className="contact-pill" style={{ padding: '12px 24px', borderRadius: '50px', border: '1px solid var(--border)', background: 'var(--bg2)', color: '#fff', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--primary)' }}>📞</span> 079824 04565
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
