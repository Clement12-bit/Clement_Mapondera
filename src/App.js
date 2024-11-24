import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Education from './components/education/Education';
import Testimonials from './components/testmonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Projects from './components/projects/Projects';

const App = () => {
  return (
      <>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
          <Education />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </>
  )
}

export default App;
