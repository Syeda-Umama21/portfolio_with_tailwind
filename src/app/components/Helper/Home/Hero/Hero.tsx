import React from 'react'
import { BaseInfo } from '../../../../../../Data/data'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full pt-[2vh] md:pt-[7vh] h-screen pb-29 bg-gradient-to-br bg-white overflow-hidden'>
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
            {/*Content  */}
            <div>
                {/* Sub Heading */}
                <h1 className='text-2xl md:text-3xl lg:text-2xl mb-5 text-[#7947df] font-bold'>
                    I am {BaseInfo.name}
                    </h1>
                    {/* Title */}
                    <h1 className=' text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem]
                     xl:leading-[4rem] text-black'>
                      {BaseInfo.position}</h1>
                      {/* Description */}
                      <p className='mt-6 text-sm md:text-sm text-black text-opacity-60'>
                        {BaseInfo.description}
                      </p>
                      {/* Button */}
                      <button className=' md:px-8 md:py-2.5 px-7 py-2 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-[#7947df]  hover:bg-gray-200 hover:text-black flex items-center'>
                        <span>Download Cv</span>
                        <FaDownload/>
                      </button>
            </div>
            {/* Image Content */}
                <div className='mx-auto hidden lg:block rounded-lg border-[3px]  overflow-x-hidden '>
                  <Image 
                  src={BaseInfo.profilePic}
                    alt={BaseInfo.name}
                    width={500} 
                    height={500}/>
                
                </div>
                
        </div>
        </div>
    </div>
  )
}

export default Hero
