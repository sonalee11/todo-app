import { useState } from 'react';
import './App.css';

function App() {
  const [inputVal, setinputVal] = useState("");
  const [todos, settodos] = useState([]);

  const writeTodo = (e) => {
    setinputVal(e.target.value);
  };

  const addTodo = () => {
    if (inputVal !== "") {
      settodos((prevTodos) => [...prevTodos, inputVal]);
      setinputVal("");
    }
  };

  const delTodo = (todoIndex) => {
    settodos((prevTodos) =>
      prevTodos.filter((prevTodo, prevTodoIndex) => {
        return prevTodoIndex !== todoIndex;
      })
    );
  };

  return (
    <main className='main'>
      <div className="main-container">
        <h1 id='h1'>Todo List app</h1>
        <div className='input-container'>
          <input
            id='input-todo'
            type="text"
            placeholder='Enter Task'
            onChange={writeTodo}
            value={inputVal}
          />
          <button onClick={addTodo} id='add-todo'>
            +
          </button>
          
        </div>
        <div className="container">
          {todos.map((todo, index) => (
            <div className="todo" key={index}>
              <p id='inptodo'>{todo}</p>
              <div className='actions'>
                <button id='delbtn' onClick={() => delTodo(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
