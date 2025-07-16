import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/carlos-vega-lemus" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/iCarlosVega" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="mailto:carlosvegalemus@gmail.com">
                        Email
                    </a>
                </li>
                <li>
                    <a href="/Software_Engineering_Resume.pdf">
                        Resume
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;