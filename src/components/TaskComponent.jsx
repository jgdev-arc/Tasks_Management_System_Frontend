import React from 'react'
import { useState } from 'react'
import { saveTask } from '../services/TaskService'
import { useNavigate, useParams } from 'react-router-dom'

const TaskComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const saveOrUpdateTask = (e) => {
        e.preventDefault()

        const task = { title, description, completed }
        console.log(task)

        saveTask(task).then((res) => {
            console.log(res.data)
            navigate('/tasks')
        }).catch(err => {
            console.error(err)
        })
    }

    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center'>Update Task</h2>
        } else {
            return <h2 className='text-center'>Add Task</h2>
        }
    }

    return (
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Task Title:</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter task here'
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Task Description:</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter task description'
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Task Completed:</label>
                                <select
                                    className='form-control'
                                    value={completed}
                                    onChange={(e) => setCompleted(e.target.value)}
                                >
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>

                                </select>
                            </div>

                            <button className='btn btn-success' onClick={(e) => saveOrUpdateTask(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskComponent