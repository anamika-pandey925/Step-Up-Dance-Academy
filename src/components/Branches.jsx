import React from 'react';
import nangloiPoster from '../assets/poster-nangloi.png';
import bahadurgarhPoster from '../assets/poster-bahadurgarh.png';

const Branches = () => {
  const branches = [
    {
      name: "Nangloi Delhi Branch",
      subtitle: "Join our step up dance academy at our premium studio in Nangloi Delhi",
      address: "STEP UP DANCE ACADEMY HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041",
      timing: "10:00 AM – 09:00 PM",
      poster: nangloiPoster
    },
    {
      name: "Bahadurgarh Haryana Branch",
      subtitle: "Join our step up dance academy at our premium studio in Bahadurgarh Haryana",
      address: "OPPOSITE ELENTA MART, DHARAM VIHAR, NEAR BAHADURGARH METRO STATION",
      timing: "10:00 AM – 09:00 PM",
      poster: bahadurgarhPoster
    }
  ];

  return (
    <section className="branches section" id="branches">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '700', color: '#ff4500', textTransform: 'uppercase' }}>FIND US</span>
          <h2 className="title-serif" style={{ fontSize: '4.5rem', marginTop: '10px' }}>Our <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>Branches</em></h2>
        </div>

        {branches.map((branch, index) => (
          <div key={index} className="branch-card-modern reveal">
            <div className="branch-img-modern">
              <img src={branch.poster} alt={branch.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="branch-info-modern">
              <h3 className="title-serif">{branch.name}</h3>
              <p style={{ marginBottom: '30px' }}>{branch.subtitle}</p>
              
              <strong>ADDRESS:</strong>
              <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{branch.address}</p>
              
              <strong>TIMING:</strong>
              <p style={{ fontSize: '1.1rem', color: '#ff4500', fontWeight: '700' }}>{branch.timing}</p>
              
              <div style={{ marginTop: '40px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px' }}>BRANCH GALLERY & AWARDS +</span>
                {/* Placeholder for images as per prompt requirement to include ALL provided images */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ flex: '0 0 100px', height: '100px', background: '#222', borderRadius: '10px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>IMG</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;
