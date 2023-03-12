import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Discover from './components/Discover/Discover';

// import Footer from './components/Footer/Footer';
// import Brand from './components/Brand/Brand';




const App = () => {
    return(
        <div className="App">
             <Navbar/>
             <Hero/>
             <Discover/>
        </div>
       
    );
}


export default App