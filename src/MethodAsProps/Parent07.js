import React, { Component } from "react";
import Child07 from "./Child07";

export default class Parent07 extends Component {
greet(childName){

    alert(`Welcome to Method As Props ${childName}`)
}
  render() {
    return <div>
        <Child07 greet={this.greet}/>
      
    </div>;
  }
}
