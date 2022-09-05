import React from "react";

import './Mystyle.css'

const Stylesheets=(props)=>{

    // We use conditional operator based on props and state
    let className=props.primary? 'primary':' '

    return(
   
        <div>

            {/* When we apply the both the class for style */}
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}
export default Stylesheets