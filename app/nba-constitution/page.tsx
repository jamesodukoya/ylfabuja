'use client'
import React from 'react'
import Header from '../_components/Header'

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
                    <div className='flex items-center flex-col'>
                        <iframe
                            className='h-screen relative z-10 max-w-[90%]'
                            src=
                            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf#zoom=100"
                            height="500"
                            width="800"
                        >
                        </iframe>
                        <embed className="h-screen relative z-10 max-w-[90%]"
                            src=
                            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
                            width="800" height="500">

                        </embed>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NBAConstitution