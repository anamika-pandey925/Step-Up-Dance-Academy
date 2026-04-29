import React, { useEffect, useRef } from 'react';
import nangloiVideo from '../assets/academy-intro-nangloi-branch.mp4';
import bahadurgarhVideo from '../assets/academy-intro-bahadurgarh-branch.mp4';

const Branches = () => {
  const nangloiVideoRef = useRef(null);
  const bahadurgarhVideoRef = useRef(null);

  useEffect(() => {
    // Gallery auto-slider logic
    const galleries = document.querySelectorAll('.branch-inline-gallery');
    galleries.forEach(gallery => {
      const track = gallery.querySelector('.bh-gallery-track');
      const items = gallery.querySelectorAll('.bh-item');
      if (track && items.length > 0) {
        let scrollIdx = 0;
        const interval = setInterval(() => {
          const perView = window.innerWidth <= 640 ? 3 : 4;
          if (items.length <= perView) return;
          scrollIdx = (scrollIdx + 1) % (items.length - perView + 1);
          const move = scrollIdx * (window.innerWidth <= 640 ? 92 : 112);
          track.style.transform = `translateX(-${move}px)`;
        }, 3000);
        return () => clearInterval(interval);
      }
    });
  }, []);

  const getImageUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
  };

  return (
    <section className="branches section" id="branches">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Find Us</span>
          <h2 className="section-title">Our <em>Branches</em></h2>
        </div>
        <div className="branch-cards-wrapper">
          {/* Nangloi Branch */}
          <div className="branch-glass-card reveal" data-delay="0">
            <div className="bgc-video">
              <div className="video-container">
                <video ref={nangloiVideoRef} className="academy-video" controls loop playsInline>
                  <source src={nangloiVideo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="bgc-content">
              <h3>Nangloi Delhi Branch</h3>
              <p className="section-sub">Join our step up dance academy at our premium studio in Nangloi Delhi</p>
              <p><strong>Address:</strong> STEP UP DANCE ACADEMY HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041 NEAREST NANGLOI METRO STATION</p>
              <p><strong>Timing:</strong> 10:00 AM – 09:00 PM <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#FF4500', borderRadius: '50%', marginLeft: '8px', boxShadow: '0 0 10px #FF4500' }}></span></p>

              <div className="branch-inline-gallery nangloi-gallery">
                <div className="bh-gallery-label">Branch Gallery & Awards ✦</div>
                <div className="bh-gallery-slider">
                  <div className="bh-gallery-track">
                    <div className="bh-item"><img src={getImageUrl('Photos/Nangloi/front.jpeg')} alt="Front View" /></div>
                    <div className="bh-item"><img src={getImageUrl('Photos/Nangloi/Entry.jpeg')} alt="Entry View" /></div>
                    <div className="bh-item"><img src={getImageUrl('Photos/Nangloi/Award.jpeg')} alt="Award 1" /></div>
                    {/* Add more as needed */}
                  </div>
                </div>
              </div>

              <div className="bgc-actions">
                <a href="#contact" className="btn-primary">Join Now</a>
                <div className="branch-socials">
                  <a href="https://www.instagram.com/step_up_dance_academy_?igsh=c3gyNHU3bWlzbWI4" target="_blank" rel="noopener noreferrer" className="btn-social-mini ig" title="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/stepupdanceacademy.official" target="_blank" rel="noopener noreferrer" className="btn-social-mini fb" title="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a href="https://youtube.com/@stepupdanceacademy1999?si=R9zU4OdZfDNlxUR0" target="_blank" rel="noopener noreferrer" className="btn-social-mini yt" title="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bahadurgarh Branch */}
          <div className="branch-glass-card reveal" data-delay="1">
            <div className="bgc-video">
              <div className="video-container">
                <video ref={bahadurgarhVideoRef} className="academy-video" controls loop playsInline>
                  <source src={bahadurgarhVideo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="bgc-content">
              <h3>Bahadurgarh Haryana Branch</h3>
              <p className="section-sub">Join our step up dance academy at our premium studio in Bahadurgarh Haryana</p>
              <p><strong>Address:</strong> STEP UP DANCE ACADEMY BAHADURGARH BRANCH OPPOSITE ELENTA MART DHARAM VIHAR NALA ROAD AGARWAL COLONY, NEAREST METRO STATION BAHADURGARH CITY.</p>
              <p><strong>Timing:</strong> 10:00 AM – 09:00 PM <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#FF4500', borderRadius: '50%', marginLeft: '8px', boxShadow: '0 0 10px #FF4500' }}></span></p>

              <div className="branch-inline-gallery bahadurgarh-gallery">
                <div className="bh-gallery-label">Branch Gallery & Awards ✦</div>
                <div className="bh-gallery-slider">
                  <div className="bh-gallery-track">
                    <div className="bh-item"><img src={getImageUrl('Photos/Bahadurgarh/Front.jpeg')} alt="Front View" /></div>
                    <div className="bh-item"><img src={getImageUrl('Photos/Bahadurgarh/Front2.jpeg')} alt="Front View 2" /></div>
                    <div className="bh-item"><img src={getImageUrl('Photos/Bahadurgarh/Award sections.jpeg')} alt="Awards Area" /></div>
                    {/* Add more as needed */}
                  </div>
                </div>
              </div>

              <div className="bgc-actions">
                <a href="#contact" className="btn-primary">Join Now</a>
                <div className="branch-socials">
                  <a href="https://www.instagram.com/stepupdanceacademy_hr/" target="_blank" rel="noopener noreferrer" className="btn-social-mini ig" title="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                  </a>
                  {/* Reuse other socials */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
