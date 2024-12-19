import React from 'react'
import Hero from './components/Helper/Home/Hero/Hero';
import About from './components/Helper/Home/About/About';
import Project from './components/Helper/Home/Project/Project';
import Skills from './components/Helper/Home/Skills/Skills';
import Contact from './components/Helper/Home/Contact/Contact';

export default function HomePage() {
  return (
    <div className='overflow-hidden'>
  
      <Hero />
     <About/>
     <Project/>
     <Skills/>
     <Contact/>
    
    </div>
  );
}