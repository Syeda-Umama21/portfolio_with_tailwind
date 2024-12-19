import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'
import { contactData } from '../../../../../../Data/data'

const ContactInfo = () => {
  return (
  
    //  contact info 
    <div>
      <div className="flex items-start space-x-12">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full  bg-black
          flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white"/>
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-black font-bold ">Phone</h1>
          <h1 className="text-base sm:text-lg  text-black text-opacity-70">
              {contactData.phone}
          </h1>
        </div>
        </div>

        <div className="flex items-center space-x-8 mt-8 mb-8">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-black
          flex items-center justify-center flex-col">
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white"/>
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-black font-bold ">Email Address</h1>
          <h1 className="text-base sm:text-lg text-black text-opacity-70">
              {contactData.email}
          </h1>
        </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-black 
          flex items-center justify-center flex-col">
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white"/>
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-black font-bold ">Address</h1>
          <h1 className="text-base sm:text-lg  text-black text-opacity-70">
              {contactData.address}
          </h1>
        </div>
        </div>
    </div>

  )
}

export default ContactInfo