// ColorSelector.js
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './ColorSelector.css';

const ColorSelector = ({ buttonRef, onColorChange, colorImage }) => {
  const colorPickerRef = useRef(null);

  const handleButtonClick = () => {
    colorPickerRef.current.click();
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    if (onColorChange) {
      onColorChange(color);
    }
  };

  return (
    <div className="color-container">
      {/* Visible color input */}
      <input
        type="color"
        id="colorPicker"
        ref={colorPickerRef}
        onChange={handleColorChange}
      />

      {/* Color selector button */}
      <img
        className="color-selector-btn"
        src={colorImage}
        alt="Color Button"
        onClick={handleButtonClick}
        ref={buttonRef}
      />
    </div>
  );
};

ColorSelector.propTypes = {
  buttonRef: PropTypes.object.isRequired,
  onColorChange: PropTypes.func,
  colorImage: PropTypes.string.isRequired,
};

export default ColorSelector;
