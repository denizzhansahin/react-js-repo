import React from "react";

class ClassComponent extends React.Component {
    /*
    constructor() {
        super();
        this.state = {counter: 0}
        
    }
    */

    /*
    constructor(){
        super();
        this.increase = this.increase.bind(this);
    }
    */

    //burada sadece bir tane state vardır.

   state = {
    counter : 0,
    counter2 : 0,
    timer : 0 
    
   }

   /*

   //birkez çalışır
   componentDidMount(){
    console.log("componentDidmount");
   }
   */

   /*
   //her component yenilemede çalışır.
   componentDidUpdate(){
    console.log("component did update");
   }
   */

   /*
   componentDidUpdate(prev,prevState){
    if(prevState.counter!==this.state.counter){
        console.log("componenet did update calisti.")
    } else if(prevState.counter2!==this.state.counter2){
        console.log("componenet did update calisti.")
   }
   */


  
   componentDidMount(){
    this.myTimer = setInterval(()=>{
        this.setState({timer : this.state.timer + 1},1000);
    })
   }

   componentDidUpdate(){
    console.log("Timer : ".this.state.timer);
   }

    //component bittiğinde
    componentWillUnmount(){
    
    }

   increase(){
    this.state({counter : this.state.counter + 1})
   }

render(){
    console.log("Class components this state counter")
    return (
        <div className="box">
            <h2>Class Component</h2>
            <p>Counter : {this.state.counter}</p>
            <button onClick={()=> this.increase()}>increase</button>
        </div>
    );
}
}



export default ClassComponent;