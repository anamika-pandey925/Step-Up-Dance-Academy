import { motion } from 'framer-motion';
import classicalIcon from '../assets/classical-icon.jpg';
import kidsIcon from '../assets/kids-icon.png';
import hiphopIcon from '../assets/hip-hop.jpg';
import contemporaryIcon from '../assets/contemporary-icon.png';

const classesData = [
  {
    title: "Bollywood",
    icon: "🎬",
    description: "High-energy Bollywood choreography blending classical and western influences. Perfect for all ages.",
    levels: ["Beginner", "Intermediate", "Advanced"]
  },
  {
    title: "Hip-Hop",
    icon: hiphopIcon,
    description: "Street-style grooves, breaking and freestyle. Build confidence and express your unique movement style.",
    levels: ["Beginner", "Intermediate"]
  },
  {
    title: "Classical",
    icon: classicalIcon,
    description: "Kathak and Indian classical forms with theoretical and practical knowledge taught by expert gurus.",
    levels: ["Beginner", "Advanced"]
  },
  {
    title: "Contemporary",
    icon: contemporaryIcon,
    description: "Fluid, expressive movement blending modern techniques. Ideal for dancers looking to broaden their range.",
    levels: ["Intermediate", "Advanced"]
  },
  {
    title: "Ballet / Jazz",
    icon: "🩰",
    description: "Studio sessions with mirrors and barres for ballet, and non-slip floors for jazz and modern styles.",
    levels: ["Beginner", "Intermediate"]
  },
  {
    title: "Kids Program",
    icon: kidsIcon,
    description: "Graded children's classes for examinations and qualifications. Fun, safe, and structured learning.",
    levels: ["All Ages", "Graded"]
  }
];

const Classes = () => {
  return (
    <section id="classes" className="section-padding bg-black/80 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">What We Teach</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Dance <span className="text-[#ff5a00]">Classes</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto">From timeless classical forms to high-energy street styles — we have a class for every passion and level.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((cls, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#ff5a00]/50 transition-colors group relative overflow-hidden"
            >
              <div className="text-4xl mb-4 flex items-center justify-start h-16 w-16">
                {cls.icon && cls.icon.length > 5 ? (
                  <img src={cls.icon} alt={cls.title} className="w-full h-full object-contain" />
                ) : (
                  cls.icon
                )}
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff5a00] transition-colors">{cls.title}</h4>
              <p className="text-gray-400 mb-6">{cls.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {cls.levels.map((level, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1 bg-white/10 text-white rounded-full">
                    {level}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
