import React from 'react'

function HomeAbout() {
  return (
    <div className="xl:px-20 px-5 md:px-10 min-h-[400px] bg-foreground">
        <div className='flex justify-center'>
            <h2 className='py-8 text-background'> About YLF Abuja</h2>
        </div>
        <div className='xl:flex'>
            <div className='xl:w-[30%]'>
                <ol className='small-gold'>
                    <li>1. Professional Growth</li>
                    <li>2. Community Engagement</li>
                    <li>3. Advocacy</li>
                    <li>4. Mentorship</li>
                    <li>5. Career Development</li>
                    <li>6. Networking</li>
                    <li>7. Social Responsibility</li>
                </ol>
            </div>
            <div className='xl:w-[70%]'>
                <p className='xl:pt-0 pt-5 text-background'>
                    The Young Lawyers Forum of Nigerian Bar Association, Abuja Branch (Unity Bar) is as a gateway for young lawyers to enter and thrive in the legal community, promoting their welfare and active participation. Our mission is to empower young lawyers in Abuja by fostering a supportive community, promoting professional development, and advocating for their interests. <br></br> <br></br> The Forum was established by the then Chairman of the Branch Abdul Ibrahim SAN with Mr Afam Okeke the immediate past Chairman of the Branch as the Pioneer Chairman of the Forum in 2006.
                </p>
                <div>
                    <a className='button my-20 bg-background' href='/about'>
                      <div className='flex items-center bg-background btn hover:translate-x-2 gap-3.5'>
                      <span>learn more</span>
                      <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
                      </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout