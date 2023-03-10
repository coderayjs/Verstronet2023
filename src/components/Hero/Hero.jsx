import react from "react"
import "./Hero.css"
import { useState } from "react"



const Hero = () =>{
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>Hello, Find a <span>MINI</span> Course<br> 
                </br>to Improve your Earnings</h1>
            </div>
            <div className="search-box">
                   <input type="search" placeholder="Search Courses" alt="search course">
                   </input>
                   <button>Search</button>
                </div>
                <div className="Trending-Text">
                <h3>Trending Courses:
                    
                </h3>
                    
                </div>
            </div>
    )
}


export default Hero;