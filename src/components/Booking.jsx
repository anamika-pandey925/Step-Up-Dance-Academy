import React from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <section id="booking" className="py-32 bg-bg relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card text-center p-12 md:p-20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs font-black tracking-widest uppercase mb-6 block">Join the Legacy</span>
            <h2 className="title-serif text-5xl md:text-7xl mb-8 leading-none">
              Start Your <br />
              <span className="text-primary italic">Dance Journey</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto">
              Book a free trial session at our Nangloi or Bahadurgarh studio today. No experience required.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white placeholder:text-white/20 focus:border-primary focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white placeholder:text-white/20 focus:border-primary focus:outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Select Branch</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white/60 focus:border-primary focus:outline-none transition-all appearance-none">
                  <option value="">Choose a branch...</option>
                  <option value="nangloi">Nangloi (Delhi)</option>
                  <option value="bahadurgarh">Bahadurgarh (Haryana)</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 btn-primary py-5 justify-center text-lg mt-4"
              >
                Claim Your Free Trial
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
