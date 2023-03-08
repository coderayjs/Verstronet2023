import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="logo">
                    <img className="logo" src="/src/assets/verstronet.svg"></img>
                </div>
                <Link>
                    <ul className='nav-links'>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </Link>
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