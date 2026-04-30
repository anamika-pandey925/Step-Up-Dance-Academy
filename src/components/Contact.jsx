import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <footer id="contact" className="py-20 bg-bg2 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-8">
              <img src="/images/logo.jpg.jpeg" alt="Logo" className="w-12 h-12 rounded-full border-2 border-primary" />
              <span className="text-2xl font-black tracking-tighter">STEP UP <span className="text-primary">DANCE</span></span>
            </a>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Leading the way in professional dance training across Delhi and Haryana. Empowering the next generation of performers.
            </p>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-primary mb-8">Direct Contact</h4>
            <ul className="space-y-4">
              <li>
                 <a href="tel:9555972389" className="text-white/60 hover:text-white transition-colors flex items-center gap-3">
                   <span className="text-primary">📞</span> 0955597 2389
                 </a>
              </li>
              <li>
                 <a href="tel:7982404565" className="text-white/60 hover:text-white transition-colors flex items-center gap-3">
                   <span className="text-primary">📞</span> 079824 04565
                 </a>
              </li>
              <li>
                 <a href="mailto:info@stepupdance.com" className="text-white/60 hover:text-white transition-colors flex items-center gap-3">
                   <span className="text-primary">✉️</span> Contact Academy
                 </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-primary mb-8">Social Connect</h4>
            <div className="flex gap-4">
              {['IG', 'FB', 'YT'].map((platform) => (
                <a key={platform} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-black hover:bg-primary hover:border-primary transition-all">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Step Up Dance Academy. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
