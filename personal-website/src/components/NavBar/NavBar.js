import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './NavBar.css';

function NavBar() {
    const { scrollY } = useScroll();

    // Gradual blur and background opacity based on scroll position (0px to 200px)
    const backgroundColor = useTransform(
        scrollY,
        [0, 200],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.2)"]
    );

    const backdropFilter = useTransform(
        scrollY,
        [0, 200],
        ["blur(0px)", "blur(10px)"]
    );

    return (
        <motion.div
            className="navbar"
            style={{
                backgroundColor,
                backdropFilter,
                WebkitBackdropFilter: backdropFilter
            }}
        >
            <div className="nav-container">
                <div className="nav-left">
                    <span className="nav-name">Carlos Vega</span>
                    <span className="nav-title">Software Developer</span>
                </div>
                <div className="nav-right">
                    <a href="#projects">projects</a>
                    <a href="#about">about</a>
                    <a href="#contact">contact</a>
                </div>
            </div>
        </motion.div>
    );
};

export default NavBar;