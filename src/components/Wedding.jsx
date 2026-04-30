import React from 'react';

const Wedding = () => {
  const weddingVideos = [
    { name: "Sangeet Prep", src: "/assets/wedding-dance.mp4" },
    { name: "Wedding Day", src: "/assets/wedding-dance1.mp4" },
    { name: "Stage Performance", src: "/assets/wedding-stage-dance.mp4" },
    { name: "Practice Session", src: "/assets/wedding-dance-practice.mp4" },
    { name: "Groom & Bride", src: "/assets/gromm-bride-dance.mp4" }
  ];

  return (
    <section className="wedding section" id="wedding">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Unforgettable Moments</span>
          <h2 className="section-title">Premium <em>Wedding</em> Choreography</h2>
          <p className="section-sub">Personalized dance routines for Sangeet, Mehendi, and Grand Entries.</p>
        </div>

        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-text reveal" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#fff' }}>Make Your Wedding Iconic</h3>
            <p className="about-para" style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '30px' }}>
              We specialize in creating magical dance memories for couples and their families. 
              Our expert choreographers work with you to ensure every step reflects your personality and style.
            </p>
            <div className="about-features" style={{ gridTemplateColumns: '1fr', gap: '15px', marginBottom: '40px' }}>
               <div className="af-item"><span className="af-icon">✦</span> Custom routine for Bride & Groom</div>
               <div className="af-item"><span className="af-icon">✦</span> Family group performances</div>
               <div className="af-item"><span className="af-icon">✦</span> Professional music mixing & editing</div>
               <div className="af-item"><span className="af-icon">✦</span> Thematic props and background management</div>
            </div>
            <a href="tel:+919555972389" className="btn-primary">Book Wedding Choreographer</a>
          </div>
          <div className="about-visual reveal">
             <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', border: '1px solid var(--border)', background: '#000' }}>
               <video src="/assets/wedding-dance.mp4" controls autoPlay muted loop playsInline style={{ width: '100%', display: 'block' }} />
               <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: '#fff', padding: '10px 20px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '900' }}>FEATURED PERFORMANCE</div>
             </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="section-header reveal" style={{ textAlign: 'center', marginTop: '80px', marginBottom: '40px' }}>
           <span className="section-tag">Our Portfolio</span>
           <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Wedding <em>Showcase</em></h2>
        </div>

        <div className="student-scroll reveal" style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '30px' }}>
           {weddingVideos.map((v, i) => (
             <div key={i} style={{ flex: '0 0 250px', textAlign: 'center' }}>
               <video src={v.src} controls muted loop playsInline style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '20px', border: '1px solid var(--border)', background: '#000' }} />
               <p style={{ marginTop: '12px', fontWeight: '700', color: 'var(--muted)' }}>{v.name}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Wedding;
