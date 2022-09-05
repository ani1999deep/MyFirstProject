import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {

  const navigate=useNavigate()

  const Kireabar=()=>{

    navigate('/Contact')
  };
  return (
    <div>
      <h1>"People think focus means saying yes to the thing you've got to focus on. It means saying no to the hundred other good ideas that there are. You have to pick carefully."</h1>
      <br></br>
      <button onClick={Kireabar}>Abar tepo</button>
    </div>
  );
};

export default About;
