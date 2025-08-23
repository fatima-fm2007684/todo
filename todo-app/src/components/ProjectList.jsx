import React, { useState } from 'react'
import { ProjectForm } from './ProjectForm'

export const ProjectList = () => {
    const [ projects, setProjects ] = useState([])
    const addProject = ({ projectName, isCompleted }) => {
        setProjects(prevProjects => [...prevProjects, { projectName, isCompleted }])
    }
    return (
        <div className='ProjectList'>
            <ProjectForm addProject={addProject} />
            {projects.map((e, index) => (
                <div key={index}>{e.projectName}</div>
            ))}
        </div>
    )
}
