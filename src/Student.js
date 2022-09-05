import React from "react";
 
class Student extends React.Component{


    constructor(props){

        super(props);

      this.state={

 name:"Hansome Anideep",

 roll:"105"
        }
    };
handleClick=()=>{

    this.setState({

        name:" Sexy Ivan",
        roll:"150"
    });
}

 render(){

    return(

        <div>

            <h1>Hello!I am here to solve a problem</h1>

            <h1>{this.state.name} your roll number is {this.state.roll}</h1>

            <button onClick={this.handleClick}>Click me</button>


        </div>
    )
 }
}

export default Student
