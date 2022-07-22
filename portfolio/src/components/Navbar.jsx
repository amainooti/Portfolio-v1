import {React, useState, useRef} from 'react';
import logo from "../images/AO logo (1).png";
import otherLogo from "../images/AO logo (2).png";
import "./Navbar.css";


function Navbar() {
  const imageRef = useRef(null);

  return (
    <div className='container'>
        <nav className="navbar">
            <div className="logo-container">
                <img
                onMouseOver = {()=> {
                  imageRef.current.src = otherLogo
                }}
                onMouseOut = {()=> {
                  imageRef.current.src = logo
                }}
                src = {logo}
                alt="Logo"
                ref = {imageRef}
               />
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Portfolio</li>
                <a href="home"> Contact me</a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar