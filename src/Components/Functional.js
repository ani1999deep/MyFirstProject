import React, { useEffect, useState } from "react";

import axios from 'axios';


export const Functional=()=>{


const [number1,setNumber1]=useState(0)


const [number2,setNumber2]=useState(0)


const [sum,setSum]=useState(5)

const [products,setProducts]=useState([])


useEffect(()=>{

    axios.get('https://fakestoreapi.com/products')

    .then((response)=>{
      
        console.log(response.data)
        
        setProducts(response.data)
        
    })
    .catch((error)=>{

        console.log(error)

        
    })



    console.log("Haga");
},[])





const getSum=()=>{



    setNumber1(4)

    setNumber2(8)

    setSum(number1+number2)
}
    return <div>

        <button onClick={getSum}>Get the sum</button>

         {products.map((_ani)=>{

          return <h1>{_ani.title}</h1>

         })}

        <h1>{sum}</h1>
    </div>

}


 