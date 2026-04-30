import React from 'react';

const Classes = () => {
  const classes = [
    { title: "Bollywood", desc: "Energy, expressions, and the latest movie hits. Perfect for all ages.", levels: ["Beginner", "Intermediate"] },
    { title: "Hip-Hop", desc: "Street styles, grooves, and choreography that pushes your limits.", levels: ["All Levels", "Advanced"] },
    { title: "Classical (Kathak)", desc: "Grace, footwork, and traditional storytelling through dance.", levels: ["Beginner", "Intermediate"] },
    { title: "Contemporary", desc: "Expressive movement combining modern, jazz, and ballet elements.", levels: ["Intermediate", "Advanced"] },
    { title: "Ballet / Jazz", desc: "Foundation of technique, flexibility, and powerful performance.", levels: ["All Levels"] },
    { title: "Kids Program", desc: "Fun-filled sessions designed to build confidence and coordination in children.", levels: ["Beginner"] }
  ];

  return (
    <section className="classes section" id="classes" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Training Programs</span>
          <h2 className="section-title">Explore Our <em>Dance Classes</em></h2>
        </div>

        <div className="classes-grid">
          {classes.map((cls, index) => (
            <div key={index} className="class-card reveal">
              <div className="class-icon" style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary)' }}>
                {index === 0 && '🎬'}
                {index === 1 && '👟'}
                {index === 2 && '🔔'}
                {index === 3 && '🌊'}
                {index === 4 && '🩰'}
                {index === 5 && '🧸'}
              </div>
              <h3>{cls.title}</h3>
              <p>{cls.desc}</p>
              <div className="class-tags">
                {cls.levels.map((level, i) => (
                  <span key={i}>{level}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
