"use client"

import navLinks from "@/app/constant/constant";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { HiBars3BottomRight } from "react-icons/hi2";


// define props type

type props ={
  openNav:()=>void
}


const Nav = ({openNav}:props) => {

  const [navBg,setNavBg] = useState(false)

  useEffect(()=>{
    const handler = () => {
      if(window.scrollY >= 90){
        setNavBg(true)
      }if(window.scrollY < 90){
        setNavBg(false);
      }
    };
    window.addEventListener("scroll",handler)

    return ()=>{
    window.removeEventListener("scroll",handler)

    };
  },[]);
  return (
    <div className={`fixed ${
      navBg ? "bg-white" :"fixed"
      } h-[12vh] z-[10] w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="font-bold text-3xl ">Syeda</h1>
      
        <div className="flex items-center space-x-10">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return ( <Link key={navlink.id} href={navlink.url}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button
              className=" px-4 py-2 md:px-10 md:py-3  font-semibold sm:text-base text-xs bg-[#7947df] text-white
      hover:bg-gray-200  hover:text-black transition-all duration-200 rounded-lg "
            >
              Hire me
            </button>
            {/* Burger */}
            <HiBars3BottomRight
            onClick={openNav} 
            className=" w-8 h-8 cursor-pointer text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
