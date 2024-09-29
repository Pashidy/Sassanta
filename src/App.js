import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingPage from './components/LandingPage';
import QuadrantPage from './components/QuadrantPage';
import TaskHistory from './components/TaskHistory';
import './App.css';

function App() {
  const [lastTask, setLastTask] = useState(null); // Store last visited task

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SplashScreen />
          <LandingPage lastTask={lastTask} />
        </Route>
        <Route path="/resume">
          {/* Logic for resuming the last task */}
        </Route>
        <Route path="/new-task">
          <QuadrantPage />
        </Route>
        <Route path="/history">
          <TaskHistory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
