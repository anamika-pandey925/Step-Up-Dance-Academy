import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Music, 
  Clock, 
  Save, 
  Sparkles, 
  CalendarCheck, 
  CheckCircle,
  PlusCircle,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, studentProfile, updateStudentProfile } = useAuth();
  const [registrations, setRegistrations] = useState([]);
  const [loadingRegistrations, setLoadingRegistrations] = useState(true);
  
  // Profile edit states
  const [editData, setEditData] = useState({ name: '', phone: '', age: '' });
  const [saveStatus, setSaveStatus] = useState('');
  const [saveError, setSaveError] = useState('');

  // Pre-fill profile form fields
  useEffect(() => {
    if (studentProfile) {
      setEditData({
        name: studentProfile.name || '',
        phone: studentProfile.phone || '',
        age: studentProfile.age || ''
      });
    }
  }, [studentProfile]);

  // Fetch registrations/bookings linked to this student
  useEffect(() => {
    const fetchRegistrations = async () => {
      if (!user) return;
      setLoadingRegistrations(true);
      try {
        // Query by userId or email as backup
        const regRef = collection(db, 'registrations');
        const q = query(
          regRef, 
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        
        // If empty by userId, fallback to querying by email
        if (data.length === 0 && user.email) {
          const qEmail = query(
            regRef,
            where('email', '==', user.email),
            orderBy('createdAt', 'desc')
          );
          const emailSnapshot = await getDocs(qEmail);
          emailSnapshot.forEach((doc) => {
            // Avoid duplicates
            if (!data.some(item => item.id === doc.id)) {
              data.push({ id: doc.id, ...doc.data() });
            }
          });
        }

        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      } finally {
        setLoadingRegistrations(false);
      }
    };

    fetchRegistrations();
  }, [user]);

  const handleProfileSave = async (e) => {
    e.preventDefault();
    setSaveStatus('saving');
    setSaveError('');
    try {
      await updateStudentProfile({
        name: editData.name,
        phone: editData.phone,
        age: editData.age
      });
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(''), 4000);
    } catch (err) {
      console.error(err);
      setSaveError('Failed to save profile. Please try again.');
      setSaveStatus('');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-16 px-4 md:px-8">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff5a00] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff5a00] to-[#ff8c00] rounded-full mix-blend-screen filter blur-[50px] opacity-20"></div>
          
          <div className="flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ff6b00] blur-[8px] rounded-full opacity-40"></div>
              <img 
                src={studentProfile?.photoURL || user?.photoURL || 'https://via.placeholder.com/150'} 
                alt="Student profile" 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#ff6b00] object-cover relative z-10 shadow-[0_0_15px_rgba(255,107,0,0.4)]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d]">{studentProfile?.name || user?.displayName || 'Student'}</span>!
              </h2>
              <p className="text-gray-400 text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
                <Sparkles size={16} className="text-[#ff6b00]" /> Student Account &bull; Premium Member
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              to="/registration" 
              className="bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all transform active:scale-95"
            >
              <PlusCircle size={18} /> Book Another Trial
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Quick Stats Widget */}
          <motion.div variants={itemVariants} className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-6 border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff5a00]/10 flex items-center justify-center text-[#ff5a00]">
                <CalendarCheck size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Booked Trials</p>
                <p className="text-2xl font-bold text-white">{registrations.length}</p>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400">
                <Music size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Dance Styles</p>
                <p className="text-2xl font-bold text-white">
                  {studentProfile?.registeredStyles?.length || 0}
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                <UserCheck size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Status</p>
                <p className="text-lg font-bold text-green-400">Verified Profile</p>
              </div>
            </div>
          </motion.div>

          {/* Left Column: Registered Trials History */}
          <motion.div variants={itemVariants} className="lg:col-span-2 glass rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <CalendarCheck className="text-[#ff5a00]" /> My Registered Trials
            </h3>

            {loadingRegistrations ? (
              <div className="flex-1 flex flex-col items-center justify-center py-12">
                <div className="w-10 h-10 border-4 border-[#ff6b00] border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-gray-400 text-sm">Loading your bookings...</p>
              </div>
            ) : registrations.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                  <Music className="text-gray-400" size={28} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">No Trials Booked Yet</h4>
                <p className="text-gray-500 text-sm max-w-sm mb-6">You haven't scheduled any trial dance classes. Step up and book your first free class today!</p>
                <Link to="/registration" className="btn-primary px-6 py-3 text-sm rounded-xl">
                  Book Free Trial
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-sm font-bold uppercase tracking-wider">
                      <th className="py-4">Dance Style</th>
                      <th className="py-4">Batch Timing</th>
                      <th className="py-4">Age Group</th>
                      <th className="py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="text-white hover:bg-white/5 transition-colors">
                        <td className="py-4 font-semibold flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a00] inline-block shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                          {reg.danceStyle}
                        </td>
                        <td className="py-4 text-gray-300">
                          <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full text-xs">
                            <Clock size={12} className="text-[#ff5a00]" /> {reg.batchTiming}
                          </span>
                        </td>
                        <td className="py-4 text-gray-300">{reg.age} years</td>
                        <td className="py-4">
                          <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                            <CheckCircle size={12} /> Booked
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>

          {/* Right Column: Profile Form Widget */}
          <motion.div variants={itemVariants} className="glass rounded-3xl p-6 md:p-8 border border-white/5">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <User className="text-[#ff5a00]" /> Student Profile
            </h3>

            <form onSubmit={handleProfileSave} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input 
                    type="text" 
                    required 
                    value={editData.name} 
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white text-sm" 
                  />
                </div>
              </div>

              {/* Email (Disabled) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  <input 
                    type="email" 
                    disabled 
                    value={user?.email || ''} 
                    className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-gray-500 cursor-not-allowed text-sm select-none" 
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input 
                    type="tel" 
                    placeholder="e.g. +91 98765 43210"
                    value={editData.phone} 
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white text-sm" 
                  />
                </div>
              </div>

              {/* Age */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Age</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input 
                    type="number" 
                    placeholder="Your age"
                    min="3" 
                    max="100"
                    value={editData.age} 
                    onChange={(e) => setEditData({ ...editData, age: e.target.value })} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#ff5a00] focus:bg-white/10 transition-all outline-none text-white text-sm" 
                  />
                </div>
              </div>

              {saveError && <p className="text-red-500 text-xs font-medium">{saveError}</p>}

              <button 
                type="submit" 
                disabled={saveStatus === 'saving'}
                className="w-full bg-[#ff5a00] hover:bg-white text-white hover:text-black font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(255,90,0,0.2)] disabled:opacity-50 text-sm active:scale-95"
              >
                {saveStatus === 'saving' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : saveStatus === 'success' ? (
                  <>Profile Saved! <CheckCircle size={16} /></>
                ) : (
                  <>Save Changes <Save size={16} /></>
                )}
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
