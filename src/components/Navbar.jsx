import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp';

const MotionLink = motion.create(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Branches', href: '/branches' },
    { name: 'Wedding', href: '/wedding' },
    { name: 'Zumba', href: '/zumba' },
    { name: 'Personal Training', href: '/personal-training' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'bg-[#080808]/80 backdrop-blur-xl py-4 border-b border-[#ff6b00]/20 shadow-[0_4px_30px_rgba(255,107,0,0.1)]' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring", bounce: 0.4 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-[#ff6b00] blur-[15px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
              <motion.img 
                src={logo} 
                alt="Step Up" 
                width="64"
                height="64"
                loading="eager"
                decoding="async"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#ff6b00] object-cover relative z-10 shadow-[0_0_15px_rgba(255,107,0,0.5)]" 
              />
            </div>
            <div className="flex flex-col justify-center hidden sm:flex">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white relative z-10 leading-none mb-1">
                Step Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]"> Dance </span> Academy
              </span>
              <span className="text-[10px] md:text-[11px] text-[#ff9d4d] font-medium tracking-wide opacity-90">
                ✦ Premier Dance Academy, Delhi & Haryana
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Menu Center */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          <ul className="flex gap-4 xl:gap-6">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.5, duration: 0.5, ease: "easeOut" }}
              >
                {link.href.startsWith('#') ? (
                  <a href={link.href} className="text-sm font-medium text-[#bdbdbd] hover:text-white transition-colors relative group py-2">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(255,107,0,0.8)]"></span>
                  </a>
                ) : (
                  <Link to={link.href} className={`text-sm font-medium transition-colors relative group py-2 ${location.pathname === link.href ? 'text-white' : 'text-[#bdbdbd] hover:text-white'}`}>
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] transition-all duration-300 shadow-[0_0_8px_rgba(255,107,0,0.8)] ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Right */}
        <div className="hidden lg:flex items-center gap-4">
          <MotionLink
            to="/registration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,107,0,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white px-6 py-2.5 rounded-full font-bold transition-all border border-[#ff6b00]/50 shadow-[0_0_15px_rgba(255,107,0,0.3)]"
          >
            Book Trial
          </MotionLink>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2 relative z-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-[#ff6b00]" /> : <Menu size={28} className="text-[#ff6b00]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-[#ff6b00]/20 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 py-10 px-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-medium text-[#bdbdbd] hover:text-[#ff6b00] transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} onClick={() => setIsOpen(false)} className={`text-xl font-medium transition-colors ${location.pathname === link.href ? 'text-[#ff6b00]' : 'text-[#bdbdbd] hover:text-[#ff6b00]'}`}>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link to="/registration" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white px-8 py-3 rounded-full font-bold w-full text-center shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                Book Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
