
import React, { useEffect, useState } from 'react'
function PostMethod() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [id,setId]=useState("");
function saveData()
{
  let data={name,email,id}
// console.warn(data);
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="id"  value={id} onChange={(e)=>{setId(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default PostMethod;