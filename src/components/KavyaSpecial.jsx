import { motion } from 'framer-motion';

import kavyaTvRealityShow from '../assets/kavya-tv-reality-show.mp4';
import kavya1 from '../assets/Kavya.mp4';
import kavya2 from '../assets/Kavya-A.mp4';

const KavyaSpecial = () => {
  const items = [
    { video: kavyaTvRealityShow, label: '📺 TV REALITY SHOW', name: 'Kavya' },
    { video: kavya1, label: '📺 TV REALITY SHOW', name: 'Kavya' },
    { video: kavya2, label: '📺 TV REALITY SHOW', name: 'Kavya' }
  ];

  return (
    <section id="kavya-special" className="section-padding bg-black/80 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">TV Reality Star</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Kavya <span className="text-[#ff5a00]">Special</span></h3>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center"
            >
              <h4 className="text-xl font-bold text-[#ff5a00] mb-2 text-center">{item.label}</h4>
              <p className="text-white text-lg font-semibold mb-6">{item.name}</p>
              
              <div className="relative w-[180px] sm:w-[220px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,90,0,0.1)] border border-white/10 group bg-black shrink-0">
                <video 
                  src={item.video}
                  controls
                  preload="none"
                  playsInline
                  className="w-full object-cover aspect-[9/16]"
                />
                <div className="absolute inset-0 pointer-events-none border-[6px] border-black/20 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KavyaSpecial;
