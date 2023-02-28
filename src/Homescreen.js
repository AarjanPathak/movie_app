import React from 'react';
import "./Homescreen.css";
import Navbar from "./Navbar";
import Banner from "./Banner";

function Homescreen() {
  return (
    <div className='homeScreen'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Homescreen
