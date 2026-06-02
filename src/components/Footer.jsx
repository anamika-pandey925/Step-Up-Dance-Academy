import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
  </svg>
);

const FooterLink = ({ href, children }) => (
  <li>
    {href.startsWith('#') ? (
      <a href={href} className="text-gray-400 hover:text-[#ff5a00] transition-colors flex items-center gap-2 group text-sm">
        <ChevronRight size={14} className="text-[#ff5a00] opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
        {children}
      </a>
    ) : (
      <Link to={href} className="text-gray-400 hover:text-[#ff5a00] transition-colors flex items-center gap-2 group text-sm">
        <ChevronRight size={14} className="text-[#ff5a00] opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
        {children}
      </Link>
    )}
  </li>
);

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Step Up Dance Academy Logo" className="w-12 h-12 rounded-full border border-[#ff5a00] object-cover" />
              <span className="text-xl font-serif font-bold text-white leading-tight">Step Up <br/><span className="text-[#ff5a00]">Dance Academy</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Award-winning dance training for all ages in Nangloi, Delhi & Bahadurgarh, Haryana. Your passion. Our stage.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/step_up_dance_academy_?igsh=eWdmcWoyZ2liMWoz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <InstagramIcon />
              </a>
              <a href="https://youtu.be/C336qhEMiyY?si=-A0mKsR5xuzQ0lHE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/#about">About</FooterLink>
              <FooterLink href="/#classes">Classes</FooterLink>
              <FooterLink href="/facilities">Facilities</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/#reviews">Reviews</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Dance Styles */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-serif font-bold text-lg mb-6">Dance Styles</h4>
            <ul className="grid grid-cols-2 xl:grid-cols-3 gap-3">
              <FooterLink href="#">Bollywood</FooterLink>
              <FooterLink href="#">Hip-Hop</FooterLink>
              <FooterLink href="#">Classical</FooterLink>
              <FooterLink href="#">Contemporary</FooterLink>
              <FooterLink href="#">Ballet & Jazz</FooterLink>
              <FooterLink href="#">Kids Program</FooterLink>
              <FooterLink href="#">Haryana Dance</FooterLink>
              <FooterLink href="#">Krump</FooterLink>
              <FooterLink href="#">Breaking</FooterLink>
              <FooterLink href="#">Salsa</FooterLink>
              <FooterLink href="#">Punjabi Bhangra</FooterLink>
              <FooterLink href="#">Western Solo & Duet</FooterLink>
              <FooterLink href="#">Popping & Locking</FooterLink>
              <FooterLink href="#">Solo Duet & Group</FooterLink>
              <FooterLink href="#">Belly Dance</FooterLink>
              <FooterLink href="#">House Dance</FooterLink>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="text-[#ff5a00] shrink-0 mt-0.5" size={16} />
                <div>
                  <p>09555972389</p>
                  <p>07982404565</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="text-[#ff5a00] shrink-0 mt-0.5" size={16} />
                <p>stepupdanceacademy1999@gmail.com</p>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-[#ff5a00] shrink-0 mt-0.5" size={16} />
                <p><strong>Nangloi:</strong> STEP UP DANCE ACADEMY HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041 NEAREST NANGLOI METRO STATION</p>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-[#ff5a00] shrink-0 mt-0.5" size={16} />
                <p><strong>Bahadurgarh:</strong> STEP UP DANCE ACADEMY BAHADURGARH BRANCH OPPOSITE ELENTA MART DHARAM VIHAR NALA ROAD AGARWAL COLONY, NEAREST METRO STATION BAHADURGARH CITY.</p>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="text-[#ff5a00] shrink-0 mt-0.5" size={16} />
                <p>10 AM – 9 PM (Mon–Sat)</p>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2025 Step Up Dance Academy. All rights reserved.</p>
          <p>Designed with ♥ for dancers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
