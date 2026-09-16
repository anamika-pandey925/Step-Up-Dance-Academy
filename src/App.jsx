import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './index.css';

// Core above-the-fold components for instant initial home page render
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import Floating from './components/Floating';

// Below-the-fold home page components (Code-split for instant viewport painting)
const About = lazy(() => import('./components/About'));
const Founder = lazy(() => import('./components/Founder'));
const Classes = lazy(() => import('./components/Classes'));
const Testimonials = lazy(() => import('./components/Testimonials'));

// Lazy-loaded route components (Code Splitting for instant load)
const Branches = lazy(() => import('./components/Branches'));
const AcademyShowcase = lazy(() => import('./components/AcademyShowcase'));
const Wedding = lazy(() => import('./components/Wedding'));
const Reviews = lazy(() => import('./components/Reviews'));
const ZumbaFitness = lazy(() => import('./components/ZumbaFitness'));
const Facilities = lazy(() => import('./components/Facilities'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
const Booking = lazy(() => import('./components/Booking'));
const Login = lazy(() => import('./components/Login'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const PersonalTraining = lazy(() => import('./components/PersonalTraining'));
const StudentSpotlight = lazy(() => import('./components/StudentSpotlight'));
const KavyaSpecial = lazy(() => import('./components/KavyaSpecial'));
const TVRealityBatch = lazy(() => import('./components/TVRealityBatch'));

// Context
import { AuthProvider, useAuth } from './context/AuthContext';

const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
    <div className="w-10 h-10 border-3 border-[#ff6b00] border-t-transparent rounded-full animate-spin"></div>
    <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Loading...</span>
  </div>
);

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
    <Suspense fallback={null}>
      <About />
      <Founder />
      <Classes />
      <Testimonials />
    </Suspense>
  </main>
);

const BranchesPage = () => (
  <main className="pt-24 min-h-screen">
    <Branches />
    <AcademyShowcase />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

const WeddingPage = () => (
  <main className="pt-24 min-h-screen">
    <Wedding />
    <Reviews />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

const ZumbaPage = () => (
  <main className="pt-24 min-h-screen">
    <ZumbaFitness />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

const FacilitiesPage = () => (
  <main className="pt-24 min-h-screen">
    <Facilities />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

const PricingPage = () => (
  <main className="pt-24 min-h-screen">
    <Pricing />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

const ContactPage = () => (
  <main className="pt-24 min-h-screen">
    <Contact />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

const RegistrationPage = () => (
  <main className="pt-24 min-h-screen">
    <Booking />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

const LoginPage = () => (
  <main className="pt-24 min-h-screen flex items-center justify-center">
    <Login />
  </main>
);

const PersonalTrainingPage = () => (
  <main className="pt-24 min-h-screen">
    <PersonalTraining />
    <StudentSpotlight />
    <KavyaSpecial />
    <TVRealityBatch />
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  </main>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-[#050505] text-white selection:bg-[#ff5a00] selection:text-white">
          <Navbar />
          
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>

          <Footer />
          <Floating />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
