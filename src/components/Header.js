import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Projects';
import Contact from './pages/Contact';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body">
      
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {renderPage()}
    </div>
  );
}

