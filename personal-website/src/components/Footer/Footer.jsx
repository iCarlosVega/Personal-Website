import React from 'react';
import './Footer.css';

function Footer() {
    const interests = [
        "AI Development",
        "Machine Learning",
        "Fullstack Development",
        "New Business",
        "Front end design"
    ];

    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-left">
                    <h1 className="lets-connect">LET'S<br />CONNECT</h1>
                </div>
                <div className="footer-right">
                    <div className="footer-section">
                        <h3>I'M INTERESTED ABOUT</h3>
                        <div className="interests-container">
                            {interests.map((interest, index) => (
                                <span key={index} className="interest-pill">{interest}</span>
                            ))}
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>ARE YOU LOOKING TO WORK ON A PROJECT?</h3>
                        <a href="mailto:carlosvegalemus@gmail.com" className="contact-button">
                            CONTACT ME
                        </a>
                        <p className="work-status">Currently looking for a tech-oriented role! Would love to discuss any opportunities! </p>
                    </div>

                    <div className="footer-bottom">
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/carlos-vega-lemus" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/iCarlosVega" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://twitter.com/__kothar" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://instagram.com/datagoggins" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="/Software_Engineering_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;