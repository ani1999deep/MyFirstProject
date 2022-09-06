import React, { Component } from 'react'

export default class Conditional1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:true
      }
    }
    
  render() {
    if(this.state.isLoggedin){
return <div>Welcome</div>
    }
    else{
        return <div>Okey</div>
    }
   
  }
}
