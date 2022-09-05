import React from "react";

const Jsx=()=>{

{/* <div id="name" className="dummyClass">

return <h1>It is a Jsx File</h1>

</div> */}
    

return React.createElement('div',{id:"name", className:"dummyClass"},React.createElement('h1',null,'Without jsx'))
}

export default Jsx