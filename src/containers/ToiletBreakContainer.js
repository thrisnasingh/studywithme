import React, { useState } from 'react';
import EndSessionContainer from './EndSessionContainer';
import ReadingContainer from './ReadingContainer';
import end from '../assets/end.svg';
import resume from '../assets/resume.svg';
import '../containers-css/ToiletBreakContainer.css';
import frogtoilet from '../assets/frogtoilet.png';
import cattoilet from '../assets/cattoilet.png';
import ducktoilet from '../assets/ducktoilet.png';


const ToiletBreakContainer = ({ currentAvatarIndex, currentTimerValue }) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [isResume, setIsResume] = useState(false);
  const [isEndSession, setIsEndSession] = useState(false);
  const [spotifyEmbedKey, setSpotifyEmbedKey] = useState(null);

  const handleEndSession = () => {
    setButtonClick(true);
    setIsEndSession(true);
    // sessionStorage.clear();
    // setSpotifyEmbedKey(Date.now());
  };

  const handleisResume = () => {
    setButtonClick(true);
    setIsResume(true);
  };

  // Define an array of image sources based on the avatar index
  const avatarImages = [
    cattoilet, frogtoilet, ducktoilet
    // Add more paths as needed
  ];

  return (
    buttonClick ? (
      isResume ? ( 
        <div>
          <ReadingContainer
          currentAvatarIndex={currentAvatarIndex}
          initialTimerValue={currentTimerValue}
          isToiletBreak={false}
          />
        </div>
      ) : (
        <div>
          <EndSessionContainer
          currentAvatarIndex={currentAvatarIndex}/>
        </div>
      )
    ) : (
      <div className="toilet-session-container">
        <img src={avatarImages[currentAvatarIndex]} loading="lazy" alt={`Avatar ${currentAvatarIndex + 1}`} className="avatar-toilet" />
        <div className='toilet-options'>
          <img src={end} onClick={handleEndSession} className='toilet-end-btn'/>
          <p className='toilet-text'>Toilet Break</p>
          <img src={resume} onClick={handleisResume}  className='toilet-resume-btn'/>
        </div>
      </div>
    )
  );
}

export default ToiletBreakContainer;