import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/app/features/counter/counterSlice';
import { getCountry } from './redux/app/features/country/countrySlice';



function App() {
  const dispatch = useDispatch();

  
  const {counter} = useSelector(state=>state.counter);
  console.log(useSelector(state => state));

  const {country} = useSelector(state=>state.country);
  console.log(country);


  useEffect(()=>{
    dispatch(getCountry)
  },[]);

  return (
    <div className="App">
      <span onClick={()=>dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={()=>dispatch(increment())}>+</span>
    </div>
  );
}

export default App;

