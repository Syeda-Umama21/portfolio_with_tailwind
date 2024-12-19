import React from 'react'
import Contact from '../components/Helper/Home/Contact/Contact'
import SectionHeading from '../components/Helper/SectionHeading'

function ContactPage() {
  return (
    <div>
       
       <div className='pt-24 bg-white'>
        <SectionHeading >Contact Me</SectionHeading>
        <Contact/>
        </div>
       
    </div>
  )
}

export default ContactPage