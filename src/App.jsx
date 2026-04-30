import React, { useEffect } from 'react';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Branches from './components/Branches';
import TVReality from './components/TVReality';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Floating from './components/Floating';
import Marquee from './components/Marquee';

function App() {
  useEffect(() => {
    // Smooth scroll handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Custom cursor logic
    const cursor = document.getElementById('custom-cursor');
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);

    const handleHover = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div className="bg-bg text-white selection:bg-primary selection:text-white">
      <div id="custom-cursor"></div>
      <div className="flowing-bg"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <About />
        <Founder />
        <Branches />
        <TVReality />
        <Gallery />
        <Videos />
        <Booking />
      </main>

      <Contact />
      <Floating />
    </div>
  );
}

export default App;