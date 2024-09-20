import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../styles/CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);  // Time in seconds
  const [isActive, setIsActive] = useState(false);
  const [inputTime, setInputTime] = useState(0);

  // Timer logic using useEffect
  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);  // Stop when timer reaches 0
    }
    return () => clearInterval(timer);  // Cleanup on unmount
  }, [isActive, timeLeft]);

  // Start timer
  const startTimer = () => {
    const duration = moment.duration(inputTime, 'minutes').asSeconds();
    setTimeLeft(duration);
    setIsActive(true);
  };

  // Pause timer
  const pauseTimer = () => setIsActive(false);

  // Reset timer
  const resetTimer = () => {
    setTimeLeft(0);
    setIsActive(false);
  };

  return (
    <div className="timer">
      <h2>Countdown Timer</h2>
      <div>
        <label>Set Time (minutes):</label>
        <input 
          type="number" 
          value={inputTime} 
          onChange={(e) => setInputTime(e.target.value)} 
          min="1"
        />
      </div>
      <div className="time-display">
	<h1>{moment.utc(timeLeft * 1000).format('HH:mm:ss')}</h1>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
