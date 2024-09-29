import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="splash-screen">
        <img src="/assets/sassanta-logo.png" alt="Sassanta Logo" className="logo" />
        <h1>Welcome to Sassanta!</h1>
        <p>Your ultimate productivity companion.</p>
      </div>
    )
  );
};

export default SplashScreen;
