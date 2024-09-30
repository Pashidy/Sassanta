import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingPage from './components/LandingPage';
import PriorityTaskPage from './components/PriorityTaskPage';
import TaskHistory from './components/TaskHistory';
import './App.css';

function App() {
  const [lastTask, setLastTask] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><SplashScreen /><LandingPage lastTask={lastTask} /></>} />
        <Route path="/resume" element={<div>{/* Resume task logic */}</div>} />
        <Route path="/tasks/urgent-important" element={<PriorityTaskPage priorityName="Urgent & Important" />} />
        <Route path="/tasks/not-urgent-important" element={<PriorityTaskPage priorityName="Not Urgent but Important" />} />
        <Route path="/tasks/urgent-not-important" element={<PriorityTaskPage priorityName="Urgent but Not Important" />} />
        <Route path="/tasks/not-urgent-not-important" element={<PriorityTaskPage priorityName="Not Urgent & Not Important" />} />
        <Route path="/history" element={<TaskHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
