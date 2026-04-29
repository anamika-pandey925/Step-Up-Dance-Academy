import React from 'react';
import celebrityPoster from '../assets/Photos/TV Reality Training/10 CELEBRITY TEACHER.jpeg';

const TVReality = () => {
  return (
    <section className="tv-reality section" id="tv-reality">
      <div className="container">
        <div className="presents-tag reveal">PRESENTS</div>
        <div className="section-header reveal">
          <span className="section-tag">Exclusive Batch</span>
          <h2 className="section-title">TV Reality Show Training <em>Season 3</em></h2>
          <div className="batch-meta">
            <span>5 WEEKS</span>
            <span>10 CELEBRITY TEACHERS</span>
            <span>40 HOURS TRAINING</span>
            <span>10 DANCE STYLES</span>
          </div>
        </div>

        <div className="reveal" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
          <img src={celebrityPoster} alt="10 Celebrity Teachers" className="tv-reality-poster" style={{ maxWidth: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
        </div>

        {/* Celebrity Grid and other info can be added here */}
      </div>
    </section>
  );
};

export default TVReality;
