import React from 'react'

function Footer() {
    return (
    <div className='relative'>
    <div className='footer bg-cover bg-center xl:px-20 px-5 md:px-10  xl:py-32 py-10'>
        <div className='lg:flex-row flex flex-col'>
        <div className='lg:w-1/3 flex flex-col justify-between'>
            <div>
                <a href='/' className='flex items-center gap-3  mb-6'>
                    <div className='flex items-baseline '>
                      <span className='text-5xl  font-bold'>YLF</span>
                      <span className='text-3xl text-gold  font-bold'>ABUJA</span>
                    </div>
                </a>
                <div className='flex flex-nowrap gap-2'>
                    <svg viewBox="0 0 468 360" width="30" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><ellipse cx="234" cy="290" rx="234" ry="70" fill="#c9a66d" className="fill-201e1e"></ellipse><path d="M83 273c-18 7-41-6-40-29 1-35-5-70-9-105-1-5-2-9-2-14-4-22-6-44 10-63 1-2 3-3 5-4-8-16-1-37 19-42C131 3 198-3 265 1c38 2 77 0 115 1 15 1 26 12 28 25 2 4 3 9 2 13 0 4-1 8-3 11v1l3 3c6 4 10 11 10 19 5 55 3 109 3 164 0 23-27 39-46 25-2-1-3-1-4-2-5 10-15 18-28 18-79 1-156 18-236 13-12-1-22-9-26-19z" fill="#c9a66d" className="fill-201e1e"></path><path d="M386 33c2-4-2-9-7-9-38-1-77 1-116-1-64-4-130 2-192 15-7 1-7 10-2 13 0 1 0 2 1 3 22 28 56 52 84 73 24 18 65 49 98 41 30-7 50-33 71-53 15-15 46-36 54-59 2-3 4-5 6-8l1-1c1-1 1-2 1-2l2-2c0-1 2-4 1-2 1-3 0-6-2-8zm-34 210c-5-11-16-20-24-28-15-17-30-32-48-46-3-2-7-1-10 1-2 3-4 4-6 6h-17c-24 2-37 5-60-11-3-2-8-1-10 2-21 25-37 53-57 79-3 3-6 6-9 8-10 1-10 15 0 16 78 5 156-12 234-13 7 0 11-9 7-14zm47-167c-1-3-3-5-5-5-1-6-11-7-14-2-3 4-6 8-8 12-8 7-13 16-18 23-15 17-28 35-43 52-3 4-3 9 0 12 24 28 47 57 78 77 5 4 12-1 12-7 0-54 2-108-2-162zm-274 44c-8-5-16-9-24-13-7-5-14-9-20-14-2-2-4-3-6-5-1-2-2-4-5-4-1-1-2-2-3-2-1-1-3-2-4-2-1-1-2-3-4-4-14 17-6 40-4 60 5 37 11 72 10 109 0 7 9 10 14 6 28-25 68-66 71-105 1-14-16-21-25-26z" fill="#fefefe" className="fill-fefefe"></path></svg>
                    <a href='mailto:info@nbaylfabuja.org' className='text-xl underline hover:text-gold hover:no-underline'>info@nbaylfabuja.org</a>
                </div>
            </div>
        </div>
        <div className='lg:w-1/3  flex flex-col flex-nowrap gap-2 xl:pt-0 pt-5'>
            <p className='small-gold  mb-0 lg:mb-4'>MENU</p>
            <a href='/about' className='navbar'>ABOUT US</a>
            <a href='/executives' className='navbar'>EXECUTIVES</a>
            <a href='/publications' className='navbar'>PUBLICATIONS</a>
            <a href='/news-events' className='navbar'>NEWS & EVENTS</a>
        </div>
        <div className='lg:w-1/3  flex flex-col flex-nowrap gap-2 xl:pt-0 pt-5'>
            <p className='small-gold  mb-0 lg:mb-4'>QUICK LINKS</p>
            <a href='/members-portal' className='navbar capitalize'>Members' Portal</a>
            <a href='/find-a-lawyer' className='navbar capitalize'>Find a Lawyer</a>
            <a href='/law-firms-in-abuja' className='navbar capitalize'>Law Firms in Abuja</a>
            <a href='/nba-constitution' className='navbar capitalize'>Constitution of the NBA</a>
        </div> 
        </div>
        <p className='pt-10'>© 2024 / Built by <span className='underline hover:text-gold hover:no-underline'><a href='https://jamesodukoya.github.io/' target='_blank'>James</a></span></p>
    </div>
    </div>
  )
}

export default Footer