import React from 'react';
import logo from "../images/AO logo (1).png";
import "./Navbar.css";


function Navbar() {
  return (
    <div className='container'>
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" />
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