import React from 'react';
import Navbar from '../Navbar';
import './index.css'; 

const EvaluatorPage = () => {
  return (
    <>
      <Navbar isAuthenticated={true} userRole={'faculty'}/>
      <div className="page-container">
        <h2>Evaluator Page</h2>
        <p>Welcome, Evaluator!</p>
      </div>
    </>
  );
};

export default EvaluatorPage;
