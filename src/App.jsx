/**
 * Main App Component
 * This component handles routing between different pages
 * using React state instead of a router library
 */
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Departments from './components/Departments.jsx';
import Admission from './components/Admission.jsx';
import Contact from './components/Contact.jsx';
import Library from './pages/Library.jsx';
import StudentPortal from './pages/StudentPortal.jsx';
import Career from './pages/Career.jsx';
import AcademicCalendar from './pages/AcademicCalendar.jsx';

function App() {
  // State to track the current page - default is 'home'
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the appropriate page component based on state
const renderPage = () => {
  switch (currentPage) {
    case 'home':
      return <Home setCurrentPage={setCurrentPage} />;
    case 'about':
      return <About />;
    case 'departments':
      return <Departments />;
    case 'admission':
      return <Admission />;
    case 'contact':
      return <Contact />;
    case 'library':
      return <Library />;
    case 'portal':
      return <StudentPortal />;
    case 'career':
      return <Career />;
      case 'AcademicCalendar':
      return <AcademicCalendar />;
    default:
      return <Home />;
  }
};

  return (
    <div className="app">
      {/* Navigation bar receives the page setter to handle navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main content area */}
      <main className="main-content">
        {renderPage()}
      </main>
      
      {/* Footer displayed on all pages */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
