import React, { useEffect } from 'react';
import './Tech.css';
import { tech_skill } from '../../assets/techicon.js';

const Tech = () => {
    useEffect(() => {
        const techContainers = document.querySelectorAll('.tech-skill-container');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        }, { threshold: 0.1 });

        techContainers.forEach(container => {
            observer.observe(container);
        });
    }, []);

    return (
        <>
            <div className="tech">
                {/* <div className="tech-header">
                    <h1>Tech Skills</h1>
                </div> */}
                <div className="tech-container">
                    {Object.keys(tech_skill).map((key, index) => (
                        <div className="tech-skill-container" key={index}>
                            <img src={tech_skill[key]} alt={`skill ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tech;
