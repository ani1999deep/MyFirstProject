import React, { useEffect, useState } from 'react'


const UseEffect=()=> {


    // Usestate is Re-rendered
    const[count,setCount]=useState(0);
 
    // When 1st time the page is load the useEffect is alaways run
    useEffect(()=>{

        document.title=`Chats(${count})`;
    })

    console.log("Hello Outside");
  return (
    <div>
      <h1> {count}</h1>

      <button className='btn' onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffect
