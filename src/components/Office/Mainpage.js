import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  const navigateToCars = () => {
    navigate('/cars');
  };

  const navigateToOwner = () => {
    navigate('/owner');
  };

  const navigateToInspection = () => {
    navigate('/inspection');
  };

  const navigateToAnalysis = () => {
    navigate('/analysis');
  };

  return (
    <div>
      <button onClick={navigateToDashboard}>Go to Dashboard</button>
      <button onClick={navigateToCars}>Go to Cars</button>
      <button onClick={navigateToOwner}>Go to Owner</button>
      <button onClick={navigateToInspection}>Go to Inspection</button>
      <button onClick={navigateToAnalysis}>Go to Analysis</button>
    </div>
  );
};

export default Mainpage;