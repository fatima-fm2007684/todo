import React, { useEffect, useState } from 'react'
import { TaskForm } from './TaskForm'
import { TaskBlock } from './TaskBlock'


export const ProjectBlock = ({ id, projectName, isCompleted, deleteProject, switchProjectCompleted, projectCompleted }) => {
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
        if (tasks.length == 0) return
        const incompleteTasks = tasks.filter((task) => task.isCompleted == false)
        if (incompleteTasks.length == 0) {
            switchProjectCompleted(id, true)
        }
        else {
            switchProjectCompleted(id, false)

        }

    }, [tasks])



    return (
        <div className='ProjectBlock'>

            <div className='projectHeader'>
                <h2 className={isCompleted ? "completed" : ""}>{projectName}</h2>
                <div className='actionButtons'>
                    {isCompleted ? (
                        // Checkbox Checkbox Icon
                        <svg onClick={() => { switchProjectCompleted(id, !isCompleted); switchAllTasksCompleted() }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11l2 3l8 -10" transform="translate(0, 1)" />
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                        </svg>
                    ) :
                        // Unchecked Checkbox Icon
                        (<svg onClick={() => { switchProjectCompleted(id, !isCompleted); switchAllTasksCompleted() }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                        </svg>)}
                    {/* // Trash Icon SVG */}
                    <svg onClick={() => deleteProject(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>


                </div>
            </div>

            <TaskForm addTask={addTask} />
            <ul>
                {tasks.map((e, index) => <TaskBlock key={index} taskName={e.taskName} isCompleted={e.isCompleted} id={e.id}
                    switchTaskCompleted={switchTaskCompleted} deleteTask={deleteTask} />)}
            </ul>
        </div>
    )
}
