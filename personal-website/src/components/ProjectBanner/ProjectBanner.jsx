

import React from 'react';
import './ProjectBanner.css';

function ProjectBanner({ title, info, imgSrc, imgAlt, link, index, imgFit = 'cover', stack = [] }) {
    // Determine layout based on index (odd/even)
    // Index 0 (1st item) -> Odd pattern (Text Left, Image Right)
    // Index 1 (2nd item) -> Even pattern (Image Left, Text Right)

    const isEven = index % 2 !== 0;

    const bannerClass = isEven ? 'project-banner even' : 'project-banner odd';

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={bannerClass} style={{ '--bg-image': `url(${imgSrc})` }}>
            <div className="project-text-section">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{info}</p>
                {stack.length > 0 && (
                    <div className="project-stack">
                        {stack.map((tech, i) => (
                            <span key={i} className="stack-tag">{tech}</span>
                        ))}
                    </div>
                )}
            </div>
            <div className="project-image-section">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    style={{ objectFit: imgFit }}
                />
            </div>
        </a>
    );
}
export default ProjectBanner;


