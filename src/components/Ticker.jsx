import React from 'react';

const Ticker = () => {
  const styles = [
    "Bollywood", "Hip-Hop", "Classical", "Contemporary", "Jazz", "Ballet",
    "Kids Classes", "TV Reality Prep", "Belly Dance", "Haryanvi Dance",
    "Bhangra", "Wedding Choreography", "Personal Training",
    "Afro Dance", "House Dance"
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {styles.map((style, index) => (
          <span key={index}>{style}</span>
        ))}
        {/* Repeat for seamless loop */}
        {styles.map((style, index) => (
          <span key={`dup-${index}`}>{style}</span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
