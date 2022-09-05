import React ,{Components} from "react";



class Messege extends Components {
    
    constructor(){

        super()

        this.state={

            messege:'Welcome visitors'
        }
    }

    render()
    {
        return(
<div>

<h1>{this.state.messege}</h1>
<button>Subscribe</button>
</div>
            
        );
    }
}
export default Messege