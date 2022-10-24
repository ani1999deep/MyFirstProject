import React, { useState } from "react";

const Counter21=()=>{


const[count,setCount]=useState(0);
    return(
<div>
    
<p>Your Counter number is {count}</p>

<button onClick={()=>setCount(count+10)}>Increment Button</button>
<br></br>
<br></br>

<button onClick={()=>setCount(count-10)}>Decrement Button</button>
<br></br>
<br></br>

<button onClick={()=>setCount(0)}>Reset Button</button>
<br></br>
<br></br>


</div>

   )
}


export default Counter21