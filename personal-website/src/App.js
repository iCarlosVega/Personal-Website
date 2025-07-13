import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/home/home.jsx';
import InProgress from './pages/in-progress/in-progress.jsx';
import AboutMe from './pages/aboutme/aboutme.jsx';

import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes> 
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/in-progress' element={<InProgress/>} />
          <Route exact path='/aboutme' element={<AboutMe/>} />
          {/* <Route path='/about-me' element={<AboutMe/>} /> */}
        </Routes>
    </Router>
  );
}

export default App;
