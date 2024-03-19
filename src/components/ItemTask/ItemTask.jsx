import React, { useState } from 'react'
import './ItemTask.css'

export const ItemTask = ({titleTask,content}) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => setIsChecked(!isChecked)

  return (
    <li className={ isChecked ? 'item-task checked': 'item-task' }>
      <div className={ isChecked ? 'circle-state circle-green': 'circle-state' }></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </li>
  )
}
