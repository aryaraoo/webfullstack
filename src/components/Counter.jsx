
import React,{ useState } from "react";

function Counter() {
    
    const [count, setCount] = useState(0);
    const limit = 10;
    const increment = () =>
        {if(count < limit) {setCount(count + 1);}}
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
   
    console.log(count)
    return (
      <>
        <div className="welcome-card">
         <h2>Counter</h2> 
         <p>Current Count : {count}
         <br />
          U can Only Increment upto : {limit}</p>
         <button className="counter-button" 
         onClick={decrement}>
            -
         </button>
         <button className="counter-button" 
         onClick={increment} >
            +
         </button>
         <button className="counter-button" onClick={reset}>
            Reset
         </button>
         
        </div>
      </>
    )
  }

  export default Counter