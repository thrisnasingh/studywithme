import React, { useState } from 'react';
import EndSessionContainer from './EndSessionContainer';
import ToiletBreakContainer from './ToiletBreakContainer';
import end from '../assets/end.svg';
import toilet from '../assets/toilet.svg';
import '../containers-css/ReadingContainer.css';
import Timer from '../Timersession';
import frogTable from '../assets/frogtable.png';
import catTable from '../assets/cattable.png';
import duckTable from '../assets/ducktable.png';


const ReadingContainer = ({ currentAvatarIndex, initialTimerValue}) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [isToiletBreak, setIsToiletBreak] = useState(false);
  const [isEndSession, setIsEndSession] = useState(false);

  const handleEndSession = () => {
    setButtonClick(true);
    setIsEndSession(true);
  };

  const handleToiletBreak = () => {
    setButtonClick(true);
    setIsToiletBreak(true);
  };

  // Define an array of image sources based on the avatar index
  const avatarImages = [
    catTable, frogTable, duckTable
  ];

  return (
    buttonClick ? (
      isToiletBreak ? ( 
        <div>
          <ToiletBreakContainer
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
          <img src={end} onClick={handleEndSession} className="end-btn" />
          <Timer 
          initialTimerValue={initialTimerValue}
          />
          <img src={toilet} onClick={handleToiletBreak} className="toilet-btn" />
        </div>
      </div>
    )
  );
}

export default ReadingContainer;

