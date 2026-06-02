import { motion } from 'framer-motion';
import mraddyImg from '../assets/mraddy.jpeg';

const Founder = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group border-4 border-[#ff5a00]/30 max-w-sm lg:max-w-md mx-auto">
              <motion.img 
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.5 }}
                src={mraddyImg} 
                alt="ADDY SIR" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center justify-end text-center z-20">
                <h3 className="text-4xl font-extrabold mb-1">
                  <span className="text-white">Mr. </span>
                  <span className="text-[#ff5a00]">ADDY</span>
                </h3>
                <p className="text-white font-bold text-sm mb-4 max-w-[280px]">
                  Founder and Choreographer of STEP UP DANCE ACADEMY
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/addy_hip_hoper_official?igsh=bGplb21qemt3a255" target="_blank" rel="noopener noreferrer" className="bg-black/60 border border-white/20 hover:bg-[#ff5a00] hover:border-[#ff5a00] transition-colors px-4 py-2 rounded-full text-white text-sm font-bold">
                    IG: 90K+
                  </a>
                  <a href="https://www.facebook.com/addy.dancer.1" target="_blank" rel="noopener noreferrer" className="bg-black/60 border border-white/20 hover:bg-[#ff5a00] hover:border-[#ff5a00] transition-colors px-4 py-2 rounded-full text-white text-sm font-bold">
                    FB
                  </a>
                  <a href="https://youtube.com/@stepupdanceacademy1999?si=oaBp9CEUmntt7pKd" target="_blank" rel="noopener noreferrer" className="bg-black/60 border border-white/20 hover:bg-[#ff5a00] hover:border-[#ff5a00] transition-colors px-4 py-2 rounded-full text-white text-sm font-bold">
                    YT
                  </a>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 bg-gradient-to-r from-[#ff5a00] to-orange-500 p-6 rounded-2xl shadow-2xl border border-white/20 max-w-sm lg:max-w-md mx-auto"
            >
              <div className="flex justify-center gap-4 lg:gap-6 text-center">
                <div>
                  <p className="text-white font-bold text-2xl lg:text-3xl">100+</p>
                  <p className="text-white/90 text-[10px] lg:text-xs font-semibold uppercase mt-1">Trophies</p>
                </div>
                <div className="w-px bg-white/30"></div>
                <div>
                  <p className="text-white font-bold text-2xl lg:text-3xl">150+</p>
                  <p className="text-white/90 text-[10px] lg:text-xs font-semibold uppercase mt-1">Medals</p>
                </div>
                <div className="w-px bg-white/30"></div>
                <div>
                  <p className="text-white font-bold text-2xl lg:text-3xl">200+</p>
                  <p className="text-white/90 text-[10px] lg:text-xs font-semibold uppercase mt-1">Certificates</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block px-4 py-2 bg-[#ff5a00]/10 border border-[#ff5a00]/30 rounded-full mb-6"
            >
              <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm">Meet the Founder</h2>
            </motion.div>

            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              ADDY SIR
            </h3>
            <p className="text-xl text-gray-300 font-semibold mb-8">
              Professional Dancer | Choreographer | Founder
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Born and brought up in Delhi, I hold an Engineering background while passionately pursuing dance. As the founder of STEP UP DANCE ACADEMY, I aim to transform dreams into powerful performances with 2 Branches in Delhi & Haryana and over 300+ Students across India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 p-5 rounded-2xl border border-white/10"
              >
                <h4 className="text-[#ff5a00] text-xl font-bold mb-3 flex items-center gap-2">🏆 Awards</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><span className="text-white font-semibold">2025:</span> 1st in Indian Hip Hop Delhi</li>
                  <li><span className="text-white font-semibold">2024:</span> Best Choreographer (Master Mehul)</li>
                  <li><span className="text-white font-semibold">2023:</span> Best Choreographer (Mudassar Khan)</li>
                  <li><span className="text-white font-semibold">2022:</span> Best Choreographer (Deepika Singh)</li>
                  <li><span className="text-white font-semibold">2021:</span> Best Choreographer (Sara Khan)</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 p-5 rounded-2xl border border-white/10"
              >
                <h4 className="text-[#ff5a00] text-xl font-bold mb-3 flex items-center gap-2">📺 TV Shows</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><span className="text-white font-semibold">Winner:</span> Nacho Dil Se S3</li>
                  <li><span className="text-white font-semibold">Semi-Finalist:</span> India's Talent Fight</li>
                  <li><span className="text-white font-semibold">Jio Hotstar:</span> Good Gaming India</li>
                  <li><span className="text-white font-semibold">Zee Telugu:</span> Aata Show</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 p-5 rounded-2xl border border-white/10"
              >
                <h4 className="text-[#ff5a00] text-xl font-bold mb-3 flex items-center gap-2">⚖️ Judging</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>Mad For Stage (Zee/History TV)</li>
                  <li>Nach Baliye Talent Show</li>
                  <li>Crazy Hearts Talent Show</li>
                  <li>Ab Bolega India & More</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 p-5 rounded-2xl border border-white/10"
              >
                <h4 className="text-[#ff5a00] text-xl font-bold mb-3 flex items-center gap-2">🌟 Projects</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>Worked with Yo Yo Honey Singh</li>
                  <li>Nasha Mukti Abhiyan 2023</li>
                  <li>School Choreography</li>
                  <li>Verified on IG, Tiki, Moj, Triller</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
