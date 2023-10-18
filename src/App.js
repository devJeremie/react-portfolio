import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

//Mise en place navigation
const App = () => {
    return (
      <Router>
        <Nav />
        <Routes>
            <Route path="/" element={About}/>
            <Route path="/skills" element={Skills}/>
            <Route path="/projects" element={Projects}/>
            <Route path="/contact" element={Contact}/>
        </Routes>
      </Router>
    );
  }
  
  export default App;
  