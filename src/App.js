
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import {actionCreators} from './action-creator'


function App() {
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()
  const {depositeMoney, withdrawMoney, resetValue} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <button onClick={depositeMoney(100)}>+</button>
     <h1>{account}</h1>
     <button onClick={withdrawMoney(100)}>-</button>
     <button onClick={resetValue(0)}>Reset</button>
    </div>
  );
}

export default App;
