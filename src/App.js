import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <section className="section" id="about">
          <AboutMe />
        </section>
        <section className="section" id="skills">
          <Skills />
        </section>
        <section className="section" id="projects">
          <Projects />
        </section>
        <section className="section" id="contact">
          <Contact />
        </section>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
