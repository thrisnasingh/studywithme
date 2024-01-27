// StickiesContainer.js
import React from 'react';
import Sticky from './Sticky';

const StickiesContainer = () => {
  return (
    <div className="stickies-container">
      <Sticky id="1" />
      {/* <Sticky id="2" /> */}
      {/* Add more Sticky components as needed */}
    </div>
  );
};

export default StickiesContainer;
