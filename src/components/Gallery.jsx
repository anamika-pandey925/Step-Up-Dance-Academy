import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

import gallery1 from '../assets/Ngallery1.jpeg';
import gallery2 from '../assets/Ngallery2.jpeg';
import gallery3 from '../assets/Ngallery3.jpeg';
import heroBg from '../assets/hero-bg.jpeg';
import heroBg1 from '../assets/hero-bg1.jpeg';
import heroBg2 from '../assets/hero-bg2.jpeg';
import aboutImg from '../assets/Bgallery.jpeg';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
  const images = [
    { src: gallery1, title: "Hip Hop Workshop" },
    { src: gallery2, title: "Classical Recital" },
    { src: gallery3, title: "Contemporary Class" },
    { src: heroBg, title: "Annual Showcase" },
    { src: heroBg1, title: "Dance Practice" },
    { src: heroBg2, title: "Stage Performance" },
    { src: aboutImg, title: "Studio Practice" },
  ];

  return (
    <section id="gallery" className="section-padding bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">
            Our Gallery
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Moments of <span className="text-[#ff5a00]">Artistry</span>
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative px-4"
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-12"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="w-[280px] sm:w-[380px] md:w-[450px] h-[280px] sm:h-[380px] rounded-3xl overflow-hidden relative group"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <p className="text-white text-xl font-bold">
                    {img.title}
                  </p>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;