// Music.js
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './music.css';

const Music = ({ buttonRef }) => {
  const musicRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        // Clicked on the music button, toggle minimized state
        setIsMinimized(!isMinimized);
      } else if (musicRef.current && !musicRef.current.contains(event.target)) {
        // Clicked outside the music, minimize
        setIsMinimized(true);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [buttonRef, isMinimized]);

  const iframeStyle = {
    borderRadius: '12px',
    width: isMinimized ? '0px' : '100%',
    height: isMinimized ? '0px' : '352px',
    position: isMinimized ? 'absolute' : 'static',
  };

  return (
    <div className="music-container" ref={musicRef}>
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/playlist/1JLw7Y5YvlsA10XjaKHTxE?utm_source=generator"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

Music.propTypes = {
  buttonRef: PropTypes.object.isRequired,
};

export default Music;
