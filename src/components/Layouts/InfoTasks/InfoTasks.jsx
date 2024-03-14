import React from 'react'
import './infoTasks.css'

export const InfoTasks = ({pendingTasks,doneTasks}) => {
  return(
    <>
    <h2 className='info-tasks'>usted tiene {pendingTasks} pendientes y {doneTasks}  terminadas</h2>
    <hr />    
    </>
  )
} 
