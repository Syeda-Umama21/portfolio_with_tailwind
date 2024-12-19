import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <About/>
       <Project/>
       <Skills/>
       <Contact/>
       <Footer/>
        </div>
  )
}

export default HomePage