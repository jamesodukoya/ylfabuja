"use client"
import React from 'react'
import Header from '../_components/Header'
import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic'

const Gallery = dynamic(() => import('@/app/_components/Gallery'), {
    ssr: false // This ensures the component is not SSR'd
});


function Test() {

    return (
        <div>
            <div className="relative z-10">
                <section className="exec fixed_bg min-h-screen">
                    <Header />
                    <div className="xl:px-20 pt-28 px-5 md:px-10">
                        <div className='flex justify-center'>
                            <h1 className='lg:py-32 py-20 z-10 text-center'> Gallery</h1>
                        </div>
                        <Gallery />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Test