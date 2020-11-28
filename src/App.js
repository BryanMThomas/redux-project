import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/index'

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state =>{
    return state.counter
  })
  const isLogged = useSelector(state =>{
    return state.isLogged
  })
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick = {()=> dispatch(increment())}>+</button>
      <button onClick = {()=> dispatch(decrement())}>-</button>
      {isLogged ?<h3>Shouldnt See Info</h3>:''}
    </div>
  );
}

export default App;
