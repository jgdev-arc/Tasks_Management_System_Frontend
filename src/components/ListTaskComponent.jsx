import React, { useEffect, useState } from 'react'
import { getAllTasks } from '../services/TaskService'
import { useNavigate } from 'react-router-dom'

const ListTaskComponent = () => {

    const [tasks, setTasks] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        listTasks()
    }, [])

    const listTasks = () => {
        getAllTasks().then((res) => {
            setTasks(res.data)
        }).catch(err => {
            console.error(err)
        })
    }

    const addNewTask = () => {
        navigate('/add-task')
    }

    const updateTask = (id) => {
        console.log(id)
        navigate(`/update-task/${id}`)
    }


    return (
        <div className='container'>
            <h2 className='text-center'>List of Tasks</h2>
            <button className='btn btn-primary mb-2' onClick={addNewTask}>New Task</button>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Task Title</th>
                            <th>Task Description</th>
                            <th>Task Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task =>
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.completed ? 'YES' : 'NO'}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => updateTask(task.id)}>Update</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTaskComponent