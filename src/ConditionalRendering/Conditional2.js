import React, { Component } from 'react'

export default class Conditional2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:true

      }
    }
    
  render() {
    return this.state.isLoggedin?<div>Welcome Home</div>:"It's Okey"
    
  }
}
