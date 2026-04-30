import React from 'react';
import kavyaVid from '../assets/kavya-tv-reality-show.mp4';

const TVReality = () => {
  const teachers = [
    "Steve Jyrwa", "Ashish Chawriya", "Aman Shahi", "Abhishek Sharma",
    "Rinku Jazzfunk", "Sarwan Gourav", "Vishnu KC", "Pushpa Nagar",
    "Addy Hip Hoper", "Abhi Ok"
  ];

  const phases = [
    { name: "Phase 1", price: "₹3,500", status: "Sold Out", color: "var(--muted)" },
    { name: "Phase 2", price: "₹4,000", status: "Available", color: "var(--primary)" },
    { name: "Phase 3", price: "₹4,500", status: "Limited Seats", color: "var(--neon-purple)" }
  ];

  return (
    <section className="tv-reality section" id="tv-reality" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Season 3</span>
          <h2 className="section-title">TV Reality Show <em>Training</em></h2>
          <p style={{ color: 'var(--muted)', maxWidth: '800px', margin: '0 auto' }}>5 Weeks | 10 Celebrity Teachers | 40 Hours Training | 10 Dance Styles</p>
        </div>

        <div className="branches-grid" style={{ marginBottom: '100px' }}>
          <div className="branch-card reveal">
            <div className="branch-info">
              <h3 style={{ color: 'var(--primary)' }}>Celebrity Teachers</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                {teachers.map((t, i) => (
                  <div key={i} style={{ color: 'var(--text)', fontWeight: '600' }}>⭐ {t}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="branch-card reveal">
            <div className="branch-info">
              <h3 style={{ color: 'var(--neon-purple)' }}>Registration Phases</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                {phases.map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: `4px solid ${p.color}` }}>
                    <div>
                      <strong style={{ display: 'block' }}>{p.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: p.color }}>{p.status}</span>
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{p.price}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '30px', justifyContent: 'center' }}>Register Now</button>
            </div>
          </div>
        </div>

        {/* Kavya Section */}
        <div className="about-grid" style={{ marginTop: '100px' }}>
          <div className="about-visual reveal">
            <div className="about-img-box">
              <video src={kavyaVid} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="experience-badge" style={{ background: 'var(--neon-pink)' }}>
              <span className="exp-txt">TV REALITY STAR</span>
            </div>
          </div>
          <div className="about-text reveal">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>KAVYA</h3>
            <span style={{ color: 'var(--neon-pink)', fontWeight: 'bold', display: 'block', marginBottom: '25px', letterSpacing: '2px' }}>TV REALITY SHOW PERFORMER</span>
            <p className="about-para">
              Watch our star students shine on national television. We provide the platform and the training to help you reach the biggest stages in India.
            </p>
            <div className="about-features" style={{ marginTop: '30px' }}>
              <div className="feat-item"><span>✦</span> Solo video shoot</div>
              <div className="feat-item"><span>✦</span> Celebrity photos</div>
              <div className="feat-item"><span>✦</span> Championship Participation</div>
              <div className="feat-item"><span>✦</span> National Certificates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVReality;
