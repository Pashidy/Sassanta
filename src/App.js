import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import TaskManager from './components/TaskManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sassanta</h1> {/* Display the app name */}
      </header>
      <CountdownTimer />
      <TaskManager />
    </div>
  );
}

export default App;
