import React from 'react'

function HomeChairman() {
  return (
    <div className='relative'>
        <div className="chairman bg-cover bg-center bg-fixed xl:px-20 px-5 md:px-10 min-h-[600px] py-20 xl:flex-row flex flex-col items-center bg-foreground">
            <div className='xl:w-1/2 z-20'>
                <h2 className='z-20 text-background'>Meet the Chairman</h2>
                <p className='text-3xl pt-8 text-background'>Najib A. Waziri</p>
                <p className='small-gold'> Chairman, NBA YLF Abuja</p>
                <div>
                    <a className='button my-10 bg-background' href='https://www.najibwaziri.com' target='_blank'>
                        <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
                        <span>view profile</span>
                        <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
                      </div>
                    </a>
                </div>
            </div>
            <div className='xl:w-1/2 z-20 flex'>
                <div className='portrait chair mt-5 xl:mt-0 bg-cover border border-gold sm:min-h-[500px]'></div>
            </div>
        </div>
    </div>
  )
}

export default HomeChairman