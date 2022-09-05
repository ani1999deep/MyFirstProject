import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const kiGo = () => {
    navigate("/About");
  };

  return (
    <div>
      <h1>This is Contact</h1>
      <br></br>
      <h4>https://www.freecodecamp.org/news/react-router-tutorial/</h4>
      <br></br>
      <button onClick={kiGo}>Apake Tepo</button>
    </div>
  );
};

export default Contact;
