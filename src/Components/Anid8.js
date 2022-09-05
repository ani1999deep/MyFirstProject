import React, { Children, Component } from "react";
  
// This is the Child Component
 
function Anid8(props){

    return(

        <div>

       {/* <button onClick={props.aniHandler}>Ani Parent Component</button> */}


       {/* PASS TO A ARROW FUNCTION */}
       {/* When pass a parameter use arrow function */}
       <button onClick={()=>props.aniHandler('child')}>Ani Parent Component</button>
        </div>
    )
}

export default Anid8