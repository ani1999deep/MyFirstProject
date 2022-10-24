import React, { useState } from 'react'
import Task from './Task'

const AppAni=()=> {
      const[taskName,setTaskName]=useState('')

      const[time,setTime]=useState('')

      const[taskList,setTaskList]=useState("")

      const addTask=()=>{

            setTaskList([...taskList,{task:taskName,time:time}])

            setTaskName('')

            setTime('')
      }
  return (
    <div>
      <h1>Todo List</h1>
      <label>Task Name:</label><br></br><br></br>

      <input type='text' id='task' onChange={(e)=>{setTaskName(e.target.value)}}/><br></br><br></br>

      <lable>Time:</lable><br></br><br></br>

      <input type='text' id='time' onChange={(e)=>{setTime(e.target.value)}}/><br></br><br></br>

      <button onClick={addTask}>Add</button>



      {taskList.map((task)=>{

    return <Task taskName={task.task} time={task.time}/>
      })}

    </div>
  )
}

export default AppAni
