import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const About1 = () => {
  const [apio, setApio] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setApio(res.data);
        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>

<h4>Welcome to about page</h4>
      <h1 style={{ color: "green" }}>{apio.category}</h1>
      <br></br>
      <h1>{apio.description}</h1>
     
    </>
  );
};

export default About1;
