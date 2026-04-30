import React from 'react';

function Zumba() {
  return (
    <section className="zumba section" id="zumba">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Fitness & Weight Loss</span>
          <h2 className="section-title">Aerobic & <em>Zumba</em></h2>
          <p className="section-sub">Transform your body and feel amazing with our high-energy fitness classes.</p>
        </div>

        <div className="about-grid" style={{ gap: '60px', marginTop: '40px', gridTemplateColumns: '1fr 1.2fr', display: 'grid' }}>
          <div className="about-visual reveal" style={{ display: 'block' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(255,69,0,0.1), rgba(234,179,8,0.1))',
                border: '1px solid var(--border)'
              }}
            >
              <img
                src="Photos/Zumba.png"
                alt="Aerobic and Zumba Classes"
                style={{
                  borderRadius: '16px',
                  width: '100%',
                  display: 'block',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}
              />
            </div>
          </div>
          <div className="about-text reveal" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '24px', color: 'var(--text)' }}>
              Classes for Weight Loss & Fitness
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8', marginBottom: '32px', fontSize: '1.05rem' }}>
              Our Aerobic and Zumba sessions are designed to help you burn calories, stay fit, and boost your energy
              levels while having fun to the latest beats. Perfect for all fitness levels!
            </p>

            <div
              style={{
                background: 'rgba(255, 69, 0, 0.05)',
                padding: '28px',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                width: '100%',
                marginBottom: '28px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'var(--primary)',
                  filter: 'blur(50px)',
                  opacity: '0.2',
                  pointerEvents: 'none'
                }}
              ></div>
              <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '12px' }}>
                Monthly Membership
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>₹2,000</span>
                <span
                  style={{
                    background: 'rgba(234,179,8,0.2)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    border: '1px solid rgba(234,179,8,0.5)'
                  }}
                >
                  Join Now
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Burn Calories</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Stay Fit</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Feel Amazing</span>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Zumba;
