import React from 'react';
import Navbar from '../Navbar';
import './index.css'; 

const AcademicCoordinatorPage = () => {
  return (
    <>
      <Navbar isAuthenticated={true} userRole={'faculty-AC'} />
      <div className="banner-img">
      <div className="page-container">
        <h2>Academic Coordinator Page</h2>
        <p>Welcome, Academic Coordinator!</p>
      </div>
      </div>
    </>
  );
};

export default AcademicCoordinatorPage;
