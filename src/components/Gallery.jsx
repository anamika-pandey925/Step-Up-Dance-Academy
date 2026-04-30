import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
  const images = [
    "/images/Front.jpeg",
    "/images/Front2.jpeg",
    "/images/Award sections.jpeg",
    "/images/Zumba.png",
    "/images/Nangloi/Award.jpeg",
    "/images/Nangloi/Entry.jpeg",
    "/images/Nangloi/front.jpeg",
  ];

  return (
    <section id="gallery" className="py-32 bg-bg overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary text-xs font-black tracking-widest uppercase"
        >
          Visual Experience
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="title-serif text-5xl md:text-6xl mt-4"
        >
          Our <span className="text-primary italic">Gallery</span>
        </motion.h2>
      </div>

      <div className="px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          className="mySwiper w-full py-12"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="w-[300px] sm:w-[400px] md:w-[500px]">
              <div className="aspect-[4/5] rounded-premium overflow-hidden border border-white/10 shadow-2xl bg-bg2">
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
