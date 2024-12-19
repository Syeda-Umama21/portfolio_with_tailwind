import React from 'react'

const ContactForm = () => {
  return (
 <div className=" bg-[#7947df] rounded-lg p-4 sm:p-10">
    <h1 className="text-white text-2xl md:text-3xl lg:text-[2.5rem] font-bold">Lets work together!</h1>
    <p className=" text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit, amet dicta expedita nihil tempore eveniet, autem ratione incidunt accusantia atque nam minus labore?</p>
    {/*  input field*/}
     <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <input
             type="text"
              placeholder="First name"
               className="flex-1 bg-gray-200 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.55px] border-gray-200 border-opacity-15 outline-none w-full"
               />
               <input
               type="text"
                placeholder="Last name"
                 className="flex-1 bg-gray-200  text-gray-600 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.55px] border-gray-200 border-opacity-15 outline-none w-full"
                 />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
            <input
             type="email"
              placeholder=" Email Address"
               className="flex-1 bg-gray-200  text-gray-600 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.55px] border-gray-200 border-opacity-15 outline-none w-full"
               />
               <input
               type="text"
                placeholder="phone number"
                 className="flex-1  bg-gray-200  text-gray-600 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.55px] border-gray-200 border-opacity-15 outline-none w-full"
                 />
        </div>

        <div>
            <select className="w-full mt-5  bg-gray-200 text-gray-700 placeholder:text-gray-700 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
                <option value="" disabled selected>
                    Select an option
                </option>
                <option value="frontend"> Frontend Developer </option>
                <option value="backend"> Backend Developer </option>
                <option value="fullstack"> Fullstack Developer </option>
            </select>
        </div>
        <textarea className="w-full mt-5 bg-gray-200 text-gray-600 placeholder:text-gray-600 px-4 py-3.5
         rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
         rows={7} 
         placeholder="Message">
        </textarea>
        <div className="mt-4">
            <button className="px-8 py-3.5 bg-[#5124aa] text-white hover:bg-[#5c2fb7] transition-all 
            duration-150 rounded-full">Send Message</button>
        </div>
     </form>
     </div>
  )
}

export default ContactForm