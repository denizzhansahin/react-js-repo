import {useState,useEffect} from 'react';
import './App.css';




function App() {
  const [counter,setCounter] = useState(0);
  useEffect(()=>{
    alert("You've changed the counter to "+counter);
  },[counter]);
  return (
    <div className="App">
      <button onClick={()=>setCounter((prevCount)=> prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=> prevCount + 1)}>+</button>
    </div>
  );
}

export default App;

/*
useEffect

tek yüklemede,sayfa :
useEffect(()=>{
    alert('Reload')
  })

  bir değişkenin durumu,başlangıçta sayfa :
    useEffect(()=>{
    setCounter(100);
  },[]);
*/

/*usestate içindeki
import {useState} from 'react';
const [counter,setCounter] = useState(0);
<button onClick={()=>alert('clicked')}>-</button>


bir değişken için,değer değişimi
  useEffect(()=>{
    setCounter(100);
  },[counter]);
  useEffect(()=>{
    alert("You've changed the counter to "+counter);
  },[counter]);

*/


/*props*/
/*

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>Last Name :  {props.LastName}</h2>
      <h2>Age : {props.age}</h2>
    </>
  )
}
<Person name={'John'} LastName={'Doe'} age={25}/>

*/

/*Koşullar*/
/*

const name = null;
  const isNameShowing = false;

    <div className="App">
      <h1>Hello, {name}!</h1>
      <h1>Hello {isNameShowing ? name : "someone"}</h1>
      {
        name ? (
          <>
            <h1>{name}</h1>
          </>
        ) : (
          <>
           <h1>test</h1>
           <h2>There is no name</h2>
          </>
          
        )
      }
    </div>

*/