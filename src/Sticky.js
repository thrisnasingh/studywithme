// Sticky.js
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './Sticky.css';

const Sticky = ({ id }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');  

  useEffect(() => {
    const savedPosition = JSON.parse(localStorage.getItem(`stickyPosition_${id}`));
    if (savedPosition) {
      setPosition(savedPosition);
    }

    const savedText = localStorage.getItem(`stickyText_${id}`);
    if (savedText) {
      setText(savedText);
    }
  }, [id]);

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
    localStorage.setItem(`stickyPosition_${id}`, JSON.stringify({ x, y }));
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem(`stickyText_${id}`, newText);
  };

  return (
    <Draggable defaultPosition={position} onStop={handleDrag}>
      <div className="sticky">
        {/* <button className="close-btn" onClick={handleClose}>Close</button> */}
        <textarea
          className="sticky-input"
          value={text}
          onChange={handleTextChange}
          placeholder="Draggable Sticky! Type here"
        />
      </div>
    </Draggable>
  );
};

export default Sticky;

