import React from "react";

class Anid6 extends React.Component{
 constructor(props){

    super(props)

    this.state={

        messege:"Hi! I am here"
    }
// This is  for 3rd apporach-
    // this.clickHandler=this.clickHandler.bind(this)
 }


//  clickHandler(){

//     this.setState({

//     messege:"Main chinu,ratoko ninde chinu"

//     })

//     console.log(this)
//  }


clickHandler=()=>{

    this.setState({

        messege:"Main chinu,ratoko ninde chinu"
    })
}
   
    render(){

        return(

            <div>
       
       <div>{this.state.messege}</div>

       {/* 1st apporch of bind handler- */}
         {/* <button onClick={this.clickHandler.bind(this)}>Click the Button</button> */}


         {/* 2nd apporch of bind handler- */}
         {/* you can also use arrow function */}

         {/* <button onClick={()=>this.clickHandler()}>Click the Button</button> */}

         {/* 3rd apporch of bind handler- */}
        <button onClick={this.clickHandler}>Click messege</button>

            </div>
        )
    }
}

export default Anid6