import React, { Component } from "react";

export default class EventBinding extends Component {
  state = {
    Haga: "Patla",
  };

  handle = (Haga1) => {
    this.setState({ Haga: Haga1 });
  };
  render() {
    return (
      <div>
        <h1>Okey  {this.state.Haga}</h1>

        <button onClick={this.handle.bind(this, "Jore haga")}>aro</button>
      </div>
    );
  }
}
