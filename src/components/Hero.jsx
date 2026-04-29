import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const animateCounters = () => {
      const stats = statsRef.current.querySelectorAll('.stat-num');
      stats.forEach(el => {
        const target = +el.dataset.target;
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current;
          if (current >= target) clearInterval(timer);
        }, 50);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxEls = document.querySelectorAll('.parallax');
      parallaxEls.forEach(el => {
        const speed = el.dataset.speed || 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-lines"></div>
      </div>
      <div className="hero-content parallax reveal" data-speed="0.2">
        <span className="hero-badge">✦ Premier Dance Academy, with branches in Nangloi, New Delhi and Bahadurgarh, Haryana</span>
        <h1 className="hero-title">Move - Express - <br /><em>Transform.</em></h1>
        <p className="hero-sub">Award-winning dance training for all ages & levels in Nangloi , New Delhi & Bahadurgarh Haryana. From Bollywood to All Dance Style — find your rhythm at STEP UP DANCE ACADEMY.</p>
        <div className="hero-actions">
          <a href="#classes" className="btn-primary hero-btn">Explore Classes</a>
          <a href="tel:+917982404565" className="btn-ghost hero-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div className="stat"><span className="stat-num" data-target="18">0</span><span className="stat-label">Google Reviews</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num" data-target="5">0</span><span className="stat-label">Dance Styles</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num" data-target="10">0</span><span className="stat-label">Years Training</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="dancer-card">
          <div className="dancer-img-wrap">
            <div className="dancer-placeholder">
              <div className="dancer-silhouette"></div>
            </div>
          </div>
          <div className="dancer-tag">⭐ 4.9 Rating</div>
        </div>
        <div className="float-badge fb-1">🎓 Certified Instructors</div>
        <div className="float-badge fb-2">💃 All Dance Styles</div>
      </div>
      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
