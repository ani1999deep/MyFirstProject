import React, { useState } from "react";

import './calcu.css';

 const Principleinterestcalculator=()=>{

  const[p,setP]=useState(0);

  const[t,setT]=useState(0);

  const[r,setR]=useState(0);

  const[i,setI]=useState(0);

  const[a,setA]=useState(0);


 const calculateprincipleinterest=()=>{

  const result=(p*r*t)/100;

         setI(result);
  }
  const calculatetotal=()=>{

    const result1=p*(1+(t*r/100));
  
           setA(result1);
    }
  
  console.log(p,t,r);

    return(
     <div className="cal">
   
   <h1 id="av">Principle</h1>
   <h1>Interest</h1>
   <h1 id="ax">Calculator</h1>
   

     <div className="ac"> P : <input type='number' onChange={e=>{setP(e.target.value);} }/> </div>

     <br></br>

     <div className="ac"> T : <input type='number' onChange={e=>{setT(e.target.value);}}/> </div>

     <br></br>

     <div className="ac"> R : <input type='number' onChange={e=>{setR(e.target.value);}}/> </div>

     <br></br>

     <div>Simple Interest(S.I):<h1>{i}</h1></div>

     <button onClick={calculateprincipleinterest} className='ab'>Calculate Of Interest  Button</button>

     <div>Total Ammount:<h1>{a}</h1></div>
     
<button onClick={calculatetotal} className='ab' >Calculate Of Ammount Button</button>

     </div>
    )
 }

 export default Principleinterestcalculator