import React from "react";
class Anideep4 extends React.Component{
      constructor(props){

            super()


            this.state={ok:'i am here'}

            this.updatedState=this.updatedState.bind(this)
      }
      updateState(){ 
            // Changing state 
            this.setState({hey : 
                         'to solve the problem!!'}) 
          } 


      render(){

            return(

                  <div>

                        <p>{this.state.ok}</p>

                        <button onClick={this.updatedState}>Click Me</button>
                  </div>
            )
      }
}
export default Anideep4