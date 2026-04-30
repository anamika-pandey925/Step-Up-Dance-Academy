import React from 'react';

const Ticker = () => {
  const styles = [
    "Jazz", "Ballet", "Kids Classes", "TV Reality Show Prep", "Bollywood", 
    "Hip-Hop", "Classical", "Contemporary", "Jazz", "Belly Dance"
  ];

  return (
    <div className="ticker-modern">
      <div className="ticker-track">
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
