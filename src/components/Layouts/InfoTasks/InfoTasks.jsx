import React, { useContext, useEffect, useState }  from 'react'
import './infoTasks.css'
import { tasksContext } from "../../Context/Context";
export const InfoTasks = () => {

  const context = useContext(tasksContext)     
   
  return(
    <>
    <h2 className='info-tasks'>usted tiene <span className='task-pending'>{context.pendingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas</h2>
    <hr />    
    </>
  )
} 
