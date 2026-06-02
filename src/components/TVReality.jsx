import { motion } from 'framer-motion';
import { Tv, Trophy, Star } from 'lucide-react';
import gallery1 from '../assets/Ngallery1.jpeg';

const TVReality = () => {
  const highlights = [
    { icon: <Tv size={24} />, title: "National Television", desc: "Our students have featured in major dance reality shows." },
    { icon: <Trophy size={24} />, title: "Championship Wins", desc: "Winners of 50+ inter-state dance competitions." },
    { icon: <Star size={24} />, title: "Celebrity Workshops", desc: "Regular training sessions with industry legends." }
  ];

  return (
    <section id="tv-reality" className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Shine on Stage</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              TV Reality <span className="text-[#ff5a00]">Training</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              We specialize in preparing students for the big stage. Our intensive training programs are designed to build the confidence, technique, and personality required for television and national competitions.
            </p>

            <div className="space-y-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#ff5a00] group-hover:bg-[#ff5a00] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="glass p-4 rounded-[40px] rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img 
                src={gallery1} 
                alt="Reality Show" 
                className="rounded-[30px] w-full h-auto"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
              <div className="text-center">
                <p className="text-[#ff5a00] font-black text-2xl">100%</p>
                <p className="text-white text-[10px] uppercase font-bold tracking-tighter">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default TVReality;
