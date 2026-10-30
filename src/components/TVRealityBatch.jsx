import { motion } from 'framer-motion';
import celebrityTeacher from '../assets/10 CELEBRITY TEACHER.jpeg';

const TVRealityBatch = () => {
  return (
    <section className="section-padding bg-[#000000] relative border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,191,234,0.18)] border border-[#00BFEA]/30 max-w-[420px] w-full">
            <img
              src={celebrityTeacher}
              alt="TV Reality Training Season 3 Batch 2026"
              className="w-full object-contain"
            />
          </div>

          <p className="text-white font-bold text-xl md:text-2xl text-center tracking-wide">
            TV Reality Training Season 3 Batch 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TVRealityBatch;
