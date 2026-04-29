import React from 'react';
import ptPoster from '../assets/personal-training.jpeg';
import trainingVid from '../assets/training.mp4';
import ptBatchVid from '../assets/Personal-training-batch.mp4';
import manishVid from '../assets/Manish.mp4';
import anuskhaVid from '../assets/Anuskha.mp4';
import navyaVid from '../assets/Navya.mp4';
import kavyaTvVid from '../assets/kavya-tv-reality-show.mp4';
import kavyaVid from '../assets/Kavya.mp4';
import kavyaAVid from '../assets/Kavya-A.mp4';

const PersonalTraining = () => {
  return (
    <section className="personal-training section" id="personal-training">
      <div className="container">
        <div className="presents-tag reveal" style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '4px', color: 'var(--primary)', marginBottom: '12px' }}>PRESENTS</div>
        <div className="section-header reveal">
          <span className="section-tag">Weekend Special</span>
          <h2 className="section-title">Personal Training <em>Batch</em></h2>
          <p className="section-sub">Saturday & Sunday | Training from @addy_hip_hoper_official Sir</p>
        </div>

        <div className="about-grid" style={{ gap: '60px', marginTop: '40px', gridTemplateColumns: '1fr 1.2fr', display: 'grid' }}>
          <div className="about-visual reveal" style={{ display: 'block' }}>
            <div style={{ position: 'relative', borderRadius: '24px', padding: '8px', background: 'linear-gradient(135deg, rgba(192,38,211,0.2), rgba(139,92,246,0.1))', border: '1px solid var(--border)' }}>
              <img src={ptPoster} alt="Personal Training Batch" style={{ borderRadius: '16px', width: '100%', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
            </div>
          </div>
          <div className="about-text reveal" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '24px', color: 'var(--text)' }}>Professional Training for TV Reality Shows & Competitions</h3>
            <div className="about-features" style={{ gridTemplateColumns: '1fr', gap: '16px', margin: '0 0 32px 0', maxWidth: '100%' }}>
              <div className="af-item"><span className="af-icon">✦</span> Working on Body Movements, Foundations & Specific Dance Styles</div>
              <div className="af-item"><span className="af-icon">✦</span> Choreography for upcoming TV Reality Shows & Competitions</div>
              <div className="af-item"><span className="af-icon">✦</span> Personal Solo Video Shoot</div>
              <div className="af-item"><span className="af-icon">✦</span> Special Mixing Songs for Students</div>
              <div className="af-item"><span className="af-icon">✦</span> Musicality Class and Confidence Class</div>
              <div className="af-item"><span className="af-icon">✦</span> Tips and Guidance for Reality Show Selection</div>
            </div>
            <div style={{ background: 'rgba(255, 69, 0, 0.05)', padding: '28px', borderRadius: '20px', border: '1px solid var(--border)', width: '100%', marginBottom: '28px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '12px' }}>So Are you ready to join us...?</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>₹5,000</span>
                <span style={{ background: 'rgba(192,38,211,0.2)', color: '#fff', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(192,38,211,0.5)' }}>Limited Seats</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>📍</span>
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>Location: STEP UP DANCE ACADEMY HALL</strong>
                    <span style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.5, display: 'block' }}> HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041 NEAREST NANGLOI METRO STATION</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>📞</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}><strong style={{ color:'#fff' }}>Contact:</strong> <a href="tel:+919555972389" style={{ color: 'var(--muted)' }}>9555972389</a>, <a href="tel:+917982404565" style={{ color: 'var(--muted)' }}>7982404565</a></span>
                </div>
              </div>
            </div>
            <a href="tel:+919555972389" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Book Your Seat Now</a>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: '40px', background: 'rgba(139,92,246,0.05)', padding: '28px', borderRadius: '20px', border: '1px solid rgba(139,92,246,0.3)', position: 'relative', overflow: 'hidden', maxWidth: '680px' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '3px', color: 'var(--accent2)', textTransform: 'uppercase', marginBottom: '10px' }}>✦ Premium Service</p>
          <p style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700, marginBottom: '12px' }}>Personal Choreographer for Your Event</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>₹10,000</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>/event</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: 'var(--accent2)' }}>✦</span><span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Advance Choreography</span></div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: 'var(--accent2)' }}>✦</span><span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Advance Performance Training</span></div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: 'var(--accent2)' }}>✦</span><span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Professional Music Mixing</span></div>
          </div>
          <a href="tel:+919555972389" className="btn-primary" style={{ background: 'linear-gradient(135deg, var(--accent2), #7c3aed)' }}>📞 Book Now</a>
        </div>

        <div className="section-header reveal" style={{ marginTop: '60px' }}>
          <span className="section-tag">Student Spotlight</span>
          <h2 className="section-title">Personal Training <em>Stars</em></h2>
        </div>

        <div className="student-showcase-row reveal" style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '20px', scrollSnapType: 'x mandatory', alignItems: 'start', justifyContent: 'center' }}>
          {[
            { src: trainingVid, name: "Training" },
            { src: ptBatchVid, name: "PT Batch" },
            { src: manishVid, name: "Manish" },
            { src: anuskhaVid, name: "Anuskha" },
            { src: navyaVid, name: "Navya" }
          ].map((s, i) => (
            <div key={i} className="student-mini-card" style={{ flex: '0 0 160px', scrollSnapAlign: 'start', textAlign: 'center' }}>
              <video src={s.src} controls loop playsInline style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '12px' }}></video>
              <p style={{ fontWeight: 700, fontSize: '1rem', marginTop: '8px' }}>{s.name}</p>
            </div>
          ))}
        </div>

        <div className="section-header reveal" style={{ marginTop: '40px' }}>
          <span className="section-tag">TV Reality Star</span>
          <h2 className="section-title">Kavya <em>Special</em></h2>
        </div>

        <div className="student-showcase-row reveal" style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '20px', scrollSnapType: 'x mandatory', alignItems: 'start', justifyContent: 'center' }}>
          {[kavyaTvVid, kavyaVid, kavyaAVid].map((src, i) => (
            <div key={i} className="student-mini-card highlight-kavya" style={{ flex: '0 0 160px', scrollSnapAlign: 'start', textAlign: 'center', border: '2px solid #eab308', borderRadius: '14px', padding: '4px', background: 'rgba(234, 179, 8, 0.1)' }}>
              <div style={{ background: '#eab308', color: '#000', fontSize: '0.65rem', fontWeight: 800, marginBottom: '6px', padding: '4px 0', borderRadius: '6px', letterSpacing: '1px' }}>📺 TV REALITY SHOW</div>
              <video src={src} controls muted loop playsInline style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px' }}></video>
              <p style={{ fontWeight: 700, fontSize: '1rem', marginTop: '8px', color: '#eab308' }}>Kavya</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
