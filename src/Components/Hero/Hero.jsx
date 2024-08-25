import React from 'react';
import './Hero.css'
import hand_icon from '../../assets/waving.1bae5fcfb51082b5c2b4.png'
import social_link_1 from "../../assets/instagram.png";
import social_link_2 from "../../assets/linkedin.png";
import social_link_3 from "../../assets/github-sign.png";
import profiel_image from "../../assets/profile-photo.jfif";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-content-text">
              <h1>Full Stack Devloper<br />In <span>MERN Stack and Java Stack</span></h1>
              <img src={hand_icon} alt="" />
            </div>
            <p>Hi, I'm Uttam Chouhan. A passionate Full Stack Developer specializing in building robust, scalable, and user-friendly web applications.</p>
            <div className="social-link">
              <a href="https://github.com/uttamchouhan"><img src={social_link_3} alt="" /></a>
              <a href="https://www.linkedin.com/in/uttam-chouhan-6a14b827b"><img src={social_link_2} alt="" /></a>
              <img src={social_link_1} alt="" />
            </div>
          </div>

          <div className="hero-img">
            <div className="hero-img-container">
              <img src={profiel_image} alt="Profile" />
            </div>
          </div>

        </div>
      </div>
      <div className="hero-content-second-color"></div>
    </>
  )
}

export default Hero
