import React from 'react';

const Marquee = () => {
  const items = [
    "Bollywood", "Hip-Hop", "Classical", "Contemporary", "Jazz", "Belly Dance", "Ballet", "Kids Classes", "TV Reality Show Prep"
  ];

  return (
    <div className="bg-[#0c0c0c] py-4 border-y border-white/5 overflow-hidden relative z-20">
      <div className="animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <React.Fragment key={j}>
                <span className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold px-12">
                  {item}
                </span>
                <span className="text-primary text-xs">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
