import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Founder from './components/Founder';
import Branches from './components/Branches';
import Classes from './components/Classes';
import Wedding from './components/Wedding';
import Reviews from './components/Reviews';
import PersonalTraining from './components/PersonalTraining';
import StudentSpotlight from './components/StudentSpotlight';
import KavyaSpecial from './components/KavyaSpecial';
import AcademyShowcase from './components/AcademyShowcase';
import Facilities from './components/Facilities';
import Pricing from './components/Pricing';
import ZumbaFitness from './components/ZumbaFitness';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Floating from './components/Floating';

// Context
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#ff6b00] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <main>
    <Hero />
    <Marquee />
    <About />
    <Founder />
    <Classes />
    <Testimonials />
  </main>
);

const BranchesPage = () => (
  <main className="pt-24 min-h-screen">
    <Branches />
    <AcademyShowcase />
    <Testimonials />
  </main>
);
const WeddingPage = () => (
  <main className="pt-24 min-h-screen">
    <Wedding />
    <Reviews />
    <Testimonials />
  </main>
);
const ZumbaPage = () => <main className="pt-24 min-h-screen"><ZumbaFitness /><Testimonials /></main>;
const FacilitiesPage = () => <main className="pt-24 min-h-screen"><Facilities /><Testimonials /></main>;
const PricingPage = () => <main className="pt-24 min-h-screen"><Pricing /><Testimonials /></main>;
const ContactPage = () => <main className="pt-24 min-h-screen"><Contact /><Testimonials /></main>;
const RegistrationPage = () => <main className="pt-24 min-h-screen"><Booking /><Testimonials /></main>;
const LoginPage = () => <main className="pt-24 min-h-screen flex items-center justify-center"><Login /></main>;
const PersonalTrainingPage = () => (
  <main className="pt-24 min-h-screen">
    <PersonalTraining />
    <StudentSpotlight />
    <KavyaSpecial />
    <Testimonials />
  </main>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-[#050505] text-white selection:bg-[#ff5a00] selection:text-white">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/wedding" element={<WeddingPage />} />
            <Route path="/zumba" element={<ZumbaPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/personal-training" element={<PersonalTrainingPage />} />
          </Routes>

          <Footer />
          <Floating />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;