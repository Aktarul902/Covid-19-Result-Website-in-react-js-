import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
const nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li ><NavLink exact activeClassName="under-line" to="/"  className="li"> Home</NavLink></li>
                    <li ><NavLink activeClassName="under-line" to="/about" className="li"> About</NavLink></li>
                    <li ><NavLink activeClassName="under-line" className="li" to="/search" > Search</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default nav
