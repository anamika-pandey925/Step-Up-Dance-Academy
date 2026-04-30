import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              Our Journey
            </div>
            <h2 className="title-serif text-5xl md:text-6xl mb-8 leading-tight">
              Best Dance Academy in <span className="text-primary">Delhi</span> & <span className="text-primary">Haryana</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed mb-10">
              <p>
                Step Up Dance Academy has been providing award-winning dance training for many years. Our stylish, well-appointed studios host some of New Delhi’s premier instructors — offering beginner, intermediate, and advanced dance instruction.
              </p>
              <p>
                We also offer taster sessions for those looking to experience new dance styles for the first time. Whatever your passion — celebrate it at our studio!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "All experience levels welcome",
                "Certified & expert instructors",
                "Children's graded programs",
                "TV Reality Show preparation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">✦</span>
                  <span className="text-sm font-medium text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-premium overflow-hidden border border-white/10 shadow-2xl">
              <img src="/images/Front.jpeg" alt="Academy Front" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Decor */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
