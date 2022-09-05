
// This is exmple of conditional Remdering

import React from "react";

class Ani9 extends React.Component{

    constructor(props){

        super(props)


         this.state={

            isLoggedin:true
         }
        
    }

    render(){

        if(this.state.isLoggedin)
        {
            return(
                <div>Welcome Anideep</div>
            )

        }
        else{
            return(

                <div>Welcome Guists</div>
            )

           
        }

//         return(


//            <div>

            
// <div> Welcome Anideep </div>

// <div> Welcome Guists </div>

//            </div>

           
//         )
    }
}

export default Ani9