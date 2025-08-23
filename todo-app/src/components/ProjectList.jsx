import React, { useEffect, useState } from 'react'
import { ProjectForm } from './ProjectForm'
import { ProjectBlock } from './ProjectBlock'
export const ProjectList = () => {
    const [projects, setProjects] = useState([])
    const addProject = ({ projectName, isCompleted }) => {
        setProjects(prevProjects => [...prevProjects, { projectName, isCompleted, id: Date.now() }])
    }
    const changeCompleted = (id) => {
        setProjects(
            prevProjects => (prevProjects.map(project =>
                project.id == id ? { ...project, isCompleted: !project.isCompleted } : project
            ))
        )

    }
    useEffect(() => {
        console.log(JSON.stringify(projects));
    }, [projects])

    const deleteProject = (id) => {
        console.log(`before ${JSON.stringify(projects)},${id}`);
        setProjects(prevProjects => prevProjects.filter((e) => e.id != id))
        console.log(`after ${JSON.stringify(projects)}`);
        // does above need to be async?
    }
    return (
        <div className='ProjectList'>
            <ProjectForm addProject={addProject} />
            {projects.map((e, index) => {
                return (
                    <ProjectBlock
                        key={index} projectName={e.projectName}
                        deleteProject={deleteProject} isCompleted={e.isCompleted} id={e.id} changeCompleted={changeCompleted} />
                )
            })}
        </div>
    )
}
