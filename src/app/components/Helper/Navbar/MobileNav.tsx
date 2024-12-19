import Link from 'next/link';
import React from 'react'
import navLinks from '@/app/constant/constant';
import { CgClose } from 'react-icons/cg';

//props type

type Props = {
  showNav:boolean;
  closeNav:()=>void
}

const MobileNav = ({closeNav,showNav}:Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000]
         bg-black opacity-70 w-full h-screen`}
         ></div>
      {/* Nav Links */}
      <div
      className={`${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%]
        bg-[#0f0715] space-y-6 z-[10000] `}
        >

            {navLinks.map((navlink) => { 
              return ( <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
                  <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[3-px] text-white">{navlink.label}</p>
                </Link>
              );
            })}
            {/* Close button */}
            <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"/>
        </div>
    </div>
  );
};

export default MobileNav