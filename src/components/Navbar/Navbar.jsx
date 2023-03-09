import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="logo">
                    <img className="logo" src="/src/assets/verstronet.svg"></img>
                </div>
                <div>
                    <ul className='nav-links'>
                        <li Link to="/Home">Home</li>
                        <li>Course</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="Enroll-btn">
                    <button className="btn-card">
                        Start Selling
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;