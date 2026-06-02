import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemZoom = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-[#1a0800] via-[#080808] to-[#120500]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#ff5a00] opacity-[0.04] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#ff5a00] opacity-[0.05] blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          className="flex flex-col items-center gap-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Text Side */}
          <div className="w-full">
            <motion.h2 variants={itemUp} className="text-[#ff5a00] font-bold tracking-widest uppercase text-3xl mb-4">
              About Us
            </motion.h2>
            
            <motion.h3 variants={itemZoom} className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Best Dance Academy <br/>
              <span className="text-[#ff5a00] text-xl md:text-3xl mt-2 block">in Nangloi New Delhi & Bahadurgarh Haryana.</span>
            </motion.h3>

            <motion.p variants={itemLeft} className="text-gray-400 text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
              We've been providing award-winning dance training for many years. At Step Up Dance Academy, our stylish, well-appointed studios host some of New Delhi's premier instructors — offering beginner, intermediate, and advanced dance instruction.
            </motion.p>
            
            <motion.p variants={itemRight} className="text-gray-400 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              We also offer taster sessions for those looking to experience new dance styles for the first time. Whatever your passion — celebrate it at our studio!
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 text-left">
              <motion.div variants={itemLeft} className="flex items-center gap-3">
                <span className="text-[#ff5a00] text-xl">✦</span>
                <span className="text-gray-300 font-medium">All experience levels welcome</span>
              </motion.div>
              <motion.div variants={itemRight} className="flex items-center gap-3">
                <span className="text-[#ff5a00] text-xl">✦</span>
                <span className="text-gray-300 font-medium">Certified & expert instructors</span>
              </motion.div>
              <motion.div variants={itemLeft} className="flex items-center gap-3">
                <span className="text-[#ff5a00] text-xl">✦</span>
                <span className="text-gray-300 font-medium">Children's graded programs</span>
              </motion.div>
              <motion.div variants={itemRight} className="flex items-center gap-3">
                <span className="text-[#ff5a00] text-xl">✦</span>
                <span className="text-gray-300 font-medium">TV Reality Show preparation</span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemZoom} className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:09555972389" 
                className="flex items-center gap-3 text-[#ff5a00] font-bold text-xl hover:text-white transition-colors"
              >
                <span>📞</span> 09555972389
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:07982404565" 
                className="flex items-center gap-3 text-[#ff5a00] font-bold text-xl hover:text-white transition-colors"
              >
                <span>📞</span> 079824 04565
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
