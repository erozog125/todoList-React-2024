import React, { useState, useRef } from 'react'
import { Task } from '../Task/Task'
let counter = 0

export const NewTask = () => {

  const myReference = useRef('')
  const [tasks, setTasks] = useState([])

  const handleSetTasks = () => {
    counter++
    let newTask = {
      idTask: counter,
      titleTask: myReference.current.value
    }
    // spread operator
    setTasks([...tasks,newTask])        
  }

  return (
    <>
    <div className="container-new-tasks">
      <input ref={myReference} placeholder='Ingresa la tarea' className='txt-task' type="text" />
      <button onClick={handleSetTasks}>Crear Tarea</button>
    </div>
    <hr /> 
    <ul>
      {
        tasks.map( task => <Task key={task.idTask} content={task.titleTask} /> )
      }
    </ul>   
    </>
  )
}
