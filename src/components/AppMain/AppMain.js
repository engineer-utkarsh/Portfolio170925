import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './AppMain.css';

function App() {
  return (
    <div className="AppMain">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;