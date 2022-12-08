import { useState } from 'react';
import Do from './components/Do';
import './App.css';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState(() => {
    const initialState = localStorage.getItem('todo');
    return initialState ? JSON.parse(initialState) : []
  });

  function handleAddToDo(ev) {
    const newTodoList = [...toDos, toDo];
    setToDos(newTodoList);
    setToDo('');

    const jsonTodos = JSON.stringify(newTodoList);
    localStorage.setItem('todo', jsonTodos)
  }

  function handleDeleteTodo(toDoIdx) {
    const leftToDo = toDos.filter((toDo, idx) => idx !== toDoIdx);
    setToDos(leftToDo);
    const jsonTodos = JSON.stringify(leftToDo);
    localStorage.setItem('todo', jsonTodos)
  }

  function handleChange(ev) {
    setToDo(ev.target.value)
  }

  function createListOfToDo(toDo, idx) {
    return toDos.map(
      (toDo, idx) => <Do key={idx} toDo={toDo} handleClick={() => handleDeleteTodo(idx)} />
      )
  }

  return (
    <div className="App">
      <p>
        To do Journal
      </p>
      <ul 
        id='to-do-list'>
          { createListOfToDo() }
      </ul>
      <input 
        type='text'
        id='new-to-do'
        name='to-do'
        value={toDo}
        onChange={handleChange}
        />
        <button 
          id='add-to-do'
          onClick={handleAddToDo}>
            Add
        </button>
    </div>
  );
}

export default App;
