import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, X } from 'lucide-react';

import nangloiVideo from '../assets/intro-nangloi.mp4';
import bahadurgarhVideo from '../assets/intro-bahadurgarh.mp4';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
  </svg>
);

const getImageUrl = (name) => new URL(`../assets/${name}.jpeg`, import.meta.url).href;

const NangloiGalleryNames = [
  'Ngallery15', 'Ngallery2', 'Ngallery3', 'Ngallery4', 'Ngallery5', 'Ngallery6',
  'Ngallery7', 'Ngallery8', 'Ngallery9', 'Ngallery10', 'Ngallery11', 'Ngallery12',
  'Ngallery13', 'Ngallery14', 'Ngallery16', 'Ngallery17'
];

const BahadurgarhGalleryNames = [
  'Bgallery15', 'Bgallery16', 'Bgallery', 'Bgallery3', 'Bgallery4', 'Bgallery5',
  'Bgallery6', 'Bgallery7', 'Bgallery8', 'Bgallery9', 'Bgallery10', 'Bgallery11',
  'Bgallery12', 'Bgallery13'
];

const Branches = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const youtubeLink = "https://youtube.com/@stepupdanceacademy1999?si=oaBp9CEUmntt7pKd";
  const facebookLink = "https://www.facebook.com/addy.dancer.1";

  return (
    <section id="branches" className="section-padding bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Our Locations</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Find a Studio <span className="text-[#ff5a00]">Near You</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Visit our premium studios equipped with professional flooring and sound systems.</p>
        </div>

        <div className="space-y-24">

          {/* Nangloi Branch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-6 lg:p-10"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 lg:w-1/2 flex justify-center">
                <video
                  src={nangloiVideo}
                  controls
                  className="w-full max-w-[400px] object-cover rounded-2xl shadow-xl aspect-[9/16] bg-black"
                />
              </div>
              <div className="flex-1 lg:w-1/2 flex flex-col justify-center overflow-hidden">
                <h3 className="text-3xl font-extrabold text-white mb-2">Nangloi Delhi Branch</h3>
                <p className="text-[#ff5a00] font-semibold mb-6">Join our step up dance academy at our premium studio in Nangloi Delhi</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-2"><MapPin className="text-[#ff5a00]" size={18} /> Address:</h4>
                    <p className="text-gray-400 text-sm ml-6">
                      STEP UP DANCE ACADEMY HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041 NEAREST NANGLOI METRO STATION
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-2"><Clock className="text-[#ff5a00]" size={18} /> Timing:</h4>
                    <p className="text-gray-400 text-sm ml-6">
                      10:00 AM – 09:00 PM
                    </p>
                  </div>
                </div>

                {/* Sliding Gallery */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Branch Gallery & Awards ✦</h4>
                  <div className="relative w-full overflow-hidden flex items-center">
                    <motion.div
                      className="flex gap-3"
                      animate={{ x: [0, -1000] }}
                      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                      {[...NangloiGalleryNames, ...NangloiGalleryNames].map((img, idx) => (
                        <div
                          key={idx}
                          className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-white/20 cursor-pointer hover:border-[#ff5a00] transition-colors"
                          onClick={() => setZoomedImage(getImageUrl(img))}
                        >
                          <img src={getImageUrl(img)} alt="Gallery" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href="#contact" className="btn-primary">Join Now</a>
                  <a href="https://www.google.com/maps/search/?api=1&query=Metro+Pillar+393,+Main+Rohtak+Rd,+Nangloi,+Delhi" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-[#ff5a00] transition-colors flex items-center gap-2">
                    <MapPin size={18} /> Map
                  </a>
                  <div className="flex items-center gap-3 ml-2">
                    <a href="https://www.instagram.com/step_up_dance_academy_?igsh=eWdmcWoyZ2liMWoz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <InstagramIcon />
                    </a>
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <FacebookIcon />
                    </a>
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <YoutubeIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bahadurgarh Branch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-6 lg:p-10"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 lg:w-1/2 flex justify-center">
                <video
                  src={bahadurgarhVideo}
                  controls
                  className="w-full max-w-[400px] object-cover rounded-2xl shadow-xl aspect-[9/16] bg-black"
                />
              </div>
              <div className="flex-1 lg:w-1/2 flex flex-col justify-center overflow-hidden">
                <h3 className="text-3xl font-extrabold text-white mb-2">Bahadurgarh Haryana Branch</h3>
                <p className="text-[#ff5a00] font-semibold mb-6">Join our step up dance academy at our premium studio in Bahadurgarh Haryana</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-2"><MapPin className="text-[#ff5a00]" size={18} /> Address:</h4>
                    <p className="text-gray-400 text-sm ml-6">
                      STEP UP DANCE ACADEMY BAHADURGARH BRANCH OPPOSITE ELENTA MART DHARAM VIHAR NALA ROAD AGARWAL COLONY, NEAREST METRO STATION BAHADURGARH CITY.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-2"><Clock className="text-[#ff5a00]" size={18} /> Timing:</h4>
                    <p className="text-gray-400 text-sm ml-6">
                      10:00 AM – 09:00 PM
                    </p>
                  </div>
                </div>

                {/* Sliding Gallery */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Branch Gallery & Awards ✦</h4>
                  <div className="relative w-full overflow-hidden flex items-center">
                    <motion.div
                      className="flex gap-3"
                      animate={{ x: [0, -1000] }}
                      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                      {[...BahadurgarhGalleryNames, ...BahadurgarhGalleryNames].map((img, idx) => (
                        <div
                          key={idx}
                          className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-white/20 cursor-pointer hover:border-[#ff5a00] transition-colors"
                          onClick={() => setZoomedImage(getImageUrl(img))}
                        >
                          <img src={getImageUrl(img)} alt="Gallery" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href="#contact" className="btn-primary">Join Now</a>
                  <a href="https://www.google.com/maps/search/?api=1&query=1st+Floor,+Near+Sector+6,+Bahadurgarh,+Haryana" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-[#ff5a00] transition-colors flex items-center gap-2">
                    <MapPin size={18} /> Map
                  </a>
                  <div className="flex items-center gap-3 ml-2">
                    <a href="https://www.instagram.com/stepupdanceacademy_hr?igsh=c2JuNHMycnozNHY0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <InstagramIcon />
                    </a>
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <FacebookIcon />
                    </a>
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <YoutubeIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setZoomedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#ff5a00] transition-colors"
              onClick={() => setZoomedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={zoomedImage}
              alt="Zoomed Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Branches;
