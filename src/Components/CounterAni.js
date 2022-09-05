import React, { Component } from 'react'

export default class CounterAni extends Component {
   
    
      state = {
         name:'Patla Haga',
         age:'18'
      }
      okBaba=(name)=>{

        this.setState({name:name} )

           
        
      }
    }

   
    
  render() 
    return (
      <div>
        <h1>{this.props.state}</h1>
        <button onClick={this.okBaba.bind(this,"Sokto Haga")}>Jore</button>
      </div>
    )
    

