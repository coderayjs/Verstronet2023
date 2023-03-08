import React from 'react'
import "./Navbar.css"




const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="logo">
                    <img className="logo" src="/src/assets/verstronet.svg"></img>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About Us</li>
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