// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home.jsx';
import {About} from './components/about.jsx';
import {Skills} from './components/skills.jsx';


function App() {
  return (
    <>
       <nav>
          <ul>
             <li><Link to="/home">home</Link></li>
             <li><Link to="/about">about</Link></li>
             <li><Link to="/skills">skills</Link></li>
          </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<About />}>
           </Route>
          <Route path="/skills" element={<Skills />}> 
          </Route>
          <Route path="/home" element={ <Home />}>
          </Route>
          </Routes>
          </>

  );
}

export default App;
