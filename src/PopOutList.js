import React, { useState } from 'react';
import todoicon from './assets/todo-icon.svg';

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.todoInput.value;
    setTodoItems([...todoItems, newTodo]);
    event.target.reset();
  };

  return (
    <div>
      {/* <img src={todoicon} className="todo-btn" alt="todo icon" onClick={toggleList}/> */}
      {/* <img src={todoicon} className="todo-btn" alt="todo icon" onClick={toggleList} /> */}
      {showList && (
        <div className="todo-list">
          <h2>To-Do List</h2>
          <ul>
            {todoItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <form onSubmit={handleAddTodo}>
            <input type="text" name="todoInput" placeholder="Add new item" />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TodoList;
