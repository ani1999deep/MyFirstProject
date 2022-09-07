import React from "react";
import { Link } from "react-router-dom";

const LinkMe = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to='/page'>Page</Link>
        </li>
      </ul>
    </>
  );
};

export default LinkMe;
