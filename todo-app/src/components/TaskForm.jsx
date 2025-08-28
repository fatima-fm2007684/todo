import React, { useState } from 'react'

export const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('')
    const handleSubmit = (e, taskName) => {
        e.preventDefault()
        if (taskName.trim() == '') return //dont add task if empty
        addTask({ taskName: taskName, isCompleted: false })
        setTaskName('')
    }
    return (
        <div className='TaskForm'>
            <form onSubmit={e => handleSubmit(e, taskName)} >
                <input type="submit" value="+" ></input>
                <input type="text" placeholder='Add task' value={taskName} onChange={(e) => {
                    setTaskName(e.target.value);
                }} />
            </form>
        </div>
    )
}
