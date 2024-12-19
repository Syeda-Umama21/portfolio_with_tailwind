
import { FaCheck } from 'react-icons/fa'
import { aboutInfo } from '../../../../../../Data/data'
import SectionHeading from '../../SectionHeading'
import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    
    <div className="pt-10 pb-4 bg-gray-200">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-20">
      {/*Text Content*/}
      <div>
 <h1 className=" text-bg text-6xl sm:text-3xl  md:text-4xl lg:text-6xl font-bold text-gray-600 title-line-1 ">
   {aboutInfo.title}
 </h1>
  <p className="mt-6 text-base text-gray-600">
   {aboutInfo.description}
  </p>
  <div className="mt-8">
 <div className="flex items-center space-x-1 mb-6">
 <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
  <FaCheck className="text-white"/>
  </div>
  <p className='text-sm sm:text-base md:text-lg font-bold text-black'>
    Frontend Developer
    </p>
    </div>
    <div className="flex items-center space-x-1 mb-6">
 <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
  <FaCheck className="text-white"/>
  </div>
  <p className='text-sm sm:text-base md:text-lg font-bold text-black'>
    Backend Developer
    </p>
    </div>
    <div className="flex items-center space-x-1 mb-6">
 <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
  <FaCheck className="text-white"/>
  </div>
  <p className='text-sm sm:text-base md:text-lg font-bold text-black'>
    Full Stack Developer
    </p>
    </div>
    </div>  
    </div>
    {/* Stats Content */}
    <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
      {/* 1st State */}
    <div>
<Image
 src="/images/customer.jpg" 
 alt="image" 
 width={60}
  height={60}
   className="mx-auto"
   />
   <p className="mt-3 font-bold text-sm text-black text-center">{aboutInfo.client}</p>
   <p className="text-base sm:text-lg text-gray-600 text-center">
   Satisfied Customers
   </p>
   </div>
  
      {/* 2nd State */}
      <div>
<Image
 src="/images/experience.jpg" 
 alt="image" 
 width={60}
  height={60}
   className="mx-auto"
   />
   <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.experience}</p>
   <p className="text-base sm:text-lg text-gray-600 text-center">
   Your Experience
   </p>
   </div>
      {/* 3rd State */}
      <div>
<Image
 src="/images/completed.jpg" 
 alt="image" 
 width={60}
  height={60}
   className="mx-auto"
   />
   <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.project}</p>
   <p className="text-base sm:text-lg text-gray-600 text-center">
  Completed Project
   </p>
   </div>
       {/* 4st State */}
       <div>
<Image
 src="/images/rocket.jpg" 
 alt="image"
 width={60}
  height={60}
   className="mx-auto"
   />
   <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.website}</p>
   <p className="text-base sm:text-lg text-gray-600 text-center">
  Website Launched
   </p>
   </div>
   </div>
    </div>
    </div>

  )
}
export default About



