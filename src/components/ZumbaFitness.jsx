import { motion } from 'framer-motion';
import { Check, Phone } from 'lucide-react';
import zumbaImg from '../assets/Zumba.png';

const ZumbaFitness = () => {
  return (
    <section id="zumba" className="section-padding bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Fitness & Weight Loss</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Aerobic & <span className="text-[#ff5a00]">Zumba</span></h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Transform your body and feel amazing with our high-energy fitness classes.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,90,0,0.15)] border border-white/10 group">
              <img 
                src={zumbaImg} 
                alt="Aerobic and Zumba Classes" 
                className="w-full object-contain"
              />
              <div className="absolute inset-0 pointer-events-none border-[8px] border-black/20 rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white/5 p-8 rounded-3xl border border-white/10"
          >
            <h4 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-2">Aerobic and Zumba Classes</h4>
            <h3 className="text-3xl font-bold text-white mb-6">Classes for Weight Loss & Fitness</h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our Aerobic and Zumba sessions are designed to help you burn calories, stay fit, and boost your energy levels while having fun to the latest beats. Perfect for all fitness levels!
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-8 items-start sm:items-center bg-black/40 p-6 rounded-2xl border border-white/5">
              <div>
                <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide font-bold">Monthly Membership</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-[#ff5a00]">₹2,000</span>
                </div>
              </div>
              <a href="#contact" className="btn-primary w-full sm:w-auto text-center shrink-0">
                Join Now
              </a>
            </div>

            <ul className="space-y-4 mb-8 text-white font-semibold text-lg">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00]"><Check size={14} /></div>
                Burn Calories
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00]"><Check size={14} /></div>
                Stay Fit
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00]"><Check size={14} /></div>
                Feel Amazing
              </li>
            </ul>

            <a href="#contact" className="w-full py-4 rounded-full border border-[#ff5a00] text-[#ff5a00] font-bold hover:bg-[#ff5a00] hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> Enquire Now
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ZumbaFitness;
