import React from 'react';
import './styles/global.css';
import { useReveal } from './hooks/useReveal';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TechStack from './components/About/TechStack';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;