import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Founder from './components/Founder';
import Branches from './components/Branches';
import Classes from './components/Classes';
import Wedding from './components/Wedding';
import VideoReviews from './components/VideoReviews';
import PersonalTraining from './components/PersonalTraining';
import TVReality from './components/TVReality';
import Contact from './components/Contact';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div className="flowing-bg"></div>
      
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <Ticker />
        <About />
        <Founder />
        <Branches />
        <Classes />
        <Wedding />
        <VideoReviews />
        <PersonalTraining />
        <TVReality />
        <Showcase />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fab-container">
        <a 
          href="https://wa.me/919555972389?text=Hello!%20I%20would%20like%20to%20make%20an%20enquiry%20about%20Step%20Up%20Dance%20Academy."
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab fab-wa" 
          aria-label="WhatsApp"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm5.36 14.16c-.22.62-1.31 1.2-1.83 1.26-.48.06-1.12.18-3.41-.77-2.73-1.14-4.51-3.92-4.65-4.1-.14-.18-1.11-1.48-1.11-2.82 0-1.34.7-2.03.95-2.28.24-.25.53-.31.7-.31.18 0 .35 0 .5.01.16.01.37-.06.57.42.22.53.75 1.83.81 1.96.06.13.11.28.02.46-.09.18-.13.3-.26.44-.13.14-.28.32-.4.44-.13.13-.27.27-.12.53.15.26.68 1.13 1.47 1.83.99.9 1.84 1.18 2.09 1.3.26.13.41.11.57-.08.15-.2.66-.77.83-1.03.18-.27.35-.22.59-.13.24.09 1.54.73 1.81.86.26.13.44.2.5.31.06.11.06.65-.16 1.27z" />
          </svg>
        </a>
        <a href="tel:+917982404565" className="fab fab-phone" aria-label="Call us">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;