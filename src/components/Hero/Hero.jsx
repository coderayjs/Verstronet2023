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
                </br>to Improve your Earnings Online</h1>
            </div>
            <div className="search-container">
                   <form role="search" id='form'>
                   <input className="search-input" type="search" placeholder="Search Courses" alt="search course">
                   </input>
                   <button className="search-btn">Search</button>
                   </form>
                </div>
                <div className="Trending-text">
                <h4 className="text-course">Trending Courses: 
                    <button className="btn1">Tiktok videos</button>
                    <button className="btn2">Youtube</button>
                    <button className="btn3">forex</button>
                    <button className="btn4">cryptocurrency</button>
                </h4>
                <div className="learn">
                    <p className="learn">Join thousands of learners worldwide and
                        start your journey today</p>
                    <button className="learn-btn">Learn More</button>
                </div>
                </div>
                
                <div className="hero-img">
                    <img className="woman" src={heroimg} alt="hero"  width={550} height={450}/>
                    {/* <img className="circle" src={mask} alt="mask"  width={500} height={400} /> */}
                </div>

                
            </div>
    )
}


export default Hero;