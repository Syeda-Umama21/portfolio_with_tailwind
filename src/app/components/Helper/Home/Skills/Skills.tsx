import React from 'react'
import { skillsData } from '../../../../../../Data/data'
import SectionHeading from '../../SectionHeading'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
   
<div className="pt-16 pb-7 bg-gray-200">
    <SectionHeading>My Skills</SectionHeading>
    <div className="mt-16 w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
     gap-4 items-center">
        {skillsData.map((skill)=>{
            return <div key={skill.id}>
                <SkillCard skill={skill}/>
            
        </div>
        })}
    </div>
</div>
  )
}

export default Skills