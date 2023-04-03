import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className='container'>
                <div className='upper'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarNav" style={{ margin: '20px 0px' }}>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/Form" className="nav-link" href="#" style={{ fontSize: '20px', textTransform: 'capitalize' }}>Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Login" className="nav-link" href="#" style={{ fontSize: '20px', textTransform: 'capitalize' }}>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
