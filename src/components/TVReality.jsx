import React from 'react';
import { motion } from 'framer-motion';

const TVReality = () => {
  const teachers = [
    { name: "Steve Jyrwa", show: "IBD 4 Winner", ig: "stevejyrwa61", img: "/images/TV Reality Training/STEVE JYRWA.jpeg" },
    { name: "Ashish Chawriya", show: "Dance Plus Pro", ig: "ashish__chawriya", img: "/images/TV Reality Training/ASHISH CHAWRIYA.jpeg" },
    { name: "Aman Shahi", show: "Hip Hop India", ig: "amanshahi1808", img: "/images/TV Reality Training/AMAN SHAHI.jpeg" },
    { name: "Abhishek Sharma", show: "IGT Performer", ig: "abhisheksharmaigt", img: "/images/TV Reality Training/ABHISHEK SHARMA.jpeg" }
  ];

  return (
    <section id="tv-reality" className="py-32 bg-bg2 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary text-xs font-black tracking-widest uppercase"
          >
            Reality Show Training
          </motion.span>
          <h2 className="title-serif text-5xl md:text-6xl mt-4">Celebrity <span className="text-primary italic">Instructors</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-0 overflow-hidden group"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-black text-xl text-white">{teacher.name}</h3>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">{teacher.show}</p>
                </div>
              </div>
              <div className="p-4 border-t border-white/5 flex justify-between items-center bg-white/5">
                <span className="text-[10px] font-bold text-white/40">@{teacher.ig}</span>
                <a href={`https://instagram.com/${teacher.ig}`} target="_blank" className="text-primary text-xs font-bold hover:underline">Follow</a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phase Info */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Phase 1", status: "Sold Out", color: "bg-red-500/20 text-red-500" },
             { title: "Phase 2", status: "Active", color: "bg-green-500/20 text-green-500" },
             { title: "Phase 3", status: "Limited", color: "bg-primary/20 text-primary" }
           ].map((phase, i) => (
             <div key={i} className={`glass-card text-center border-white/5 ${phase.color}`}>
                <h4 className="text-2xl font-black mb-2">{phase.title}</h4>
                <p className="font-bold uppercase tracking-widest text-[10px]">{phase.status}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TVReality;
