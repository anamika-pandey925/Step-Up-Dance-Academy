import React from 'react';
import { motion } from 'framer-motion';

const Videos = () => {
  const students = [
    { name: "Manish", video: "/videos/Manish.mp4" },
    { name: "Anushka", video: "/videos/Anuskha.mp4" },
    { name: "Navya", video: "/videos/Navya.mp4" },
    { name: "Mahi", video: "/videos/Mahi.mp4" }
  ];

  return (
    <section id="videos" className="py-32 bg-bg2">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary text-xs font-black tracking-widest uppercase"
          >
            Student Showcase
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="title-serif text-5xl md:text-6xl mt-4"
          >
            Stars in <span className="text-primary italic">Action</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {students.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-0 overflow-hidden group"
            >
              <div className="aspect-[9/16] relative bg-black">
                <video 
                  src={student.video} 
                  controls 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-black text-white text-lg">{student.name}</h3>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mt-1">Academy Performer</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Video */}
        <div className="mt-32">
           <div className="text-center mb-16">
              <h3 className="title-serif text-4xl">Academy <span className="text-primary italic">Introduction</span></h3>
           </div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="max-w-5xl mx-auto rounded-premium overflow-hidden border border-white/10 shadow-neon"
           >
              <video 
                src="/videos/intro-video.mp4" 
                controls 
                muted 
                className="w-full aspect-video object-cover" 
              />
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
