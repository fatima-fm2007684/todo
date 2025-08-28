import React from 'react'

export const TaskBlock = ({ taskName, isCompleted, id, switchTaskCompleted, deleteTask }) => {
  return (
    <li className='TaskBlock'>
      <span className={isCompleted?"completed":""}>{taskName}</span>
      <div className='actionButtons'>
        {isCompleted ? (
          // Checkbox Checkbox Icon
          <svg onClick={() => switchTaskCompleted(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11l2 3l8 -10" transform="translate(0, 1)" />
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          </svg>
        ) :
          // Unchecked Checkbox Icon
          (<svg onClick={() => switchTaskCompleted(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          </svg>)}
        {/* // Trash Icon SVG */}
        <svg onClick={() => deleteTask(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
      </div>
    </li>
  )
}
