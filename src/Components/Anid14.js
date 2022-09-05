// This is list Rendering

import React from "react";
import Ani15 from "./Ani15";
import Anid16 from "./Anid16";

const Anid14=()=>{

    const names=["Ani","Dani","Ivan","Ani"]
  
const persons=[
    {
 id:1,
 name:'Ani',
 age:20,
 skill:"C programming"
},
{

    id:2,
    name:'Dani',
    age:30,
    skill:"C++ programming"   
},{

    id:3,
    name:'Ivan',
    age:40,
    skill:"Javascript"
}
   ]

//    const personList=persons.map(person=><Ani15 key={person.id} person={person}/>)
   const personList=names.map((name,index)=><h2 key={index}>{index}{name}</h2> )
   
    return <div>{personList}</div>
    
    
        
    
    
}

export default Anid14