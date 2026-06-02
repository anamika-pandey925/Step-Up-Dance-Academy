import { Fragment } from 'react';

const Marquee = () => {
  const styles = [
    "✦ Bollywood", "✦ Hip-Hop", "✦ Classical", "✦ Contemporary",
    "✦ Jazz", "✦ Ballet", "✦ Kids Classes", "✦ TV Reality Show Prep",
    "✦ Belly Dance", "✦ Haryanvi Dance", "✦ Bhangra Dance",
    "✦ Wedding Choreographer", "✦ Personal Training",
    "✦ Afro Dance", "✦ House Dance"
  ];

  return (
    <div className="bg-[#ff5a00] py-2 overflow-hidden border-y border-white/10 relative z-20 flex">
      <div className="flex whitespace-nowrap animate-marquee w-max hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {styles.map((style, idx) => (
              <Fragment key={idx}>
                <span className="text-black text-base md:text-lg font-serif font-black px-10 transition-transform hover:scale-110 hover:text-white cursor-default">
                  {style}
                </span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
