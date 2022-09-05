import React from 'react'

const Column=()=> {
  const items=[]
  return (
    // in this(<> </>) type you can not pass key attribute
    <>
      {/* {
        items.map(item=>( */}

          {/* // key attribute is only attribute that pass through a react component */}
          {/* <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>

            </React.Fragment>
        ))
      } */}
      <td>Name</td>
      <td>Anideep</td>
    </>
  )
}

export default Column
