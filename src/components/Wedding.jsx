import { motion } from 'framer-motion';
import weddingVideo from '../assets/wedding.mp4';
import weddingDance from '../assets/wedding-dance.mp4';
import weddingDance1 from '../assets/wedding-dance1.mp4';
import weddingDancePractice from '../assets/wedding-dance-practice.mp4';
import weddingStageDance from '../assets/wedding-stage-dance.mp4';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Wedding = () => {
  return (
    <section id="wedding" className="section-padding bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:pr-10"
          >
            <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Make Your Day Special</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Wedding <span className="text-[#ff5a00]">Choreography</span></h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We craft unforgettable dance routines for your Sangeet, Mehendi, and Wedding ceremonies. Customized specifically for you and your family to make your special day truly magical.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Book Now
              </a>
              <a href="https://www.instagram.com/step_up_wedding_choreography?igsh=MTNqcjA5a2t5ZjR6Yw==" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white font-bold px-8 py-4 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-colors flex items-center gap-2">
                <InstagramIcon /> Follow on Instagram
              </a>
            </div>
          </motion.div>

          {/* Main Video */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,90,0,0.1)] border border-white/10 group bg-black">
              <video 
                src={weddingVideo}
                controls
                className="w-full object-cover aspect-[9/16]"
              />
              <div className="absolute inset-0 pointer-events-none border-[8px] border-black/20 rounded-3xl"></div>
            </div>
          </motion.div>
        </div>

        {/* 4 Additional Videos After */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {[weddingDance, weddingDance1, weddingDancePractice, weddingStageDance].map((vid, idx) => (
            <div key={idx} className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,90,0,0.1)] border border-white/10 group bg-black">
              <video 
                src={vid}
                controls
                className="w-full object-cover aspect-[9/16]"
              />
              <div className="absolute inset-0 pointer-events-none border-[8px] border-black/20 rounded-3xl"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Wedding;
