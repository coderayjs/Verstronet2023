import React from 'react';
import "./Navbar.css";
import verstronet from "/src/assets/verstronet.svg"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">
                    <img src={verstronet} alt="logo" />
                </a>
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about">Courses</a>
                </li>
                <li className="nav-item">
                    <a href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a href="/contact">About</a>
                </li>
                <div className='sell-btn'>
                <button className='btn-card'>
                    <a className='sell-text' href="/register">Start Selling</a>
                </button>
                
                
            </div>
            </ul>
        </nav>
    )
}


export default Navbar;