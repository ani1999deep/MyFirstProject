import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import  './ani.css'

const Product=()=> {
    const[product,setProduct]=useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProduct(res.data)
            console.log(res.data)
        })

        .catch((err)=>{

            console.log('The Error'+err)
        })
    },[])


    const navigate=useNavigate();

    const clickMe=()=>{

        navigate("/ProductDetails");
    }

    const getId=(id)=>{
navigate(`/Details/${id}`)
    }
  return (
    <div className='ani'>
      <h1 style={{color:"green"}}>This is Product Page</h1>
      {
        product.map((pro)=>{
            return (
           
                <Card style={{ width: '75rem' }} >
                  <Card.Img variant="top" src={pro.image} onClick={()=>getId(pro.id)}/>
                  <Card.Body>
                    <Card.Title onClick={()=>getId(pro.id)}>{pro.title}</Card.Title>
                    <Card.Text onClick={()=>getId(pro.id)}>
                    {pro.category}
                    </Card.Text>
                    <Button variant="primary" onClick={clickMe} >Click Here</Button>
                  </Card.Body>
                </Card>
               
              );
        })
      }

    </div>
  )
}

export default Product
