import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Contact1 = () => {
  const [apio, setApio] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setApio(res.data);
        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();

  const clickMe = () => {
    navigate("/About1");
  };

  const getId = (id) => {
    navigate(`Details/${id}`);
  };

  return (
    <>
      <h1 style={{ color: "green" }}>This is a Contact Page.</h1>

      <button onClick={clickMe}>Click me</button>
      {apio.map((_a) => {
        return <h4 onClick={() => getId(_a.id)}>{_a.title}</h4>;
      })}
    </>
  );
};

export default Contact1;
