import React from 'react';
import Anid8 from './Anid8';


// This is the Parent Component
 

class Anid7 extends React.Component{

    constructor(props){

        super(props)

        this.state={

            parentName:'Parent'
        }

        this.aniParent=this.aniParent.bind(this)
    }

    aniParent(childName){

        alert(`Hello ${this.state.parentName} from ${childName}` )
    }

    render(){

        return(

      <div>

<Anid8 aniHandler={this.aniParent}/>
      </div>
            

        )
    }
}

export default Anid7