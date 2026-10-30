import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  MapPin, 
  Users, 
  Award, 
  Image as ImageIcon, 
  BookOpen, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp';

const MotionLink = motion.create(Link);

const aboutDropdownItems = [
  {
    name: 'Our Story',
    desc: 'Award-winning dance heritage in Delhi & Haryana',
    href: '/#about',
    icon: BookOpen,
  },
  {
    name: 'Our Instructors',
    desc: 'Guided by Founder Mr. Addy & certified gurus',
    href: '/#about',
    icon: Users,
  },
  {
    name: 'Gallery',
    desc: 'Studio training, showcase videos & viral moments',
    href: '/branches#showcase',
    icon: ImageIcon,
  },
  {
    name: 'Achievements',
    desc: '100+ Trophies, medals & TV reality show honors',
    href: '/#about',
    icon: Award,
  },
];

const branchesDropdownItems = [
  {
    name: 'Nangloi Delhi Branch',
    desc: 'Hall No 5, Shiv Market (Nr Nangloi Metro)',
    badge: 'Delhi',
    href: '/branches#branches',
  },
  {
    name: 'Bahadurgarh Haryana Branch',
    desc: 'Dharam Vihar, Agarwal Colony (Nr Metro City)',
    badge: 'Haryana',
    href: '/branches#branches',
  },
  {
    name: 'View All Branches',
    desc: 'Compare studio locations, timings & map routes',
    badge: 'Overview',
    href: '/branches',
    isHighlight: true,
  },
];

const danceStylesItems = [
  { name: 'Classical (Kathak / Bharatnatyam)', href: '/#classes' },
  { name: 'Contemporary', href: '/#classes' },
  { name: 'Zumba / Aerobics', href: '/zumba', badge: 'Fitness' },
  { name: 'Ballet & Jazz', href: '/#classes' },
  { name: 'Kids Program', href: '/#classes', badge: 'Graded' },
  { name: 'Haryana Dance', href: '/#classes' },
  { name: 'Krump', href: '/#classes' },
  { name: 'Breaking', href: '/#classes' },
  { name: 'Salsa', href: '/#classes' },
  { name: 'Punjabi Bhangra', href: '/#classes' },
  { name: 'Western Solo & Duet', href: '/#classes' },
  { name: 'Popping & Locking', href: '/#classes' },
  { name: 'Solo Duet & Group', href: '/#classes' },
  { name: 'Belly Dance', href: '/#classes' },
  { name: 'House Dance', href: '/#classes' },
  { name: 'Wedding Choreography', href: '/wedding', badge: 'Specialist' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  
  const location = useLocation();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Track scroll for navbar transparency / glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll when URL has a hash target
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  // Close menus on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
        setMobileExpanded(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Reset dropdown states when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Desktop hover handling with debounce to prevent flicker
  const handleMouseEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  // Toggle dropdown on desktop click
  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  // Toggle accordion in mobile menu
  const toggleMobileAccordion = (key) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  // Link click handler with in-page smooth scrolling support
  const handleLinkClick = (e, href) => {
    setActiveDropdown(null);
    setIsOpen(false);
    setMobileExpanded(null);

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    } else if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  // Determine active state for navigation items
  const isHomeActive = location.pathname === '/' && !location.hash;
  const isAboutActive = location.pathname === '/' && (location.hash === '#about' || location.hash === '#founder');
  const isBranchesActive = location.pathname === '/branches';
  const isStylesActive = location.pathname === '/wedding' || location.pathname === '/zumba' || (location.pathname === '/' && location.hash === '#classes');
  const isPersonalActive = location.pathname === '/personal-training';
  const isPricingActive = location.pathname === '/pricing';
  const isContactActive = location.pathname === '/contact';

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#000000]/90 backdrop-blur-xl py-3 border-b border-[#00BFEA]/20 shadow-[0_4px_30px_rgba(0,191,234,0.1)]' 
          : 'bg-gradient-to-b from-[#000000]/80 via-[#000000]/40 to-transparent backdrop-blur-[2px] py-4 md:py-5 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link 
          to="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#00BFEA] blur-[14px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
            <motion.img 
              src={logo} 
              alt="Step Up Dance Academy" 
              width="56"
              height="56"
              loading="eager"
              decoding="async"
              whileHover={{ scale: 1.06, rotate: 3 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#00BFEA] object-cover relative z-10 shadow-[0_0_15px_rgba(0,191,234,0.5)]" 
            />
          </div>
          <div className="flex flex-col justify-center hidden sm:flex">
            <span className="text-lg md:text-xl xl:text-2xl font-serif font-bold tracking-tight text-white relative z-10 leading-none mb-1">
              Step Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFEA] to-[#0099C0] drop-shadow-[0_0_8px_rgba(0,191,234,0.8)]"> Dance </span> Academy
            </span>
            <span className="text-[10px] md:text-[11px] text-[#0099C0] font-medium tracking-wide opacity-90 hidden lg:block">
              ✦ Premier Dance Academy, Delhi & Haryana
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1 xl:gap-2 text-[13px] xl:text-[14px]">
            
            {/* A. Home */}
            <li className="relative group">
              <Link 
                to="/" 
                onClick={(e) => handleLinkClick(e, '/')}
                className={`px-2.5 xl:px-3 py-2 font-medium rounded-lg transition-colors relative flex items-center ${
                  isHomeActive ? 'text-white font-semibold' : 'text-[#bdbdbd] hover:text-white'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00BFEA] to-[#0099C0] transition-all duration-300 shadow-[0_0_8px_rgba(0,191,234,0.8)] ${
                  isHomeActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </Link>
            </li>

            {/* B. About Us — Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('about')}
                aria-expanded={activeDropdown === 'about'}
                aria-haspopup="true"
                className={`px-2.5 xl:px-3 py-2 font-medium rounded-lg transition-colors relative flex items-center gap-1.5 group cursor-pointer ${
                  isAboutActive ? 'text-white font-semibold' : 'text-[#bdbdbd] hover:text-white'
                }`}
              >
                <span>About Us</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${
                    activeDropdown === 'about' ? 'rotate-180 text-[#00BFEA]' : 'text-gray-400 group-hover:text-white'
                  }`} 
                />
                <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00BFEA] to-[#0099C0] transition-all duration-300 shadow-[0_0_8px_rgba(0,191,234,0.8)] ${
                  isAboutActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-2 z-50 w-72"
                  >
                    <div className="bg-[#000000]/98 backdrop-blur-2xl border border-[#00BFEA]/25 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(0,191,234,0.12)]">
                      <div className="px-3 py-2 mb-1 border-b border-white/[0.06] flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00BFEA]">About Step Up</span>
                        <span className="text-[10px] text-gray-500">Est. Delhi & HR</span>
                      </div>
                      <div className="space-y-1">
                        {aboutDropdownItems.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={(e) => handleLinkClick(e, item.href)}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-[#00BFEA]/20 transition-all duration-150"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00BFEA] shrink-0 group-hover:scale-105 group-hover:bg-[#00BFEA]/10 transition-transform">
                                <IconComponent size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[13px] font-semibold text-white group-hover:text-[#0099C0] transition-colors leading-tight">
                                  {item.name}
                                </p>
                                <p className="text-[11px] text-gray-400 leading-tight mt-0.5 line-clamp-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* C. Branches — Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('branches')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('branches')}
                aria-expanded={activeDropdown === 'branches'}
                aria-haspopup="true"
                className={`px-2.5 xl:px-3 py-2 font-medium rounded-lg transition-colors relative flex items-center gap-1.5 group cursor-pointer ${
                  isBranchesActive ? 'text-white font-semibold' : 'text-[#bdbdbd] hover:text-white'
                }`}
              >
                <span>Branches</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${
                    activeDropdown === 'branches' ? 'rotate-180 text-[#00BFEA]' : 'text-gray-400 group-hover:text-white'
                  }`} 
                />
                <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00BFEA] to-[#0099C0] transition-all duration-300 shadow-[0_0_8px_rgba(0,191,234,0.8)] ${
                  isBranchesActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'branches' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-2 z-50 w-80"
                  >
                    <div className="bg-[#000000]/98 backdrop-blur-2xl border border-[#00BFEA]/25 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(0,191,234,0.12)]">
                      <div className="px-3 py-2 mb-1 border-b border-white/[0.06] flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00BFEA] flex items-center gap-1">
                          <MapPin size={11} /> Academy Studios
                        </span>
                        <span className="text-[10px] text-gray-500">2 Locations</span>
                      </div>
                      <div className="space-y-1">
                        {branchesDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className={`group flex items-start justify-between gap-3 p-2.5 rounded-xl border transition-all duration-150 ${
                              item.isHighlight 
                                ? 'bg-gradient-to-r from-[#00BFEA]/10 to-transparent border-[#00BFEA]/30 hover:bg-[#00BFEA]/20' 
                                : 'hover:bg-white/[0.06] border-transparent hover:border-[#00BFEA]/20'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className={`text-[13px] font-semibold transition-colors leading-tight ${
                                  item.isHighlight ? 'text-[#0099C0] group-hover:text-white' : 'text-white group-hover:text-[#0099C0]'
                                }`}>
                                  {item.name}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-400 leading-tight line-clamp-1">
                                {item.desc}
                              </p>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${
                              item.badge === 'Delhi' 
                                ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                                : item.badge === 'Haryana'
                                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                : 'bg-[#00BFEA]/20 text-[#0099C0] border border-[#00BFEA]/40'
                            }`}>
                              {item.badge}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* D. Dance Styles — Two-Column Mega Menu */}
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('styles')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('styles')}
                aria-expanded={activeDropdown === 'styles'}
                aria-haspopup="true"
                className={`px-2.5 xl:px-3 py-2 font-medium rounded-lg transition-colors relative flex items-center gap-1.5 group cursor-pointer ${
                  isStylesActive ? 'text-white font-semibold' : 'text-[#bdbdbd] hover:text-white'
                }`}
              >
                <span>Dance Styles</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${
                    activeDropdown === 'styles' ? 'rotate-180 text-[#00BFEA]' : 'text-gray-400 group-hover:text-white'
                  }`} 
                />
                <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00BFEA] to-[#0099C0] transition-all duration-300 shadow-[0_0_8px_rgba(0,191,234,0.8)] ${
                  isStylesActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'styles' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[560px] xl:w-[600px] max-w-[92vw]"
                  >
                    <div className="bg-[#000000]/98 backdrop-blur-2xl border border-[#00BFEA]/25 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(0,191,234,0.12)]">
                      
                      {/* Mega Menu Top Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] px-1">
                        <span className="text-[11px] font-bold tracking-widest uppercase text-[#00BFEA] flex items-center gap-1.5">
                          <Sparkles size={13} /> Dance Disciplines & Programs
                        </span>
                        <span className="text-[11px] text-gray-400 font-medium bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                          16 Disciplines
                        </span>
                      </div>

                      {/* 2-Column Mega Grid */}
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {danceStylesItems.map((style, idx) => (
                          <Link
                            key={style.name}
                            to={style.href}
                            onClick={(e) => handleLinkClick(e, style.href)}
                            className="group flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-[#00BFEA]/25 transition-all duration-150"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#00BFEA] transition-colors w-4 shrink-0">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-[12.5px] font-medium text-gray-300 group-hover:text-white transition-colors truncate">
                                {style.name}
                              </span>
                            </div>
                            {style.badge && (
                              <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-[#00BFEA]/15 text-[#0099C0] border border-[#00BFEA]/30 shrink-0 ml-1">
                                {style.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Footer Quick Action */}
                      <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between px-1 text-[11px]">
                        <span className="text-gray-400">All levels welcome • Beginner to TV reality training</span>
                        <Link 
                          to="/registration" 
                          onClick={(e) => handleLinkClick(e, '/registration')}
                          className="text-[#0099C0] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                        >
                          Book Free Trial <ArrowRight size={12} />
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* E. Personal Training */}
            <li className="relative group">
              <Link 
                to="/personal-training" 
                onClick={(e) => handleLinkClick(e, '/personal-training')}
                className={`px-2.5 xl:px-3 py-2 font-medium rounded-lg transition-colors relative flex items-center whitespace-nowrap ${
                  isPersonalActive ? 'text-white font-semibold' : 'text-[#bdbdbd] hover:text-white'
                }`}
              >
                Personal Training
                <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00BFEA] to-[#0099C0] transition-all duration-300 shadow-[0_0_8px_rgba(0,191,234,0.8)] ${
                  isPersonalActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </Link>
            </li>

            {/* F. Pricing */}
            <li className="relative group">
              <Link 
                to="/pricing" 
                onClick={(e) => handleLinkClick(e, '/pricing')}
                className={`px-2.5 xl:px-3 py-2 font-medium rounded-lg transition-colors relative flex items-center ${
                  isPricingActive ? 'text-white font-semibold' : 'text-[#bdbdbd] hover:text-white'
                }`}
              >
                Pricing
                <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00BFEA] to-[#0099C0] transition-all duration-300 shadow-[0_0_8px_rgba(0,191,234,0.8)] ${
                  isPricingActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </Link>
            </li>

            {/* G. Contact */}
            <li className="relative group">
              <Link 
                to="/contact" 
                onClick={(e) => handleLinkClick(e, '/contact')}
                className={`px-2.5 xl:px-3 py-2 font-medium rounded-lg transition-colors relative flex items-center ${
                  isContactActive ? 'text-white font-semibold' : 'text-[#bdbdbd] hover:text-white'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00BFEA] to-[#0099C0] transition-all duration-300 shadow-[0_0_8px_rgba(0,191,234,0.8)] ${
                  isContactActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </Link>
            </li>

          </ul>
        </div>

        {/* H. Book Trial — CTA Right Button */}
        <div className="hidden lg:flex items-center gap-3">
          <MotionLink
            to="/registration"
            onClick={(e) => handleLinkClick(e, '/registration')}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(0,191,234,0.6)" }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-[#00BFEA] to-[#0099C0] text-[#0D0D0D] px-5 xl:px-6 py-2.5 rounded-full font-bold text-xs xl:text-sm tracking-wide transition-all border border-[#00BFEA]/50 shadow-[0_0_15px_rgba(0,191,234,0.3)] hover:shadow-[0_0_25px_rgba(0,191,234,0.6)] whitespace-nowrap cursor-pointer"
          >
            Book Trial
          </MotionLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 relative z-10 hover:border-[#00BFEA]/50 transition-colors"
        >
          {isOpen ? <X size={24} className="text-[#00BFEA]" /> : <Menu size={24} className="text-[#00BFEA]" />}
        </button>

      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#000000]/98 backdrop-blur-2xl border-b border-[#00BFEA]/25 max-h-[82vh] overflow-y-auto overflow-x-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 p-5 text-sm">
              
              {/* Mobile Home */}
              <Link 
                to="/" 
                onClick={(e) => handleLinkClick(e, '/')}
                className={`py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between ${
                  isHomeActive ? 'bg-[#00BFEA]/15 text-[#0099C0] font-bold border border-[#00BFEA]/30' : 'text-[#bdbdbd] hover:bg-white/5'
                }`}
              >
                <span>Home</span>
              </Link>

              {/* Mobile About Us Accordion */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('about')}
                  className="w-full py-3 px-4 flex items-center justify-between text-left font-medium text-white hover:text-[#0099C0] transition-colors"
                >
                  <span className={isAboutActive ? 'text-[#0099C0] font-bold' : ''}>About Us</span>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 text-[#00BFEA] ${
                      mobileExpanded === 'about' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'about' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-white/[0.08] bg-black/40 px-3 py-2 space-y-1"
                    >
                      {aboutDropdownItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className="flex items-center gap-3 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <IconComponent size={16} className="text-[#00BFEA] shrink-0" />
                            <div className="min-w-0">
                              <p className="font-semibold text-xs leading-tight text-white">{item.name}</p>
                              <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Branches Accordion */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('branches')}
                  className="w-full py-3 px-4 flex items-center justify-between text-left font-medium text-white hover:text-[#0099C0] transition-colors"
                >
                  <span className={isBranchesActive ? 'text-[#0099C0] font-bold' : ''}>Branches</span>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 text-[#00BFEA] ${
                      mobileExpanded === 'branches' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'branches' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-white/[0.08] bg-black/40 px-3 py-2 space-y-1"
                    >
                      {branchesDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="flex items-center justify-between p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <div className="min-w-0">
                            <p className="font-semibold text-xs text-white leading-tight">{item.name}</p>
                            <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{item.desc}</p>
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00BFEA]/15 text-[#0099C0] border border-[#00BFEA]/30 shrink-0">
                            {item.badge}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Dance Styles Accordion (Single-column scrollable list) */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('styles')}
                  className="w-full py-3 px-4 flex items-center justify-between text-left font-medium text-white hover:text-[#0099C0] transition-colors"
                >
                  <span className={isStylesActive ? 'text-[#0099C0] font-bold' : ''}>Dance Styles</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00BFEA]/15 text-[#0099C0]">16 Styles</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 text-[#00BFEA] ${
                        mobileExpanded === 'styles' ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'styles' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-white/[0.08] bg-black/40 px-3 py-2 space-y-0.5 max-h-[300px] overflow-y-auto"
                    >
                      {danceStylesItems.map((style, idx) => (
                        <Link
                          key={style.name}
                          to={style.href}
                          onClick={(e) => handleLinkClick(e, style.href)}
                          className="flex items-center justify-between p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-[10px] font-mono text-[#00BFEA] w-4 shrink-0">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span className="text-xs font-medium text-gray-200 truncate">
                              {style.name}
                            </span>
                          </div>
                          {style.badge && (
                            <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-[#00BFEA]/15 text-[#0099C0] border border-[#00BFEA]/30 shrink-0">
                              {style.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Personal Training */}
              <Link 
                to="/personal-training" 
                onClick={(e) => handleLinkClick(e, '/personal-training')}
                className={`py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between ${
                  isPersonalActive ? 'bg-[#00BFEA]/15 text-[#0099C0] font-bold border border-[#00BFEA]/30' : 'text-[#bdbdbd] hover:bg-white/5'
                }`}
              >
                <span>Personal Training</span>
              </Link>

              {/* Mobile Pricing */}
              <Link 
                to="/pricing" 
                onClick={(e) => handleLinkClick(e, '/pricing')}
                className={`py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between ${
                  isPricingActive ? 'bg-[#00BFEA]/15 text-[#0099C0] font-bold border border-[#00BFEA]/30' : 'text-[#bdbdbd] hover:bg-white/5'
                }`}
              >
                <span>Pricing</span>
              </Link>

              {/* Mobile Contact */}
              <Link 
                to="/contact" 
                onClick={(e) => handleLinkClick(e, '/contact')}
                className={`py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between ${
                  isContactActive ? 'bg-[#00BFEA]/15 text-[#0099C0] font-bold border border-[#00BFEA]/30' : 'text-[#bdbdbd] hover:bg-white/5'
                }`}
              >
                <span>Contact</span>
              </Link>

              {/* Mobile CTA Book Trial Button */}
              <div className="pt-3">
                <Link 
                  to="/registration" 
                  onClick={(e) => handleLinkClick(e, '/registration')}
                  className="bg-gradient-to-r from-[#00BFEA] to-[#0099C0] text-[#0D0D0D] py-3.5 px-6 rounded-full font-bold text-center tracking-wide shadow-[0_0_20px_rgba(0,191,234,0.4)] block w-full text-sm"
                >
                  Book Trial
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
