import React from 'react';

const Branches = () => {
  const branches = [
    {
      name: "Nangloi Delhi Branch",
      subtitle: "Join our step up dance academy at our premium studio in Nangloi Delhi",
      address: "STEP UP DANCE ACADEMY HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041 NEAREST NANGLOI METRO STATION",
      timing: "10:00 AM – 09:00 PM",
      videoSrc: "/assets/intro-nangloi.mp4",
      instagram: "https://www.instagram.com/step_up_dance_academy_?igsh=c3gyNHU3bWlzbWI4",
      facebook: "https://www.facebook.com/stepupdanceacademy.official",
      youtube: "https://youtube.com/@stepupdanceacademy1999?si=R9zU4OdZfDNlxUR0",
      gallery: [
        "Photos/Nangloi/front.jpeg", "Photos/Nangloi/Entry.jpeg", "Photos/Nangloi/Entry1.jpeg", "Photos/Nangloi/Award.jpeg"
      ]
    },
    {
      name: "Bahadurgarh Haryana Branch",
      subtitle: "Join our step up dance academy at our premium studio in Bahadurgarh Haryana",
      address: "STEP UP DANCE ACADEMY BAHADURGARH BRANCH OPPOSITE ELENTA MART DHARAM VIHAR NALA ROAD AGARWAL COLONY, NEAREST METRO STATION BAHADURGARH CITY.",
      timing: "10:00 AM – 09:00 PM",
      videoSrc: "/assets/intro-bahadurgarh.mp4",
      instagram: "https://www.instagram.com/stepupdanceacademy_hr/",
      facebook: "https://www.facebook.com/stepupdanceacademy.official",
      youtube: "https://youtube.com/@stepupdanceacademy1999?si=R9zU4OdZfDNlxUR0",
      gallery: [
        "Photos/Bahadurgarh/Front.jpeg", "Photos/Bahadurgarh/Front2.jpeg", "Photos/Bahadurgarh/Award sections.jpeg", "Photos/Bahadurgarh/3.jpeg"
      ]
    }
  ];

  return (
    <section className="branches section" id="branches">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase' }}>FIND US</span>
          <h2 className="title-serif" style={{ fontSize: '4.5rem', marginTop: '10px' }}>Our <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>Branches</em></h2>
        </div>

        {branches.map((branch, index) => (
          <div key={index} className="branch-card-modern reveal">
            <div className="branch-img-modern" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video 
                src={branch.videoSrc} 
                controls 
                loop 
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            <div className="branch-info-modern">
              <h3 className="title-serif">{branch.name}</h3>
              <p style={{ marginBottom: '30px' }}>{branch.subtitle}</p>
              
              <strong>ADDRESS:</strong>
              <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{branch.address}</p>
              
              <strong>TIMING:</strong>
              <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '700' }}>{branch.timing}</p>
              
              <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
                <a href="#contact" className="btn-primary" style={{ padding: '10px 24px' }}>Join Now</a>
                <a href={branch.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px' }}>IG</a>
                <a href={branch.facebook} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px' }}>FB</a>
                <a href={branch.youtube} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px' }}>YT</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;
