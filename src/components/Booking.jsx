import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, User, Mail, Calendar, Music, Clock } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const Booking = () => {
  const { user, studentProfile, updateStudentProfile } = useAuth();
  
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    age: '', 
    danceStyle: '', 
    batchTiming: '' 
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  // Stable input change handler to eliminate unnecessary re-renders
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Auto-fill user profile info if logged in
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: studentProfile?.name || user.displayName || prev.name,
        email: studentProfile?.email || user.email || prev.email,
        phone: studentProfile?.phone || prev.phone,
        age: studentProfile?.age || prev.age
      }));
    }
  }, [user, studentProfile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending'); // Instant UI feedback showing loading status
    setError('');

    const { name, phone, email, age, danceStyle, batchTiming } = formData;

    if (!name || !phone || !email || !age || !danceStyle || !batchTiming) {
      setError('Please fill out all fields.');
      setStatus('');
      return;
    }

    try {
      // Optimize Firestore write operations using Promise.all for parallel/concurrent execution
      const operations = [
        addDoc(collection(db, 'registrations'), {
          name,
          phone,
          email,
          age,
          danceStyle,
          batchTiming,
          userId: user ? user.uid : null,
          createdAt: serverTimestamp() // Explicit server-side timestamp
        })
      ];

      // If logged in, concurrently update student profile in Firestore
      if (user) {
        const currentStyles = studentProfile?.registeredStyles || [];
        const updatedStyles = currentStyles.includes(danceStyle)
          ? currentStyles
          : [...currentStyles, danceStyle];

        operations.push(
          updateStudentProfile({
            phone,
            age,
            registeredStyles: updatedStyles
          })
        );
      }

      await Promise.all(operations);

      // Open Owner's WhatsApp
      const ownerWhatsApp = '919555972389';
      const whatsappText = `*Step Up Dance Academy - New Trial Booking* 💃🔥\n\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Email:* ${email}\n` +
        `*Age:* ${age}\n` +
        `*Dance Style:* ${danceStyle}\n` +
        `*Batch Timing:* ${batchTiming}\n\n` +
        `_Sent via Website Registration Form_`;

      const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');

      setStatus('success'); // Instant success state transition

      // Reset form but retain essential user identity fields if logged in
      setFormData({ 
        name: user ? (studentProfile?.name || user.displayName || '') : '', 
        phone: user ? (studentProfile?.phone || '') : '', 
        email: user ? (studentProfile?.email || user.email || '') : '', 
        age: user ? (studentProfile?.age || '') : '', 
        danceStyle: '', 
        batchTiming: '' 
      });
      
      setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
    } catch (err) {
      console.error("Error submitting registration: ", err);
      setError('Registration failed. Please try again later.');
      setStatus('');
    }
  };

  return (
    <section id="booking" className="section-padding bg-black/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          {/* Info Side */}
          <div className="md:w-1/2 p-10 lg:p-16 bg-gradient-to-br from-[#ff5a00] to-[#ff8c00] text-white flex flex-col justify-center">
            <h3 className="text-4xl font-serif font-bold mb-6">Book Your Free Trial Class Today!</h3>
            <p className="text-white/80 mb-10 text-lg">Experience our premium studio and world-class training without any commitment.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <CheckIcon />
                </div>
                <span className="font-medium">No initial fees</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <CheckIcon />
                </div>
                <span className="font-medium">Meet our instructors</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold mb-8 text-white">Student Registration</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a00]" size={18} />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Full name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white" 
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a00]" size={18} />
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white" 
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a00]" size={18} />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email address" 
                      required 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white" 
                    />
                  </div>
                </div>

                {/* Age */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Age</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a00]" size={18} />
                    <input 
                      type="number" 
                      name="age" 
                      placeholder="Your age" 
                      required 
                      min="3" 
                      max="100" 
                      value={formData.age} 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white" 
                    />
                  </div>
                </div>

                {/* Dance Style Dropdown (FULL LIST) */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Dance Style</label>
                  <div className="relative">
                    <Music className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a00]" size={18} />
                    <select 
                      name="danceStyle" 
                      required 
                      value={formData.danceStyle} 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white appearance-none"
                    >
                      <option value="" className="text-black">Select Style...</option>
                      <option value="Bollywood" className="text-black">Bollywood</option>
                      <option value="Hip-Hop" className="text-black">Hip-Hop</option>
                      <option value="Classical" className="text-black">Classical (Kathak / Bharatnatyam)</option>
                      <option value="Contemporary" className="text-black">Contemporary</option>
                      <option value="Zumba / Aerobics" className="text-black">Zumba / Aerobics</option>
                      <option value="Ballet & Jazz" className="text-black">Ballet & Jazz</option>
                      <option value="Kids Program" className="text-black">Kids Program</option>
                      <option value="Haryana Dance" className="text-black">Haryana Dance</option>
                      <option value="Krump" className="text-black">Krump</option>
                      <option value="Breaking" className="text-black">Breaking</option>
                      <option value="Salsa" className="text-black">Salsa</option>
                      <option value="Punjabi Bhangra" className="text-black">Punjabi Bhangra</option>
                      <option value="Western Solo & Duet" className="text-black">Western Solo & Duet</option>
                      <option value="Popping & Locking" className="text-black">Popping & Locking</option>
                      <option value="Solo Duet & Group" className="text-black">Solo Duet & Group</option>
                      <option value="Belly Dance" className="text-black">Belly Dance</option>
                      <option value="House Dance" className="text-black">House Dance</option>
                      <option value="Wedding Choreography" className="text-black">Wedding Choreography</option>
                    </select>
                  </div>
                </div>

                {/* Batch Timing Dropdown */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Batch Timing</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff5a00]" size={18} />
                    <select 
                      name="batchTiming" 
                      required 
                      value={formData.batchTiming} 
                      onChange={handleChange} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white appearance-none"
                    >
                      <option value="" className="text-black">Select Timing...</option>
                      <option value="12 PM - 1 PM" className="text-black">12 PM - 1 PM</option>
                      <option value="1 PM - 2 PM" className="text-black">1 PM - 2 PM</option>
                      <option value="2 PM - 3 PM" className="text-black">2 PM - 3 PM</option>
                      <option value="3 PM - 4 PM" className="text-black">3 PM - 4 PM</option>
                      <option value="4 PM - 5 PM" className="text-black">4 PM - 5 PM</option>
                      <option value="5 PM - 6 PM" className="text-black">5 PM - 6 PM</option>
                      <option value="6 PM - 7 PM" className="text-black">6 PM - 7 PM</option>
                      <option value="7 PM - 8 PM" className="text-black">7 PM - 8 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className={`btn-primary w-full py-4 flex items-center justify-center gap-3 text-lg disabled:opacity-50 transition-colors cursor-pointer ${status === 'success' ? 'bg-green-500 hover:bg-green-600 border-none' : ''}`}
              >
                {status === 'sending' ? 'Processing...' : status === 'success' ? 'Registration Successful!' : (
                  <>Complete Registration <Send size={18} /></>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Booking;
