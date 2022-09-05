import React from "react";

const Props=(props)=>{

console.log(props)
return (
    <div>
        <h1>Hi! {props.name} is a {props.heroName}</h1>

        {props.children}
    </div>
)

}


    

export default Props