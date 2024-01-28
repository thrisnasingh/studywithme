
import React, { useState } from 'react';
import '../containers-css/EndSessionContainer.css';
import catEnd from '../assets/catend.png'
import frogEnd from '../assets/frogend.png'
import duckEnd from '../assets/duckend.png'
import HomeContainer from './HomeContainer';
import backhome from '../assets/backhome.svg'

const EndSessionContainer = ({ currentAvatarIndex }) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [spotifyEmbedKey, setSpotifyEmbedKey] = useState(Date.now());

  const handleBackHomeSession = () => {
    setButtonClick(true);
    window.location.reload();
    sessionStorage.clear();
    setSpotifyEmbedKey(Date.now());
    
  };

  // Define an array of image sources based on the avatar index
  const avatarEndImages = [
    catEnd, frogEnd, duckEnd
    // Add more paths as needed
  ];

    return (
      buttonClick ? (
          <div>
            <HomeContainer/>
          </div>
      ) : 
      <div className='end-session-screen'>
        <img src={avatarEndImages[currentAvatarIndex]} alt={`Avatar ${currentAvatarIndex + 1}`} className="avatar-end-image" />
        <img src={backhome} onClick={handleBackHomeSession} className="back-home-btn" />
        {/* <p className='end-text'>We studied for 70 min together!</p> */}

      </div>
    );
  }
  
export default EndSessionContainer;

