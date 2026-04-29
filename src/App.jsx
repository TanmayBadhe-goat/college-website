import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MagicCursor from './components/MagicCursor.jsx';
import SortingHat from './components/SortingHat.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home.jsx'));
const About = React.lazy(() => import('./components/About.jsx'));
const Departments = React.lazy(() => import('./components/Departments.jsx'));
const Admission = React.lazy(() => import('./components/Admission.jsx'));
const Contact = React.lazy(() => import('./components/Contact.jsx'));
const Library = React.lazy(() => import('./pages/Library.jsx'));
const StudentPortal = React.lazy(() => import('./pages/StudentPortal.jsx'));
const Career = React.lazy(() => import('./pages/Career.jsx'));
const AcademicCalendar = React.lazy(() => import('./pages/AcademicCalendar.jsx'));

function App() {
  const location = useLocation();

  const handleSort = (house) => {
    // Update global CSS variables based on sorted house
    document.documentElement.style.setProperty('--accent-color', house.color);
    document.documentElement.style.setProperty('--accent-dark', house.color);
    document.documentElement.style.setProperty('--house-glow', `${house.color}80`);
  };

  const handleResetTheme = () => {
    document.documentElement.style.removeProperty('--accent-color');
    document.documentElement.style.removeProperty('--accent-dark');
    document.documentElement.style.removeProperty('--house-glow');
  };

  return (
    <div className="app">
      <MagicCursor />
      <Navbar />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <React.Suspense fallback={null}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/library" element={<Library />} />
                <Route path="/portal" element={<StudentPortal />} />
                <Route path="/career" element={<Career />} />
                <Route path="/calendar" element={<AcademicCalendar />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </React.Suspense>

            {location.pathname === '/' && (
              <SortingHat onSort={handleSort} onResetTheme={handleResetTheme} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
