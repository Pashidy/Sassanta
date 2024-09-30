import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = ({ lastTask }) => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h2>Welcome back to Sassanta</h2>
      <div className="icon-menu">
        <div 
          className={`menu-icon ${lastTask ? '' : 'inactive'}`} 
          onClick={() => lastTask && navigate('/resume')}
        >
          Resume where you left off
        </div>
        <div className="menu-icon" onClick={() => navigate('/new-task')}>
          Enter a new task
        </div>
        <div className="menu-icon" onClick={() => navigate('/history')}>
          View tasks history
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
