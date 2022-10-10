import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Actions/counter';
import { State } from './Actions/signin';


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const inc = () => {
    dispatch(increment())
  }
  const dec = () =>{
    dispatch(decrement())
  }

  const signin = useSelector((state) => state.signin)
  const dispat = useDispatch()

  const changeval = () =>{
    dispat(State())
  }


  return(
    <div>
      <h1>Redux Couter App</h1>
      <h2>counter: {counter} </h2>
      <button onClick = {inc}>Increment</button>
      <button onClick = {dec}>Decrement</button>
      <h2>{signin}</h2>
      <button onClick = {changeval} >Sign-In</button>
    </div>
  );
}
export default App;
