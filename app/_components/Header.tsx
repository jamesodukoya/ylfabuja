"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {

    const path = usePathname();

  return (
    <div className="xl:px-20 md:py-10 py-5 px-5 md:px-10">
      <header className="flex justify-between items-center">
        <a href='/' className='flex items-center gap-3'>
            {/* <img src="ylf-abuja-logo.png" className="h-16 w-16 hidden xl:flex"/> */}
            <div className='flex items-baseline'>
                <span className='text-5xl'>YLF</span>
                <span className='text-3xl text-gold'>ABUJA</span>
            </div>
        </a>
        <div className='xl:flex items-center gap-20 hidden'>
            <a href='/about' className={`hover:text-gold ${path=="/about"&&'text-gold'} navbar`}>ABOUT US</a>
            <a href='/executives' className={`hover:text-gold ${path=="/executives"&&'text-gold'} navbar`}>EXECUTIVES</a>
            <div className='group py-5 flex flex-col items-center'>
                <a className={`hover:text-gold ${path=="/members-portal"&&'text-gold'} ${path=="/find-a-lawyer"&&'text-gold'} ${path=="/law-firms-in-abuja"&&'text-gold'} ${path=="/nba-constitution"&&'text-gold'} navbar cursor-pointer`}>DIRECTORIES</a>
                <div className='absolute hidden z-10 top-24 group-hover:flex flex-col flex-nowrap bg-background px-10 py-12 gap-5 sub-div'>
                    <a href='/members-portal' className='sub-menu hover:text-gold hover:translate-x-3'>Members' Portal</a>
                    <a href='/find-a-lawyer' className='sub-menu hover:text-gold hover:translate-x-3'>Find a Lawyer</a>
                    <a href='/law-firms-in-abuja' className='sub-menu hover:text-gold hover:translate-x-3'>Law Firms in Abuja</a>
                    <a href='/nba-constitution' className='sub-menu hover:text-gold hover:translate-x-3'>Constitution of the NBA</a>
                    <a href='https://nbaunitybar.org/' target="_blank" className='sub-menu hover:text-gold hover:translate-x-3'>Visit Unity Bar Website</a>
                    <a href='https://www.nigerianbar.org.ng/' target="_blank" className='sub-menu hover:text-gold hover:translate-x-3'>Visit NBA Website</a>
                </div>
            </div>
            <a href='/publications' className={`hover:text-gold ${path=="/publications"&&'text-gold'} navbar`}>PUBLICATIONS</a>
            <a href='/news-events' className={`hover:text-gold ${path=="/news-events"&&'text-gold'} navbar`}>NEWS & EVENTS</a>
        </div>
      </header>
    </div>
  )
}

export default Header