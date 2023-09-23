import React, { useEffect, useState } from 'react'
import { getAllTasks } from '../services/TaskService'

const ListTaskComponent = () => {

    const [tasks, setTasks] = useState([])

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


    return (
        <div className='container'>
            <h2 className='text-center'>List of Tasks</h2>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Task Title</th>
                            <th>Task Description</th>
                            <th>Task Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task =>
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.completed ? 'YES' : 'NO'}</td>
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