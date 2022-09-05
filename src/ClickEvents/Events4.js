// Arrow Function: Sending the event object manually:

import React from "react";

const Events4 = () => {
  const shoot = (a, b) => {
    alert(b.type);


    console.log(b.type);
    console.log(a);
    /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
};

export default Events4;
