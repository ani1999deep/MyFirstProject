import React from "react";
import Mounting1 from "./Mounting1";

class Mounting extends React.Component{
//  1st method:Constructor Parameters,super to use
    constructor(props){

        super(props)

        this.state={

            name:'Anideep'
        }
        
        console.log('Mounting constructors')
    }
// 2nd static method

static getDerivedStateFromProps(props,state){
console.log('LifecycleA Mounting getDerivedStateFromProps')

    return null
}
//  4th Method
componentDidMount(){

    console.log('LifecycleA componentDidMount')
}
//  3rd method
    render(){

        return  (
            
            <div>
            <div>LifecycleA</div>
              <Mounting1/>
              </div>
             
             )
       

        console.log('LifecycleA render')
           

           
        
    }
}

export default Mounting