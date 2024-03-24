import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const tasksContext = createContext();

const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente1',status: false },          
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente2',status: true },          
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente3',status: false }          
]

export const TasksProvider = ({ children }) => {
  
  const [tasks, setTasks] = useState(tsk)
  const [pendingTasks, setPendingTasks] = useState(0)
  const [doneTasks, setDoneTasks] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  
  return (
    <tasksContext.Provider value={{ 
      tasks,
      setTasks,
      pendingTasks,
      setPendingTasks,
      doneTasks,
      setDoneTasks,
      isChecked,
      setIsChecked
      }}>
      {children}
    </tasksContext.Provider>
  );
};
