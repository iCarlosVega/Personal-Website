import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/">CARLOS VEGA</a></li>
                <div className="nav-group">
                    <li className="right"><a href="/">latest</a></li>
                    <li className="right"><a href="/aboutme">about me</a></li>
                </div>
            </ul>
        </div>
    );
};

export default NavBar;