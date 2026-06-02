import { motion } from 'framer-motion';
import { Car, MessageSquare, Bike, CreditCard } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    { icon: "👗", isEmoji: true, title: "Changing Rooms", desc: "Spacious changing areas and secure locker facilities for students and guests." },
    { icon: <Car size={24} />, isEmoji: false, title: "Parking available", desc: "Convenient and secure parking space for all our students and guests." },
    { icon: <MessageSquare size={24} />, isEmoji: false, title: "Free consultation", desc: "Get expert guidance to help you choose the right classes for your goals." },
    { icon: <Bike size={24} />, isEmoji: false, title: "Bike parking available", desc: "Safe and easy bike parking for all our students." },
    { icon: <CreditCard size={24} />, isEmoji: false, title: "Debit & Credit Cards accepted", desc: "We accept all major debit and credit cards for your convenience." },
    { icon: "⭐", isEmoji: true, title: "Opportunity to perform in various dance Competitions", desc: "Showcase your talent on big stages and grow with every performance." },
    { icon: "👶", isEmoji: true, title: "Good for children", desc: "A safe, fun and nurturing environment for young dancers." },
    { icon: "👯‍♀️", isEmoji: true, title: "Separate batches available for girls", desc: "Dedicated batches to ensure comfort and focused learning." },
    { icon: "💍", isEmoji: true, title: "Wedding choreography", desc: "Make your special day unforgettable with our custom choreography." },
    { icon: "📺", isEmoji: true, title: "Opportunity to perform in various T.V reality shows", desc: "Get featured on popular TV platforms and shine on screen." }
  ];

  return (
    <section id="facilities" className="section-padding bg-black/60 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Our Space</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">World-Class <span className="text-[#ff5a00]">Facilities</span></h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our chic studio is designed to inspire and support every type of dancer.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#ff5a00]/30 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-[#ff5a00]/10 flex items-center justify-center text-2xl mb-4 border border-[#ff5a00]/20 shrink-0">
                {fac.isEmoji ? fac.icon : <span className="text-[#ff5a00]">{fac.icon}</span>}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 leading-tight">{fac.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{fac.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
