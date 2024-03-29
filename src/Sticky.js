// // Sticky.js
// import React, { useState, useEffect } from 'react';
// import Draggable from 'react-draggable';
// import './Sticky.css';

// const Sticky = ({ id }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [text, setText] = useState('');  

//   useEffect(() => {
//     const savedPosition = JSON.parse(localStorage.getItem(`stickyPosition_${id}`));
//     if (savedPosition) {
//       setPosition(savedPosition);
//     }

//     const savedText = localStorage.getItem(`stickyText_${id}`);
//     if (savedText) {
//       setText(savedText);
//     }
//   }, [id]);

//   const handleDrag = (e, ui) => {
//     const { x, y } = ui;
//     setPosition({ x, y });
//     localStorage.setItem(`stickyPosition_${id}`, JSON.stringify({ x, y }));
//   };

//   const handleTextChange = (e) => {
//     const newText = e.target.value;
//     setText(newText);
//     localStorage.setItem(`stickyText_${id}`, newText);
//   };

//   const handleClose = () => {
//     setText('');
//     localStorage.removeItem(`stickyText_${id}`);
//   };

//   return (
//     <Draggable defaultPosition={position} onStop={handleDrag}>
//       <div className="sticky">
//         <textarea
//           className="sticky-input"
//           value={text} spellCheck={false}
//           onChange={handleTextChange}
//           placeholder="Type something..."
//         />
//         <button className="close-btn" onClick={handleClose}>Clear</button>
//       </div>
//     </Draggable>
//   );
// };

// export default Sticky;



// Sticky.js
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './Sticky.css';

const Sticky = ({ id, onClose }) => {
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
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem(`stickyText_${id}`, newText);
  };

  const handleClose = () => {
    onClose(id);
    localStorage.removeItem(`stickyPosition_${id}`);
    localStorage.removeItem(`stickyText_${id}`);
  };

  useEffect(() => {
    // Save position to local storage whenever it changes
    localStorage.setItem(`stickyPosition_${id}`, JSON.stringify(position));
  }, [id, position]);

  return (
    <Draggable defaultPosition={position} onStop={handleDrag}>
      <div className="sticky">
        <textarea
          className="sticky-input"
          value={text}
          spellCheck={false}
          onChange={handleTextChange}
          placeholder="Type something..."
        />
        <button className="close-btn" onClick={handleClose}>x</button>
      </div>
    </Draggable>
  );
};

export default Sticky;
