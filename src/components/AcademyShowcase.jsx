import { motion } from 'framer-motion';

import vidushiVid from '../assets/Vidushi-The-Viral-girl.mp4';
import shallyVid from '../assets/Shally-Saini.mp4';
import keshavVid from '../assets/Keshav.mp4';
import mahiVid from '../assets/Mahi.mp4';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const AcademyShowcase = () => {
  const showcases = [
    {
      title: "⭐ The Viral Girl",
      name: "Vidushi",
      desc: "One of our most celebrated students whose videos went viral across social media. A powerhouse performer with magnetic stage presence.",
      tags: ["Hip-Hop", "Freestyle"],
      video: vidushiVid
    },
    {
      title: "💃 Star Performer",
      name: "Shally Saini",
      desc: "A graceful and expressive dancer whose fluid movements and emotional storytelling make every performance unforgettable.",
      tags: ["Bollywood", "Belly Dance"],
      video: shallyVid
    },
    {
      title: "🔥 Street King",
      name: "Keshav",
      desc: "A high-energy street dance specialist with explosive moves and unmatched rhythm. Keshav's breaking and hip-hop skills are truly elite level.",
      tags: ["Hip-Hop", "Freestyle"],
      video: keshavVid
    },
    {
      title: "🌟 Rising Star",
      name: "Mahi",
      desc: "Young, talented and full of spark — Mahi's expressive performance style and quick learning ability make her one of our brightest rising stars.",
      tags: ["Bollywood", "Freestyle"],
      video: mahiVid
    }
  ];

  return (
    <section id="showcase" className="section-padding bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Gallery & Media</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Academy <span className="text-[#ff5a00]">Showcase</span></h3>
            <p className="text-gray-400 text-lg">Experience the energy of Step Up Dance Academy through our dynamic video showcase.</p>
          </div>
          <a href="https://www.instagram.com/step_up_dance_academy_?igsh=eWdmcWoyZ2liMWoz" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-colors flex items-center gap-2 shrink-0">
            <InstagramIcon /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {showcases.map((performer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-[#ff5a00]/30 transition-colors flex flex-col h-full"
            >
              <div className="relative w-[220px] mx-auto rounded-2xl overflow-hidden mb-6 bg-black aspect-[9/16] shrink-0 shadow-[0_0_15px_rgba(255,90,0,0.15)] border border-white/10">
                <video 
                  src={performer.video}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-[#ff5a00] font-bold text-sm mb-1">{performer.title}</h4>
              <h5 className="text-2xl font-bold text-white mb-3">{performer.name}</h5>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{performer.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {performer.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold text-white/70 bg-white/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyShowcase;
