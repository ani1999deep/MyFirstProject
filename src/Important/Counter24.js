import React,{useState} from "react";


const Counter24=()=>{

const[count,setCount]=useState(0);

    return(

        <div>
<h1>Counter count is :{count}</h1>
<button onClick={()=>setCount(count+100)}>Increment</button>
<br></br>
<br></br>
<button  onClick={()=>setCount(count-100)}>Decrement</button>
<br></br>
<br></br>
<button onClick={()=>setCount(0)}>Reset</button>

        </div>
    )
}

export default Counter24