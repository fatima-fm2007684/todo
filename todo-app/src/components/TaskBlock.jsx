import React from 'react'

export const TaskBlock = ({ taskName, isCompleted, id, switchTaskCompleted, deleteTask }) => {
  return (
    <div className='TaskBlock'>
      {taskName}
      <button className='isCompleted' onClick={() => switchTaskCompleted(id)}>{isCompleted ? 'Yes' : 'No'}</button>
      <button className='delete' onClick={() => deleteTask(id)}>delete</button>

    </div>
  )
}
