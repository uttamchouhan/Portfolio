import React,{useState} from 'react';
import './Project.css';

const Project = () => {
    const [isComingSoon, setIsComingSoon] = useState(true);
    return (
        <>
            <div className="project">
                <div className="project-container">
                    <div className="project-content">
                        {isComingSoon ? (
                            <div className="coming-soon">
                                <h2>Project Coming Soon</h2>
                                <p>Stay tuned for updates!</p>
                            </div>
                        ) : (
                            <div className="project-details">
                                {/* Add your project details here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
