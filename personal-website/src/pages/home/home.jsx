
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectBanner from '../../components/ProjectBanner/ProjectBanner';
import AboutSection from './AboutSection';
import './home.css';
import './Hero.css';
import heroBg from '../../images/hero-bg.jpg';
import overtakeImg from '../../images/overtake.png';
import realSweImg from '../../images/realswe.png';
import qclipImg from '../../images/qclip.png';
import qcPhysicsImg from '../../images/qcphysics.png';

function Home() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect: Move image down slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    // Fade to black effect: Increase opacity of a black overlay
    const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

    const projects = [
        {
            link: "https://www.real-swe.com",
            imgSrc: realSweImg,
            imgAlt: 'Questions From Real SWE',
            title: 'Real SWE',
            info: 'Engineered an asynchronous job processing pipeline using FastAPI, Celery, and Redis. Implemented a hybrid Gemini/GPT-4o-mini service for cost-efficient analysis and a Next.js interface with real-time status polling.',
            stack: ['Python', 'FastAPI', 'Next.js', 'Celery', 'Redis', 'PostgreSQL']
        },
        {
            link: "https://overtake.fyi", // Assuming URL based on name, or placeholder
            imgSrc: overtakeImg, // Using heroBg as placeholder since no image provided
            imgAlt: 'Overtake.fyi Dashboard',
            title: 'Overtake.fyi',
            info: 'Architected a full-stack F1 analytics platform. Designed a robust data aggregation pipeline for historical telemetry and developed a dynamic dashboard with interactive visualizations.',
            stack: ['Python', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Next.js', 'ASP.NET']
        },
        {
            link: "https://github.com/iCarlosVega/Centrality_In_the_MTA",
            imgSrc: '/images/map.jpeg',
            imgAlt: 'MTA Map',
            title: 'Centrality In the MTA',
            info: 'Performed a centrality analysis of the MTA network, determining the most important stations based on betweenness, closeness, and degree centrality metrics.',
            stack: ['Python', 'Network Analysis', 'Data Visualization']
        },
        {
            link: "https://github.com/iCarlosVega/House_Pricing_Model",
            imgSrc: '/images/regression_tree_top_layers.jpg',
            imgAlt: 'Regression tree',
            title: 'House Pricing Prediction',
            info: 'Developed a Random Forest model to predict NYC housing prices, achieving a $50,000 margin of error. Analyzed large datasets to identify key pricing factors.',
            stack: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest']
        },
        {
            link: 'https://qclip.study/',
            imgSrc: qclipImg,
            imgAlt: 'Screenshot',
            title: 'AI Admissions Assistant',
            info: 'Spearheaded content acquisition for a RAG system by scraping 500+ pages. Engineered a pipeline to vectorize 2GB+ of data, creating a secure knowledge base using AzureAI.',
            imgFit: 'contain',
            stack: ['Python', 'React', 'Flask', 'AzureAI', 'RAG']
        }
    ];

    return (
        <div className='Home' ref={targetRef}>
            <div className="hero-container" id="home">
                <motion.div style={{ y }} className="hero-background">
                    <img src={heroBg} alt="Classic Painting Background" />
                </motion.div>

                {/* Standard overlay for text readability */}
                <div className="hero-overlay"></div>

                {/* Fade to black overlay */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="hero-fade-overlay"
                ></motion.div>

                <div className="hero-content">
                    <div className="hero-footer">
                        <div className="hero-footer-left">
                            <h1>
                                <span></span>
                                Developer<br />& Analyst
                            </h1>
                        </div>
                        <div className="hero-footer-right">
                            I am a developer with a love for the theory behind the math and engineering.
                            Just another wayfarer in the digital expanse creating as I go.
                        </div>
                    </div>
                </div>
            </div>

            <AboutSection />

            <div className="projects-container" id="projects">
                {projects.map((project, index) => (
                    <ProjectBanner
                        key={index}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;

