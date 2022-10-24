import React from 'react'

const Task=({taskName,time})=> {
  return (
    <div>
      <h1>Task Name:{taskName}</h1>
      <h1>Time to Complete:{time}</h1>
    </div>
  )
}
export default Task
