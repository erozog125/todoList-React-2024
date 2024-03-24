import React, { useContext, useState, useEffect } from 'react';
import { tasksContext } from '../Context/Context';
import './ItemTask.css';

export const ItemTask = ({ titleTask, content, idTask }) => {
  const context = useContext(tasksContext);  
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const updatedTasks = context.tasks.map(task => {
      console.log(task.status)
      if (task.id === idTask) {
        return { ...task, status: !isChecked };
      }
      return task;
    });
    context.setTasks(updatedTasks);
    // Actualizar las variables de tareas pendientes y resueltas
    const pendingTasks = updatedTasks.filter(task => !task.status).length;
    const doneTasks = updatedTasks.filter(task => task.status).length;    
    context.setPendingTasks(pendingTasks);
    context.setDoneTasks(doneTasks);
  };

  return (
    <li id={idTask} className={isChecked ? 'item-task checked' : 'item-task'}>
      <div className={ isChecked ? 'circle-state circle-green' : 'circle-state'}></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
    </li>
  );
};
