import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import help from './assets/help.png';
import music from './assets/music.png';
import stickies from './assets/stickies.png';
import color from './assets/color.png';
import homeicon from './assets/homeicon.png';
import todo from './assets/todo.svg';
import ColorSelector from './ColorSelector';
import Music from './music'
import todoicon from './assets/todo-icon.svg';
import Timerbreak from './Timerbreak';
import Timer from './Timersession';
import HomeContainer from './containers/HomeContainer';
import ReadingContainer from './containers/ReadingContainer';
import ToiletBreakContainer from './containers/ToiletBreakContainer';
import './App.css';
import Todolist from './todo';
import HomeTimer from './HomeTimer'
import StickiesContainer from './StickiesContainer';



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

  const handleHomeButtonClick = () => {
    // Reset the state when the home button is clicked
    // setSelectedColor('#007bff');
    // setTimerStarted(false);
    // setIsBreak(false);
    // setIsMusicVisible(false);
    window.location.reload();
  };

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  
  const handleShowSticky = () => {
    setIsStickyVisible(!isStickyVisible);
  };

  const [isHelperVisible, setIsHelperVisible] = useState(false);

  const toggleVisibility = () => {
    setIsHelperVisible(!isHelperVisible);
  };


  // const closeMusic = () => {
  //   setIsMusicVisible(false);
  // };

  //return HTML
  return (
    <div className="container">
      <div className="nav">
        <div className= "buttons">
          <img src={homeicon} className="btn" onClick={handleHomeButtonClick} alt="home-icon" />
          <ColorSelector buttonRef={colorButtonRef} onColorChange={handleColorChange} colorImage={color}/>
          <img src={music} className="btn" alt="music" onClick={handleMusicClick} ref={musicButtonRef}/>
          {isMusicVisible && <Music buttonRef={musicButtonRef}/>}
          <img src={stickies} className="btn" alt="stickies" onClick={handleShowSticky}/>
          {isStickyVisible && <StickiesContainer/>}
          <img src={help} className="btn" alt="help" onClick={toggleVisibility}/>
          {isHelperVisible && 
          <div className="pop-out-content">
            {/* Pop-out content goes here */}
            <h1>Instructions</h1>
            <h2>These are the instructions on how to use the webpage...</h2>
          </div>
          }
        </div>
        <div className='time-bar'> <p>this is a time bar</p></div>
        <div className='todo-icon'>
          <img src={todoicon} className="todo-btn" alt="todo icon" />
        </div>
      </div>
<HomeContainer />
    
  </div>
      
    
  );
}

export default App;
