import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        <a href="http://localhost:3000" className='navbar-brand'>Tasks Management Application</a>
                    </div>

                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to="/tasks" className="nav-link">Tasks</NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                        </li>
                    </ul>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent