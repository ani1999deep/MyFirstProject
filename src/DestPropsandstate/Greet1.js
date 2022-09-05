import React, { Component } from "react";

 class Greet1 extends Component {
  render() {
   
const{name,heroName}=this.props

    return (
      <div>
        <h1>
          I am {name},I am {heroName}
        </h1>
      </div>
    );
  }
}

export default Greet1
