import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about" style={{ textAlign: 'center' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '40px' }}>
          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', color: '#ff4500', textTransform: 'uppercase' }}>ABOUT US</span>
        </div>
        <h2 className="title-serif reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '40px' }}>
          Best Dance Academy <br />in Nangloi New Delhi & Bahadurgarh Haryana.
        </h2>
        <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
            We've been providing award-winning dance training for many years. At Step Up Dance Academy, our stylish, well-appointed studios host some of New Delhi's premier instructors — offering beginner, intermediate, and advanced dance instruction.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
            We also offer taster sessions for those looking to experience new dance styles for the first time. Whatever your passion — celebrate it at our studio!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
