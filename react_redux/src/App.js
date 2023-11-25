import logo from './logo.svg';
import './App.css';

import React from 'react';

import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter"
import DeCreaseCounter from "./components/DeCreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"


function App() {
  return (
    <div className="App">
      <Counter/>
      <IncreaseCounter/>
      <DeCreaseCounter/>
      <IncreaseByTwoCounter/>
      
    </div>
  );
}

export default App;
