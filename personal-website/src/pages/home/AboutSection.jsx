import React from 'react';
import './AboutSection.css';
import aboutPortrait from '../../images/about-portrait.jpg';

function AboutSection() {
    const skills = [
        "Python", "JavaScript/TypeScript", "React", "Next.js",
        "FastAPI", "PostgreSQL", "AWS", "Docker"
    ];

    return (
        <div className="about-section" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-heading">HELLO, I'M CARLOS.</h2>
                    <p className="about-description">
                        I am a recent Computer Science and Mathematics graduate with a passion for technology and engineering. I build AI-driven systems and scalable web applications.
                    </p>
                    <p className="about-description">
                        Beyond code, I have a wondering spirit when it comes to learning. I thrive on solving complex problems, whether it's optimizing pipelines, research, or crafting meaningful experiences.
                    </p>

                    <div className="about-skills">
                        <h3>Technical Arsenal</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-image-container">
                    <img src={aboutPortrait} alt="Carlos Vega Portrait" className="about-image" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
