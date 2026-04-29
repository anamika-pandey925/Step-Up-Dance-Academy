import React from 'react';
import hipHopIcon from '../assets/icon/hip-hop.jpg';
import classicalIcon from '../assets/icon/classical.jpg';
import contemporaryIcon from '../assets/icon/Contemporary.png';
import kidsIcon from '../assets/icon/kids.png';

const Classes = () => {
  const danceClasses = [
    {
      title: "Bollywood",
      icon: "🎬",
      desc: "High-energy Bollywood choreography blending classical and western influences. Perfect for all ages.",
      levels: ["Beginner", "Intermediate", "Advanced"]
    },
    {
      title: "Hip-Hop",
      icon: hipHopIcon,
      desc: "Street-style grooves, breaking and freestyle. Build confidence and express your unique movement style.",
      levels: ["Beginner", "Intermediate"]
    },
    {
      title: "Classical",
      icon: classicalIcon,
      desc: "Kathak and Indian classical forms with theoretical and practical knowledge taught by expert gurus.",
      levels: ["Beginner", "Advanced"]
    },
    {
      title: "Contemporary",
      icon: contemporaryIcon,
      desc: "Fluid, expressive movement blending modern techniques. Ideal for dancers looking to broaden their range.",
      levels: ["Intermediate", "Advanced"]
    },
    {
      title: "Ballet / Jazz",
      icon: "🩰",
      desc: "Studio sessions with mirrors and barres for ballet, and non-slip floors for jazz and modern styles.",
      levels: ["Beginner", "Intermediate"]
    },
    {
      title: "Kids Program",
      icon: kidsIcon,
      desc: "Graded children's classes for examinations and qualifications. Fun, safe, and structured learning.",
      levels: ["All Ages", "Graded"]
    }
  ];

  return (
    <section className="classes section" id="classes">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">What We Teach</span>
          <h2 className="section-title">Our <em>Dance Classes</em></h2>
          <p className="section-sub">From timeless classical forms to high-energy street styles — we have a class for every passion and level.</p>
        </div>
        <div className="classes-grid">
          {danceClasses.map((item, index) => (
            <div key={index} className="class-card reveal" data-delay={index}>
              <div className="class-icon">
                {typeof item.icon === 'string' && !item.icon.includes('.') ? (
                  item.icon
                ) : (
                  <img src={item.icon} alt={item.title} />
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="class-levels">
                {item.levels.map((lvl, i) => <span key={i}>{lvl}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
