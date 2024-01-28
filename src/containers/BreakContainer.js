import React, { useState, useRef, useEffect } from "react";
import smalltimer from '../assets/small-timer.svg';
import smallplus from '../assets/small-plus.svg';
import smallminus from '../assets/small-minus.svg';
import EndSessionContainer from './EndSessionContainer';
import ReadingContainer from './ReadingContainer';
import end from '../assets/end.svg';
import resume from '../assets/resume.svg';
import '../containers-css/BreakContainer.css';
import frogBreak from '../assets/frogbreak.png';
import catBreak from '../assets/catbreak.png';
import duckBreak from '../assets/duckbreak.png';
import '../Timersession.css';



const BreakContainer = ({ currentAvatarIndex, initialTimerValue, breakTimeValue }) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [isResume, setIsResume] = useState(false);
  const [isEndSession, setIsEndSession] = useState(false);
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const [totalMinutes, setTotalMinutes] = useState(breakTimeValue);
  const [breakOver, setBreakOver] = useState(false);

  const handleEndSession = () => {
    setButtonClick(true);
    setIsEndSession(true);
  };

  const handleisResume = () => {
    setButtonClick(true);
    setIsResume(true);
  };

    // Timer functions
	const getTimeRemaining = (e) => {
	  const total = Date.parse(e) - Date.parse(new Date());
	  const seconds = Math.floor((total / 1000) % 60);
	  const minutes = Math.floor((total / 1000 / 60) % 60);
	  const hours = Math.floor((total / 1000 / 60 / 60) % 24);

	  if (hours == 0 && minutes == 0 && seconds == 0) {
		setBreakOver(true);
	  }
	  return { total, hours, minutes, seconds };
	};

  
	const clearTimer = (deadline) => {
	  // Clear any existing interval
	  if (Ref.current) clearInterval(Ref.current);
  
	  // Update the timer immediately
	  startTimer(deadline);
  
	  // Set up a new interval to update the timer every second
	  const id = setInterval(() => {
		startTimer(deadline);
	  }, 1000);
	  Ref.current = id;
	};
  
	const getDeadTime = (minutes) => {
	  let deadline = new Date();
	  deadline.setMinutes(deadline.getMinutes() + minutes);
	  return deadline;
	};
  
	const formatTime = (seconds) => {
	  const hours = Math.floor(seconds / 3600);
	  const minutes = Math.floor((seconds % 3600) / 60);
	  const remainingSeconds = seconds % 60;
  
	  return (
		(hours < 10 ? "0" : "") + hours + ":" +
		(minutes < 10 ? "0" : "") + minutes + ":" +
		(remainingSeconds < 10 ? "0" : "") + remainingSeconds
	  );
	};
  
	const startTimer = (e) => {
	  let { total, hours, minutes, seconds } = getTimeRemaining(e);
	  if (total >= 0) {
		setTimer(
		  (hours > 9 ? hours : "0" + hours) +
		  ":" +
		  (minutes > 9 ? minutes : "0" + minutes) +
		  ":" +
		  (seconds > 9 ? seconds : "0" + seconds)
		);
	  }
	};
  
	const handlePlusClick = () => {
	  setTotalMinutes((prevValue) => {
		const newTotal = prevValue + 5;
		clearTimer(getDeadTime(newTotal)); // Update the deadline
		return newTotal;
	  });
	};
  
	const handleMinusClick = () => {
	  setTotalMinutes((prevTotal) => {
		const newTotal = Math.max(0, prevTotal - 5);
		clearTimer(getDeadTime(newTotal)); // Update the deadline
		return newTotal;
	  });
	};
  
	useEffect(() => {
	  const initialDeadline = getDeadTime(totalMinutes);
	  clearTimer(initialDeadline);
  
	  return () => {
		if (Ref.current) clearInterval(Ref.current);
	  };
	}, [totalMinutes]);
	const onClickReset = () => {
		clearTimer(getDeadTime());
	};

  // Define an array of image sources based on the avatar index
  const avatarImages = [
    catBreak, frogBreak, duckBreak
  ];

  return (
    breakOver ? (
      <ReadingContainer
        currentAvatarIndex={currentAvatarIndex}
        initialTimerValue={initialTimerValue}
      />
    ) :
    buttonClick ? (
      isResume ? ( 
        <div>
          <ReadingContainer
          currentAvatarIndex={currentAvatarIndex}
          initialTimerValue={initialTimerValue}
          />
        </div>
      ) : (
        <div>
          <EndSessionContainer/>
        </div>
      )
    ) : (
      <div className="study-break-container">
        <img src={avatarImages[currentAvatarIndex]} alt={`Avatar ${currentAvatarIndex + 1}`} className="avatar-break-image" />
        <div className="small-timer-break-container">
          <img src={end} onClick={handleEndSession} className="end-break-btn" />
      {/* Timer Layout */}
        <div className='small-timer-btn'>
					<img src={smallminus} onClick={handleMinusClick} className="small-minus-btn" />
					<img src={smallplus} onClick={handlePlusClick} className="small-plus-btn" />
				</div>
				<img src={smalltimer} className="small-timer"/>
				<div className="actual-timer">{timer}</div>
          <img src={resume} onClick={handleisResume} className="resume-from-break-btn" />
        </div>
      </div>
    )
  );
}

export default BreakContainer;