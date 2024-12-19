import Image from "next/image"

const Footer = () => {
  return (
    //  footer 
    <div className="pt-1 pb-1 bg-[#8862d3]">
     <div>
            <h1 className="font-bold flex justify-center items-center text-4xl text-white">SYEDA</h1>
     </div> 
    
     <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
         <div>Home</div>
         <div>About</div>
         <div>Project</div>
         <div>Skill</div>
         <div>Contact</div>
     </div>
     <p className="text-white text-opacity-60 mt-6 text-center">
         2024 All Rights Reserved by WebDev Warriors</p>
    </div>
  )
}

export default Footer