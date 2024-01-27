import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import help from './assets/help.png';
import music from './assets/music.png';
import stickies from './assets/stickies.png';
import color from './assets/color.png';
import landing from './assets/landing.png';
import ColorSelector from './ColorSelector'
import './App.css';



function App() {
  const [selectedColor, setSelectedColor] = useState('#007bff');
  const colorButtonRef = useRef(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color; // Change background color
  };
  // Declare variables


  //Write any functions
  // function sayHello () {
  //   console.log('hello') ss
  // }

  //return HTML
  return (
    <div className="container">
      <div className="nav">
        <div className= "buttons">
          <ColorSelector buttonRef={colorButtonRef} onColorChange={handleColorChange} colorImage={color}/>
          <img src={music} className="btn" alt="music" />
          <img src={stickies} className="btn" alt="stickies" />
          <img src={help} className="btn" alt="help" />
        </div>
        <div className='time-bar'> <p>this is a time bar</p></div>
        <div className='todo-icon'>
          <img src={music} className="btn" alt="music" />
        </div>
      </div>
      

      <div className='session-start'>

        
        <img src={landing} className="home-img" alt="start session image" />
        <div className='start-btn'>
          <p>Begin new study session</p>
        </div>

      </div>

{/* 
        <div className='set-time'>
        
        </div> */}
    
  </div>
      
    
  );
}

export default App;
