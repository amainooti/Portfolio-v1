import {React, useRef} from 'react';
import logo from "../images/AO logo (1).png";
import otherLogo from "../images/AO logo (2).png";
import "./Navbar.css";
import {Link} from "react-scroll";

function Navbar() {
  const imageRef = useRef(null);
  return (
    <div className='container'>
        <nav className="navbar">
            <div className="logo-container">
                <a href="/">
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
                </a>
            </div>
            <ul className="nav-items ">
                <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                <li><Link to="service" spy={true} smooth={true} offset={-100} duration={500}>Service</Link></li>
                <li><Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
                <a href="contact" className='btn'> Contact me</a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar