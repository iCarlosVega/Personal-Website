import NavBar from './components/NavBar/NavBar';
import React, { useEffect, useRef } from 'react';
import ProjectCard from './components/ProjectCard/ProjectCard';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
        <div className='App'>
          <ProjectCard link='https://qclip.study/' imgSrc='qclip.png' imgAlt='Screenshot' title='Ai Admissions Assistant' info='Collaborated with my colleagues in developming a Ai Admissions Assistant for our school as a hackathon project.'/>
          <ProjectCard link='https://qcphysicsclub.com' imgSrc='qcphysics.png' imgAlt='Screenshot' title='Queens College Physics Website' info='Developed an informative website for my physics club @ Queens College'/>
        </div>
    </div>
  );
}

export default App;
