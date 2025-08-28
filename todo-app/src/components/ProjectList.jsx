import React, { useEffect, useState } from 'react'
import { ProjectForm } from './ProjectForm'
import { ProjectBlock } from './ProjectBlock'
export const ProjectList = () => {
    const [projects, setProjects] = useState([])
    const addProject = ({ projectName, isCompleted }) => {
        setProjects(prevProjects => [...prevProjects, { projectName, isCompleted, id: Date.now() }])
    }
    const switchProjectCompleted = (id, status) => {
        setProjects(
            prevProjects => (prevProjects.map(project => (project.id == id ? { ...project, isCompleted: status } : project)))
        )
    }

    const deleteProject = (id) => {
        setProjects(prevProjects => prevProjects.filter((e) => e.id != id))
    }
    return (
        <div className='ProjectList'>
            <h1>Project Tracker</h1>
            <ProjectForm addProject={addProject} />
            {projects.map((e, index) => {
                return (
                    <ProjectBlock
                        key={index} projectName={e.projectName}
                        deleteProject={deleteProject} isCompleted={e.isCompleted} id={e.id} switchProjectCompleted={switchProjectCompleted} />
                )
            })}
        </div>
    )
}
