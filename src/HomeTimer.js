
import bigTimer from './assets/big-timer_1.svg';
import bigminus from './assets/big-minus.svg';
import bigplus from './assets/big-plus.svg';
import React, { useState } from 'react';
import './HomeTimer.css';

const HomeTimer = () => {
  const [timerValue, setTimerValue] = useState(40);

  const handleMinusClick = () => {
    // Ensure timer value does not go below 0
    if (timerValue > 0) {
      setTimerValue(prevValue => prevValue - 5);
    }
  };

  const handlePlusClick = () => {
    // Increment the timer value
    if (timerValue < 999) {
        setTimerValue(prevValue => prevValue + 5);
    }
  };

  return (
    <div className='timer-container'>   
        <img src={bigTimer} className="timer-img" alt="timer image" />
        <div className='timer-btn'>
            <img onClick={handleMinusClick} src={bigminus} className="minus-btn" />
            <img onClick={handlePlusClick} src={bigplus} className="plus-btn" />
        </div>
        <span className="min-label">min</span>
        <span className= 'timer-value' id="timer-value">{timerValue}</span>
    </div>
  );
};

export default HomeTimer;