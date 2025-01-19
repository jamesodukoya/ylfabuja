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
    <div className={`xl:px-20 xl:mx-0 mx-2.5 py-10 px-2.5 md:px-[30px] header z-1000 absolute w-[calc(100%-20px)]  ${open ? 'open' : ''}`}>
      <header className="flex flex-col xl:flex-row xl:justify-between justify-start text-left items-start xl:items-center">
        <div className='flex justify-between items-center w-full xl:w-auto'>
          <a href='/' className='flex items-center gap-3'>
            <div className='flex items-baseline'>
              <span className='text-5xl font-bold'>YLF</span>
              <span className='text-3xl text-gold font-bold'>ABUJA</span>
            </div>
          </a>
          <div id="menu-icon" onClick={toggleMenu} className={`toggle-nav ${open ? 'active' : ''} flex flex-col gap-2.5 xl:hidden cursor-pointer`}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </div>
        <div className={`xl:flex-row xl:flex xl:items-center xl:text-center xl:ml-10 items-start flex flex-col xl:gap-[26px] xl:justify-between xl:w-auto w-full xl:mt-0 mt-10 ${!open && "hidden"}`}>
          <a href='/about' className={`xl:border-0 border-b border-gold  w-full py-3 xl:py-0 hover:text-gold ${path == "/about" && 'text-gold'} navbar`}>ABOUT US</a>
          <a href='/executives' className={`xl:border-0 xl:w-1/5 border-b border-gold w-full py-3 xl:py-0 hover:text-gold ${path == "/executives" && 'text-gold'} navbar`}>EXECUTIVES</a>
          <div className='group xl:border-0 border-b border-gold xl:py-5 py-3 xl:flex flex-col block xl:w-1/5 w-full xl:items-center transition'>
            <div onClick={toggleSubMenu} className={`flex justify-between`}>
              <a className={`w-full xl:py-2 hover:text-gold ${path == "/members-portal" && 'text-gold'} ${path == "/find-a-lawyer" && 'text-gold'} ${path == "/law-firms-in-abuja" && 'text-gold'} ${path == "/gallery" && 'text-gold'} ${path == "/nba-constitution" && 'text-gold'} navbar cursor-pointer transition`}>DIRECTORIES</a>
              <svg viewBox="0 0 32 32" width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 7v18M7 16h18" fill="none" stroke="#c9a66d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" className={`stroke-000000 xl:hidden ${subOpen ? "subOpen" : ""}`}></path></svg>
              <span className={`icon-plus xl:hidden `}></span>
            </div>
            <div className={`xl:absolute ${subOpen ? "flex" : "hidden"} xl:text-left xl:z-50 xl:top-24 flex-col flex-nowrap xl:bg-dark xl:px-10 xl:py-12 xl:gap-5 pt-2  sub-div`}>
              <a href='/members-portal' className={`sub-menu hover:text-gold hover:translate-x-3 xl:pl-0 pl-3 ${path == "/members-portal" && 'text-gold'}`}>Members' Portal</a>
              <a href='/find-a-lawyer' className={`sub-menu hover:text-gold hover:translate-x-3 xl:pl-0 pl-3 ${path == "/find-a-lawyer" && 'text-gold'}`}>Find a Lawyer</a>
              <a href='/law-firms-in-abuja' className={`sub-menu hover:text-gold hover:translate-x-3 xl:pl-0 pl-3 ${path == "/law-firms-in-abuja" && 'text-gold'}`}>Law Firms in Abuja</a>
              <a href='/nba-constitution' className={`sub-menu hover:text-gold hover:translate-x-3 xl:pl-0 pl-3 ${path == "/nba-constitution" && 'text-gold'}`}>Constitution of the NBA</a>
              <a href='/gallery' className={`sub-menu hover:text-gold hover:translate-x-3 xl:pl-0 pl-3 ${path == "/gallery" && 'text-gold'}`}>Gallery</a>
              <a href='https://nbaunitybar.org/' target="_blank" className='sub-menu hover:text-gold hover:translate-x-3 xl:pl-0 pl-3'>Visit Unity Bar Website</a>
              <a href='https://www.nigerianbar.org.ng/' target="_blank" className='sub-menu hover:text-gold hover:translate-x-3 xl:pl-0 pl-3'>Visit NBA Website</a>
            </div>
          </div>
          <a href='/publications' className={`xl:border-0 xl:w-1/5 border-b border-gold w-full py-3 xl:py-0 hover:text-gold ${path.includes("/publications") && 'text-gold'} navbar`}>PUBLICATIONS</a>
          <a href='/news-events' className={`xl:border-0  border-b border-gold w-full py-3 xl:py-0 hover:text-gold ${path == "/news-events" && 'text-gold'} navbar`}>NEWS & EVENTS</a>
          <a href='/contact' className={`xl:border-0  border-b border-gold w-full py-3 xl:py-0 hover:text-gold ${path == "/contact" && 'text-gold'} navbar`}>CONTACT</a>
          <a className='button about-hbtn my-3 xl:my-0 text-foreground' href="https://dash.nbaylfabuja.org/become-a-member/" target="_blank">
            <div className='flex items-center btn hover:translate-x-2 gap-2'>
              <span className='text-center xl:hidden text-nowrap '>Become a member</span>
              <span className='text-center xl:block hidden text-nowrap'>join us</span>
              <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
            </div>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header