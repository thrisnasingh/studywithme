import React from 'react';
import music from '../assets/music.png'

const EndSessionContainer = () => {
    return (
      <div className='end-session-screen'>
        <img src={music} className="theend-img" alt="bye bye" />
      </div>
    );
  }
  
  export default EndSessionContainer;