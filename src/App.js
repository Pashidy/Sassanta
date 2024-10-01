import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingPage from './components/LandingPage';
import QuadrantPage from './components/QuadrantPage'; // Quadrant selection page
import PriorityTaskPage from './components/PriorityTaskPage'; // Individual task pages for priorities
import TaskHistory from './components/TaskHistory';
import './App.css';

function App() {
  const [lastTask, setLastTask] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Home page with splash screen and landing page */}
        <Route path="/" element={<><SplashScreen /><LandingPage lastTask={lastTask} /></>} />

        {/* Quadrant selection page */}
        <Route path="/new-task" element={<QuadrantPage />} />

        {/* Priority task pages for each quadrant */}
        <Route path="/tasks/urgent-important" element={<PriorityTaskPage priorityName="Urgent & Important" />} />
        <Route path="/tasks/not-urgent-important" element={<PriorityTaskPage priorityName="Not Urgent but Important" />} />
        <Route path="/tasks/urgent-not-important" element={<PriorityTaskPage priorityName="Urgent but Not Important" />} />
        <Route path="/tasks/not-urgent-not-important" element={<PriorityTaskPage priorityName="Not Urgent & Not Important" />} />

        {/* Task history page */}
        <Route path="/history" element={<TaskHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
