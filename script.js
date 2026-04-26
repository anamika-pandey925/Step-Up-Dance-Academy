(function() {
// ── NAV SCROLL EFFECT ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── BURGER MENU ──
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mm-link,.mm-cta').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── SMOOTH SCROLLING ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80; // approx nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ── REVEAL ON SCROLL ──
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ── COUNTER ANIMATION ──
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 50);
  });
}

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const heroObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); heroObs.disconnect(); }
  }, { threshold: 0.3 });
  heroObs.observe(heroStats);
}

// ── CONTACT FORM ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('.form-submit');
      const success = document.getElementById('formSuccess');
      
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const interest = document.getElementById('interest').value;
      const msg = document.getElementById('msg').value;

      const whatsappMsg = `Hello Step Up Dance Academy!%0A%0A*Student Enquiry/Admission*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interest:* ${interest}%0A*Message:* ${msg}`;
      const smsMsg = `Student Enquiry/Admission - Name: ${name}, Phone: ${phone}, Interest: ${interest}, Message: ${msg}`;
      
      const primaryNumber = "9555972389";
      const secondaryNumber = "7982404565";
      
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Send Message ✦';
        btn.disabled = false;
        success.classList.add('show');
        this.reset();
        
        // Open WhatsApp with message for primary number in a new tab
        window.open(`https://wa.me/91${primaryNumber}?text=${whatsappMsg}`, '_blank');
        
        // Trigger SMS for primary number in the current tab
        window.location.href = `sms:+91${primaryNumber}?body=${encodeURIComponent(smsMsg)}`;
        
        // Alert user about second number or just confirm
        setTimeout(() => {
          success.classList.remove('show');
          alert("Enquiry sent successfully! Details have been shared via WhatsApp and SMS.");
        }, 5000);
      }, 1200);
    });
}

// ── SMOOTH ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
});

// ── VIDEO PLAYERS ──
document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('.academy-video');
  const playPauseBtn = container.querySelector('.play-pause-btn');
  const videoOverlay = container.querySelector('.video-overlay');

  if (video && playPauseBtn && videoOverlay) {
    const pauseIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    const playIcon  = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;

    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = pauseIcon;
        videoOverlay.classList.add('hidden');
      } else {
        video.pause();
        playPauseBtn.innerHTML = playIcon;
        videoOverlay.classList.remove('hidden');
      }
    });

    video.addEventListener('click', () => {
      if (!video.paused) {
        video.pause();
        playPauseBtn.innerHTML = playIcon;
        videoOverlay.classList.remove('hidden');
      }
    });

    video.addEventListener('play', () => {
      videoOverlay.classList.add('hidden');
      // Pause all other videos
      document.querySelectorAll('video').forEach(v => {
        if (v !== video) v.pause();
      });
    });
    video.addEventListener('pause', () => videoOverlay.classList.remove('hidden'));
  }
});

// Global video play handler for manual controls
document.addEventListener('play', (e) => {
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(v => {
    if (v !== e.target) v.pause();
  });
}, true);

// ── TESTIMONIALS SLIDER ──
const track = document.getElementById('reviewsTrack');
const dotsWrap = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prevReview');
const nextBtn = document.getElementById('nextReview');

if (track && dotsWrap && prevBtn && nextBtn) {
  const cards = track.querySelectorAll('.review-card');
  const total = cards.length;
  let perView = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  let current = 0;

  // Build dots
  const buildDots = () => {
    dotsWrap.innerHTML = '';
    const steps = Math.ceil(total / perView());
    for (let i = 0; i < steps; i++) {
      const d = document.createElement('span');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  };

  const updateDots = () => {
    dotsWrap.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  };

  const goTo = (idx) => {
    const steps = Math.ceil(total / perView());
    current = Math.max(0, Math.min(idx, steps - 1));
    const cardWidth = cards[0].getBoundingClientRect().width + 24; // gap
    track.style.transform = `translateX(-${current * perView() * cardWidth}px)`;
    updateDots();
  };

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Auto-advance
  let autoSlide = setInterval(() => goTo((current + 1) % Math.ceil(total / perView())), 4500);
  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => goTo((current + 1) % Math.ceil(total / perView())), 4500);
  });

  buildDots();
  window.addEventListener('resize', () => { buildDots(); goTo(0); });
}

// ── PARALLAX ──
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelectorAll('.parallax').forEach(el => {
    const speed = el.dataset.speed || 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('custom-cursor');
if (cursor) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
  document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');
  
  const links = document.querySelectorAll('a, button, .clickable');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2.5)';
      cursor.style.background = 'transparent';
      cursor.style.border = '1px solid var(--primary)';
    });
    link.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'var(--primary)';
      cursor.style.border = 'none';
    });
  });
}

// ── BRANCH INLINE GALLERIES & LIGHTBOX ──
const galleries = document.querySelectorAll('.branch-inline-gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');
const lbPrevBtn = document.querySelector('.lightbox-prev');
const lbNextBtn = document.querySelector('.lightbox-next');

if (galleries.length > 0 && lightbox && lightboxImg) {
  let allImages = [];
  let currentIdx = 0;

  galleries.forEach(gallery => {
    const track = gallery.querySelector('.bh-gallery-track');
    const items = gallery.querySelectorAll('.bh-item');
    const branchImages = Array.from(items).map(item => {
      const img = item.querySelector('img');
      return img ? img.src : '';
    }).filter(src => src !== '');

    if (track && items.length > 0) {
      // Auto Slider Logic for this branch
      let scrollIdx = 0;
      setInterval(() => {
        const perView = window.innerWidth <= 640 ? 3 : 4;
        if (items.length <= perView) return;
        scrollIdx = (scrollIdx + 1) % (items.length - perView + 1);
        const move = scrollIdx * (window.innerWidth <= 640 ? 92 : 112);
        track.style.transform = `translateX(-${move}px)`;
      }, 3000);

      // Lightbox Trigger for this branch
      items.forEach((item, index) => {
        item.addEventListener('click', () => {
          // Update allImages context to current branch
          allImages = branchImages;
          currentIdx = index;
          openLightbox();
        });
      });
    }
  });

  const openLightbox = () => {
    if (!allImages[currentIdx]) return;
    lightboxImg.src = allImages[currentIdx];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const showNext = (e) => {
    if (e) e.stopPropagation();
    currentIdx = (currentIdx + 1) % allImages.length;
    lightboxImg.src = allImages[currentIdx];
  };

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    currentIdx = (currentIdx - 1 + allImages.length) % allImages.length;
    lightboxImg.src = allImages[currentIdx];
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lbNextBtn) lbNextBtn.addEventListener('click', showNext);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', showPrev);
  lightbox.addEventListener('click', closeLightbox);
  lightboxImg.addEventListener('click', (e) => e.stopPropagation());
}

// ── FORCE REVEAL SAFETY ──
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}, 2000);

// ── TV REALITY SLIDER ──
const realityTrack = document.querySelector('.reality-track');
const realityPrev = document.getElementById('realityPrev');
const realityNext = document.getElementById('realityNext');

if (realityTrack && realityPrev && realityNext) {
  const items = realityTrack.querySelectorAll('.reality-item');
  let currentIdx = 0;
  
  const getPerView = () => window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;
  
  const updateSlider = () => {
    const perView = getPerView();
    const itemWidth = items[0].getBoundingClientRect().width;
    realityTrack.style.transform = `translateX(-${currentIdx * itemWidth}px)`;
  };

  realityNext.addEventListener('click', () => {
    const perView = getPerView();
    if (currentIdx < items.length - perView) {
      currentIdx++;
      updateSlider();
    } else {
      currentIdx = 0; // Loop back
      updateSlider();
    }
  });

  realityPrev.addEventListener('click', () => {
    const perView = getPerView();
    if (currentIdx > 0) {
      currentIdx--;
      updateSlider();
    } else {
      currentIdx = items.length - perView; // Go to end
      updateSlider();
    }
  });

  window.addEventListener('resize', updateSlider);
}

// ── REGISTRATION MODAL FLOW ──
const regModal = document.getElementById('regModal');
const openModalBtns = document.querySelectorAll('.open-reg-modal');
const closeModalBtns = document.querySelectorAll('.reg-close, .reg-close-btn');
  // Navigation Buttons
  const steps = document.querySelectorAll('.reg-step');
  const toStep2Btn = document.querySelector('.to-step-2');
  const toStep3Btn = document.querySelector('.to-step-3');
  const confirmRegBtn = document.querySelector('.confirm-reg');
  const phaseOptions = document.querySelectorAll('.phase-option');

  if (regModal) {
    const openModal = () => {
      regModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      resetSteps();
    };

    const closeModal = () => {
      regModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    const resetSteps = () => {
      steps.forEach((s, i) => s.classList.toggle('active', i === 0));
    };

    const showStep = (idx) => {
      steps.forEach((s, i) => s.classList.toggle('active', i === idx));
    };

    openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));

    // Phase Selection Logic
    phaseOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        if (opt.classList.contains('sold-out')) return; // Prevent selecting sold-out phases
        phaseOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
      });
    });

    if (toStep2Btn) {
      toStep2Btn.addEventListener('click', () => {
        const form = document.getElementById('regForm');
        if (form.checkValidity()) {
          showStep(1);
        } else {
          form.reportValidity();
        }
      });
    }

    if (toStep3Btn) {
      toStep3Btn.addEventListener('click', () => {
        const activePhase = document.querySelector('.phase-option.active');
        if (!activePhase) {
          alert('Please select a phase');
          return;
        }

        const fee = activePhase.dataset.fee;
        const phaseName = activePhase.dataset.phase;
        
        // Update payment step display
        document.getElementById('displayFee').textContent = `₹${Number(fee).toLocaleString()}`;
        document.getElementById('displayPhase').textContent = phaseName;
        
        showStep(2);
      });
    }

    if (confirmRegBtn) {
      confirmRegBtn.addEventListener('click', () => {
        confirmRegBtn.textContent = 'Processing...';
        confirmRegBtn.disabled = true;
        
        // Capture final details for success screen
        const name = document.getElementById('regName').value;
        const phone = document.getElementById('regPhone').value;
        const phase = document.querySelector('.phase-option.active').dataset.phase;

        setTimeout(() => {
          document.getElementById('successName').textContent = name;
          document.getElementById('successPhase').textContent = phase;
          document.getElementById('successPhone').textContent = phone;
          
          showStep(3);
          confirmRegBtn.textContent = 'Submit Details & Register';
          confirmRegBtn.disabled = false;
        }, 1500);
      });
    }

    // Close on outside click
    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) closeModal();
    });
  }


  // ── PHASE AUTO-UPDATE ──
  const autoUpdatePhases = () => {
    const now = new Date();
    // Phase 2 ends and Phase 3 starts strictly after 20th April
    const phase3Start = new Date('2026-04-20T00:00:00'); 
    
    if (now >= phase3Start) {
      // 1. Update Pricing Cards in UI
      const phaseCards = document.querySelectorAll('.pricing-phases .phase-card');
      if (phaseCards.length >= 3) {
        const p2Card = phaseCards[1];
        const p3Card = phaseCards[2];
        
        // Phase 2 -> Sold out
        p2Card.classList.remove('active');
        p2Card.classList.add('sold-out');
        const p2Status = p2Card.querySelector('.phase-status');
        if (p2Status) {
          p2Status.className = 'phase-status status-sold';
          p2Status.textContent = 'SOLD OUT';
        }

        // Phase 3 -> Active
        p3Card.classList.remove('sold-out');
        p3Card.classList.add('active');
        const p3Status = p3Card.querySelector('.phase-status');
        if (p3Status) {
          p3Status.className = 'phase-status status-available';
          p3Status.textContent = 'AVAILABLE';
        }
      }

      // 2. Update Registration Modal Options
      const phaseOptionsList = document.querySelectorAll('.phase-selector .phase-option');
      if (phaseOptionsList.length >= 3) {
        const p2Opt = phaseOptionsList[1];
        const p3Opt = phaseOptionsList[2];

        // Phase 2 -> Sold Out & Disabled
        p2Opt.classList.remove('active');
        p2Opt.classList.add('sold-out');
        const p2Label = p2Opt.querySelector('.po-label');
        if (p2Label) p2Label.textContent = 'Phase 2 (Sold Out)';

        // Phase 3 -> Active
        p3Opt.classList.add('active');
        const p3Label = p3Opt.querySelector('.po-label');
        if (p3Label) p3Label.textContent = 'Phase 3 (Current)';
        
        // Update the default displayed fee and phase in Step 3
        const fee = p3Opt.dataset.fee;
        const phaseName = p3Opt.dataset.phase;
        const displayFee = document.getElementById('displayFee');
        const displayPhase = document.getElementById('displayPhase');
        if (displayFee) displayFee.textContent = `₹${Number(fee).toLocaleString()}`;
        if (displayPhase) displayPhase.textContent = phaseName;
      }
    }
  };

  // Run automatically
  autoUpdatePhases();

})();





