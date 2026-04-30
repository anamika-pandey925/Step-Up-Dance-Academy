import React from 'react';
import { motion } from 'framer-motion';

const Floating = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[2000] flex flex-col gap-4">
      {/* WhatsApp */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919555972389"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
      >
        <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm5.36 14.16c-.22.62-1.31 1.2-1.83 1.26-.48.06-1.12.18-3.41-.77-2.73-1.14-4.51-3.92-4.65-4.1-.14-.18-1.11-1.48-1.11-2.82 0-1.34.7-2.03.95-2.28.24-.25.53-.31.7-.31.18 0 .35 0 .5.01.16.01.37-.06.57.42.22.53.75 1.83.81 1.96.06.13.11.28.02.46-.09.18-.13.3-.26.44-.13.14-.28.32-.4.44-.13.13-.27.27-.12.53.15.26.68 1.13 1.47 1.83.99.9 1.84 1.18 2.09 1.3.26.13.41.11.57-.08.15-.2.66-.77.83-1.03.18-.27.35-.22.59-.13.24.09 1.54.73 1.81.86.26.13.44.2.5.31.06.11.06.65-.16 1.27z" />
        </svg>
      </motion.a>

      {/* Call */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:9555972389"
        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-neon"
      >
        <span className="text-3xl">📞</span>
      </motion.a>
    </div>
  );
};

export default Floating;
