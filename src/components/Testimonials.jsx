import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const reviews = [
    { initial: "S", name: "Sapna Rao", date: "November 2021", text: "Absolutely amazing dance academy! The instructors are incredibly skilled and patient. My daughter loves every class!", color: "bg-pink-500" },
    { initial: "T", name: "Tannu Singh", date: "August 2025", text: "Best dance classes in Nangloi! The facilities are top-notch and the environment is very welcoming and professional.", color: "bg-blue-500" },
    { initial: "M", name: "Manish Thakur", date: "August 2025", text: "Step Up Dance Academy transformed my confidence. The Bollywood and Hip-Hop classes are truly exceptional!", color: "bg-green-500" },
    { initial: "P", name: "Preeti", date: "December 2024", text: "Great experience for kids! Structured programs, certified teachers and a very positive environment for learning.", color: "bg-purple-500" },
    { initial: "A", name: "Avinash Pandey", date: "September 2024", text: "The reality show preparation course was incredible — my child performed on TV thanks to the training here!", color: "bg-yellow-500" },
    { initial: "R", name: "Rajkumar Gupta", date: "February 2023", text: "Highly recommend for anyone serious about dance. Expert guidance, warm atmosphere, and excellent studio space.", color: "bg-red-500" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">What Students <span className="text-[#ff5a00]">Say</span></h3>
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-white font-bold text-lg">4.9 <span className="text-gray-400 font-normal text-base ml-1">· 18 Google Reviews</span></p>
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 min-w-[280px] sm:min-w-[400px] snap-center flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-400 mb-6">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xl shrink-0`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a 
            href="https://www.google.com/maps/place/?q=place_id:ChIJwz84H5wDDTkRIM1Yy87GqJc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#ff5a00] text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-3 shadow-[0_0_20px_rgba(255,90,0,0.3)]"
          >
            <MessageSquareHeart size={20} />
            Leave a Review on Google
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
