import React from 'react';
import { motion } from 'framer-motion';

const Founder = () => {
  const achievements = [
    { title: "Celebrity Artist", color: "text-primary" },
    { title: "Reality Show Judge", color: "text-accent" },
    { title: "20+ Years Exp", color: "text-white" },
    { title: "90K+ Instagram", color: "text-primary" }
  ];

  return (
    <section className="py-32 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3"
          >
            <div className="relative rounded-premium overflow-hidden border border-primary/20 shadow-neon">
              <img src="/images/addy-photo.jpeg" alt="Addy Sir" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-bg to-transparent">
                <h3 className="text-4xl font-black text-white">Mr. ADDY</h3>
                <p className="text-primary font-bold tracking-widest uppercase text-xs">Founder & Master Trainer</p>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:w-2/3">
            <h2 className="title-serif text-5xl md:text-6xl mb-12">Meet the <span className="text-primary italic">Maestro</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {achievements.map((item, i) => (
                <div key={i} className="glass-card p-6 text-center border-white/5 hover:border-primary/20 transition-colors">
                  <span className={`block text-sm font-black uppercase tracking-tighter ${item.color}`}>{item.title}</span>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-3xl">
              Known for his precision and passion, Mr. Addy has trained thousands of students and celebrities. His vision for Step Up Dance Academy is to provide a platform where anyone can transform their life through movement.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/addy_hip_hoper_official/" target="_blank" className="btn-primary">Follow on Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
