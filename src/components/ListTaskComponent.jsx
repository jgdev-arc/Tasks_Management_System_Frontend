import React, { useState } from 'react'

const ListTaskComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "title": "Learn Java",
            "description": "Learn Java with examples",
            "completed": false
        },
        {
            "id": 2,
            "title": "Learn Spring",
            "description": "Learn Spring with examples",
            "completed": false
        },
        {
            "id": 3,
            "title": "Learn Spring Boot",
            "description": "Learn Spring Boot with examples",
            "completed": false
        },
    ]

    const [tasks, setTasks] = useState(dummyData)

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