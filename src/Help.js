// ToiletBreak.js
import React from 'react';
import reading from './assets/readingpage.png';
import help from './assets/help.png';
import music from './assets/music.png';
import Timer from './Timersession';

const Help = ({ showAlternative }) => {
  return (
    <div>
      {showAlternative ? (
        <>
          <div style={{ textAlign: "center", margin: "auto" }}>
            <img src={help} alt="Toilet Break" style={{ width: "500px", height: "500px" }} />
          </div>
          {/* Additional elements for the alternative view */}
        </>
      ) : (
        <>
          <div style={{ textAlign: "center", margin: "auto" }}>
            <img src={reading} alt="Reading Page" style={{ width: "500px", height: "500px" }} />
            <img src={music} className="btn" alt="music" />
          </div>
          {/* Additional elements for the default view */}
        </>
      )}
    </div>
  );
};

export default Help;
