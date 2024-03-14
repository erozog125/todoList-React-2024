import React from 'react'
import './FilterTasks.css'

export const FilterTasks = () => {
  return (
    <div className='container-filters'>
      <label htmlFor="">Filtrar por</label>
      <select name="" id="">
        <option value="Todas" className=" opt opt1">Todas</option>
        <option value="Pendientes" className=" opt opt2">Pendientes</option>
        <option value="Realizadas" className=" opt opt3">Realizadas</option>
      </select>
    </div>
  )
}
