import { motion } from 'framer-motion';
import heroDancer from '../assets/hero-dancer.png';

const INITIAL_PARTICLES = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: ((i * 7) % 4) + 2,
  top: `${(i * 19) % 100}%`,
  left: `${(i * 23) % 100}%`,
  duration: ((i * 3) % 10) + 10,
  delay: (i * 2) % 5,
}));

export default function Hero() {
  const particles = INITIAL_PARTICLES;

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden bg-[#000000]">

      {/* CINEMATIC BACKGROUND — dark studio atmosphere matching reference image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep dark base gradient — floor reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#050810] to-[#000000]" />
        {/* Subtle floor reflection line */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#00BFEA]/[0.04] to-transparent" />
        {/* Left cyan pillar light column */}
        <div className="absolute left-[15%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00BFEA]/30 to-transparent blur-[3px]" />
        {/* Right area warm pillar column */}
        <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#0099C0]/15 to-transparent blur-[2px]" />
        {/* Atmospheric mist — left glow blob */}
        <div className="absolute w-[500px] h-[500px] bg-[#00BFEA]/8 blur-[130px] top-[-5%] left-[-8%] rounded-full" />
        {/* Center-left subtle glow */}
        <div className="absolute w-[300px] h-[300px] bg-[#0099C0]/6 blur-[100px] top-[30%] left-[10%] rounded-full" />
        {/* Right side deep glow behind dancer */}
        <div className="absolute w-[400px] h-[600px] bg-[#00BFEA]/5 blur-[120px] top-0 right-[-5%] rounded-full" />
        {/* Floor bounce light */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#00BFEA]/[0.06] blur-[80px] rounded-full" />
      </div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#00BFEA] blur-[2px]"
            style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
            animate={{
              y: ["0%", "-100%", "0%"],
              x: ["0%", "50%", "0%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* GRID LAYOUT */}
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto z-10 pt-32 lg:pt-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 relative z-10">

          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] flex flex-col gap-1 relative z-10">
            {/* Soft orange glow behind heading */}
            <div className="absolute -inset-10 bg-[#00BFEA] opacity-20 blur-3xl rounded-full pointer-events-none -z-10 mix-blend-screen"></div>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="inline-block"
            >
              <motion.span
                animate={{ x: [-8, 8, -8], scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                Move.
              </motion.span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="inline-block text-gray-100"
            >
              <motion.span
                animate={{ x: [8, -8, 8], y: [-3, 3, -3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                Express.
              </motion.span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="inline-block mt-2"
            >
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0px 0px 15px rgba(0, 191, 234, 0.4)",
                    "0px 0px 30px rgba(168, 139, 88, 0.8)",
                    "0px 0px 15px rgba(0, 191, 234, 0.4)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#0099C0] to-[#00BFEA] bg-[length:200%_auto] animate-shine"
              >
                Transform.
              </motion.span>
            </motion.span>
          </h1>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.6 }}
          >
            <motion.p
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="text-[#bdbdbd] max-w-lg text-lg md:text-xl leading-relaxed font-light"
            >
              Award-winning dance training for all ages & levels. From Bollywood to All Dance Styles — find your rhythm at <strong className="text-white font-medium">STEP UP DANCE ACADEMY.</strong>
            </motion.p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-5 mt-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,191,234,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group bg-gradient-to-r from-[#00BFEA] to-[#0099C0] px-8 py-4 rounded-full text-[#0D0D0D] font-bold transition-all shadow-[0_0_20px_rgba(0,191,234,0.3)]"
            >
              <span className="relative z-10">Start Dancing</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
            </motion.a>
            <motion.a
              href="tel:+917982404565"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,191,234,0.1)", borderColor: "rgba(0,191,234,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-white font-bold border border-white/20 bg-white/5 backdrop-blur-md transition-all"
            >
              Call Now
            </motion.a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-between gap-6 mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full max-w-md hover:border-[#00BFEA]/30 transition-colors duration-500 group"
          >
            <div className="text-center group-hover:-translate-y-1 transition-transform">
              <p className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(0,191,234,0.4)]">18+</p>
              <p className="text-[10px] md:text-xs text-[#0099C0] uppercase tracking-widest font-semibold">Google Reviews</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10 group-hover:bg-[#00BFEA]/30 transition-colors"></div>
            <div className="text-center group-hover:-translate-y-1 transition-transform delay-75">
              <p className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(0,191,234,0.4)]">5+</p>
              <p className="text-[10px] md:text-xs text-[#0099C0] uppercase tracking-widest font-semibold">Dance Styles</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10 group-hover:bg-[#00BFEA]/30 transition-colors"></div>
            <div className="text-center group-hover:-translate-y-1 transition-transform delay-150">
              <p className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(0,191,234,0.4)]">10+</p>
              <p className="text-[10px] md:text-xs text-[#0099C0] uppercase tracking-widest font-semibold">Years Exp.</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL — STATIC DANCER IMAGE */}
        <div className="relative h-[420px] md:h-[560px] lg:h-[700px] w-full flex justify-center lg:justify-end items-end z-10 overflow-visible">

          {/* Cyan glow beneath dancer feet */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[80px] bg-[#00BFEA]/20 blur-[50px] rounded-full pointer-events-none" />
          {/* Subtle side glow */}
          <div className="absolute right-0 top-1/4 w-[180px] h-[400px] bg-[#00BFEA]/8 blur-[80px] rounded-full pointer-events-none" />

          <img
            src={heroDancer}
            alt="Step Up Dance Academy dancer"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="relative z-10 w-auto h-full max-h-[420px] md:max-h-[560px] lg:max-h-[700px] object-contain object-bottom select-none pointer-events-none drop-shadow-[0_0_40px_rgba(0,191,234,0.25)]"
            style={{ filter: 'drop-shadow(0 0 32px rgba(0,191,234,0.18))' }}
          />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10"
      >
        <span className="text-[10px] text-[#bdbdbd] uppercase tracking-[0.3em] mb-3 font-medium">Scroll</span>
        <div className="w-[2px] h-16 bg-white/10 rounded-full overflow-hidden relative">
          <div className="w-full h-1/2 bg-gradient-to-b from-[#00BFEA] to-transparent animate-slide-down"></div>
        </div>
      </motion.div>
    </section>
  );
}
