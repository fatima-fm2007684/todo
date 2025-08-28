import React, { useState } from 'react'

export const ProjectForm = ({ addProject }) => {

  const [projectName, setProjectName] = useState('')
  const handleSubmit = (e, projectName) => {
    e.preventDefault()
    if (projectName.trim() == '') return //dont add project if empty
    addProject({ projectName: projectName, isCompleted: false })
    setProjectName('')
  }
  return (
    <div className='ProjectForm'>
      <form onSubmit={e => handleSubmit(e, projectName)} >
        <input type="text" placeholder='Enter project name' value={projectName} onChange={(e) => {
          setProjectName(e.target.value);
        }} />
        <input type="submit" value="Add Project" ></input>
      </form>
    </div>
  )
}
