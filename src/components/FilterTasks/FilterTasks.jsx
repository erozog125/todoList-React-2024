import React, { useContext } from 'react'
import './FilterTasks.css'
import { tasksContext } from '../Context/Context'

export const FilterTasks = () => {

  const context = useContext(tasksContext)

  const handleFilters = (event) => {
    let currentOption = event.target.value
    console.log(currentOption)
      let pending = context.tasks.filter( task => task.status === false )      
      let resolved = context.tasks.filter( task => task.status === true )
      if (currentOption === 'Pendientes') {
        context.setTasks('Pendientes: ',pending)
        console.log('Context: ',context.tasks)
        console.log(pending)
      } else {
        context.setTasks(resolved)
        console.log('Resueltas: ',resolved)
        console.log('Context: ',context.tasks)
      }                
  }

  return (
    <div className='container-filters'>
      <label>Filtrar por</label>
      <select onChange={handleFilters}>
        <option value="Todas" className=" opt opt1">Todas</option>
        <option value="Pendientes" className=" opt opt2">Pendientes</option>
        <option value="Realizadas" className=" opt opt3">Realizadas</option>
      </select>
    </div>
  )
}
