import React from 'react';
import "./Hero.css";
import waving from "../images/Waving Hand Medium Light Skin Tone.png";
import heroImage from "../images/Hero Image.png"

function Hero() {
  return (
    <div className='hero-container'>
        <div className="left-side">
            <div className="left-greeting">
                <p>hi there, </p>
                <img src= {waving} alt="waving hand" />
                <p>i'm</p>
            </div>
            <div className="left-intro">
                <h1>Amaino Oti</h1>
                <p>Backend web developer specialising in building exceptional and accessible digital experiences.</p>
                <a href="/">Hire me</a>
            </div>
        </div>
        <div className="right-side">
            <div className="right-side-img">
                <img src= {heroImage} alt="Hero" />
            </div>
        </div>
    </div>
  )
}

export default Hero