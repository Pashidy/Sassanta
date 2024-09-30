import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingPage from './components/LandingPage';
import QuadrantPage from './components/QuadrantPage';
import TaskHistory from './components/TaskHistory';
import './App.css';

function App() {
  const [lastTask, setLastTask] = useState(null); // Store last visited task

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><SplashScreen /><LandingPage lastTask={lastTask} /></>} />
        <Route path="/resume" element={<div>{/* Logic for resuming the last task */}</div>} />
        <Route path="/new-task" element={<QuadrantPage />} />
        <Route path="/history" element={<TaskHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

