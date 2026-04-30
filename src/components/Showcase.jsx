import React from 'react';
import manishVid from '../assets/Manish.mp4';
import anushkaVid from '../assets/Anuskha.mp4';
import navyaVid from '../assets/Navya.mp4';
import mahiVid from '../assets/Mahi.mp4';

const Showcase = () => {
  const students = [
    { name: "Manish", video: manishVid },
    { name: "Anushka", video: anushkaVid },
    { name: "Navya", video: navyaVid },
    { name: "Mahi", video: mahiVid }
  ];

  return (
    <section className="showcase section" id="showcase">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Student Spotlight</span>
          <h2 className="section-title">Our <em>Stars</em> In Action</h2>
        </div>

        <div className="classes-grid">
          {students.map((student, index) => (
            <div key={index} className="class-card reveal" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="video-container" style={{ aspectRatio: '9/16', background: '#000' }}>
                <video 
                  src={student.video} 
                  controls 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
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
