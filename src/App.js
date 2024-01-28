import React, { useRef, useState, u } from 'react';
import logo from './logo.svg';
import help from './assets/help.png';
import music from './assets/music.png';
import stickies from './assets/stickies.png';
import color from './assets/color.png';
import Sticky from './Sticky'; 
import homeicon from './assets/homeicon.png';
import todo from './assets/todo.svg';
import ColorSelector from './ColorSelector';
import Music from './music'
import todoicon from './assets/todo-icon.svg';
import todopopup from './assets/todo-popup.svg';
import Timerbreak from './Timerbreak';
import Timer from './Timersession';
import HomeContainer from './containers/HomeContainer';
import ReadingContainer from './containers/ReadingContainer';
import ToiletBreakContainer from './containers/ToiletBreakContainer';
import './App.css';
import Todolist from './todo';
import HomeTimer from './HomeTimer'
import StickiesContainer from './StickiesContainer';
import TodoList from './todo';
import './Helper.css'
// import PopOutList from './PopOutList'; 
// import HelperPage from './HelperPage';



function App() {
  // Declare variables
  const [selectedColor, setSelectedColor] = useState('#007bff');
  const colorButtonRef = useRef(null);
  const musicButtonRef = useRef(null);
  const [isMusicVisible, setIsMusicVisible] = useState(false);
  const [spotifyEmbedKey, setSpotifyEmbedKey] = useState(Date.now());

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
    sessionStorage.clear();
    setSpotifyEmbedKey(Date.now()); // Reload Spotify embed
  };

  // const [isStickyVisible, setIsStickyVisible] = useState(false);
  
  // const handleShowSticky = () => {
  //   setIsStickyVisible(!isStickyVisible);
  // };

  // Maintain a list of sticky note IDs
  const [stickyNoteIds, setStickyNoteIds] = useState([]);

  // Function to add a new sticky note ID to the list
  const addStickyNote = () => {
    const newId = Date.now(); // Use timestamp as a unique ID
    setStickyNoteIds((prevIds) => [...prevIds, newId]);
  };

  // Function to remove a sticky note ID from the list
  const removeStickyNote = (id) => {
    setStickyNoteIds((prevIds) => prevIds.filter((noteId) => noteId !== id));
  };


  // Render a new Sticky component for each sticky note ID
  // const stickyComponents = stickyNoteIds.map((id) => (
  //   <Sticky key={id} id={id} />
  // ));

  const stickyComponents = stickyNoteIds.map((id) => (
    <Sticky key={id} id={id} onClose={() => removeStickyNote(id)} />
  ));

  const [isHelperVisible, setIsHelperVisible] = useState(false);
  const [isToDoVisible, setIsToDoVisible] = useState(false);

  const toggleVisibility = () => {
    setIsHelperVisible(!isHelperVisible);
  };

  const toggleToDoVisibility = () => {
    setIsToDoVisible(!isToDoVisible);
  };

  const closePopup = () => {
    setIsHelperVisible(false);
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
          {/* <img src={stickies} className="btn" alt="stickies" onClick={handleShowSticky}/>
          {isStickyVisible && <StickiesContainer/>} */}
          <img src={stickies} className="btn" alt="stickies" onClick={addStickyNote} />
          {stickyComponents}
          <img src={help} className="btn" alt="help" onClick={toggleVisibility}/>
          {isHelperVisible && 
         
         <div className="pop-out-content">
          <button className="close-button" onClick={closePopup}>x</button>
            {/* Pop-out content goes here */}
            <h1>Instructions</h1>
            <h2>how to navigate the webpage...</h2>
            <div className="instruction-container">
            <img src={homeicon} className="instruction-btn" alt="home-icon" />
            <h3>The Home button takes you back to the landing page </h3>
            </div>

            <div className="instruction-container">
            <img src={music} className="instruction-btn" alt="music" />
            <h3>Want some music? Enjoy a soothing lo-fi playlist designed for focused study sessions </h3>
            </div>

            <div className="instruction-container">
            <img src={stickies} className="instruction-btn" alt="stickies"/>
            <h3>Jot down quick thoughts with the sticky notes!</h3>
            </div>

            <div className="instruction-container">
            <img src= {color} className="instruction-btn" alt="colorwheel"/>
            <h3>Customize your background to your favorite color with the color wheel</h3>
            </div>

            <div className="instruction-container">
            <img src= {todoicon} className="instruction-btn todo-instr" alt="todoicon"/>
            <h3>Record your plans for today's session here</h3>
            </div>
          </div>
          }
        </div>
        <div className='todo-icon'>
          <img src={todoicon} className="todo-btn" alt="todo icon" onClick={toggleToDoVisibility}/>
          {isToDoVisible && 
          <div className="to-do-popup">
            {/* Pop-out content goes here */}
            <p className='session-plan-text'>Today's Plan</p>
            <img src={todopopup} className="todo-popup-img" alt="todo image"/> 
            <div className="to-do-text-box">
              <button className="todo-close-button" onClick={toggleToDoVisibility}>x</button>
              <TodoList/>
            </div>
          </div>
}
        </div>
          
        {/* <PopOutList/> */}
      </div>
      

<HomeContainer />
    
  </div>
      
    
  );
}

export default App;
