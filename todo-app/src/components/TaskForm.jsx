import React, { useState } from 'react'

export const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('')
    const handleSubmit = (e, taskName) => {
        e.preventDefault()
        addTask({taskName:taskName, isCompleted:false})
        setTaskName('')
    }
    return (
        <div className='TaskForm'>
            <form onSubmit={e => handleSubmit(e, taskName)} >
                <input type="text" placeholder='Task Title' value={taskName} onChange={(e) => {
                    setTaskName(e.target.value);
                }} />
                <input type="submit" value="+" ></input>
            </form>
        </div>
    )
}
