import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import TaskManager from './components/TaskManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <CountdownTimer />
      <TaskManager />
    </div>
  );
}

export default App;
