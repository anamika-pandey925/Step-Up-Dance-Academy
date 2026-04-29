import React from 'react';
import addyPhoto from '../assets/addy-photo.jpeg';

const Founder = () => {
  return (
    <section className="founder section" id="founder">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Meet the Founder</span>
          <h2 className="section-title">ADDY <em>SIR</em></h2>
          <p className="section-sub">Professional Dancer | Choreographer | Founder - STEP UP DANCE ACADEMY</p>
        </div>

        <div className="founder-grid">
          <div className="founder-visual reveal" data-delay="0">
            <div className="founder-card-wrap">
              <div 
                className="founder-img-box" 
                style={{ backgroundImage: `url(${addyPhoto})` }}
              >
                <div className="founder-overlay">
                  <h3><strong style={{ color: '#ffffff' }}>Mr.</strong> ADDY</h3>
                  <p>Founder and Choreographer of STEP UP DANCE ACADEMY</p>
                  <div className="social-links-founder">
                    <a href="https://www.instagram.com/addy_hip_hoper_official/" target="_blank" rel="noopener noreferrer">IG: 90K+</a>
                    <a href="https://www.facebook.com/addy.dancer.1?mibextid=avESrC" target="_blank" rel="noopener noreferrer">FB</a>
                    <a href="https://youtube.com/@stepupdanceacademy1999?si=R9zU4OdZfDNlxUR0" target="_blank" rel="noopener noreferrer">YT</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="founder-stats">
              <div className="f-stat"><span className="fs-num">100+</span><span className="fs-label">Trophies</span></div>
              <div className="f-stat"><span className="fs-num">150+</span><span className="fs-label">Medals</span></div>
              <div className="f-stat"><span className="fs-num">200+</span><span className="fs-label">Certificates</span></div>
            </div>
          </div>

          <div className="founder-info reveal" data-delay="1">
            <p className="founder-bio">Born and brought up in Delhi, I hold an Engineering background while passionately pursuing dance. As the founder of STEP UP DANCE ACADEMY, I aim to transform dreams into powerful performances with <strong>2 Branches in Delhi & Haryana</strong> and over <strong>300+ Students across India</strong>.</p>

            <div className="founder-acc-grid">
              <div className="acc-box">
                <h4>🏆 Awards & Achievements</h4>
                <ul>
                  <li><strong>2025:</strong> 1st Position in Indian Hip Hop Championship Delhi</li>
                  <li><strong>2024:</strong> Best Choreographer (Master Mehul)</li>
                  <li><strong>2023:</strong> Best Choreographer (Mudassar Khan)</li>
                  <li><strong>2022:</strong> Best Choreographer (Deepika Singh)</li>
                  <li><strong>2021:</strong> Best Choreographer (Sara Khan)</li>
                </ul>
              </div>

              <div className="acc-box">
                <h4>📺 TV & Dance Shows</h4>
                <ul>
                  <li><strong>Winner:</strong> Nacho Dil Se Season 3</li>
                  <li><strong>Semi-Finalist:</strong> India’s Talent Fight</li>
                  <li><strong>Jio Hotstar:</strong> Good Gaming India</li>
                  <li><strong>Zee Telugu:</strong> Aata Show</li>
                </ul>
              </div>

              <div className="acc-box">
                <h4>⚖️ Judging Experience</h4>
                <ul>
                  <li>Mad For Stage (Zee TV & History TV)</li>
                  <li>Nach Baliye Talent Show (Big Magic)</li>
                  <li>Crazy Hearts Talent Show</li>
                  <li>Ab Bolega India & Many More..</li>
                </ul>
              </div>

              <div className="acc-box">
                <h4>🌟 Projects & Work</h4>
                <ul>
                  <li>Worked with Yo Yo Honey Singh</li>
                  <li>Nasha Mukti Abhiyan 2023 (Delhi)</li>
                  <li>School Choreography (Kidzee, Bitty Birds)</li>
                  <li>Officially Verified on Instagram, Tiki, Moj, Triller, Josh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
