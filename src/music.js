// Music.js
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './music.css';

const Music = ({ buttonRef, closeMusic }) => {
  const musicRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (musicRef.current && !musicRef.current.contains(event.target)) {
        closeMusic();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMusic]);

  return (
    <div className="music-container" ref={musicRef}>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/1JLw7Y5YvlsA10XjaKHTxE?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

Music.propTypes = {
  buttonRef: PropTypes.object.isRequired,
  closeMusic: PropTypes.func.isRequired,
};

export default Music;

