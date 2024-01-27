import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import help from './assets/help.png';
import music from './assets/music.png';
import stickies from './assets/stickies.png';
import color from './assets/color.png';
import AvatarCarousel from './avatar';
import todo from './assets/todo.svg';
import ColorSelector from './ColorSelector';
import Music from './music'
import Timerbreak from './Timerbreak';
import Timer from './Timersession';
import './App.css';
import Todolist from './todo';
import HomeTimer from './HomeTimer'



function App() {
  // Declare variables
  const [selectedColor, setSelectedColor] = useState('#007bff');
  const colorButtonRef = useRef(null);
  const musicButtonRef = useRef(null);
  const [isMusicVisible, setIsMusicVisible] = useState(false);

  //Write any functions
  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color; // Change background color
  };
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

  
  const handleMusicClick = () => {
    setIsMusicVisible(true);
  };  


  // const closeMusic = () => {
  //   setIsMusicVisible(false);
  // };

  //return HTML
  return (
    <div className="container">
      <div className="nav">
        <div className= "buttons">
          <ColorSelector buttonRef={colorButtonRef} onColorChange={handleColorChange} colorImage={color}/>
          <img src={music} className="btn" alt="music" onClick={handleMusicClick} ref={musicButtonRef}/>
          {isMusicVisible && <Music buttonRef={musicButtonRef}/>}
          <img src={stickies} className="btn" alt="stickies" />
          <img src={help} className="btn" alt="help" />
        </div>
        <div className='time-bar'> <p>this is a time bar</p></div>
        <div className='todo-icon'>
          <img src={music} className="btn" alt="music" />
        </div>
      </div>
      {timerStarted ? (
        isBreak ? <Timerbreak /> : <Timer />
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
            <Todolist />
          </div>
          
        </div>
       <div className='start-btn'>
            
          <p onClick={handleBeginSession}>Begin new study session</p>
            {/*<button onClick={handleBeginBreak}>Take a break</button> */}
          
        </div>

      </div>
      )}

{/* 
        <div className='set-time'>
        
        </div> */}
    
  </div>
      
    
  );
}

export default App;
