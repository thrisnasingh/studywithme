import logo from './logo.svg';
import help from './assets/help.png';
import music from './assets/music.png';
import stickies from './assets/stickies.png';
import color from './assets/color.png';
import landing from './assets/landing.png';
import './App.css';


function App() {
  // Declare variables


  //Write any functions
  // function sayHello () {
  //   console.log('hello') ss
  // }

  //return HTML
  return (
    <div className="container">
      <div className="nav">
        <img src={color} className="btn" alt="color" />
        <img src={music} className="btn" alt="music" />
        <img src={stickies} className="btn" alt="stickies" />
        <img src={help} className="btn" alt="help" />
      </div>
      

        <div className='session-start'>
          
          <img src={landing} className="home-img" alt="help" />
          <div className='start-btn'>
            <p>Begin new study session</p>
         
            </div>

        </div>


        <div className='set-time'>
        
        </div>
    
  </div>
      
    
  );
}

export default App;
