import Image from "next/image";

//Define props type

type props = {
    skill:{
       id: number;
       title: string; 
       image: string;
    };
 };

 const SkillCard = ({skill}:props)=>{
    const {image,title } = skill;
    return <div className="p-3 hover:bg-purple-600 duration-300 transition-all cursor-pointer text-center rounded-lg bg-grey-900">
        <Image 
        src={image} 
        alt={title}
         width={80} 
         height={80}
         className="object-cover mx-auto"/>
         <h1 className="text-[18px] mt-2 text-black font-[600]">{title}</h1>
    </div>
 }

 export default SkillCard