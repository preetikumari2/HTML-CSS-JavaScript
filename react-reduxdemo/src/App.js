import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Actions/counter';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const inc = () => {
    dispatch(increment())
  }
  const dec = () =>{
    dispatch(decrement())
  }

  return(
    <div>
      <h1>Reducx Couter App</h1>
      <h2>counter: {counter} </h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}
export default App;
