import React from 'react'
import Header from '../_components/Header'

function About() {
    return (
        <div className=''>
            <div className="relative">
                <section className=" about fixed_bg min-h-screen">
                    <Header />
                    <div className="xl:px-20 pt-28 px-5 md:px-10">
                        <div className='flex justify-center relative'>
                            <h1 className='my-32 z-10 text-center'> About Our Forum</h1>
                        </div>
                        <div className='lg:flex content z-10 gap-10 relative'>
                            <div className='lg:w-[30%]'>
                                <h2>These are the core goals and interests that guide all we do as a community:</h2>
                            </div>
                            <div className='lg:w-[70%] lg:mt-0 mt-10'>
                                <ol className='small-gold'>
                                    <li className='z-10'>1. Professional Growth</li>
                                    <li>2. Community Engagement</li>
                                    <li>3. Advocacy</li>
                                    <li>4. Mentorship</li>
                                    <li>5. Career Development</li>
                                    <li>6. Networking</li>
                                    <li>7. Social Responsibility</li>
                                </ol>
                                <p>
                                    <br></br>
                                    The Young Lawyers Forum of Nigerian Bar Association, Abuja Branch (Unity Bar) is as a gateway for young lawyers to enter and thrive in the legal community, promoting their welfare and active participation. Our mission is to empower young lawyers in Abuja by fostering a supportive community, promoting professional development, and advocating for their interests. <br></br><br />
                                    The Forum was established by the then Chairman of the Branch Abdul Ibrahim SAN with Mr Afam Okeke the immediate past Chairman of the Branch as the Pioneer Chairman of the Forum in 2006.
                                </p> <br></br>
                                <h3 className='small-gold text-center'>Objectives</h3>

                                <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-8 mt-8'>
                                    <div className='text-center p-8 bg-[#1A1A1A]'>
                                        <h4>Professional Growth</h4>
                                        <p>Provide a platform for young lawyers to enhance their skills, knowledge, and networking capabilities.</p>
                                    </div>
                                    <div className='text-center p-8 bg-[#1A1A1A]'>
                                        <h4>Community Engagement</h4>
                                        <p>Organise education, social activities, and leadership opportunities to promote active participation and welfare.</p>
                                    </div>
                                    <div className='text-center p-8 bg-[#1A1A1A]'>
                                        <h4>Advocacy</h4>
                                        <p>Advocate for the welfare of young lawyers within Abuja.</p>
                                    </div>
                                    <div className='text-center p-8 bg-[#1A1A1A]'>
                                        <h4>Mentorship</h4>
                                        <p>Pair young lawyers with experienced mentors for guidance and support.</p>
                                    </div>
                                    <div className='text-center p-8 bg-[#1A1A1A]'>
                                        <h4>Career Development</h4>
                                        <p>Offer resources and training to enhance career prospects and opportunities.</p>
                                    </div>
                                    <div className='text-center p-8 bg-[#1A1A1A]'>
                                        <h4>Networking</h4>
                                        <p>Facilitate connections among young lawyers, senior lawyers, and industry professionals.</p>
                                    </div>
                                    <div className='text-center p-8 bg-[#1A1A1A]'>
                                        <h4>Social Responsibility</h4>
                                        <p>Encourage young lawyers to engage in pro bono work and community service.</p>
                                    </div>
                                </div>

                                <br></br>
                                <h3 className='small-gold text-center'>Scope of Activities</h3>
                                <p>The Young Lawyers Forum engages in various initiatives including:</p>
                                <ol className='list-decimal list-inside'>
                                    <div className='para'>
                                        <li>Education and training programs</li>
                                        <li>Social events and networking sessions</li>
                                        <li>Leadership development opportunities</li>
                                        <li>Advocacy and representation in the Nigeria Bar Association</li>
                                        <li>Mentorship programs</li>
                                        <li>Career development workshops</li>
                                        <li>Community service projects</li>

                                    </div>
                                </ol><br></br>
                                <h3 className='small-gold text-center'>Membership</h3>

                                <ol className='list-decimal list-inside'>
                                    <p>The Forum is open to young lawyers in Nigeria, with a focus on those based in Abuja. Membership benefits include:</p>
                                    <div className='para'>
                                        <li>Access to exclusive events and training programs</li>
                                        <li>Leadership opportunities</li>
                                        <li>Mentorship programs</li>
                                        <li>Networking opportunities</li>
                                        <li>Career development resources</li>
                                        <li>Community service opportunities</li>
                                    </div>
                                </ol>
                                <div>
                                    <a className='button about-btn my-20 z-10 relative' href='/executives'>
                                        <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
                                            <span>meet our executives</span>
                                            <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About