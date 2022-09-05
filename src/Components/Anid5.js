import React from "react";

class Anid5 extends React.Component{
    

  clickHandler(){

   console.log('Clicked the button')

  }

    render(){

        return(

            <div>

                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}


export default  Anid5