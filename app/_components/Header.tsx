"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Header() {

  const path = usePathname();

  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  const toggleSubMenu = () => {
    setSubOpen((prevSubOpen) => !prevSubOpen);
  }

  return (
    <div className={`xl:px-20 lg:mx-0 mx-2.5 py-10 px-2.5 md:px-[30px] header z-1000 absolute w-[calc(100%-20px)]  ${open ? 'open' : ''}`}>
      <header className="flex flex-col lg:flex-row lg:justify-between justify-start text-left items-start lg:items-center">
        <div className='flex justify-between items-center w-full lg:w-auto'>
          <a href='/' className='flex items-center gap-3'>
            <div className='flex items-baseline'>
              <span className='text-5xl font-bold'>YLF</span>
              <span className='text-3xl text-gold font-bold'>ABUJA</span>
            </div>
          </a>
          <div id="menu-icon" onClick={toggleMenu} className={`toggle-nav ${open ? 'active' : ''} flex flex-col gap-2.5 lg:hidden cursor-pointer`}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </div>
        <div className={`lg:flex-row lg:flex lg:items-center items-start flex flex-col xl:gap-20 lg:gap-10 lg:justify-between lg:w-auto w-full lg:mt-0 mt-10 ${!open && "hidden"}`}>
          <a href='/about' className={`lg:border-0 border-b border-gold  w-full py-3 lg:py-0 hover:text-gold ${path == "/about" && 'text-gold'} navbar`}>ABOUT US</a>
          <a href='/executives' className={`lg:border-0 lg:w-1/5 border-b border-gold w-full py-3 lg:py-0 hover:text-gold ${path == "/executives" && 'text-gold'} navbar`}>EXECUTIVES</a>
          <div className='group lg:border-0 border-b border-gold lg:py-5 py-3 lg:flex flex-col block lg:w-1/5 w-full lg:items-center transition'>
            <div onClick={toggleSubMenu} className={`flex justify-between`}>
              <a className={`w-full lg:py-2 hover:text-gold ${path == "/members-portal" && 'text-gold'} ${path == "/find-a-lawyer" && 'text-gold'} ${path == "/law-firms-in-abuja" && 'text-gold'} ${path == "/gallery" && 'text-gold'} ${path == "/nba-constitution" && 'text-gold'} navbar cursor-pointer transition`}>DIRECTORIES</a>
              <svg viewBox="0 0 32 32" width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 7v18M7 16h18" fill="none" stroke="#c9a66d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" className={`stroke-000000 lg:hidden ${subOpen ? "subOpen" : ""}`}></path></svg>
              <span className={`icon-plus lg:hidden `}></span>
            </div>
            <div className={`lg:absolute ${subOpen ? "flex" : "hidden"} lg:z-50 lg:top-24 flex-col flex-nowrap lg:bg-dark lg:px-10 lg:py-12 lg:gap-5 pt-2  sub-div`}>
              <a href='/members-portal' className={`sub-menu hover:text-gold hover:translate-x-3 lg:pl-0 pl-3 ${path == "/members-portal" && 'text-gold'}`}>Members' Portal</a>
              <a href='/find-a-lawyer' className={`sub-menu hover:text-gold hover:translate-x-3 lg:pl-0 pl-3 ${path == "/find-a-lawyer" && 'text-gold'}`}>Find a Lawyer</a>
              <a href='/law-firms-in-abuja' className={`sub-menu hover:text-gold hover:translate-x-3 lg:pl-0 pl-3 ${path == "/law-firms-in-abuja" && 'text-gold'}`}>Law Firms in Abuja</a>
              <a href='/nba-constitution' className={`sub-menu hover:text-gold hover:translate-x-3 lg:pl-0 pl-3 ${path == "/nba-constitution" && 'text-gold'}`}>Constitution of the NBA</a>
              <a href='/gallery' className={`sub-menu hover:text-gold hover:translate-x-3 lg:pl-0 pl-3 ${path == "/gallery" && 'text-gold'}`}>Gallery</a>
              <a href='https://nbaunitybar.org/' target="_blank" className='sub-menu hover:text-gold hover:translate-x-3 lg:pl-0 pl-3'>Visit Unity Bar Website</a>
              <a href='https://www.nigerianbar.org.ng/' target="_blank" className='sub-menu hover:text-gold hover:translate-x-3 lg:pl-0 pl-3'>Visit NBA Website</a>
            </div>
          </div>
          <a href='/publications' className={`lg:border-0 lg:w-1/5 border-b border-gold w-full py-3 lg:py-0 hover:text-gold ${path.includes("/publications") && 'text-gold'} navbar`}>PUBLICATIONS</a>
          <a href='/news-events' className={`lg:border-0  border-b border-gold w-full py-3 lg:py-0 hover:text-gold ${path == "/news-events" && 'text-gold'} navbar`}>NEWS & EVENTS</a>
        </div>
      </header>
    </div>
  )
}

export default Header