import React from 'react';
import studioImg from '../assets/studio.png';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-img-box">
              <img src={studioImg} alt="Step Up Dance Studio" />
            </div>
            <div className="experience-badge">
              <span className="exp-val">10+</span>
              <span className="exp-txt">Years Experience</span>
            </div>
          </div>

          <div className="about-text reveal">
            <span className="section-tag">Since 2015</span>
            <h2 className="section-title">Best Dance Academy in <em>Nangloi</em> Delhi & <em>Bahadurgarh</em> Haryana</h2>
            <p className="about-para" style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
              Step Up Dance Academy is an award-winning studio dedicated to the art of dance. We offer professional training from beginner to advanced levels, ensuring every student finds their rhythm.
            </p>
            <p className="about-para" style={{ color: 'var(--muted)', marginBottom: '32px' }}>
              Our certified instructors provide a supportive environment for students of all ages. Whether you're preparing for a reality show or just want to have fun, we have a program for you.
            </p>
            
            <div className="about-features">
              <div className="feat-item"><span>✦</span> All levels welcome</div>
              <div className="feat-item"><span>✦</span> Certified instructors</div>
              <div className="feat-item"><span>✦</span> Children programs</div>
              <div className="feat-item"><span>✦</span> Reality show prep</div>
            </div>

            <div style={{ marginTop: '48px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+919555972389" className="btn-ghost">Call: 9555972389</a>
              <a href="tel:+917982404565" className="btn-ghost">Call: 7982404565</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
