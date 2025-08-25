import React, { useEffect, useState } from 'react'
import { TaskForm } from './TaskForm'
import { TaskBlock } from './TaskBlock'

export const ProjectBlock = ({ id, projectName, isCompleted, deleteProject, switchProjectCompleted }) => {
    const [tasks, setTasks] = useState([])
    const addTask = ({ taskName, isCompleted }) => {
        setTasks(prevTasks => [...prevTasks, { taskName, isCompleted, id: Date.now() }])
    }
    const switchTaskCompleted = (id) => {
        setTasks(prevTasks => prevTasks.map(task => (task.id == id ? { ...task, isCompleted: !task.isCompleted } : task)))
    }
    const switchAllTasksCompleted = () => {
        const NewStatus = !isCompleted
        setTasks(prevTasks => prevTasks.map(task => ({ ...task, isCompleted: NewStatus })))
    }
    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(e => e.id != id))
    }
    useEffect(() => {
        console.log(`new ${JSON.stringify(tasks)}`);
    }, [tasks])

    return (
        <div className='ProjectBlock'>
            {projectName}
            <button className='isCompleted' onClick={() => { switchProjectCompleted(id); switchAllTasksCompleted() }}>{isCompleted ? 'Yes' : 'No'}</button>
            <button className='delete' onClick={() => deleteProject(id)}>delete</button>
            <TaskForm addTask={addTask} />
            {tasks.map((e, index) => <TaskBlock key={index} taskName={e.taskName} isCompleted={e.isCompleted} id={e.id}
                switchTaskCompleted={switchTaskCompleted} deleteTask={deleteTask} />)}
        </div>
    )
}
