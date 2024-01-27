import React, { useState } from 'react';
import Timer from '../Timersession';
import ReadingContainer from './ReadingContainer';
import HomeTimer from '../HomeTimer';
import TodoList from '../todo';
import AvatarCarousel from '../avatar';
import todo from '../assets/todo.svg';
import AvatarState from '../AvatarState';

const HomeContainer = () => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

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
        <ReadingContainer />
        </div>

      ) : (
        <div className='study-session'>
        <div className='study-options'>
          <div className='timer-container'>
            <HomeTimer />
          </div>
          <div className='avatar-container'>
            <AvatarCarousel />
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

  