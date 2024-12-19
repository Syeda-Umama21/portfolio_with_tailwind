import React from 'react'
import SectionHeading from '../../SectionHeading'
import Link from 'next/link'
import Image from 'next/image'
import { projectData } from '../../../../../../Data/data'

const Project = () => {
  return (
    <div className="pt-10 pb-12 bg-white">
    <SectionHeading>My Project</SectionHeading>
    <div className="w-[70%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project)=>{
            return <div key={project.id}className="bg-purple-600 p-4 rounded-lg hover:scale-105 transition-all duration-300">
                <Link href="project.url">
                    <Image
                        src={project.image} 
                        alt="Project"
                         width={300} 
                        height={200} 
                        className="w-full"/>
                </Link>
            </div>
        })}
    </div>
</div>

  )
}

export default Project