import React from 'react';

const PersonalTraining = () => {
  const students = [
    { name: "Training", src: "assets/training.mp4" },
    { name: "PT Batch", src: "assets/Personal-training-batch.mp4" },
    { name: "Manish", src: "assets/Manish.mp4" },
    { name: "Anuskha", src: "assets/Anuskha.mp4" },
    { name: "Navya", src: "assets/Navya.mp4" }
  ];

  const kavyaSpecial = [
    { name: "Kavya", src: "assets/kavya-tv-reality-show.mp4" },
    { name: "Kavya", src: "assets/Kavya.mp4" },
    { name: "Kavya", src: "assets/Kavya-A.mp4" }
  ];

  return (
    <section className="personal-training section" id="personal-training">
      <div className="container">
        <div className="presents-tag reveal" style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '4px', color: 'var(--primary)', marginBottom: '12px' }}>PRESENTS</div>
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Weekend Special</span>
          <h2 className="section-title">Personal Training <em>Batch</em></h2>
          <p className="section-sub">Saturday & Sunday | Training from @addy_hip_hoper_official Sir</p>
        </div>

        <div className="about-grid" style={{ gap: '60px', marginTop: '40px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', display: 'grid' }}>
          <div className="about-visual reveal">
            <div style={{ position: 'relative', borderRadius: '24px', padding: '8px', background: 'linear-gradient(135deg, rgba(255,85,0,0.1), rgba(255,255,255,0.05))', border: '1px solid var(--border)' }}>
              <img src="/personal-training.jpeg" alt="Personal Training Batch" style={{ borderRadius: '16px', width: '100%', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
            </div>
          </div>
          <div className="about-text reveal" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '24px', color: '#fff' }}> Professional Training for TV Reality Shows & Competitions</h3>
            
            <div className="about-features" style={{ gridTemplateColumns: '1fr', gap: '16px', margin: '0 0 32px 0', maxWidth: '100%' }}>
              <div className="af-item"><span className="af-icon">✦</span> Working on Body Movements, Foundations & Specific Dance Styles</div>
              <div className="af-item"><span className="af-icon">✦</span> Choreography for upcoming TV Reality Shows & Competitions</div>
              <div className="af-item"><span className="af-icon">✦</span> Personal Solo Video Shoot</div>
              <div className="af-item"><span className="af-icon">✦</span> Special Mixing Songs for Students</div>
              <div className="af-item"><span className="af-icon">✦</span> Musicality Class and Confidence Class</div>
              <div className="af-item"><span className="af-icon">✦</span> Tips and Guidance for Reality Show Selection</div>
            </div>

            <div style={{ background: 'rgba(255, 69, 0, 0.05)', padding: '28px', borderRadius: '20px', border: '1px solid var(--border)', width: '100%', marginBottom: '28px' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '12px' }}>So Are you ready to join us...?</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>₹5,000</span>
                <span style={{ background: 'rgba(255,85,0,0.2)', color: '#fff', padding: '4px 12px', border-radius: '50px', fontSize: '0.8rem', fontWeight: '600', border: '1px solid var(--primary)' }}>Limited Seats</span>
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                <p>📍 Nangloi Delhi Branch</p>
                <p>📞 9555972389, 7982404565</p>
              </div>
            </div>

            <a href="tel:+919555972389" className="btn-primary">Book Your Seat Now</a>
          </div>
        </div>

        {/* Premium Service Card */}
        <div className="reveal" style={{ marginTop: '60px', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)', maxWidth: '700px', margin: '60px auto 0' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '3px', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '10px' }}>✦ Premium Service</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>Personal Choreographer for Your Event</h3>
          <div style={{ display: 'flex', alignHeight: 'baseline', gap: '12px', marginBottom: '30px' }}>
             <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff' }}>₹10,000</span>
             <span style={{ color: 'var(--muted)' }}>/ event</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
             <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>✦ Advance Choreography</div>
             <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>✦ Performance Training</div>
             <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>✦ Professional Music Mixing</div>
             <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>✦ Theme Planning</div>
          </div>
          <a href="tel:+919555972389" className="btn-primary">Book Now</a>
        </div>

        {/* Student Showcase */}
        <div className="section-header reveal" style={{ marginTop: '100px', textAlign: 'center' }}>
          <span className="section-tag">Student Spotlight</span>
          <h2 className="section-title">Personal Training <em>Stars</em></h2>
        </div>

        <div className="student-scroll reveal" style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '30px', marginTop: '40px' }}>
          {students.map((s, i) => (
            <div key={i} style={{ flex: '0 0 200px', textAlign: 'center' }}>
              <video src={s.src} controls muted loop playsInline style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', background: '#000' }} />
              <p style={{ marginTop: '10px', fontWeight: '700' }}>{s.name}</p>
            </div>
          ))}
        </div>

        {/* Kavya Special */}
        <div className="section-header reveal" style={{ marginTop: '60px', textAlign: 'center' }}>
          <span className="section-tag">TV Reality Star</span>
          <h2 className="section-title">Kavya <em>Special</em></h2>
        </div>

        <div className="student-scroll reveal" style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '30px', marginTop: '40px', justifyContent: 'center' }}>
          {kavyaSpecial.map((s, i) => (
            <div key={i} style={{ flex: '0 0 200px', textAlign: 'center', border: '1px solid #eab308', padding: '10px', borderRadius: '20px', background: 'rgba(234,179,8,0.05)' }}>
              <div style={{ background: '#eab308', color: '#000', fontSize: '0.6rem', fontWeight: '900', padding: '4px', borderRadius: '5px', marginBottom: '10px' }}>📺 TV REALITY SHOW</div>
              <video src={s.src} controls muted loop playsInline style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
              <p style={{ marginTop: '10px', fontWeight: '700', color: '#eab308' }}>Kavya</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
