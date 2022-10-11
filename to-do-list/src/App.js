import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import './App.css';
// import './Todos'
// import './TodoInput'

const Todos = () =>{
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  })
  if(!todos || !todos.length){
    return <p>NO TODOS</p>
  }
  return (
    <ul>
      {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
    </ul>
  )
};

const TodoInput = () =>{
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = event => setNewTodo(event.target.value);
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random() * 100),
    }
  })

  return(
    <>
    <input value={newTodo} placeholder='Enter Todo list...' onChange={handleChange} type="text" />
    <button onClick={handleClick}> ADD TODO </button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;
