import { motion } from 'framer-motion';
import internationalVid from '../assets/international_review_vid.mp4';
import nationalVid from '../assets/national-review.mp4';

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-black/80 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Global Impact</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">International & National <span className="text-[#ff5a00]">Reviews</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Hear directly from our global and local community about their journey with us.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          
          {/* International Review */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full md:w-1/2"
          >
            <h4 className="text-2xl font-bold text-white mb-6 border-b border-[#ff5a00]/30 pb-2">International Review</h4>
            <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,90,0,0.1)] border border-white/10 group bg-black">
              <video 
                src={internationalVid}
                controls
                preload="none"
                playsInline
                className="w-full object-cover aspect-[9/16]"
              />
              <div className="absolute inset-0 pointer-events-none border-[8px] border-black/20 rounded-3xl"></div>
            </div>
          </motion.div>

          {/* National Review */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center w-full md:w-1/2"
          >
            <h4 className="text-2xl font-bold text-white mb-6 border-b border-[#ff5a00]/30 pb-2">National Review</h4>
            <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,90,0,0.1)] border border-white/10 group bg-black">
              <video 
                src={nationalVid}
                controls
                preload="none"
                playsInline
                className="w-full object-cover aspect-[9/16]"
              />
              <div className="absolute inset-0 pointer-events-none border-[8px] border-black/20 rounded-3xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
