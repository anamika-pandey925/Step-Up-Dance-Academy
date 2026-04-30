import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,0,0.15),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-10"
          >
            ✦ Premier Dance Academy, with branches in Nangloi, New Delhi and Bahadurgarh, Haryana
          </motion.span>
          
          <h1 className="title-serif text-6xl md:text-8xl lg:text-9xl mb-8">
            Move – Express – <br />
            <span className="text-primary italic font-serif">Transform.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
            Award-winning dance training for all ages & levels in Nangloi , New Delhi & Bahadurgarh Haryana. From Bollywood to All Dance Style — find your rhythm at STEP UP DANCE ACADEMY.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#classes" className="btn-primary w-full sm:w-auto justify-center text-lg py-4 px-10">
              Explore Classes
            </a>
            <a href="tel:+917982404565" className="btn-outline w-full sm:w-auto justify-center text-lg py-4 px-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Now
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center items-center gap-6 md:gap-12 mt-20 text-white/40"
          >
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-white mb-1">18</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Google Reviews</span>
            </div>
            <div className="w-px h-12 bg-white/10 relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.3em] text-white/20 uppercase font-bold">Scroll</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full blur-[2px]"></div>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-white mb-1">5</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Dance Styles</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-white mb-1">10</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Years Training</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
