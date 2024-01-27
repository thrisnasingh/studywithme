import React, { useEffect, useState } from 'react';

const TodoList = () => {
  useEffect(() => {
    // Retrieve the saved content from session storage on component mount
    const savedContent = sessionStorage.getItem('todoList');
    if (savedContent) {
      document.getElementById('editableArea').innerText = savedContent;
    }

    // Add an event listener to save content on input change
    const editableArea = document.getElementById('editableArea');
    const handleInput = () => {
      const content = editableArea.innerText;
      sessionStorage.setItem('todoList', content);
    };

    editableArea.addEventListener('input', handleInput);

    // Clean up the event listener on component unmount
    return () => {
      editableArea.removeEventListener('input', handleInput);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
  
  return (
    <div contentEditable={true} className="todo-list" id="editableArea" spellCheck={false} placeholder="Type your todo list here...">
    </div>
  );
};
export default TodoList;