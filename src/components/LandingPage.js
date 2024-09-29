import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = ({ lastTask }) => {
  const history = useHistory();

  return (
    <div className="landing-page">
      <h2>Welcome back to Sassanta</h2>
      <div className="icon-menu">
        <div 
          className={`menu-icon ${lastTask ? '' : 'inactive'}`} 
          onClick={() => lastTask && history.push('/resume')}
        >
          Resume where you left off
        </div>
        <div className="menu-icon" onClick={() => history.push('/new-task')}>
          Enter a new task
        </div>
        <div className="menu-icon" onClick={() => history.push('/history')}>
          View tasks history
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
