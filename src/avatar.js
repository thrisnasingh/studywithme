import React, { useState } from 'react';
import homeCat from './assets/home-cat.svg';
import homeFrog from './assets/home-frog.svg';
import homeDuck from './assets/home-duck.svg';
import './avatar.css';

const AvatarCarousel = () => {
  const avatars = [homeCat, homeFrog, homeDuck];
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  const handleAvatarClick = () => {
    // Increment the index and cycle back to 0 if it exceeds the array length
    setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  };

  return (
    <div className="avatar-carousel">
      <img
        src={avatars[currentAvatarIndex]}
        className="avatar-img"
        onClick={handleAvatarClick}
      />
    </div>
  );
};

export default AvatarCarousel;
