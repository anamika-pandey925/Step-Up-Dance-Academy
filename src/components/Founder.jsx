import React from 'react';

const Founder = () => {
  return (
    <section className="founder section" id="founder">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">The Visionary</span>
          <h2 className="title-serif" style={{ fontSize: '4.5rem' }}>ADDY <em>SIR</em></h2>
          <p className="section-sub">Professional Dancer | Choreographer | Founder of STEP UP DANCE ACADEMY</p>
        </div>

        <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '60px', alignItems: 'start' }}>
          <div className="founder-card-premium reveal">
            <div className="founder-img-container" style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
              <img src="/addy-photo.jpeg" alt="Addy Sir" style={{ width: '100%', display: 'block' }} />
              <div className="founder-overlay" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '30px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>Mr. ADDY</h3>
                    <span style={{ color: '#1da1f2' }}>Verified ✓</span>
                 </div>
                 <p style={{ fontSize: '0.9rem', color: '#fff', fontWeight: '600' }}>Founder & Head Choreographer</p>
              </div>
            </div>
            
            <div className="founder-socials" style={{ display: 'flex', gap: '15px', marginTop: '30px', justifyContent: 'center' }}>
              <a href="https://www.instagram.com/addy_hip_hoper_official/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '12px 20px', fontSize: '0.8rem' }}>Instagram (90K+)</a>
              <a href="https://www.facebook.com/stepupdanceacademy.official" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '12px 20px', fontSize: '0.8rem' }}>Facebook</a>
              <a href="https://youtube.com/@stepupdanceacademy1999?si=R9zU4OdZfDNlxUR0" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '12px 20px', fontSize: '0.8rem' }}>YouTube</a>
            </div>
          </div>

          <div className="founder-details reveal">
            <div className="founder-bio reveal" style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '30px', border: '1px solid var(--border)', marginBottom: '40px' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                Born and brought up in Delhi, I hold an <span style={{ color: '#fff' }}>Engineering background</span> while passionately pursuing dance. 
                As the founder of <span style={{ color: 'var(--primary)', fontWeight: '700' }}>STEP UP DANCE ACADEMY</span>, I aim to transform dreams into powerful performances 
                with <span style={{ color: '#fff' }}>2 Branches in Delhi & Haryana</span> and over <span style={{ color: '#fff' }}>300+ Students</span> across India.
              </p>
            </div>

            <div className="founder-achievements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '40px' }}>
              <div className="achievement-card reveal" style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '1.3rem' }}>🏆 Awards</h4>
                <ul style={{ listStyle: 'none', color: 'var(--muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   <li><strong>2025:</strong> 1st Indian Hip Hop Championship Delhi</li>
                   <li><strong>2024:</strong> Best Choreographer (By Master Mohul)</li>
                   <li><strong>2023:</strong> Best Choreographer (By Mudassar Khan)</li>
                   <li><strong>2022:</strong> Best Choreographer (By Deepika Singh)</li>
                   <li><strong>2021:</strong> Best Choreographer (By Sara Khan)</li>
                </ul>
              </div>

              <div className="achievement-card reveal" style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <h4 style={{ color: '#eab308', marginBottom: '20px', fontSize: '1.3rem' }}>📺 TV Shows</h4>
                <ul style={{ listStyle: 'none', color: 'var(--muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   <li><strong>Winner:</strong> Nacho Dil Se Season 3</li>
                   <li><strong>Semi-Finalist:</strong> India's Talent Fight</li>
                   <li><strong>Jio Hotstar:</strong> Good Gaming India</li>
                   <li><strong>Zee Telugu:</strong> Aata Show</li>
                </ul>
              </div>

              <div className="achievement-card reveal" style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '20px', fontSize: '1.3rem' }}>⚖️ Judging</h4>
                <ul style={{ listStyle: 'none', color: 'var(--muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   <li>Mad For Stage (Zee TV & History TV)</li>
                   <li>Nach Baliye Talent Show (Big Magic)</li>
                   <li>Crazy Hearts Talent Show</li>
                   <li>Ab Bolega India & 50+ State Shows</li>
                </ul>
              </div>

              <div className="achievement-card reveal" style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <h4 style={{ color: '#a855f7', marginBottom: '20px', fontSize: '1.3rem' }}>🌟 Projects</h4>
                <ul style={{ listStyle: 'none', color: 'var(--muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   <li>Worked with Yo Yo Honey Singh</li>
                   <li>Nasha Mukti Abhiyan 2023 (Delhi Govt)</li>
                   <li>Verified on IG, Tiki, Moj, Triller, Josh</li>
                   <li>School Choreography (Kidzee, Bitty Birds)</li>
                </ul>
              </div>
            </div>

            <div className="stats-strip reveal" style={{ display: 'flex', justifyContent: 'space-around', background: 'var(--primary)', padding: '30px', borderRadius: '24px' }}>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff' }}>100+</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'rgba(255,255,255,0.8)' }}>TROPHIES</div>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff' }}>150+</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'rgba(255,255,255,0.8)' }}>MEDALS</div>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff' }}>200+</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'rgba(255,255,255,0.8)' }}>CERTIFICATES</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
