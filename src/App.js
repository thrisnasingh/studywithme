import logo from './logo.svg';
import help from './assets/help.svg';
import music from './assets/music.svg';
import stickies from './assets/stickies.svg';
import stress from './assets/stress.svg';
import landing from './assets/landing.png';
import './App.css';


function App() {
  // Declare variables


  //Write any functions
  // function sayHello () {
  //   console.log('hello')
  // }

  //return HTML
  return (
    <div className="container">
      <div className="nav">
        <div className='button'>
          <img src={music} className="btn" alt="music" />
          <img src={stickies} className="btn" alt="stickies" />
          <img src={stress} className="btn" alt="stress" />
          <img src={help} className="btn" alt="help" />
        </div>
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
