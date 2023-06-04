import React, { useState } from "react";
import "./postAxios.css";
import axios from 'axios'

const PostAxios = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const handleInput = (e) => {
    //update post,input and update to the value

    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //axios post method
    axios.post('https://jsonplaceholder.typicode.com/posts',{post, timeout:6000})
    .then(response=>console.log(response))
    .catch(error=>console.log(error))

    console.log(post)
  };
  return (
    <>
      <div>
        <form className="center" onSubmit={handleSubmit}>
          Title:
          <input onChange={handleInput} type="text" name="title" />
          Post:
          <input onChange={handleInput} type="text" name="body" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default PostAxios;
