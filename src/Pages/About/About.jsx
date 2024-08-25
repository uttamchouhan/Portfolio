import React, { useState } from 'react';
import './About.css';
import { tech_skill } from '../../assets/techicon.js';

const About = () => {
  const [isRolledUp, setIsRolledUp] = useState(false);

  const handleClick = () => {
    setIsRolledUp(!isRolledUp);
  };

  return (
    <>
      <div className="about">
        <div
          className={`about-container ${isRolledUp ? 'rolled-up' : ''}`}
          onClick={handleClick}
        >
          <div className="about-content">
            <h1>Delighted to meet you!</h1>
            <p>
              I'm Uttam Chouhan, a software engineer in MERN stack and Java development,
              currently living in Mumbai, Maharashtra. Writing clean, efficient code is central to
              everything I do. I love to work on meaningful projects with inspiring, creative people
              who challenge the status quo.
            </p>
            <div className="cure">
              {Object.keys(tech_skill).map((key, index) => (
                <div className="tech-skill" key={index}>
                  <img src={tech_skill[key]} alt={`skill ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="another-box-container">
        <div className="another-about">
          <div className="another-about-header">
            <h1>How I Approach Development</h1>
            <div className="line"></div>
            <div className="another-about-container">
              <div className="col-description">
                <h1><strong>01</strong> / Learning & Research</h1>
                <p>As a newcomer to the industry, my first step in any project is to thoroughly understand the problem and the client's needs. This groundwork helps me build trust and shows that I’m committed to the long-term success of the project.
                </p>
              </div>
              <div className="col-description">
                <h1><strong>02</strong> / Full-Stack Development</h1>
                <p>I focus on mastering the MERN stack (MongoDB, Express.js, React, Node.js) and Java. I believe that a strong foundation in both frontend and backend development is essential for building robust and user-friendly applications.</p>
              </div>
              <div className="col-description">
                <h1><strong>03</strong> / Exploring Cloud & DevOps</h1>
                <p>I'm learning tools like AWS, Kafka, and Docker to ensure that I can contribute to building scalable and efficient systems. I’m excited by the challenge of integrating these tools to create powerful, maintainable applications.</p>
              </div>
              <div className="col-description">
                <h1><strong>04</strong> / Continuous Learning & Improvement</h1>
                <p>I believe that coding is a continuous journey of learning and improvement. I’m committed to refining my skills through testing, gathering feedback, and iterating on my work to deliver better results with each project.</p>
              </div>
            </div>
            <h2><strong>-</strong>Uttam Chouhan</h2>
            <a href="https://docs.google.com/document/d/1X7kn2_peK8DIpblB5ANODqXLp5GPvUHkAzWud1yoALc/edit"><p>View Resume</p></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
