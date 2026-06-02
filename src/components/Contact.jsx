import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, ChevronRight, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    danceStyle: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? value.replace(/[^0-9+ ]/g, '') : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const { name, phone, danceStyle, message } = formData;

    if (!name || !phone || !danceStyle || !message) {
      setError('Please fill out all fields.');
      setStatus('');
      return;
    }

    try {
      // 1. Store in Firestore
      await addDoc(collection(db, 'contacts'), {
        name,
        phone,
        danceStyle,
        message,
        createdAt: serverTimestamp()
      });

      // 2. Open Owner's WhatsApp
      const ownerWhatsApp = '919555972389';
      const whatsappText = `*Step Up Dance Academy - New Enquiry* 💃🔥\n\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Dance Style:* ${danceStyle}\n` +
        `*Message:* ${message}\n\n` +
        `_Sent via Website Contact Form_`;

      const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        danceStyle: '',
        message: ''
      });

      setTimeout(() => setStatus(''), 5000);
    } catch (err) {
      console.error("Error submitting contact form: ", err);
      setError('Failed to send message. Please try again.');
      setStatus('');
    }
  };

  return (
    <>
      <section id="contact" className="section-padding bg-[#050505] relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#ff5a00] font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Start Your Dance <span className="text-[#ff5a00]">Journey</span></h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Ready to step up? Reach out to us to book a taster session or enroll in any of our classes. We'd love to have you!</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 items-start">
                <MapPin className="text-[#ff5a00] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Visit Us (Nangloi)</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">STEP UP DANCE ACADEMY HALL NO 5 SHIV MARKET BHOOTON WALI GALI NEAR BY SURYA PUBLIC SCHOOL NANGLOI DELHI 110041 NEAREST NANGLOI METRO STATION</p>
                  <p className="text-gray-400 text-sm">New Delhi, Delhi 110041</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 items-start">
                <MapPin className="text-[#ff5a00] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Visit Us (Bahadurgarh)</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">STEP UP DANCE ACADEMY BAHADURGARH BRANCH OPPOSITE ELENTA MART DHARAM VIHAR NALA ROAD AGARWAL COLONY, NEAREST METRO STATION BAHADURGARH CITY.</p>
                  <p className="text-gray-400 text-sm">Bahadurgarh City, Haryana</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 items-start">
                <Phone className="text-[#ff5a00] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-gray-400 text-sm mb-1">+91 9555972389</p>
                  <p className="text-gray-400 text-sm">+91 79824 04565</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 items-start">
                <Clock className="text-[#ff5a00] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Opening Hours</h4>
                  <p className="text-gray-400 text-sm mb-4">Monday – Saturday: 10:00 AM – 9:00 PM</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#ff5a00] font-semibold hover:text-white transition-colors text-sm">
                    <MapPin size={16} /> Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-white/5 p-8 rounded-3xl border border-white/10"
            >
              <h4 className="text-2xl font-bold text-white mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff5a00] transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff5a00] transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Dance Style Interest</label>
                  <select 
                    name="danceStyle"
                    required
                    value={formData.danceStyle}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff5a00] transition-colors appearance-none"
                  >
                    <option value="" className="text-black">Select a style...</option>
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
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Tell us about yourself or ask anything..." 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff5a00] transition-colors"
                  ></textarea>
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full bg-[#ff5a00] hover:bg-white text-white hover:text-black font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2 disabled:opacity-50 cursor-pointer ${status === 'success' ? 'bg-green-500 hover:bg-green-600 border-none text-white hover:text-white' : ''}`}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
