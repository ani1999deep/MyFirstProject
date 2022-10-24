import React from "react";

const Events1=()=>{

    const Anideep=()=>{

        console.log('abar hoyeache');
        alert('abar hoyeache');
    }
    return(

        <div>
<h1>This is a another events</h1>
<br></br>
<button onClick={()=>Anideep()}>Click</button>

        </div>
    )
}

export default Events1