import React from 'react'
import Header from '../_components/Header'

function MembersPortal() {
    return (
        <div>
            <div className="relative z-10">
                <section className="soon fixed_bg">
                    <Header />
                    <div className="xl:px-20 pt-28 px-5 md:px-10 min-h-[400px] flex items-center justify-center">
                        <div className='py-32 relative z-10'>
                            <h1 className='text-center'>Members' Portal</h1>
                            <p className='small-gold text-center'> Coming soon</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MembersPortal