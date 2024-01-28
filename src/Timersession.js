// Filename - App.js

import React, { useState, useRef, useEffect } from "react";
import cattable from './assets/cattable.png';
import smalltimer from './assets/small-timer.svg';
import smallplus from './assets/small-plus.svg';
import smallminus from './assets/small-minus.svg';
import end from './assets/end.svg';
import toilet from './assets/toilet.svg';
import './Timersession.css';
import readingpageImage from './assets/readingpage.png'; // Adjust the file path

const Timer = ({ paused }) => {
	
	const Ref = useRef(null);
	const [timer, setTimer] = useState("00:00:00");
	const [totalMinutes, setTotalMinutes] = useState(40);
  
	const getTimeRemaining = (e) => {
	  const total = Date.parse(e) - Date.parse(new Date());
	  const seconds = Math.floor((total / 1000) % 60);
	  const minutes = Math.floor((total / 1000 / 60) % 60);
	  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
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
	  setTotalMinutes((prevTotal) => {
		const newTotal = prevTotal + 5;
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
	}, [totalMinutes, paused]);
	const onClickReset = () => {
		clearTimer(getDeadTime());
	};

	return (
		<div className="study-session-container">
	
			<div className="small-timer-container">
			
				
				
				<div className='small-timer-btn'>
					<img src={smallminus} onClick={handleMinusClick} className="small-minus-btn" />
					<img src={smallplus} onClick={handlePlusClick} className="small-plus-btn" />
				</div>
				<img src={smalltimer} className="small-timer"/>
				<div className="actual-timer">{timer}</div>
			
				
			</div>
			
			{/* <button onClick={onClickReset}>Reset</button> */}
		</div>
	  );
	  
};

export default Timer;
