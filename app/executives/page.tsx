import React from 'react'
import Header from '../_components/Header'
import { Executives } from '../(data)/Templates'

function Execs() {
    return (
        <div>
            <div className="relative z-10">
                <section className="exec fixed_bg min-h-screen">
                    <Header />
                    <div className="xl:px-20 pt-28 px-5 md:px-10">
                        <div className='flex justify-center'>
                            <h1 className='lg:py-32 py-20 z-10 text-center'> YLF Abuja Executives</h1>
                        </div>
                        <div className='flex flex-wrap z-10 relative gap-24 justify-center'>
                            {Executives.map((exec, index) => (
                                <div key={index} className='flex flex-col items-center'>
                                    <img height={200} width={200} src={`${exec.picture}`} alt={`${exec.name} ${exec.office}`} className='rounded-full' />
                                    <h3 className='text-center mt-10'>{exec.name}</h3>
                                    <p className='small-gold text-center'>{exec.office}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Execs