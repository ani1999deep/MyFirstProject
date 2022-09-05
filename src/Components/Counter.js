import React from 'react'

class Counter extends React.Component
 {

     constructor(props){

        super(props)

        this.state={
            count:0
        }
     }

     increment(){
// This is the curent state

        // this.setState({
           
        //     count:this.state.count+1
        // },()=>{

        //     console.log('Callback value',this.state.count)
        // })

        this.setState((prevState)=>({

            count:prevState.count+1
        }))

       console.log(this.state.count)
     }

     incrementFive(){

       this.increment()
       this.increment()
       this.increment()
       this.increment()
       this.increment()

     }
  render() {
    return (


      <div>
         Count-{this.state.count}

         <br></br>
         <br></br>
         
         <button onClick={()=>this.incrementFive()}>Increment</button>

         </div>
      
    )
  }
}

export default Counter
