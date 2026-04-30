import React from 'react';
import addyImg from '../assets/addy-photo.jpeg';

const Founder = () => {
  return (
    <section className="founder section" id="founder">
      <div className="container">
        <div className="founder-header reveal">
          <h2 className="title-serif">ADDY SIR</h2>
          <p>Professional Dancer | Choreographer | Founder - STEP UP DANCE ACADEMY</p>
        </div>

        <div className="founder-main">
          <div className="founder-card reveal">
            <div className="founder-img-box">
              <img src={addyImg} alt="Addy Sir" />
              <div className="founder-img-label">
                <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>Mr. ADDY</h3>
                <p style={{ fontSize: '0.8rem', fontWeight: '700' }}>Founder and Choreographer of STEP UP DANCE ACADEMY</p>
              </div>
            </div>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <a href="#" className="btn-outline" style={{ padding: '8px 15px', fontSize: '0.7rem' }}>IG: 90K+</a>
              <a href="#" className="btn-outline" style={{ padding: '8px 15px', fontSize: '0.7rem' }}>FB</a>
              <a href="#" className="btn-outline" style={{ padding: '8px 15px', fontSize: '0.7rem' }}>YT</a>
            </div>
          </div>

          <div className="founder-details">
            <div className="founder-bio-box reveal">
              <p>
                Born and brought up in Delhi, I hold an Engineering background while passionately pursuing dance. 
                As the founder of <strong>STEP UP DANCE ACADEMY</strong>, I aim to transform dreams into powerful performances 
                with <strong>2 Branches in Delhi & Haryana</strong> and over <strong>300+ Students across India</strong>.
              </p>
            </div>

            <div className="founder-grid-info">
              <div className="info-card reveal">
                <h4>🏆 Awards & Achievements</h4>
                <ul>
                  <li><strong>2025:</strong> 1st Position in Indian Hip Hop Championship Delhi</li>
                  <li><strong>2024:</strong> Best Choreographer (Master Mohul)</li>
                  <li><strong>2023:</strong> Best Choreographer (Mudassar Khan)</li>
                  <li><strong>2022:</strong> Best Choreographer (Deepika Singh)</li>
                  <li><strong>2021:</strong> Best Choreographer (Sara Khan)</li>
                </ul>
              </div>

              <div className="info-card reveal">
                <h4>📺 TV & Dance Shows</h4>
                <ul>
                  <li><strong>Winner:</strong> Nacho Dil Se Season 3</li>
                  <li><strong>Semi-Finalist:</strong> India's Talent Fight</li>
                  <li><strong>Jio Hotstar:</strong> Good Gaming India</li>
                  <li><strong>Zee Telugu:</strong> Aata Show</li>
                </ul>
              </div>

              <div className="info-card reveal orange-border">
                <h4>⚖️ Judging Experience</h4>
                <ul>
                  <li>Mad For Stage (Zee TV & History TV)</li>
                  <li>Nach Baliye Talent Show (Big Magic)</li>
                  <li>Crazy Hearts Talent Show</li>
                  <li>Ab Bolega India & Many More..</li>
                </ul>
              </div>

              <div className="info-card reveal">
                <h4>🌟 Projects & Work</h4>
                <ul>
                  <li>Worked with Yo Yo Honey Singh</li>
                  <li>Nasha Mukti Abhiyan 2023 (Delhi)</li>
                  <li>School Choreography (Kidzee, Bitty Birds)</li>
                  <li>Officially Verified on Instagram, Tiki, Moj, Triller, Josh</li>
                </ul>
              </div>
            </div>

            <div className="stats-bar reveal">
              <div className="stat-box">
                <span className="stat-val">100+</span>
                <span className="stat-lbl">Trophies</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">150+</span>
                <span className="stat-lbl">Medals</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">200+</span>
                <span className="stat-lbl">Certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
