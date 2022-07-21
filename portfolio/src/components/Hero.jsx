import React from 'react';
import "./Hero.css";
import waving from "../images/Waving Hand Medium Light Skin Tone.png";

function Hero() {
  return (
    <div className='hero-container'>
        <div className="left-side">
            <div className="left-greeting">
                <p>hi there, </p>
                <img src= {waving} alt="waving hand" />
                <p>i'm</p>
            </div>
        </div>
        <div className="right-side">

        </div>
    </div>
  )
}

export default Hero