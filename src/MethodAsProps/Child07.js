import React, { Component } from "react";

export default class Child07 extends Component {
  render() {
    return <div>
        <button onClick={()=>this.props.greet('child')}>Click Me</button>
       
    </div>;
  }
}
