'use client'
import React from 'react'
import Header from '../_components/Header'
import Script from 'next/script'

function NBAConstitution() {
    return (
        <div>
            <div className="relative z-10">
                <section className="soon fixed_bg">
                    <Header />
                    <div className="xl:px-20 pt-28 px-5 md:px-10 min-h-[400px] flex items-center justify-center">
                        <div className='py-32 relative z-10'>
                            <h1 className='text-center'>Constitution of the NBA</h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-center relative z-10 xl:px-20 px-5 md:px-10 min-h-[400px]'>
                        <img src='nba-constitution.webp' className='object-contain cursor-pointer' id='LoadPDF'></img>
                        <a className='button about-btn my-20' id='LoadPDF'>
                            <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
                                <span className='text-center'>Read the constitution</span>
                                <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            <Script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></Script>
            <Script src='/js/adobereader.js'></Script>
        </div>
    )
}

export default NBAConstitution