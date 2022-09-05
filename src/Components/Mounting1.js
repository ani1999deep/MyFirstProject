import React from "react";

class Mounting1 extends React.Component{
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
console.log('LifecycleB Mounting getDerivedStateFromProps')

    return null
}
//  4th Method
componentDidMount(){

    console.log('LifecycleB componentDidMount')
}
//  3rd method
    render(){

        return  <div>LifecycleB</div>

        console.log('LifecycleB render')
           

           
        
    }
}

export default Mounting1