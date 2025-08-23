import React, { useState } from 'react'

export const ProjectForm = ({ addProject }) => {

  const [projectName, setProjectName] = useState('')
  const handleSubmit = (e, projectName) => {
    e.preventDefault()
    addProject({ projectName: projectName, isCompleted: false })
    console.log(`submitted ${projectName}`);

  }
  return (
    <div className='ProjectForm'>
      <form onSubmit={e => handleSubmit(e, projectName)} >
        <input type="text" placeholder='Project Title' value={projectName} onChange={(e) => {
          setProjectName(e.target.value); console.log(e.target.value);

        }} />
        <input type="submit" value="+" ></input>
      </form>
    </div>
  )
}
