import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuadrantPage.css';  // Ensure your styles are imported

const QuadrantPage = () => {
  const navigate = useNavigate();

  const handleQuadrantClick = (path) => {
    navigate(path); // Navigate to the selected quadrant's task page
  };

  return (
    <div className="quadrant-page">
      <h2>Select a Task Priority</h2>
      <div className="quadrant-circle">
        <div className="quadrant urgent-important" onClick={() => handleQuadrantClick('/tasks/urgent-important')}>
          Urgent & Important
        </div>
        <div className="quadrant not-urgent-important" onClick={() => handleQuadrantClick('/tasks/not-urgent-important')}>
          Not Urgent but Important
        </div>
        <div className="quadrant urgent-not-important" onClick={() => handleQuadrantClick('/tasks/urgent-not-important')}>
          Urgent but Not Important
        </div>
        <div className="quadrant not-urgent-not-important" onClick={() => handleQuadrantClick('/tasks/not-urgent-not-important')}>
          Not Urgent & Not Important
        </div>
      </div>
    </div>
  );
};

export default QuadrantPage;
