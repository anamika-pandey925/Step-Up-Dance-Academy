import React from 'react';

const TVReality = () => {
  const celebrities = [
    {
      name: "Steve Jyrwa",
      show: "India's Best Dancer 4 Winner",
      ig: "stevejyrwa61",
      img: "/Photos/TV Reality Training/STEVE JYRWA.jpeg"
    },
    {
      name: "Ashish Chawriya",
      show: "Dance Plus Pro Fame",
      ig: "ashish__chawriya",
      img: "/Photos/TV Reality Training/ASHISH CHAWRIYA.jpeg"
    },
    {
      name: "Aman Shahi",
      show: "Dance Plus Fame",
      ig: "amanshahi1808",
      img: "/Photos/TV Reality Training/AMAN SHAHI.jpeg"
    },
    {
      name: "Abhishek Sharma",
      show: "India's Got Talent (IGT)",
      ig: "abhisheksharmaigt",
      img: "/Photos/TV Reality Training/ABHISHEK SHARMA.jpeg"
    },
    {
      name: "Rinku Jazzfunk",
      show: "Jazz Funk Specialist",
      ig: "rinku_jazzfunkartist",
      img: "/Photos/TV Reality Training/RINKU.jpeg"
    },
    {
      name: "Sarwan Gourav",
      show: "India's Best Dancer Artist",
      ig: "sarwangourav",
      img: "/Photos/TV Reality Training/GOURAV SARWAN.jpeg"
    },
    {
      name: "Vishnu K.C.",
      show: "Fame Dance Plus",
      ig: "vishnu_k.c_",
      img: "/Photos/TV Reality Training/VISHNU KC.jpeg"
    },
    {
      name: "Pushpa Nagar",
      show: "Fame India's Best Dancer",
      ig: "versatile.pushpa.nagar",
      img: "/Photos/TV Reality Training/PUSHPA NAGAR.jpeg"
    },
    {
      name: "Addy Hip Hoper",
      show: "Nacho Dil Se Winner",
      ig: "addy_hip_hoper_official",
      img: "/Photos/TV Reality Training/ADDY.jpeg"
    },
    {
      name: "Abhi Ok",
      show: "Reality Show Star",
      ig: "abhi_ok_",
      img: "/Photos/TV Reality Training/ABHISHEK.jpeg"
    }
  ];

  const rules = [
    "No participation fee required for this championship.",
    "Students must perform 3+ dance styles learned during the training batch.",
    "Participants can perform own choreography or batch-taught choreography.",
    "Only Solo Performers are allowed.",
    "Maximum Performance time: 1:00 to 2:30 Minutes.",
    "Participants must bring their own Music Track in proper format.",
    "Open exclusively for TV Reality Show Training Batch - Season 3 students.",
    "Judge's decision will be final and cannot be challenged.",
    "Non-compliance with rules may lead to disqualification."
  ];

  return (
    <section className="tv-reality section" id="tv-reality">
      <div className="container">
        <div className="presents-tag reveal" style={{ textAlign: 'center', fontWeight: '800', letterSpacing: '4px', color: 'var(--primary)', marginBottom: '15px' }}>PRESENTS</div>
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Exclusive Batch</span>
          <h2 className="section-title">TV Reality Show Training <em>Season 3</em></h2>
          <div className="batch-meta" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap', color: 'var(--muted)', fontSize: '0.9rem', fontWeight: '600' }}>
            <span>5 WEEKS</span>
            <span>10 CELEBRITY TEACHERS</span>
            <span>40 HOURS TRAINING</span>
            <span>10 DANCE STYLES</span>
          </div>
        </div>

        {/* Poster Image */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <img 
            src="/Photos/TV Reality Training/10 CELEBRITY TEACHER.jpeg" 
            alt="10 Celebrity Teachers" 
            style={{ maxWidth: '100%', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
          />
        </div>

        {/* Celebrity Grid */}
        <div className="celebrity-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '100px' }}>
          {celebrities.map((celeb, i) => (
            <div key={i} className="celeb-card reveal" style={{ background: 'var(--bg2)', padding: '25px', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--border)', transition: 'var(--trans)' }}>
              <div className="celeb-avatar" style={{ width: '120px', height: '120px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary)' }}>
                <img src={celeb.img} alt={celeb.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="celeb-show" style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase' }}>{celeb.show}</div>
              <div className="celeb-name" style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px' }}>{celeb.name}</div>
              <a 
                href={`https://www.instagram.com/${celeb.ig}/`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="celeb-link"
                style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none', transition: 'var(--trans)' }}
              >
                @{celeb.ig}
              </a>
            </div>
          ))}
        </div>

        {/* Pricing & Features */}
        <div className="about-grid" style={{ gap: '40px', marginBottom: '80px' }}>
          <div className="about-text" style={{ textAlign: 'center' }}>
            <h3 className="title-serif" style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary)' }}>Batch Benefits</h3>
            <div className="about-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
              <div className="af-item"><span className="af-icon">✦</span> Personal Solo Video Shoot</div>
              <div className="af-item"><span className="af-icon">✦</span> Best student shoots with celebrities</div>
              <div className="af-item"><span className="af-icon">✦</span> Dance Championship for all students</div>
              <div className="af-item"><span className="af-icon">✦</span> Photos with Celebrity Teachers</div>
              <div className="af-item"><span className="af-icon">✦</span> Personal Training Certificate</div>
              <div className="af-item"><span className="af-icon">✦</span> Special Mixing Songs for Students</div>
              <div className="af-item"><span className="af-icon">✦</span> Musicality & Confidence Classes</div>
              <div className="af-item"><span className="af-icon">✦</span> Tips for Reality Show Selection</div>
            </div>
          </div>
        </div>

        {/* Pricing Phases */}
        <div className="pricing-phases reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '100px' }}>
          <div className="phase-card reveal" style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)', textAlign: 'center', opacity: '0.6' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '700' }}>Phase 1 (Early Bird)</span>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '15px 0' }}>₹3,500</div>
            <span style={{ color: '#ff4444', fontWeight: '800' }}>SOLD OUT</span>
          </div>
          <div className="phase-card reveal" style={{ background: 'rgba(255, 85, 0, 0.05)', padding: '40px', borderRadius: '24px', border: '1px solid var(--primary)', textAlign: 'center', transform: 'scale(1.05)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700' }}>Phase 2 (After 10th April)</span>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '15px 0' }}>₹4,000</div>
            <span style={{ color: '#22c55e', fontWeight: '800' }}>AVAILABLE</span>
          </div>
          <div className="phase-card reveal" style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '700' }}>Phase 3 (After 20th April)</span>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '15px 0' }}>₹4,500</div>
            <span style={{ color: 'var(--primary)', fontWeight: '800' }}>LIMITED SEATS</span>
          </div>
        </div>

        {/* Championship Rules */}
        <div className="championship reveal" style={{ padding: '60px', background: 'var(--bg2)', borderRadius: '40px', border: '1px solid var(--border)' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Grand Finale</span>
            <h2 className="section-title">Training Batch <em>Championship</em></h2>
            <p style={{ color: 'var(--muted)' }}>Date: 31st May | Trophy and Cash Prize for Winners</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: '#fff' }}>Rules & Regulations</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {rules.map((rule, idx) => (
                  <li key={idx} style={{ color: 'var(--muted)', fontSize: '0.95rem', display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--primary)' }}>◈</span> {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <img src="/Photos/TV Reality Training/Rules.jpeg" alt="Rules" style={{ borderRadius: '20px', border: '1px solid var(--border)' }} />
              <img src="/Photos/TV Reality Training/competition.jpeg" alt="Competition" style={{ borderRadius: '20px', border: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVReality;
