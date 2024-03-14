import React from 'react'
import './ItemTask.css'

export const ItemTask = ({titleTask = 'Título de prueba: ',content = 'tarea de prueba'}) => {
  return (
    <li className='item-task'>
      <div className="circle-state"></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input type="checkbox" name="" id="" />
    </li>
  )
}
