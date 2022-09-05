import React from 'react'

const Events3=()=> {

    const septem=(a)=>{

        alert(a)
        console.log(a)
    }
  return (
    <div>
      
<h3>To pass an argument to an event handler, use an arrow function.</h3>
<br></br>
<button onClick={()=>septem('Hoyeache haga')}>Click Here</button>


    </div>
  )
}

export default Events3
