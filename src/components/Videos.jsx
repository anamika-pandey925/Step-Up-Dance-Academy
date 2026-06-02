import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpeg';
import introVideo from '../assets/intro-nangloi.mp4';

const Videos = () => {
  return (
    <section id="videos" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Experience Step Up</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Watch Our <span className="text-[#ff5a00]">Story</span></h3>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[360px] mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,90,0,0.15)] border border-white/10 aspect-[9/16] relative group"
        >
          <video
            className="w-full h-full object-cover bg-black"
            controls
            poster={heroBg}
            muted
            loop
            autoPlay
            playsInline
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 pointer-events-none border-[8px] border-black/20 rounded-3xl"></div>
        </motion.div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ff5a00]/5 blur-[120px] -z-10 rounded-full"></div>
    </section>
  );
};

export default Videos;
