import React from "react";

  const Greet = (props) => {
  // console.log(props)
  const { name, dept } = props;
  return (
    <div>
      <h1>
        My is {name},I am {dept} developer
      </h1>
    </div>
  );
};

export default Greet;
