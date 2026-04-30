import React from 'react';

const Showcase = () => {
  const students = [
    { name: "Manish", video: "/assets/Manish.mp4" },
    { name: "Anushka", video: "/assets/Anuskha.mp4" },
    { name: "Navya", video: "/assets/Navya.mp4" },
    { name: "Mahi", video: "/assets/Mahi.mp4" }
  ];

  return (
    <section className="showcase section" id="gallery">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Student Spotlight</span>
          <h2 className="section-title">Our <em>Stars</em> In Action</h2>
        </div>

        <div className="classes-grid">
          {students.map((student, index) => (
            <div key={index} className="class-card reveal" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="video-container" style={{ width: '100%', height: '400px', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <video 
                  src={student.video} 
                  controls 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{student.name}</h3>
                <span style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>ACADEMY STUDENT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
