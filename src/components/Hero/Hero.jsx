import react from "react"
import "./Hero.css"
import { useState } from "react"
import heroimg from "/src/assets/heroimg.svg";
import mask from "/src/assets/Mask group.png";




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
                <h4>Trending Courses: 
                <button>Tiktok videos</button>
                <button>Youtube</button>
                <button>forex</button>
                <button>cryptocurrency</button>
                </h4>
                <div className="learn">
                    <p>Join thousands of learners worldwide and
                        start your journey today</p>
                    <button>Learn More</button>
                </div>
                </div>
                
                <div className="hero-img">
                    <img src={heroimg} alt="hero"/>
                    <img src={mask} alt="mask"/>
                </div>

                
            </div>
    )
}


export default Hero;