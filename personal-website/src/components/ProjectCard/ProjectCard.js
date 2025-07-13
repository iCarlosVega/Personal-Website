import React, { useEffect, useState } from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // This will trigger the fade-in effect when the component mounts
    }, []);

    const isInternalLink = props.link.startsWith('/');

    const CardContent = (
      <>
        <img src={`${process.env.PUBLIC_URL}/images/${props.imgSrc}`} alt={props.imgAlt} className='card-img' />
        <div>
          <h1>{props.title}</h1>
          <p>{props.info}</p>
        </div>
      </>
    );
  

    return (
        <div className={`card-container ${fadeIn ? 'fade-in' : ''}`}>
            <a href={props.link} rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/images/${props.imgSrc}`} alt={props.imgAlt} className='card-img'/>
            </a>
            <div>
                <h1>{props.title}</h1>
                <p>{props.info}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
