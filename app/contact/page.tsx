import React from 'react'
import Header from '../_components/Header'

function About() {
    return (
        <div className=''>
            <div className="relative">
                <section className="bg-[url('/nba-ylf-abuja-contact.webp')] general fixed_bg min-h-screen">
                    <Header />
                    <div className="xl:px-20 pt-28 px-5 md:px-10">
                        <div className='flex justify-center relative'>
                            <h1 className='my-32 z-10 text-center'> Contact Us</h1>
                        </div>
                        <div className='flex md:flex-row flex-col relative z-10 w-full'>
                            <div className='w-full md:w-1/2'>
                                <p className='small-gold pb-5'>/ Reach Out</p>
                                <div className='flex items-center'>
                                    <span className='small-gold pr-3'>PHONE:</span>
                                    <a href='tel:+2347063580464' target='_blank'>+234 706 358 0464</a>
                                </div>
                                <div className='flex items-center'>
                                    <span className='small-gold pr-3'>ADDRESS:</span>
                                    <a href='https://maps.app.goo.gl/96Ak7bkAtfEHFnNx8' target='_blank'>Block 15, Flat 2, FCDA Quarters, Kashim Ibrahim Way, Wuse II, Abuja, FCT</a>
                                </div>
                                <div className='flex items-center'>
                                    <span className='small-gold pr-3'>Email:</span>
                                    <a href='mailto:info@nbaylfabuja.org' target='_blank'>info@nbaylfabuja.org</a>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 mt-10 md:mt-0">
                                <form className='flex flex-col text-[20px]' action="https://formsubmit.co/info@nbaylfabuja.org" method="POST">
                                    <label>NAME*</label>
                                    <input type='text' name='name' className='bg-transparent border-0 border-b focus:outline-none border-b-gold' required />
                                    <div className='h-5'></div>
                                    <label>PHONE*</label>
                                    <input type='tel' name='phone' className='bg-transparent border-0 border-b focus:outline-none border-b-gold' required />
                                    <div className='h-5'></div>
                                    <label>EMAIL*</label>
                                    <input type='email' name='email' className='bg-transparent border-0 border-b focus:outline-none border-b-gold' required />
                                    <div className='h-5'></div>
                                    <label>FEEDBACK (optional)</label>
                                    <textarea rows={3} name='feedback' className='bg-transparent border-0 border-b focus:outline-none border-b-gold' />
                                    <button type='submit' className='button w-fit about-btn my-14 grow-0'>
                                        <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
                                            <span className='text-center'>submit form</span>
                                            <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About