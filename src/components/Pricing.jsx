import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Membership</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Simple <span className="text-[#ff5a00]">Pricing</span></h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Transparent, affordable plans to keep you dancing all month long.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 max-w-4xl mx-auto">
          
          {/* Admission Fee Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[320px] bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Admission Fee</h4>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-4xl font-black text-[#ff5a00]">₹1,500</span>
              <span className="text-gray-400 font-semibold mb-1">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> All Dance Style
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> Beginner Level
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> Daily Classes
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> Studio Access
              </li>
            </ul>

            <a href="#contact" className="w-full text-center py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
              Get Started
            </a>
          </motion.div>

          {/* Monthly Fee Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-[320px] bg-gradient-to-br from-[#ff5a00]/20 to-transparent p-8 rounded-3xl border border-[#ff5a00]/30 shadow-[0_0_30px_rgba(255,90,0,0.1)] flex flex-col relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff5a00] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap">
              ⭐ Best Value
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-6 mt-2">Monthly Fee</h4>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-4xl font-black text-[#ff5a00]">₹1,200</span>
              <span className="text-gray-400 font-semibold mb-1">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> All Dance Styles
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> All Levels
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> Daily Classes
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> Full Studio Access
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span> Parking Available
              </li>
            </ul>

            <a href="#contact" className="btn-primary w-full text-center">
              Enroll Now
            </a>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-400 text-sm max-w-lg mx-auto bg-white/5 p-4 rounded-xl border border-white/10"
        >
          💡 Starting price ₹1,200/month. Contact us for custom packages and taster sessions.
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
