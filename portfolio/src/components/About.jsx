import React from 'react'
import "./About.css";
import { Card } from './Card';
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import php from "../images/php.png"
import python from "../images/python.png"
import dart from "../images/dart.png"


const About = () => {
  return (
    <div className='about'>
        <div className="about__container">
        <div className="about_me">
        {/* <div className="left-arrow"></div> */}
          <h1>what i do</h1>
          <p>I’m a software engineer with great interest in full-stack development, artificial intelligence, human-computer interactions, and everything in between.. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful web experiences.
</p>
<div className="right-arrow"></div>
        </div>
          <div className="about__skills">
              <Card
                img={html}
                text= "HTML"
              />
              <Card
                img={css}
                text="CSS"
              />
              <Card
                img={js}
                text= "JAVASCRIPT"
              />
              <Card
                img={python}
                text= "PYTHON"
              />
              <Card
                img={php}
                text= "PHP"
               />
              <Card
                img={dart}
                text= "DART"
               />

          </div>
        </div>
    </div>
  )
}

export default About