import React from 'react'

function HomeHero() {
  return (
    <div className="xl:px-20 z-10 pt-20 px-5 md:px-10">
      <div className='xl:flex'>
        <h1 className='w-[70%]'> This is the Nigeria Bar Association<br /> Young Lawyers' Forum<br /> Abuja Branch</h1>
        <div>
          <a className='button mt-10 xl:mt-5' href='/about'>
            <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
            <span>about us</span>
            <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeHero