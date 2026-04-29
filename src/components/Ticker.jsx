import React from 'react';

const Ticker = () => {
  const styles = [
    "Bollywood", "Hip-Hop", "Classical", "Contemporary", "Jazz", "Ballet", "Kids Classes", 
    "TV Reality Show Prep", "Bollywood", "Hip-Hop", "Classical", "Contemporary", "Jazz", 
    "Belly Dance", "Kids Classes", "TV Reality Show Prep", "Haryanvi Dance", "Bhangra Dance", 
    "Wedding Choreographer", "Personal Training", "Afro Dance", "House Dance", "Afro Dance"
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {styles.map((style, index) => (
          <React.Fragment key={index}>
            <span>{style}</span>
            <span className="dot">◈</span>
          </React.Fragment>
        ))}
        {/* Duplicate for infinite loop if needed, though CSS handle it */}
        {styles.map((style, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span>{style}</span>
            <span className="dot">◈</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
