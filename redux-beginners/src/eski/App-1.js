import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Home from './pages/Home';

function App() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter-1)
  }

  const increment = () => {
    setCounter(counter+1)
  }

  return (
    <div className="App">
      <span onClick={decrement}>-</span>
      <span>{counter}</span>
      <Home counter={counter}/>
      <span onClick={increment}>+</span>
    </div>
  );
}

export default App;

//<Home counter={counter}/>