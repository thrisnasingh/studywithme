import React, { useState } from 'react';
import ReadingContainer from './ReadingContainer';
import HomeTimer from '../HomeTimer';
import TodoList from '../todo';
import todo from '../assets/todo.svg';
import homeCat from '../assets/home-cat.svg';
import homeFrog from '../assets/home-frog.svg';
import homeDuck from '../assets/home-duck.svg';
import bigTimer from '../assets/big-timer_1.svg';
import bigminus from '../assets/big-minus.svg';
import bigplus from '../assets/big-plus.svg';
import '../containers-css/HomeContainer.css';

const HomeContainer = () => {
  //constants
  const [timerStarted, setTimerStarted] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const avatars = [homeCat, homeFrog, homeDuck];
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);
  const [initialTimerValue, setInitialTimerValue] = useState(40);

  //functions
  const handleAvatarClick = () => {
    // Increment the index and cycle back to 0 if it exceeds the array length
    setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  }

  const handleBeginSession = () => {
    setTimerStarted(true);
    setIsBreak(false);
  };

  const handleBeginBreak = () => {
    setTimerStarted(true);
    setIsBreak(true);
  };

  const handleMinusClick = () => {
    // Ensure timer value does not go below 0
    if (initialTimerValue > 0) {
      setInitialTimerValue(prevValue => prevValue - 5);
    }
  };

  const handlePlusClick = () => {
    // Increment the timer value
    if (initialTimerValue < 999) {
        setInitialTimerValue(prevValue => prevValue + 5);
    }
  };

  //html
  return (
    <>
      {timerStarted ? (
        <div>
        <ReadingContainer
          currentAvatarIndex={currentAvatarIndex}
          initialTimerValue={initialTimerValue}
        />
        </div>

      ) : (
        <div className='study-session'>
        <div className='study-options'>

          {/* Timer Layout*/}
          <div className='timer-container'>
          <img src={bigTimer} className="timer-img" alt="timer image" />
        <div className='timer-btn'>
            <img onClick={handleMinusClick} src={bigminus} className="minus-btn" />
            <img onClick={handlePlusClick} src={bigplus} className="plus-btn" />
        </div>
        <span className="min-label">min</span>
        <span className= 'timer-value' id="timer-value">{initialTimerValue}</span>
          </div>
          {/* Avatar Layout */}
          <div className='avatar-container'>
          <img
            src={avatars[currentAvatarIndex]}
            className="avatar-img"
            onClick={handleAvatarClick}
          />
          </div>
          {/* ToDo List Layout */}
          <div className='todo-container'>
            <p className='todo-text'>To-do</p>
            <img src={todo} className="todo-img" alt="todo image"/> 
            <TodoList />
          </div>
          
        </div>
        {/* Start Button Layout */}
       <div className='start-btn'>
          <p onClick={handleBeginSession}>Begin new study session</p>
            {/* <button onClick={handleBeginBreak}>Take a break</button> */}
        </div>

      </div>
      )}
    </>
  );
}

export default HomeContainer;

  