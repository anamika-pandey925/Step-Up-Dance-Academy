import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-card main-card">
              <div className="about-img-placeholder">
                <div className="dance-icon">💃</div>
                <p>Award-Winning Studio</p>
              </div>
            </div>
            <div className="about-card side-card">
              <div className="about-img-placeholder sm">
                <div className="dance-icon">🏆</div>
                <p>Best in Nangloi</p>
              </div>
            </div>
            <div className="exp-badge">
              <span className="exp-num">10+</span>
              <span>Years of Excellence</span>
            </div>
          </div>
          <div className="about-text reveal">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Best Dance Academy<br />in <em>Nangloi </em>New Delhi & <em>Bahadurgarh</em> Haryana.</h2>
            <p className="about-para">We've been providing award-winning dance training for many years. At Step Up Dance Academy, our stylish, well-appointed studios host some of New Delhi's premier instructors — offering beginner, intermediate, and advanced dance instruction.</p>
            <p className="about-para">We also offer taster sessions for those looking to experience new dance styles for the first time. Whatever your passion — celebrate it at our studio!</p>
            <div className="about-features">
              <div className="af-item"><span className="af-icon">✦</span> All experience levels welcome</div>
              <div className="af-item"><span className="af-icon">✦</span> Certified & expert instructors</div>
              <div className="af-item"><span className="af-icon">✦</span> Children's graded programs</div>
              <div className="af-item"><span className="af-icon">✦</span> TV Reality Show preparation</div>
            </div>
            <div className="about-contact-strip">
              <a href="tel:+919555972389" className="contact-pill">📞 09555972389</a>
              <a href="tel:+917982404565" className="contact-pill">📞 079824 04565</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
