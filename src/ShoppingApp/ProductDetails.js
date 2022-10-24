import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails=()=> {

const[productDetails,setProductDetails]=useState([])

const{id}=useParams
useEffect(()=>{

    axios(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{

        console.log(res.data);
        
        setProductDetails(res.data)
    })

    .catch((err)=>{

        console(err)
    })
},[])
  return (
    <>
      <h3>This is Product Details Page</h3>
      <h2>{productDetails.description}</h2>
      <br></br>
      <h2>{productDetails.category}</h2>
    </>
  )
}

export default ProductDetails
