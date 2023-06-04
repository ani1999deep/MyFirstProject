// Either something or nothing,Ckt operator of Conditional Rendering

import React from 'react'

class Ani12 extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedin:true
      }
    }
    
  render() {
    return (
this.state.isLoggedin && <div>Welcome ANIDEEP</div>
    )
  }
}

export default Ani12


