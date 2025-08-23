import React from 'react'

export const ProjectBlock = ({ id, projectName, isCompleted, deleteProject, changeCompleted }) => {
    return (
        <div className='ProjectBlock'>
            {projectName}
            <button className='isCompleted' onClick={() => changeCompleted(id)}>{isCompleted ? 'Yes' : 'No'}</button>
            <button className='delete' onClick={() => deleteProject(id)}>delete</button>

        </div>
    )
}
