import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import personalTrainingPoster from '../assets/Personal training batch.jpeg';

const PersonalTraining = () => {
  return (
    <section id="personal-training" className="section-padding bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">PRESENTS</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Weekend <span className="text-[#ff5a00]">Special</span></h3>
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Personal Training Batch</h4>
          <p className="text-gray-400 font-semibold max-w-2xl mx-auto">Saturday & Sunday | Training from @addy_hip_hoper_official Sir</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start max-w-6xl mx-auto">
          
          {/* Left Column: Poster & Premium Service */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-end gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,90,0,0.15)] border border-white/10 group">
                <img 
                  src={personalTrainingPoster} 
                  alt="Personal Training Batch Poster" 
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 pointer-events-none border-[8px] border-black/20 rounded-3xl"></div>
              </div>
            </motion.div>

            {/* Premium Service Box (Moved here with Animation) */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-br from-[#ff5a00]/10 to-transparent p-8 rounded-3xl border border-[#ff5a00]/20 shadow-[0_0_30px_rgba(255,90,0,0.05)] w-full max-w-[400px]"
            >
              <h4 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-2">Premium Service</h4>
              <h3 className="text-2xl font-bold text-white mb-6">Personal Choreographer for Your Event</h3>
              
              <div className="flex items-end gap-2 mb-6 border-b border-white/10 pb-6">
                <span className="text-4xl font-black text-white">₹10,000</span>
                <span className="text-gray-400 font-semibold mb-1">/event</span>
              </div>

              <ul className="space-y-4 mb-8 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#ff5a00]">✦</span>
                  Advance Choreography
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff5a00]">✦</span>
                  Advance Performance Training
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff5a00]">✦</span>
                  Professional Music Mixing
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff5a00]">✦</span>
                  Dedicated Practice Sessions
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff5a00]">✦</span>
                  Theme Planning & Styling
                </li>
              </ul>

              <a href="#contact" className="btn-primary w-full text-center flex items-center justify-center gap-2">
                <Phone size={18} /> Book Now
              </a>
            </motion.div>
          </div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex flex-col gap-8"
          >
            {/* Personal Training Box */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-2xl font-bold text-[#ff5a00] mb-6">Professional Training for TV Reality Shows & Competitions</h4>
            
            <ul className="space-y-4 mb-8 text-gray-300">
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span>
                Working on Body Movements, Foundations & Specific Dance Styles
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span>
                Choreography for upcoming TV Reality Shows & Competitions
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span>
                Personal Solo Video Shoot
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span>
                Special Mixing Songs for Students
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span>
                Musicality Class and Confidence Class
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5a00]">✦</span>
                Tips and Guidance for Reality Show Selection
              </li>
            </ul>

            <div className="mb-8 p-4 bg-black/40 rounded-2xl border border-white/5">
              <p className="text-xl font-bold text-white mb-2">So Are you ready to join us...?</p>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-black text-[#ff5a00]">₹5,000</span>
                <span className="text-gray-400 font-semibold mb-1 uppercase tracking-wide text-sm bg-white/10 px-3 py-1 rounded-full">Limited Seats</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[#ff5a00] shrink-0 mt-1" size={20} />
                <p className="text-sm">
                  <strong className="text-white block mb-1">Location: STEP UP DANCE ACADEMY HALL</strong>
                  HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041 NEAREST NANGLOI METRO STATION
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Phone className="text-[#ff5a00] shrink-0 mt-1" size={20} />
                <p className="text-sm">
                  <strong className="text-white block mb-1">Contact:</strong>
                  9555972389, 7982404565
                </p>
              </div>
            </div>

            <a href="#contact" className="btn-primary w-full text-center inline-block">
              Book Your Seat Now
            </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
