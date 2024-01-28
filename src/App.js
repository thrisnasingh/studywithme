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
import './Helper.css'
// import PopOutList from './PopOutList'; 
// import HelperPage from './HelperPage';



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
            <h1 className="title">Study With Me Instructions</h1>
            {/* <h2 className="subtitle">These are the instructions on how to use the webpage...</h2> */}
            {/* <p className="paragraph"></p> */}
            <li className="paragraph">home button: redirect to home page</li>
            <li className="paragraph">color palette button: change the background color</li>
            <li className="paragraph">music button: play backgroun music of your choice</li>
            <li className="paragraph">sticky button: write some notes or remainders</li>
            <li className="paragraph">timer on the left: default 40min. You may increase or decrease study time</li>
            <li className="paragraph">to-do list on the right: You may type in your goals for each session</li>
            <li className="paragraph">click on the character in the middle to pick study buddy of your choice</li>
          
          </div>
          }
        </div>
        <div className='time-bar'> <p>this is a time bar</p></div>
        <div className='todo-icon'>
          <img src={todoicon} className="todo-btn" alt="todo icon" />
        </div>
        {/* <PopOutList/> */}
      </div>
      

<HomeContainer />
    
  </div>
      
    
  );
}

export default App;
