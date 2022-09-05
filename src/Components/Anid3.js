import React from "react";

class Anid3 extends React.Component{

    render(){
        const{name,heroName}=this.props

//    Same here for state also

        const {state1,state2}=this.state

        return(

            <div>

                <h1>
                    Welcome! {name} is a {heroName}
                </h1>
            </div>
        )
    }
}

export default Anid3 