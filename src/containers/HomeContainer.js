import React, { useState } from 'react';
import ReadingContainer from './ReadingContainer';
import HomeTimer from '../HomeTimer';
import TodoList from '../todo';
import todo from '../assets/todo.svg';
import homeCat from '../assets/home-cat.svg';
import homeFrog from '../assets/home-frog.svg';
import homeDuck from '../assets/home-duck.svg';
import '../containers-css/HomeContainer.css';

const HomeContainer = () => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const avatars = [homeCat, homeFrog, homeDuck];
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

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


  return (
    <>
      {timerStarted ? (
        <div>
        <ReadingContainer
          currentAvatarIndex={currentAvatarIndex}
        />
        </div>

      ) : (
        <div className='study-session'>
        <div className='study-options'>
          <div className='timer-container'>
            <HomeTimer />
          </div>
          <div className='avatar-container'>
          <img
            src={avatars[currentAvatarIndex]}
            className="avatar-img"
            onClick={handleAvatarClick}
          />
          </div>
          <div className='todo-container'>
            <p className='todo-text'>To-do</p>
              
            <img src={todo} className="todo-img" alt="todo image"/> 
            <TodoList />
          </div>
          
        </div>
       <div className='start-btn'>
            
          <p onClick={handleBeginSession}>Begin new study session</p>
            {/*<button onClick={handleBeginBreak}>Take a break</button> */}
          
        </div>

      </div>
      )}
    </>
  );
}

export default HomeContainer;

  