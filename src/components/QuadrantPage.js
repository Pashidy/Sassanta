import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/QuadrantPage.css';

const QuadrantPage = () => {
  const navigate = useNavigate();

  const handleQuadrantClick = (priority) => {
    navigate(`/tasks/${priority}`);
  };

  return (
    <div className="quadrant-page">
      <h2>Select a Task Priority</h2>
      <div className="quadrant-circle">
        <div className="quadrant urgent-important" onClick={() => handleQuadrantClick('urgent-important')}>Urgent & Important</div>
        <div className="quadrant not-urgent-important" onClick={() => handleQuadrantClick('not-urgent-important')}>Not Urgent but Important</div>
        <div className="quadrant urgent-not-important" onClick={() => handleQuadrantClick('urgent-not-important')}>Urgent but Not Important</div>
        <div className="quadrant not-urgent-not-important" onClick={() => handleQuadrantClick('not-urgent-not-important')}>Not Urgent & Not Important</div>
      </div>
    </div>
  );
};

export default QuadrantPage;
