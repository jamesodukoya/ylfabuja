"use client"
// import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Executives } from '../(data)/Templates'

function PrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none",}}
      onClick={onClick}
    />
  );
}

function HomeHero() {

  let settings = {
    dots: false,
    infinite: false,
    speed: 1200,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="xl:px-20 pt-20 px-5 md:px-10 z-100">
      <div className='xl:flex z-10 lg:pt-48 pt-[70px]'>
        <h1 className='w-[70%] z-10'> The Nigerian Bar Association<br></br> Young Lawyers' Forum<br></br> Abuja Branch</h1>
        <div>
          <a className='button z-10 mt-10 xl:mt-5' href='/about'>
            <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
            <span>about us</span>
            <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
            </div>
          </a>
        </div>
      </div>
      <div className='mt-24'>
        <p className='w-full z-10 font-medium tracking-[.2em] pb-3 border-b border-[#444]'>LED BY</p>
        <div className='w-full mt-10'>
          <Slider className='z-10' {...settings}>
            {Executives.map((exec, index) => (
            <div className='flex items-center'>
            <div key={index} className='flex items-center gap-4'>
              <img width={75} height={75} alt={`${exec.name} ${exec.office}`} src={exec.sm_picture} className='rounded-full' />
              <div>
                <p className='home-execs'>{exec.name}</p>
                <p className='home-execs'>{exec.office}</p>
              </div>
                </div>
            </div>    
          ))}
          </Slider>
        </div>
      </div>
      <a className='button z-10 mt-16' href='/executives'>
        <div className='flex items-center btn hover:translate-x-2 gap-3.5'>
          <span>view all executives</span>
          <svg viewBox="0 0 32 32" width="30" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2" fill="#c9a66d" ></path></svg>
        </div>
      </a>
    </div>
  )
}

export default HomeHero