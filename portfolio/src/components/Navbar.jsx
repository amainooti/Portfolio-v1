import {React, useRef} from 'react';
import logo from "../images/AO logo (1).png";
import otherLogo from "../images/AO logo (2).png";
import "./Navbar.css";
import {Link} from "react-router-dom"


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
                style = {{
                  transition: ".3s"
                }}
               />
            </div>
            <ul className="nav-items">
                <li>
               <Link to="/">Home </Link> </li>
                <li>
               <Link to="/about"> About </Link></li>
                <li>
                <Link to="/services">Service </Link></li>
                <li>
              <Link to="portfolio">  Portfolio </Link></li>
                <a href="home"> Contact me</a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar