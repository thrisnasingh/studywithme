import React, { useState } from 'react';
import EndSessionContainer from './EndSessionContainer';
import ReadingContainer from './ReadingContainer';
import music from '../assets/music.png';
import help from '../assets/help.png';
import '../containers-css/BreakContainer.css';
import frogTable from '../assets/frogtable.png';
import catTable from '../assets/cattable.png';
import duckTable from '../assets/ducktable.png';
import Timer from '../Timersession';


const BreakContainer = ({ currentAvatarIndex }) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [isResume, setIsResume] = useState(false);
  const [isEndSession, setIsEndSession] = useState(false);

  const handleEndSession = () => {
    setButtonClick(true);
    setIsEndSession(true);
  };

  const handleisResume = () => {
    setButtonClick(true);
    setIsResume(true);
  };

  // Define an array of image sources based on the avatar index
  const avatarImages = [
    catTable, frogTable, duckTable
    // Add more paths as needed
  ];

  return (
    buttonClick ? (
      isResume ? ( 
        <div>
          <ReadingContainer
          currentAvatarIndex={currentAvatarIndex}
          />
        </div>
      ) : (
        <div>
          <EndSessionContainer/>
        </div>
      )
    ) : (
      <div className="study-session-container">
        <img src={avatarImages[currentAvatarIndex]} alt={`Avatar ${currentAvatarIndex + 1}`} className="avatar-image" />
        <div className="small-timer-container">
          <img src={music} onClick={handleEndSession} className="end-btn" />
          <Timer />
          <img src={help} onClick={handleisResume} className="toilet-btn" />
        </div>
      </div>
    )
  );
}

export default BreakContainer;