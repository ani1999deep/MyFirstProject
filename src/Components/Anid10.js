// Another Apporach of Conditional Rendering

import React from 'react'

 class Anid10 extends React.Component {


    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedin:false
        }
      }
      
  render() {

    let messege
    if(this.state.isLoggedin){

        messege= <div>Welcome here</div>
    }
    else
    {
        messege=<div>Welcome Anideep</div>
    }

    
    return (
      <div>
        {messege}
      </div>
    )
  }
}

export default  Anid10
