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
                            <p className='small-gold text-center'> Coming soon</p>
                        </div>
                    </div>
                    <div id="adobe-dc-view" className='w-[92%] h-screen xl:max-w-[1200px]'></div>
                </section>
            </div>
            <Script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></Script>
            <Script src='/js/adobereader.js'></Script>
        </div>
    )
}

export default NBAConstitution