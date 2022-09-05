// Inline styles are not specified as astring instead they are specified  as an object

// Inline Component is a child component

import React from "react";

const heading={

    // it has to be camelCase
    fontSize:'72px',

    color:'blue'
}

const Inline=()=>{

    return(
        <div>
            
    
    {/* Apply style in the tag using style attribute */}
    <h1 style={heading}>Inline</h1>

    <h1 className='error'>Error</h1>
        </div>
    )
}

export default Inline