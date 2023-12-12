import React, {useEffect, useState} from "react";

const FunctionComponenet = () => {
    const [counter, setCounter] = useState(0);
    const [counter2,setCounter2] = useState(0);
    //birden fazla state eklenebilir
    //const [isVisible,setIsVisible] = useState(false);
    
    console.log(counter);

    const increase = () => {
        setCounter(counter+1);
    }

    //hem yüklendiğinde hem update için çalıştı.
    /*
    useEffect(()=>{
        console.log("useEffect");
    })
    */

    //bir kez yüklendiğinde
    useEffect(()=>{
        console.log("useEffect");
    },[]);

    //her yüklendiğinde
    useEffect(()=>{
        console.log("useEffect");
    },[counter,counter2]);


    return (
        <div className="box">
            <h2>Function Component</h2>
            <p>{counter}</p>
            <button onClick={()=>increase()}>increase</button>
            <button onClick={()=>setCounter2(counter2+1)}>increase2</button>
        </div>
    )
}

export default FunctionComponenet;