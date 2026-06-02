import { motion } from 'framer-motion';

import trainingVid from '../assets/training.mp4';
import personalTrainingBatchVid from '../assets/Personal-training-batch.mp4';
import manishVid from '../assets/Manish.mp4';
import navyaVid from '../assets/Navya.mp4';
import anuskhaVid from '../assets/Anuskha.mp4';

const StudentSpotlight = () => {
  const videos = [trainingVid, personalTrainingBatchVid, manishVid, navyaVid, anuskhaVid];

  return (
    <section id="spotlight" className="section-padding bg-black/60 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Student Spotlight</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Personal Training <span className="text-[#ff5a00]">Stars</span></h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {videos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative w-full max-w-[220px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,90,0,0.1)] border border-white/10 group bg-black shrink-0"
            >
              <video 
                src={vid}
                controls
                className="w-full object-cover aspect-[9/16]"
              />
              <div className="absolute inset-0 pointer-events-none border-[6px] border-black/20 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSpotlight;
