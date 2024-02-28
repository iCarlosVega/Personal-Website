import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/home">CARLOS VEGA</a></li>
                <div className="nav-group">
                    <li className="right"><a href="/portfolio">portfolio</a></li>
                    <li className="right"><a href="https://github.com/iCarlosVega" target='_blank'>about me</a></li>
                </div>
            </ul>
        </div>
    );
};

export default NavBar;