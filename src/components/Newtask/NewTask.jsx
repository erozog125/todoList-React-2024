import React from 'react'
import './NewTask.css'

export const NewTask = () => {
  return (
    <form className='frm-task' action="">
      <fieldset className='group-title-task'>
        <label htmlFor="">Título de la tarea</label>
        <input placeholder='Ej:Aseo ambiente' type="text" />
      </fieldset>
      <fieldset className='group-description-task'>
        <label htmlFor="">Descripción de la tarea</label>
        <input placeholder='Ej: Realizar aseo del ambiente' type="text" maxLength={100} />
      </fieldset>
      <button className='btn-new-task'>Crear nueva Tarea</button>
    </form>
  )
}
