import React from "react";

class Counter1 extends React.Component{

    constructor(props){

        super(props)

        this.state={

            count1:0
        }
    }
    
    increment(){

        // this.state.count1=this.state.count1+1

        // this.setState({

        //   count1:this.state.count1+1
        // },()=>{console.log('Callback Value', this.state.count1)})


        this.setState((prevState)=>({

            count1:prevState.count1+1


        }))
        console.log(this.state.count1)
    }

    incrementFive(){

        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){

        return(

            <div>
               <b>Counter is-{this.state.count1}</b> 
                <br></br>
                <br></br>
                <button onClick={()=>this.incrementFive()}><b>Click Here</b></button>
            </div>
        )
    }
}

export default Counter1