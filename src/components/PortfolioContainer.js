import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/AboutMe';
import Work from './pages/MyWork';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This function is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <About />;
      case 'MyWork':
        return <Work />;
      case 'Contact':
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />  
  
      {renderPage()}
   
    </div>
  );
}
