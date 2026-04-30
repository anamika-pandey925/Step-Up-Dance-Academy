import React from 'react';
import { motion } from 'framer-motion';

const Branches = () => {
  const branches = [
    {
      name: "Nangloi Delhi",
      address: "Hall No 5 Shiv Market, Nangloi Delhi 110041",
      timing: "10:00 AM – 09:00 PM",
      video: "/videos/academy-intro-nangloi-branch.mp4",
      accent: "from-primary/20 to-transparent"
    },
    {
      name: "Bahadurgarh Haryana",
      address: "Opposite Elenta Mart, Bahadurgarh City",
      timing: "10:00 AM – 09:00 PM",
      video: "/videos/academy-intro-bahadurgarh-branch.mp4",
      accent: "from-accent/20 to-transparent"
    }
  ];

  return (
    <section id="branches" className="py-32 bg-bg2">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-xs font-black tracking-widest uppercase"
          >
            Find Your Studio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="title-serif text-5xl md:text-6xl mt-4"
          >
            Our <span className="text-primary italic">Branches</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {branches.map((branch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className={`glass-card p-0 overflow-hidden group border-white/5 hover:border-primary/30 transition-all duration-500`}
            >
              <div className="aspect-video relative overflow-hidden bg-black">
                <video 
                  src={branch.video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg2 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <h3 className="title-serif text-3xl mb-2">{branch.name}</h3>
                  <p className="text-primary text-sm font-bold tracking-widest uppercase">Premium Studio</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">📍</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Location</p>
                    <p className="text-white/80">{branch.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">🕒</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Timing</p>
                    <p className="text-white/80 font-semibold">{branch.timing}</p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4">
                  <a href="#booking" className="btn-primary py-3 px-8 text-sm flex-1 justify-center">Join Now</a>
                  <a href={`tel:${i === 0 ? '9555972389' : '7982404565'}`} className="btn-outline p-3 rounded-full"><span className="text-xl">📞</span></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
