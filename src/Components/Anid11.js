// Turneary apporach of conditional rendering

import React from 'react'

 class Anid11 extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
        isLoggedin:false
      }
    }
    
  render() {
    return (

        this.state.isLoggedin?
      <div>
        <div></div>welcome Anideep</div>:(<div>Welcome Boss</div>)
    )
      
  }
}

export default Anid11